import { useState, useCallback } from 'react';
import SplitPane from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';
import MonacoEditor from 'react-monaco-editor';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SnaplogicPlayground = () => {
  const [input, setInput] = useState('');
  const [inputData, setInputData] = useState('{\n  "data": "sample"\n}');
  const [output, setOutput] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('default');
  const [isProcessing, setIsProcessing] = useState(false);
  const [sizes, setSizes] = useState([50, 50]);
  const [activeTab, setActiveTab] = useState('input');

  const monacoOptions = {
    minimap: { enabled: false },
    fontSize: 14,
    scrollBeyondLastLine: false,
    automaticLayout: true,
    lineNumbers: 'on',
    roundedSelection: false,
    scrollBeyondLastLine: false,
    readOnly: false,
    theme: 'vs-dark',
  };

  const templates = {
    default: '// Enter your SnapLogic pipeline here',
    jsonTransform: `{
  "pipeline": {
    "transform": {
      "input": "$input",
      "mapping": {
        "name": "$.firstName",
        "fullDetails": {
          "age": "$.age",
          "location": "$.address.city"
        }
      }
    }
  }
}`,
    arrayMapping: `{
  "pipeline": {
    "transform": {
      "input": "$input",
      "mapping": {
        "users": "$.people[*]",
        "totalCount": "count($.people)"
      }
    }
  }
}`
  };

  const sampleInputs = {
    default: '{\n  "data": "sample"\n}',
    jsonTransform: `{
  "firstName": "John",
  "age": 30,
  "address": {
    "city": "New York",
    "country": "USA"
  }
}`,
    arrayMapping: `{
  "people": [
    {"id": 1, "name": "John"},
    {"id": 2, "name": "Jane"},
    {"id": 3, "name": "Bob"}
  ]
}`
  };

  const handleTemplateSelect = (templateKey) => {
    setInput(templates[templateKey]);
    setInputData(sampleInputs[templateKey]);
    setSelectedTemplate(templateKey);
  };

  const handleExecute = useCallback(async () => {
    setIsProcessing(true);
    try {
      // Simulate pipeline execution
      const parsedInput = JSON.parse(inputData);
      const parsedPipeline = JSON.parse(input);
      
      // Simple mock transformation
      const result = {
        executionId: Date.now(),
        timestamp: new Date().toISOString(),
        input: parsedInput,
        pipeline: parsedPipeline,
        output: { transformed: true, data: parsedInput }
      };
      
      setOutput(JSON.stringify(result, null, 2));
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
    setIsProcessing(false);
  }, [input, inputData]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">SnapLogic Playground</h1>
          <div className="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Templates</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {Object.entries(templates).map(([key]) => (
                  <DropdownMenuItem key={key} onClick={() => handleTemplateSelect(key)}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button 
              onClick={handleExecute}
              disabled={isProcessing}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isProcessing ? 'Processing...' : 'Execute'}
            </Button>
          </div>
        </div>
      </nav>

      <main className="p-4">
        <SplitPane split="vertical" sizes={sizes} onChange={setSizes}>
          <div className="h-full">
            <Tabs defaultValue="input" className="h-full">
              <TabsList>
                <TabsTrigger value="input">Input Data</TabsTrigger>
                <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
              </TabsList>
              <TabsContent value="input" className="h-[calc(100%-40px)]">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 h-full">
                  <MonacoEditor
                    height="100%"
                    language="json"
                    value={inputData}
                    onChange={setInputData}
                    options={monacoOptions}
                  />
                </div>
              </TabsContent>
              <TabsContent value="pipeline" className="h-[calc(100%-40px)]">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 h-full">
                  <MonacoEditor
                    height="100%"
                    language="json"
                    value={input}
                    onChange={setInput}
                    options={monacoOptions}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="h-full">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 h-full">
              <h2 className="text-lg font-semibold mb-2">Output</h2>
              <MonacoEditor
                height="90%"
                language="json"
                value={output}
                options={{ ...monacoOptions, readOnly: true }}
              />
            </div>
          </div>
        </SplitPane>
      </main>
    </div>
  );
};

export default SnaplogicPlayground;

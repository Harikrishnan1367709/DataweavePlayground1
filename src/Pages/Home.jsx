import React from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import supabase from "../supabase";
import { useNavigate } from "react-router";






const FormField = ({ label, name, control, rules, render, error }) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={render}
        />
      </FormControl>
      {error && (
        <FormMessage className="text-red-500">{error.message}</FormMessage>
      )}
    </FormItem>
  );
};

const SignupForm = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label="Email"
        name="email"
        control={control}
        rules={{ required: "Email is required." }}
        render={({ field }) => <Input {...field} placeholder="Enter your email" />}
        error={errors.email}
      />

      <FormField
        label="Password"
        name="password"
        control={control}
        rules={{
          required: "Password is required.",
          minLength: { value: 6, message: "Password must be at least 6 characters." },
        }}
        render={({ field }) => (
          <Input {...field} type="password" placeholder="Enter your password" />
        )}
        error={errors.password}
      />

      <Button type="submit" className="w-full mt-6 bg-blue-500 text-white">
        Sign Up
      </Button>
    </form>
  );
};


const Home = () => {
  const methods = useForm();
  const navigate=useNavigate();

  const handleSignupForm = async (data) => {
    const { email, password } = data;

    try {
      const { data: signUpData, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        console.error("Error signing up:", error.message);
        alert(error.message); // Show an error message
      } else {
        console.log("Signup successful!", signUpData);
        alert("Signup successful! Please check your email to verify your account.");
        navigate("/Login");
        // Redirect or perform further actions
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <FormProvider {...methods}>
      <SignupForm onSubmit={handleSignupForm} />
    </FormProvider>
  );
};

export default Home;

"use client";
import { Button } from "@/components/button/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { forgotPassword } from "./action";

const formDataSchema = z.object({
  email: z.string().email(),
});

export type FormInputs = z.infer<typeof formDataSchema>;

export function ForgotPasswordForm() {
  const [message, setMessage] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormInputs>({
    shouldUseNativeValidation: true,
    resolver: zodResolver(formDataSchema),
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    formDataSchema.parse(data);
    const message = await forgotPassword(data);
    setMessage(message);
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      {message && <p>{message}</p>}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-white">
          Email
        </label>
        <input
          type="email"
          className="border-0 bg-main-400 px-2 py-2 rounded-lg"
          {...register("email")}
        />
      </div>
      <Button variant="primary" type="submit" loading={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Reset Link"}
      </Button>
    </form>
  );
}

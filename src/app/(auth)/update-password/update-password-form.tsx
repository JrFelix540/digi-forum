"use client";

import { Button } from "@/components/button/button";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { updatePassword } from "./action";
import { zodResolver } from "@hookform/resolvers/zod";

const formDataSchema = z.object({
  password: z.string().min(6),
});

export type FormInputs = z.infer<typeof formDataSchema>;

export function UpdatePasswordForm() {
  const [errorMessage, setErrorMessage] = useState<string>();
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
    const error = await updatePassword(data);

    if (error) {
      setErrorMessage(error);
    }
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      {errorMessage && <p className="">{errorMessage}</p>}
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-white">
          New Password
        </label>
        <input
          type="password"
          className="border-0 bg-main-400 px-2 py-2 rounded-lg"
          {...register("password")}
        />
      </div>
      <Button variant="primary" loading={isSubmitting}>
        {isSubmitting ? "Updating" : "Update Password"}
      </Button>
    </form>
  );
}

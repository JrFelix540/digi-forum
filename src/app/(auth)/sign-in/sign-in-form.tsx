"use client";

import { Button } from "@/components/button/button";
import Link from "next/link";
import { z } from "zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "./action";
import { useState } from "react";

export const formDataSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type FormInputs = z.infer<typeof formDataSchema>;

export function SignInForm() {
  const [errorMessage, setErrorMessage] = useState<string>();
  const [agree, setAgree] = useState<boolean>(false);
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
    const error = await signIn(data);
    if (error) {
      setErrorMessage(error);
    }
  };

  const handleCheckboxChange = () => {
    setAgree(!agree);
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      {errorMessage && <p className="text-primary-100">{errorMessage}</p>}
      <div className="flex flex-col gap-2">
        <label htmlFor="label" className="text-white">
          Email
        </label>
        <input
          className={"border-0 bg-main-400 px-2 py-2  rounded-lg"}
          {...register("email")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="flex justify-between items-center">
          <label htmlFor="label" className="text-white">
            Password
          </label>

          <Link href={"/password/forget"} className="text-primary-300">
            Forgot Password?
          </Link>
        </span>

        <input
          className={"border-0 bg-main-400 px-2 py-2  rounded-lg"}
          type="password"
          {...register("password")}
        />
      </div>
      <div className="flex gap-2 items-center">
        <input
          className="bg-main-400 border-0"
          type="checkbox"
          checked={agree}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="" className="text-white">
          Agree with terms and conditions
        </label>
      </div>

      <Button
        variant="primary"
        type="submit"
        loading={isSubmitting}
        disabled={agree === false}
      >
        {isSubmitting ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
}

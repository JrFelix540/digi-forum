"use client";

import { Button } from "@/components/button/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { signUp } from "./action";

const formDataSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

export type FormInputs = z.infer<typeof formDataSchema>;

export function SignUpForm() {
  const [errorMessage, setErrorMessage] = useState<string>();
  const [agree, setAgree] = useState<boolean>(false);
  const handleCheckbox = () => {
    setAgree(!agree);
  };
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormInputs>({ resolver: zodResolver(formDataSchema) });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    formDataSchema.parse(data);
    const error = await signUp(data);
    if (error) {
      setErrorMessage(error);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      {errorMessage && <p className="text-primary-100">{errorMessage}</p>}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-white">
          Name
        </label>
        <input
          className={"border-0 bg-main-400 px-2 py-2  rounded-lg"}
          type="text"
          {...register("name")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-white">
          Email
        </label>
        <input
          className={"border-0 bg-main-400 px-2 py-2  rounded-lg"}
          type="email"
          {...register("email")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-white">
          Password
        </label>
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
          onChange={handleCheckbox}
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
        {isSubmitting ? "Registering..." : "Register"}
      </Button>
    </form>
  );
}

import { Checkbox } from "@/components/checkbox/checkbox";
import { Input } from "@/components/input/input";
import { PrimaryButton } from "@/components/primary-button/primary-button";

export const RegisterForm = () => {
  const handleChange = () => {
    console.log("test input");
  };

  return (
    <form className="flex flex-col gap-4">
      <Input name="name" label="Name" value="" onChange={handleChange} />
      <Input name="email" label="Email" value="" onChange={handleChange} />
      <Input
        name="password"
        label="Password"
        value=""
        onChange={handleChange}
      />
      <Checkbox
        name="terms"
        checked={true}
        label="Agree with terms and conditions"
        onChange={handleChange}
      />
      <PrimaryButton type="submit">Register</PrimaryButton>
    </form>
  );
};

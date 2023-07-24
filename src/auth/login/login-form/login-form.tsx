import { Checkbox } from "@/components/checkbox/checkbox";
import { Input } from "@/components/input/input";
import { PrimaryButton } from "@/components/primary-button/primary-button";

const passwordLink = {
  name: "Forgot Password?",
  url: "/auth/password/forget",
};
export const LoginForm = () => {
  const handleChange = () => {
    console.log("test input");
  };
  return (
    <form className="flex flex-col gap-4">
      <Input name="email" label="Email" value="" onChange={handleChange} />
      <Input
        name="password"
        label="Password"
        value=""
        onChange={handleChange}
        labelLink={passwordLink}
      />
      <Checkbox
        name="terms"
        checked={true}
        label="Agree with terms and conditions"
        onChange={handleChange}
      />
      <PrimaryButton type="submit">Login</PrimaryButton>
    </form>
  );
};

import { UpdatePasswordForm } from "./update-password-form";

export default function UpdatePassword() {
  return (
    <div className="bg-transparent-py-6 px-28 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-3xl text-white">Reset Your Password</h1>
        <p className="text-base text-faded">
          Provide us with your new password
        </p>
      </div>
      <UpdatePasswordForm />
    </div>
  );
}

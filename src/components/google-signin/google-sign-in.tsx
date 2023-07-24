import Image from "next/image";
import { ButtonHTMLAttributes } from "react";

export const GoogleSignIn = (
  props: ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { children, ...others } = props;
  return (
    <button
      className="py-5 px-6 flex justify-center gap-2 items-center bg-white text-black font-semibold rounded-md"
      {...others}
    >
      <Image src="/google-logo.png" alt="google logo" height={25} width={25} />
      {children}
    </button>
  );
};

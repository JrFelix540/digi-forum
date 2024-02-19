"use client";
type Variant = "primary" | "secondary" | "tertiary";

const variantClasses = {
  primary: "bg-primary-300 p-6 rounded-md text-main-100",
  secondary: "bg-light-100 py-2 px-8 rounded-md text-main-100",
  tertiary:
    "flex items-center gap-2 bg-tertiary-btn-gradient justify-center py-4 px-6 rounded-lg",
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: Variant;
  fullWidth?: boolean;
  loading?: boolean;
};

export const Button = ({
  variant,
  fullWidth,
  children,
  loading,
  ...others
}: ButtonProps) => {
  return (
    <button
      className={`${variantClasses[variant]} ${fullWidth ? "w-full" : ""}`}
      aria-disabled={loading}
      {...others}
    >
      {children}
    </button>
  );
};

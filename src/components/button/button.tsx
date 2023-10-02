type Variant = "primary" | "secondary" | "tertiary";

const variantClasses = {
  primary: "bg-button-primary p-6 rounded-md text-brand-primary",
  secondary: "bg-button-secondary py-2 px-8 rounded-md text-brand-primary",
  tertiary:
    "flex items-center gap-2 bg-tertiary-btn-gradient justify-center py-4 px-6 rounded-lg",
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: Variant;
  fullWidth?: boolean;
};

export const Button = ({
  variant,
  fullWidth,
  children,
  ...others
}: ButtonProps) => {
  return (
    <button
      className={`${variantClasses[variant]} ${fullWidth ? "w-full" : ""}`}
      {...others}
    >
      {children}
    </button>
  );
};

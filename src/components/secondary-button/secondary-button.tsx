export const SecondaryButton = ({
  children,
  ...others
}: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="bg-button-secondary py-4 px-8 rounded-md text-brand-primary"
      {...others}
    >
      {children}
    </button>
  );
};
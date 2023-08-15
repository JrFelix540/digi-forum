export const TertiaryButton = ({
  children,
  ...others
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...others}
      className="flex items-center gap-2 bg-tertiary-btn-gradient justify-center py-4 px-6 rounded-lg"
    >
      {children}
    </button>
  );
};

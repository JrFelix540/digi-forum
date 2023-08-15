export const PrimaryButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { children, ...others } = props;
  return (
    <button
      className="bg-button-primary p-6 rounded-md text-brand-primary w-full"
      {...others}
    >
      {children}
    </button>
  );
};

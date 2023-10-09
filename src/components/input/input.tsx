import Link from "next/link";

interface InputProps {
  value: string;
  name: string;
  label?: string;
  labelLink?: {
    name: string;
    url: string;
  };
  placeholder?: string;
  onChange: () => void;
  variant?: "outlined";
}
export const Input = ({
  name,
  value,
  label,
  labelLink,
  onChange,
  placeholder,
  variant,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      {labelLink ? (
        <div className="flex justify-between items-center">
          <label htmlFor="label" className="text-white">
            {label}
          </label>
          <Link href={labelLink.url} className="text-link">
            {labelLink.name}
          </Link>
        </div>
      ) : (
        label && (
          <label htmlFor="label" className="">
            {label}
          </label>
        )
      )}
      <input
        className={`${
          variant === "outlined"
            ? "bg-transparent border-2 border-border-input"
            : "border-0 bg-brand-secondary"
        } px-2 py-2  rounded-lg`}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

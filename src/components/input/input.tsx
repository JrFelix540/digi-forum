import Link from "next/link";

interface InputProps {
  value: string;
  name: string;
  label: string;
  labelLink?: {
    name: string;
    url: string;
  };
  onChange: () => void;
}
export const Input = ({
  name,
  value,
  label,
  labelLink,
  onChange,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      {labelLink ? (
        <div className="flex justify-between items-center">
          <label htmlFor="label" className="">
            {label}
          </label>
          <Link href={labelLink.url} className="text-link">
            {labelLink.name}
          </Link>
        </div>
      ) : (
        <label htmlFor="label" className="">
          {label}
        </label>
      )}
      <input
        className="border-0 py-5 px-10 bg-brand-secondary rounded-lg"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

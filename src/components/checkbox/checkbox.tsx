type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value"
> & {
  label: string;
  checked: boolean;
};

export const Checkbox = (props: CheckboxProps) => {
  const { name, checked, label, onChange } = props;

  return (
    <div className="flex gap-2 items-center">
      <input
        className="bg-main-400 border-0"
        name={name}
        checked={checked}
        onChange={onChange}
        type="checkbox"
      />
      <label htmlFor={name} className="text-white">
        {label}
      </label>
    </div>
  );
};

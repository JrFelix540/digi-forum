interface TextareaProps {
  name: string;
  value: string;
  rows?: number;
  placeholder: string;
  variant?: "outline" | "filled";
  onChange: () => void;
}

export const Textarea = ({ variant, rows = 4, ...others }: TextareaProps) => {
  return (
    <textarea
      {...others}
      rows={rows}
      className={`w-full bg-transparent ${
        variant === "outline" ? "border-2 border-border-input" : ""
      } py-2 px-4 rounded-lg`}
    />
  );
};

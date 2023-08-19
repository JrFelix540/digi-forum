interface TextareaProps {
  name: string;
  value: string;
  rows?: number;
  placeholder: string;
  border?: boolean;
  onChange: () => void;
}

export const Textarea = ({ border, rows = 4, ...others }: TextareaProps) => {
  return (
    <textarea
      {...others}
      rows={rows}
      className={`w-full bg-transparent ${
        border ? "border-2 border-border-input" : ""
      }`}
    />
  );
};

import { update } from "jdenticon";
import { useEffect, useRef } from "react";

interface AvatarProps {
  size: "sm" | "md" | "lg";
  square?: boolean;
  value: string;
}

export const Avatar = ({ size, square, value }: AvatarProps) => {
  const icon = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (icon.current) {
      update(icon.current, value);
    }
  }, [value]);
  return (
    <svg data-jidenticon-value={value} height={45} width={45} ref={icon}></svg>
  );
};

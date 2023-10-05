import { update } from "jdenticon";
import Image from "next/image";
import { useEffect, useRef } from "react";

type Size = "sm" | "lg";

const sizes = {
  sm: "9",
  lg: "28",
};

interface AvatarProps {
  size: Size;
  square?: boolean;
  src?: string;
  background?: "primary" | "secondary";
}

export const Avatar = ({
  size,
  square,
  src = "/diver.png",
  background,
}: AvatarProps) => {
  const sizeClasses = `w-${sizes[size]} h-${sizes[size]}`;
  const radiusClass = square ? "rounded-lg" : "rounded-full";
  const backgroundClass = background
    ? `bg-avatar-${background}`
    : "bg-avatar-primary";
  const paddingClass = size === "sm" ? "p-px" : "p-2.5";

  return (
    <div
      className={`${sizeClasses} ${radiusClass} ${backgroundClass} ${paddingClass} flex justify-center items-center
      `}
    >
      <div className="w-full h-full relative">
        <Image src={src} alt="avatar" fill className="object-contain" />
      </div>
    </div>
  );
};

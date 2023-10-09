import Image from "next/image";

type Size = "sm" | "lg";

interface AvatarProps {
  size: Size;
  square?: boolean;
  src?: string;
  background?: "primary" | "secondary";
}

export const Avatar = ({ size, square, src, background }: AvatarProps) => {
  const sizeClasses = size === "sm" ? `w-9 h-9` : `w-28 h-28`;
  const radiusClass = square ? "rounded-lg" : "rounded-full";
  const backgroundClass = background
    ? `bg-avatar-${background}`
    : "bg-avatar-primary";
  const paddingClass = size === "sm" ? "p-px" : "p-2.5";
  const avatarURL = src ? src : "/diver.png";
  return (
    <div
      className={`${sizeClasses} ${radiusClass} ${backgroundClass} ${paddingClass} flex justify-center items-center
      `}
    >
      <div className="w-full h-full relative">
        <Image src={avatarURL} alt="avatar" fill className="object-contain" />
      </div>
    </div>
  );
};

import Link from "next/link";
import Image from "next/image";

export const NotificationIcon = () => {
  return (
    <Link href="#" className="relative inline-flex">
      <div className="bg-brand-primary p-2 rounded-full flex items-center justify-center relative z-10">
        <Image
          src="/notification.png"
          alt="notifications"
          height={24}
          width={24}
        />
      </div>
      <div className="w-full h-full bg-comment-bg rounded-full absolute -top-0.5 -left-0.5" />
    </Link>
  );
};

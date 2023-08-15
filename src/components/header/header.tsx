import Image from "next/image";
import { Search } from "../search/search";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full bg-brand-secondary flex gap-4">
      <div className="max-w-6xl flex justify-between mx-auto p-2 w-full">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex gap-px items-center">
            <Image src="/Logo.png" alt="logo" height={60} width={60} />
            <div className="flex flex-col gap-px">
              <p className="font-semibold text-lg">DigiForum.io</p>
              <p className="text-xs font-light">Platform Discussion</p>
            </div>
          </Link>
          <Search />
        </div>
        <div className="flex items-center gap-2">
          <Link href="#">
            <Image
              src="/notification.png"
              alt="notifications"
              height={24}
              width={24}
            />
          </Link>
          <Link href="#">
            <Image
              src="/message.png"
              alt="sms notification"
              height={24}
              width={24}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

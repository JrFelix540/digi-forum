import Image from "next/image";
import { Search } from "../search/search";
import Link from "next/link";
import { headerLinks } from "./header.utils";
import { NotificationIcon } from "../notification-icon/notification-icon";

export const Header = () => {
  return (
    <header className="w-full bg-brand-secondary flex gap-4">
      <div className="max-w-6xl flex mx-auto w-full justify-between">
        <div className="flex items-center gap-4 p-2">
          <Link href="/" className="flex gap-px items-center">
            <Image src="/Logo.png" alt="logo" height={60} width={60} />
            <div className="flex flex-col gap-px">
              <p className="font-semibold text-lg">DigiForum.io</p>
              <p className="text-xs font-light">Platform Discussion</p>
            </div>
          </Link>
          <Search />
        </div>
        <div className="flex items-center gap-4 ">
          <nav className="h-1.2 bg-tertiary-btn-gradient px-4 rounded-xl z-10">
            <ul className="flex items-center gap-4 h-full">
              {headerLinks.map((item) => (
                <li key={item.link} className="flex items-center">
                  <Link className="font-semibold text-white" href={item.link}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2 p-2">
            <NotificationIcon />
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
      </div>
    </header>
  );
};

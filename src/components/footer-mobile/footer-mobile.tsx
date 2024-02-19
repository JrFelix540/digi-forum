import Link from "next/link";
import { footerMenuItems } from "./footer-mobile.utils";
import Image from "next/image";

export const FooterMobile = () => {
  return (
    <footer className="p-3 fixed bottom-0 right-0 w-full flex gap-4 items-center bg-main-300">
      {footerMenuItems.map((item) => (
        <Link href={item.link} key={item.name}>
          <Image src={item.icon} alt={item.name} height={38} width={38} />
        </Link>
      ))}
    </footer>
  );
};

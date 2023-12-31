import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="px-3 absolute bottom-0 left-0 w-full flex justify-center">
      <div className="border-t-2 border-t-main-400 p-4 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Link href="#" className="flex items-center gap-1.5">
            <Image
              src="/github-icon.png"
              alt="github logo"
              height={25}
              width={25}
            />
            <p className="text-neutral-gray underline">Source Code</p>
          </Link>
          <Link href="#" className="flex items-center gap-1.5">
            <Image
              src="/git-pull-request.png"
              alt="github logo"
              height={25}
              width={25}
            />
            <p className="text-neutral-gray underline">Forum API Dicoding</p>
          </Link>
        </div>
        <div className="flex flex-col gap-px items-center">
          <p className="text-neutral-gray">&copy;2023 DigiForum.</p>
          <p className="text-neutral-gray">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

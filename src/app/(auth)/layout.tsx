import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full h-screen">
      <div className="grid grid-cols-2 gap-4 h-full">
        <div className="bg-auth-gradient h-full pt-6 pb-0 px-20 flex flex-col gap-4">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Image src="/Logo.png" alt="logo" height={60} width={60} />
              <p className="text-sm font-bold text-main-100">DigiForum.IO</p>
              <p className="font-medium text-4xl text-main-100">
                any discussion, anywhere, with anyone, only at DigiForum.io
              </p>
            </div>
            <Image
              src="/auth-frontend.png"
              alt="post image"
              height={299}
              width={466}
            />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}

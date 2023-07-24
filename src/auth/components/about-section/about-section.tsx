import Image from "next/image";

export const AboutSection = () => {
  return (
    <div className="bg-auth-gradient h-full pt-6 pb-0 px-20 flex flex-col gap-4">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Image src="/Logo.png" alt="logo" height={60} width={60} />
          <p className="text-sm font-bold text-brand-primary">DigiForum.IO</p>
          <p className="font-medium text-4xl text-brand-primary">
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
  );
};

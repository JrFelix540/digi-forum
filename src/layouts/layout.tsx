import { Header } from "@/components/header/header";
import Head from "next/head";
import { LeftSidebar } from "./left-sidebar/left-sidebar";
import { RightSidebar } from "./right-sidebar/right-sidebar";

interface LayoutProps {
  title?: string;
  description?: string;
  children: React.ReactElement;
}

export const Layout = ({
  title = "Digiforum",
  description = "Forum for people to talk about stuff they like",
  children,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      <div className="max-w-6xl mx-auto grid grid-cols-main w-full">
        <LeftSidebar />
        {children}
        <RightSidebar />
      </div>
    </>
  );
};

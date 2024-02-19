import { Header } from "@/components/header/header";
import { LeftSidebar } from "./left-sidebar/left-sidebar";
import { RightSidebar } from "./right-sidebar/right-sidebar";
import { leaderboardItems } from "@/components/leaderboards-sidebar/leaderboards-sidebar.utils";
import { menuItems } from "./left-sidebar/left-sidebar.utils";

interface LayoutProps {
  title?: string;
  description?: string;
  children: React.ReactElement;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto grid grid-cols-main w-full">
        <LeftSidebar
          leaderboardItems={leaderboardItems}
          menuItems={menuItems}
        />
        {children}
        <RightSidebar />
      </div>
    </>
  );
};

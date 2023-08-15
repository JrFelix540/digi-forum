import { LoginSidebar } from "@/components/login-sidebar/login-sidebar";
import { TrendingSidebar } from "@/components/trending-sidebar/trending-sidebar";
import { UsersSidebar } from "@/components/users-sidebar/users-sidebar";

export const RightSidebar = () => {
  return (
    <aside className="border-l-2 border-brand-secondary min-h-full px-3 py-6 flex flex-col gap-4">
      <LoginSidebar />
      <UsersSidebar />
      <TrendingSidebar />
    </aside>
  );
};

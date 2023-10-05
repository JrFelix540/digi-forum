import Image from "next/image";
import { User } from "./users-sidebar.utils";
import Link from "next/link";
import { Avatar } from "../avatar/avatar";

interface UsersSidebarProps {
  users: Array<User>;
}
export const UsersSidebar = ({ users }: UsersSidebarProps) => {
  return (
    <div className="flex flex-col gap-6 bg-card-bg rounded-lg p-4">
      <div className="flex justify-between">
        <p className="font-medium text-grey">List of Users</p>
        <Image src="/users-icon.png" alt="users icon" height={24} width={24} />
      </div>
      <div className="flex flex-col gap-4">
        {users.map((user) => (
          <Link
            href={`/profile/${user.id}`}
            className="flex gap-2"
            key={user.id}
          >
            <Avatar size="sm" />
            <div className="flex flex-col gap-px">
              <p className="text-white text-sm font-medium">{user.name}</p>
              <p className="text-xs text-brown-neutral">{user.username}</p>
            </div>
          </Link>
        ))}
        <Link
          href="#"
          className="text-base font-semibold text-border-input text-center"
        >
          see more
        </Link>
      </div>
    </div>
  );
};

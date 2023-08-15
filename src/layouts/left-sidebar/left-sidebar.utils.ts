export interface MenuItem {
  name: string;
  link: string;
  icon: string;
}

export const menuItems: Array<MenuItem> = [
  {
    name: "Profile",
    link: "/profile",
    icon: "/profile-icon.png",
  },
  {
    name: "Your Threads",
    link: "/threads",
    icon: "/threads-icon.png",
  },
  {
    name: "Saved",
    link: "/saved",
    icon: "/saved-icon.png",
  },
];

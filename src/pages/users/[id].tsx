import { UserProfile } from "@/components/user-profile/user-profile";
import { user } from "@/components/user-profile/user-profile.utils";

export default function Page() {
  return <UserProfile {...user} />;
}

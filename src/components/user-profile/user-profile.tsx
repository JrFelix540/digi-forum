import { Layout } from "../../layouts/layout";
import { Thread } from "../../threads/threads.utils";
import { Avatar } from "../avatar/avatar";
import { UserFeed } from "../user-feed/user-feed";

export interface UserProfileProps {
  avatarURL?: string;
  username: string;
  firstname: string;
  lastname: string;
  bio: string;
  threads: Array<Thread>;
  savedThreads: Array<Thread>;
}

export const UserProfile = ({
  username,
  firstname,
  lastname,
  avatarURL,
  bio,
  savedThreads,
  threads,
}: UserProfileProps) => {
  const title = `${firstname} ${lastname}`;
  return (
    <Layout title={title}>
      <main className="px-10 py-5">
        <div className="w-full h-36 bg-profile-gradient rounded-lg"></div>
        <div className="flex justify-center -mt-14">
          <Avatar size="lg" square src={avatarURL} />
        </div>
        <div className="flex flex-col gap-4px pt-4 pb-6">
          <div className="flex flex-col gap-2px">
            <h1 className="text-white text-2xl font-medium">{`${firstname} ${lastname}`}</h1>
            <p className="text-neutral-brown">{username}</p>
          </div>
          <p className="text-white font-medium">{bio}</p>
        </div>
        <UserFeed savedThreads={savedThreads} threads={threads} />
      </main>
    </Layout>
  );
};

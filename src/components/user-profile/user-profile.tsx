import { Layout } from "../../layouts/layout";
import { Thread } from "../../threads/threads.utils";
import { Avatar } from "../avatar/avatar";

export interface UserProfileProps {
  avatarURL: string;
  username: string;
  firstname: string;
  lastname: string;
  bio: string;
  feed: Array<Thread>;
  savedThreads: Array<Thread>;
}

export const UserProfile = ({
  username,
  firstname,
  lastname,
  avatarURL,
  bio,
}: UserProfileProps) => {
  const title = `DigiForum | ${username}`;
  return (
    <Layout title={title}>
      <main className="px-10 py-5">
        <div className="w-full h-36 bg-profile-gradient rounded-lg"></div>
        <div className="flex justify-center">
          <Avatar size="lg" value={avatarURL} square />
        </div>
        <div className="flex flex-col gap-4px pt-4 pb-6">
          <div className="flex flex-col gap-2px">
            <h1 className="text-white text-2xl font-medium">{`${firstname} ${lastname}`}</h1>
            <p className="text-brown-neutral">{username}</p>
          </div>
          <p className="text-white font-medium">{bio}</p>
        </div>
        <section>
          <ul
            aria-labelledby="feed"
            className="flex gap-4 border-brand-secondary border-b-4"
          >
            <li className="p-px border-b-4 border-border-active">
              <button>Threads</button>
            </li>
            <li className="p-px">
              <button>Saved</button>
            </li>
          </ul>
          <div>
            <div className=""></div>
            <div></div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

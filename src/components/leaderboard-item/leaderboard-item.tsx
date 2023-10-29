import { Avatar } from "../avatar/avatar";

interface LeaderboardItemProps {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  points: number;
  avatarURL?: string;
}
export const LeaderboardItem = ({
  firstname,
  lastname,
  username,
  avatarURL,
  points,
}: LeaderboardItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Avatar size="sm" square src={avatarURL} />
        <div className="flex flex-col gap-px">
          <p className="text-sm font-medium text-white">{`${firstname} ${lastname}`}</p>
          <p className="text-xs text-neutral-brown">{username}</p>
        </div>
      </div>
      <div className="h-11 w-11 rounded-md flex items-center justify-center bg-light-100">
        <p className="text-primary text-main-100">{points}</p>
      </div>
    </div>
  );
};

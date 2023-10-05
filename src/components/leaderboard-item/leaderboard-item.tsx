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
  avatarURL = "",
  points,
}: LeaderboardItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Avatar size="sm" />
        <div className="flex flex-col gap-px">
          <p className="text-sm font-medium text-white">{`${firstname} ${lastname}`}</p>
          <p className="text-xs text-brown-neutral">{username}</p>
        </div>
      </div>
      <div className="h-11 w-11 rounded-md flex items-center justify-center bg-button-secondary">
        <p className="text-primary text-brand-primary">{points}</p>
      </div>
    </div>
  );
};

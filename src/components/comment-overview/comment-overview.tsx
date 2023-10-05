import Image from "next/image";
import { Avatar } from "../avatar/avatar";
import { Comment } from "./comment-overview.utils";

export const CommentOverview = ({
  owner,
  createdAt,
  content,
  likes,
  dislikes,
}: Comment) => {
  return (
    <div className="flex flex-col gap-2 border-black border-b-2 p-2 bg-brand-primary">
      <div className="flex justify-between">
        <div className="flex gap-px items-center">
          <Avatar size="sm" square />
          <div className="flex flex-col gap-px">
            <p className="text-white font-medium text-sm">{owner.name}</p>
            <p className="text-brown-neutral text-xs">{createdAt} ago</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="rounded-full bg-[#F89090] h-3 w-3"></div>
          <div className="rounded-full bg-[#DBF088] h-3 w-3"></div>
          <div className="rounded-full bg-[#94E29C] h-3 w-3"></div>
        </div>
      </div>
      <p className="text-white text-sm font-medium">{content}</p>
      <div className="flex items-center gap-2">
        <div>
          <button>
            <Image
              src="/like-icon.png"
              alt="like icon"
              height={24}
              width={24}
            />
          </button>
          <span className="text-xs">{likes}</span>
        </div>
        <div>
          <button>
            <Image
              src="/dislike-icon.png"
              alt="dislike icon"
              height={24}
              width={24}
            />
          </button>
          <span className="text-xs">{dislikes}</span>
        </div>
      </div>
    </div>
  );
};

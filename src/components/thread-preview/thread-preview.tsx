import Link from "next/link";
import { Avatar } from "../avatar/avatar";
import { TertiaryButton } from "../tertiary-button/tertiary-button";
import Image from "next/image";
import { Thread } from "../../threads/threads.utils";
import { SecondaryButton } from "../secondary-button/secondary-button";

export const ThreadPreview = ({
  link,
  title,
  owner,
  time,
  topic,
  content,
  totalComments,
  likes,
  dislikes,
}: Thread) => {
  return (
    <div className="p-4 flex flex-col gap-4 bg-card-bg rounded-lg">
      <Link href={link}>
        <h2 className="text-2xl font-semibold ">{title}</h2>
      </Link>
      <div className="flex justify-between">
        <div className="flex gap-px items-center">
          <Avatar square size="md" value={owner.name} />
          <div className="flex flex-col gap-2">
            <p className="text-white font-medium text-sm">{owner.name}</p>
            <p className="text-brown-neutral text-xs">{time}</p>
          </div>
        </div>
        <Link href={topic.link}>
          <SecondaryButton>{topic.name}</SecondaryButton>
        </Link>
      </div>
      <p className="text-white font-medium">{content}</p>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <button className="bg-lightgrey p-2 rounded-lg">
            <Image src="/saved.png" alt="saved icon" height={16} width={14} />
          </button>
          <button className="bg-lightgrey p-2 rounded-lg flex items-center gap-2">
            <Image
              src="/response-icon.png"
              alt="response"
              height={14}
              width={16}
            />
            <span className="text-brand-primary font-medium text-xs">
              Add response
            </span>
            <div className="flex justify-center items-center bg-comment-bg p-px rounded">
              <span className="text-xs text-white"> {totalComments}</span>
            </div>
          </button>
        </div>
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
    </div>
  );
};
import Link from "next/link";
import { Layout } from "../../layouts/layout";
import { Thread } from "../../threads/threads.utils";
import { Avatar } from "../avatar/avatar";
import Image from "next/image";
import { CreateCommentForm } from "../forms/create-comment";
import { CommentOverview } from "../comment-overview/comment-overview";
import { Button } from "../button/button";

export const ThreadPage = ({
  content,
  owner,
  topic,
  dislikes,
  likes,
  time,
  totalComments,
  title,
  comments,
}: Thread) => {
  return (
    <Layout title={title}>
      <main className="px-10 py-5 flex flex-col gap-6">
        <section className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Avatar size="sm" />
            <div className="flex flex-col gap-2">
              <p className="text-white font-medium text-sm">{owner.name}</p>
              <p className="text-brown-neutral text-xs">{time} ago</p>
            </div>
          </div>
          <Link href={topic.link}>
            <Button variant="secondary">{topic.name}</Button>
          </Link>
        </section>
        <section className="flex flex-col gap-4 ">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="text-white">{content}</p>
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
        </section>
        <section className="border-t-4 border-brand-secondary flex flex-col gap-4 py-4">
          <div className="flex gap-2 items-center">
            <h2 className="text-xl text-darkgrey font-medium">Responses</h2>
            <div className="flex justify-center items-center p-1.5 rounded-md bg-button-secondary text-black">
              {totalComments}
            </div>
          </div>
          <div className="rounded-lg p-2 flex flex-col gap-2 bg-brand-secondary">
            <div className="flex gap-2 items-center">
              <Avatar size="sm" square />
              <p className="text-white font-medium">Ebayyou Anggoro</p>
            </div>
            <CreateCommentForm />
          </div>
          <div className="flex flex-col gap-2">
            {comments.map((comment) => (
              <CommentOverview key={comment.id} {...comment} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
};

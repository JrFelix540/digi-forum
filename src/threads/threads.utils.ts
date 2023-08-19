import { Comment } from "@/components/comment-overview/comment-overview.utils";

export interface Thread {
  id: number;
  link: string;
  title: string;
  owner: {
    name: string;
    avatarURL: string;
    link: string;
  };
  time: string;
  topic: {
    name: string;
    link: string;
  };
  content: string;
  totalComments: number;
  likes: number;
  dislikes: number;
  comments: Array<Comment>;
}

export const threads: Array<Thread> = [
  {
    id: 1,
    link: "#",
    title: "Front-end Development And Backend Developer",
    owner: {
      name: "Astronout",
      avatarURL: "",
      link: "#",
    },
    time: "6h",
    content:
      "The three main languages you need to know well are HTML, CSS, and JavaScript. From there you can focus on frameworks, libraries, and other useful tools...",
    dislikes: 10,
    likes: 19,
    topic: {
      link: "#",
      name: "Front-end",
    },
    totalComments: 10,
    comments: [],
  },
  {
    id: 2,
    link: "#",
    title: "Front-end Development And Backend Developer",
    owner: {
      name: "Astronout",
      avatarURL: "",
      link: "#",
    },
    time: "6h",
    content:
      "The three main languages you need to know well are HTML, CSS, and JavaScript...",
    dislikes: 10,
    likes: 19,
    topic: {
      link: "#",
      name: "Front-end",
    },
    totalComments: 10,
    comments: [],
  },
];

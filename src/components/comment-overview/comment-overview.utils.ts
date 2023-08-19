export interface Comment {
  id: number;
  owner: {
    id: number;
    name: string;
    avatarURL: string;
  };
  content: string;
  likes: number;
  dislikes: number;
  createdAt: string;
}

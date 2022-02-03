export type Post = {
  id: number;
  userId: string;
  userName: string;
  content: string;
  type: "tweet" | "replay";
  replay: number;
  retweet: number;
  likes: number;
  replayIds: string;
  retweetIds: string;
  likesIds: string;
  created_at: string;
  updated_at: string;
};

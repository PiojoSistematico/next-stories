export type User = {
  userId: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
};

export type Story = {
  storyId: string;
  userId: string;
  title: string;
  body: string;
  tags: string[];
  views: number;
  upvotes: number;
  downvotes: number;
  date: string;
};

export type Comment = {
  commentId: string;
  storyId: string;
  userId: string;
  text: string;
};

export type Tag = {
  tag: string;
};

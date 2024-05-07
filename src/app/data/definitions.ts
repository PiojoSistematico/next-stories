export type User = {
  id: string;
  name: string;
  stories: string[];
};

export type Story = {
  authorId: string;
  title: string;
  body: string;
  tags: string[];
  views: number;
};

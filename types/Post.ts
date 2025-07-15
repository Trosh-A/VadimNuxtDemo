export interface PostResponse {
    posts: Post[];
}

export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  views: number;
  userId: number;
}
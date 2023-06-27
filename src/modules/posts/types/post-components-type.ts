import { Post } from "./posts-type";

export interface IPostCardImageProps {
  topText?: string;
  bottomText?: string;
}

export interface IPostCardProps {
  item: Post;
}

export interface IPostCardHeaderProps {
  item: Post;
}

export interface IPostCardActionsProps {
  item: Post;
}

export interface IPostCardHeaderMenuProps {
  id: number;
}

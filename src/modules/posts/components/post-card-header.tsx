import PostCardHeaderMenu from "./post-card-header-menu";
import { IPostCardHeaderProps } from "../types/post-components-type";

export default function PostCardHeader({ item }: IPostCardHeaderProps) {
  return <PostCardHeaderMenu id={item.id} />;
}

import { Card } from "@/modules/ui/components/card";

import PostCardActions from "./post-card-actions";
import PostCardHeader from "./post-card-header";
import PostCartImage from "./post-cart-image";
import { IPostCardProps } from "../types/post-components-type";

export default function PostCard({ item }: IPostCardProps) {
  return (
    <Card
      cardHeaderComponent={<PostCardHeader item={item} />}
      imageComponent={
        <PostCartImage topText={item?.tags?.[0]} bottomText={item?.tags?.[1]} />
      }
      cardActionsComponent={<PostCardActions item={item} />}
      body={item.body}
      title={item.title}
    />
  );
}

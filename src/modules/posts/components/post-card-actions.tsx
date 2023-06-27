import { useState } from "react";

import Image from "next/image";

import LoadingSpinner from "@/modules/ui/components/loading-spinner";

import HeartFilledIcon from "./../../ui/icons/heart-filled.svg";
import HeartIcon from "./../../ui/icons/heart.svg";
import { useUpdatePostMutation } from "../apis/posts-api";
import { IPostCardActionsProps } from "../types/post-components-type";

export default function PostCardActions({ item }: IPostCardActionsProps) {
  const { id, reactions } = item;
  const [isLiked, setIsLiked] = useState(false);
  const [reactionsCount, setReactionsCount] = useState(reactions);
  // console.log(item, "item");

  const [updatePost, { isLoading }] = useUpdatePostMutation();

  // Update Reaction

  const handleLike = async () => {
    console.log("like");
    // (isLiked ? prev - 1 : prev + 1)

    const updateCount = isLiked ? reactionsCount - 1 : reactionsCount + 1;
    const result = await updatePost({
      id,
      reactions: updateCount,
    })
      .unwrap()
      .then((res) => {
        setIsLiked((prev) => !prev);
        return res;
      });

    console.log(result, "result");

    setReactionsCount(result.reactions);
  };

  const buttonText = isLiked ? "Remove Like" : "Like";

  return (
    <>
      <div
        id="like"
        className="flex justify-between items-center gap-2 bg-slate-600 p-2 rounded-md"
      >
        <Image
          src={isLiked ? HeartFilledIcon : HeartIcon}
          width={20}
          height={20}
          alt="heart"
        />
        <span>{reactionsCount}</span>
      </div>
      <div className="justify-end">
        <button className="btn btn-primary" onClick={handleLike}>
          {isLoading ? <LoadingSpinner /> : buttonText}
        </button>
      </div>
    </>
  );
}

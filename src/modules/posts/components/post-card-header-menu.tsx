import { useState } from "react";

import Image from "next/image";

import { useAppDispatch } from "@/modules/redux/hooks";
import Button from "@/modules/ui/components/button";
import LoadingSpinner from "@/modules/ui/components/loading-spinner";
import DotsIcon from "@/modules/ui/icons/dots.svg";

import { useDeletePostMutation } from "../../posts/apis/posts-api";
import { deletePost as deleteAPost } from "../slices/posts-slice";
import { IPostCardHeaderMenuProps } from "../types/post-components-type";

export default function PostCardHeaderMenu({ id }: IPostCardHeaderMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [deletePost, { isLoading }] = useDeletePostMutation();
  const dispatch = useAppDispatch();

  const handleMenu = async () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleDelete = async () => {
    await deletePost({ id })
      .unwrap()
      .then((res) => {
        setIsMenuOpen((prev) => !prev);
        dispatch(deleteAPost({ id }));
        return res;
      });
  };

  const notDeletable = id > 150;

  return (
    <>
      <div className="flex justify-end relative">
        <>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <button onClick={handleMenu} className="btn btn-square">
              <Image src={DotsIcon} width={20} height={20} alt="dots" />
            </button>
          )}
        </>
        {isMenuOpen && (
          <ul className="menu bg-base-200 rounded-box absolute top-full z-10">
            <li>
              <Button disabled={notDeletable} onClick={handleDelete}>
                Remove Story
              </Button>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

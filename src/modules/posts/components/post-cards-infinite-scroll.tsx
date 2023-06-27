import { useEffect, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import { useAppDispatch, useAppSelector } from "@/modules/redux/hooks";
import LoadingSpinner from "@/modules/ui/components/loading-spinner";

import PostCard from "./post-card";
import { useReadPostsQuery } from "../apis/posts-api";
import { addPosts } from "../slices/posts-slice";

export default function PostCardsInfiniteScroll() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);

  const [skip, setSkip] = useState(0);
  const { isFetching, data } = useReadPostsQuery({
    skip,
  });

  // Next Page Function
  const handleNextPage = () => {
    setSkip((prev) => prev + 3);
  };

  useEffect(() => {
    if (!isFetching && data) {
      dispatch(addPosts({ ...data }));
    }
  }, [data, isFetching, dispatch]);

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={handleNextPage}
      hasMore={data?.total !== posts.length}
      loader={<LoadingSpinner />}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      className="flex flex-wrap gap-4 justify-center pt-10 px-2"
    >
      {posts.map((item) => (
        <PostCard item={item} key={"post-" + item.id} />
      ))}
    </InfiniteScroll>
  );
}

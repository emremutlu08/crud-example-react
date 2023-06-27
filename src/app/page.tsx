"use client";

import PostCardsInfiniteScroll from "@/modules/posts/components/post-cards-infinite-scroll";
import PostCreateForm from "@/modules/posts/components/post-create-form";

export default function Home() {
  return (
    <main>
      <PostCreateForm />
      <PostCardsInfiniteScroll />
    </main>
  );
}

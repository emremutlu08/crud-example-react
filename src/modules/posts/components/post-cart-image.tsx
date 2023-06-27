import Image from "next/image";

import { IPostCardImageProps } from "../types/post-components-type";

export default function PostCartImage({
  topText = "",
  bottomText = "",
}: IPostCardImageProps) {
  return (
    <Image
      src={`https://apimeme.com/meme?meme=Bad-Advice-Cat&top=${topText}&bottom=${bottomText}`}
      alt="Bad-Advice-Cat"
      width={200}
      height={200}
    />
  );
}

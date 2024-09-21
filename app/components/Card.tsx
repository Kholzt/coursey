import Image from "next/image";
import Link from "next/link";
import React from "react";
interface CardProps {
  image: string;
  title: string;
  price: string;
  href: string;
  authorName: string;
  authorImage: string;
  authorLink: string;
  categoryName: string;
  categoryLink: string;
}
const Card: React.FC<CardProps> = (props) => {
  const {
    image,
    title,
    price,
    authorImage,
    authorName,
    categoryName,
    authorLink,
    href,
  } = props;
  return (
    <article className="p-3 border rounded-md flex flex-col">
      <figure className="relative">
        <Link href={href}>
          <Image
            src={image}
            alt="Card 1"
            width={600} // Set appropriate width
            height={337} // Set appropriate height maintaining aspect ratio (e.g., 16:9 for videos)
            objectFit="cover"
            className="w-full aspect-video rounded-md object-cover"
          />
        </Link>
      </figure>
      <div className="mt-2 flex flex-col justify-between flex-1">
        <div className="">
          <Link href={href}>
            <h5 className="font-medium ">{title}</h5>
          </Link>
          <small className="text-slate-500 mb-2 inline-block">
            {categoryName}
          </small>
          <span className="block font-bold text-md mb-2">{price}</span>
        </div>
        <div className="">
          <hr />
          <Link href={authorLink} className="flex mt-2 items-center gap-2">
            <Image
              src={authorImage}
              alt="Card 1"
              width={30} // Set appropriate width
              height={30} // Set appropriate height maintaining aspect ratio (e.g., 16:9 for videos)
              className="rounded-full aspect-square object-cover"
            />
            <span className="text-sm">{authorName}</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Card;

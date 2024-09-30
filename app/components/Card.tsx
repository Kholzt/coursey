import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BookOpen } from "lucide-react";
import { formatRupiah } from "@/utils/currency";
interface CardProps {
  image: string;
  title: string;
  price: number;
  href: string;
  module: number;
  authorName: string;
  authorImage: string;
  authorLink: string;
  categoryName: string;
  categoryLink: string;
  purchased?: boolean;
  progress?: number;
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
    categoryLink,
    href,
    module,
    purchased,
    progress = 0,
  } = props;

  const indicatorColor =
    progress > 70
      ? "bg-emerald-400"
      : progress > 50
      ? "bg-yellow-400"
      : "bg-red-400";

  const priceFix = price != 0 ? formatRupiah(price) : "Free";
  return (
    <article className="p-3 border rounded-md flex flex-col hover:shadow-2xl transition-all hover:shadow-[#4955FD]/20">
      <figure className="relative">
        <Link href={href}>
          <Image
            src={image ?? "/images/default.png"}
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
            <h5 className="font-medium truncate	">{title}</h5>
          </Link>
          <Link href={`${categoryLink}`}>
            <small className="text-slate-500 mb-4 block">{categoryName}</small>
          </Link>
          <div className="  text-sm mb-2 flex gap-2 items-center">
            <BookOpen className="bg-[#4955FD]/10 w-[35px] h-[35px] text-[#4955FD]/80 px-2 py-1 rounded-full" />
            {module} Module
          </div>
          {purchased ? (
            <div className="flex flex-col gap-2 mb-4 mt-2">
              <div className="bg-slate-200 overflow-hidden w-full h-2 rounded-lg">
                <div
                  className={`${indicatorColor}  h-full`}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <small className="">Progress {progress}%</small>
            </div>
          ) : (
            <span className="block font-bold text-md mb-2">{priceFix}</span>
          )}
        </div>
        <div className="">
          <hr />
          <Link href={authorLink} className="flex mt-2 items-center gap-2">
            <Image
              src={authorImage ?? "/images/default.png"}
              alt="Card 1"
              width={30} // Set appropriate width
              height={30} // Set appropriate height maintaining aspect ratio (e.g., 16:9 for videos)
              className="rounded-full aspect-square object-cover"
            />
            <span className="text-xs">{authorName}</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Card;

"use client";
import { formatRupiah } from "@/utils/currency";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
interface CardPriceProps {
  price: number;
  firstModul: string;
  countModule: number;
}
const CardPrice: React.FC<CardPriceProps> = (props) => {
  const pathname = usePathname();
  const { price, countModule, firstModul } = props;
  const isFree = price == 0;
  let priceFix = !isFree ? formatRupiah(price) : "Free";
  return (
    <div className="border p-4 rounded-md shadow-sm">
      <h1 className="font-bold text-2xl">{priceFix}</h1>
      <div className="  text-sm mt-2 flex gap-2 items-center">
        <BookOpen className="bg-[#4955FD]/10 w-[35px] h-[35px] text-[#4955FD]/80 px-2 py-1 rounded-full" />
        {countModule} Module
      </div>
      <Link
        href={`${pathname}/${firstModul}`}
        className="px-4 py-2 w-full block text-center bg-[#4955FD] hover:bg-[#4955FD]/90 text-white rounded-md mt-5"
      >
        Preview
      </Link>
      {!isFree ? (
        <button className="px-4 py-2 w-full text-[#4955FD] border border-[#4955FD] hover:text-[#4955FD]/90  rounded-md mt-2">
          Beli
        </button>
      ) : (
        <button className="px-4 py-2 w-full text-[#4955FD]  border border-[#4955FD] hover:text-[#4955FD]/90  rounded-md mt-2">
          Learn for free
        </button>
      )}
    </div>
  );
};

export default CardPrice;

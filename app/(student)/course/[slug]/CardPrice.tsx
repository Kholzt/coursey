import { formatRupiah } from "@/currency";
import { BookOpen } from "lucide-react";
import React from "react";
interface CardPriceProps {
  price: number;
  countModule: number;
}
const CardPrice: React.FC<CardPriceProps> = (props) => {
  const { price, countModule } = props;
  return (
    <div className="border p-4 rounded-md shadow-sm">
      <h1 className="font-bold text-2xl">{formatRupiah  (price)}</h1>
      <div className="  text-sm mt-2 flex gap-2 items-center">
        <BookOpen className="bg-[#4955FD]/10 w-[35px] h-[35px] text-[#4955FD]/80 px-2 py-1 rounded-full" />
        {countModule} Module
      </div>
      <button className="px-4 py-2 w-full bg-[#4955FD] hover:bg-[#4955FD]/90 text-white rounded-md mt-5">
        Beli
      </button>
    </div>
  );
};

export default CardPrice;

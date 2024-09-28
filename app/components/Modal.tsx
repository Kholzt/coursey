import { X } from "lucide-react";
import React from "react";

interface ModalProps {
  setShow: (status: boolean) => void;
  show: boolean;
  children: React.ReactNode;
  title: string;
}
const Modal: React.FC<ModalProps> = (props) => {
  const { setShow, show, children, title } = props;
  return (
    <div
      className={`${
        show ? "opacity-1 visible" : "opacity-0 invisible"
      } fixed top-0 left-0 flex transition-all justify-center items-center right-0 bottom-0 z-[999] bg-black/20`}
    >
      <div className="md:w-[500px] w-[95%] bg-white p-4 rounded-md">
        <div className="mb-4 border-b pb-2 flex">
          <h4 className="text-lg font-bold md:ms-0 ms-auto">{title}</h4>
          <button
            className="ms-auto cursor-pointer"
            onClick={() => setShow(false)}
          >
            <X />
          </button>
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

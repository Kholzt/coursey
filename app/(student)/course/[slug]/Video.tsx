import React from "react";
import Image from "next/image";

const Video = () => {
  return (
    <>
      <Image
        src="/images/profile.jpg"
        width={500}
        height={500}
        layout={"responsive"}
        alt="Courses"
        className="w-full aspect-video rounded-md"
      />
      <div className="mt-4">
        <h1 className="text-3xl mb-4">
          Digital Marketing Strategies for 2024 - Introduction
        </h1>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim culpa
          qui, eius veniam pariatur inventore aliquid ipsa tempore id vel
          numquam perspiciatis, exercitationem adipisci. Nemo numquam quidem
          doloribus rerum veniam nostrum quaerat, itaque, id quisquam dolorum
          animi, est facere saepe?
        </p>
      </div>
    </>
  );
};

export default Video;

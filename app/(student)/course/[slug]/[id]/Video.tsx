import React from "react";
import Image from "next/image";

const Video = () => {
  return (
    <>
      <div className="border rounded-md p-4">
        <Image
        src="/images/profile.jpg"
        width={500}
        height={500}
        layout={"responsive"}
        objectFit="cover"
        alt="Courses"
        className="w-full aspect-video rounded-md"
      />
      </div>
      <div className="mt-4 border p-4 rounded-md">
        <h1 className="text-3xl mb-4">
           Introduction
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

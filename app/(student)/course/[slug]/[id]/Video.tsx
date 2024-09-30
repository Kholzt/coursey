"use client";
import React, { useRef } from "react";
import { ArrowLeft, ArrowRight, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Module {
  id: number; // Assuming there is an id
  title: string;
  content: string;
  videoUrl?: string; // Optional
  isFree: boolean;
  nextModuleLink?: string;
  prevModuleLink?: string;
}

interface VideoProps {
  module: Module;
  purchased?: boolean;
}

const Video: React.FC<VideoProps> = ({ module, purchased }) => {
  const { isFree, videoUrl, nextModuleLink, prevModuleLink } = module;
  const router = useRouter();
  const handleVideoEnd = () => {
    if (nextModuleLink) router.push("/course/" + nextModuleLink);
  };

  return (
    <>
      <div className="border rounded-md p-4">
        {purchased || isFree ? (
          videoUrl ? (
            <video
              // ref={videoRef}
              onEnded={handleVideoEnd}
              controls
              autoPlay
              src={videoUrl}
              className="w-full aspect-video rounded-md"
            />
          ) : (
            <div className="w-full aspect-video rounded-md flex items-center justify-center bg-slate-800">
              <p className="text-white">Video URL not available</p>
            </div>
          )
        ) : (
          <div className="w-full aspect-video rounded-md flex items-center justify-center bg-slate-800">
            <Lock className="text-white" />
          </div>
        )}
      </div>
      <div className="flex justify-between mt-4">
        <Link
          className={`px-4 py-1 ${
            prevModuleLink
              ? "bg-[#4955FD] text-white"
              : "border border-[#4955FD] text-[#4955FD] pointer-events-none opacity-50"
          } text-sm  rounded-md flex items-center`}
          href={`/course/${prevModuleLink}`}
        >
          <ArrowLeft className="w-5 me-2" />
          Previous
        </Link>
        <Link
          className={`px-4 py-1 ${
            nextModuleLink
              ? "bg-[#4955FD] text-white"
              : "border border-[#4955FD] text-[#4955FD] pointer-events-none opacity-50"
          } text-sm  rounded-md flex items-center`}
          href={`/course/${nextModuleLink}`}
        >
          Next
          <ArrowRight className="w-5 ms-2" />
        </Link>
      </div>
      <div className="mt-4 border p-4 rounded-md">
        <h1 className="text-3xl mb-4">{module.title}</h1>
        <p className="text-base">{module.content}</p>
      </div>
    </>
  );
};

export default Video;

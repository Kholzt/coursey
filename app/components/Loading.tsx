"use client";
import React from "react";
import lottie from "lottie-web";

const Loading = () => {
  const animationContainer = React.useRef(null);

  React.useEffect(() => {
    // Pastikan `animationContainer.current` sudah terisi sebelum memulai animasi
    if (animationContainer.current) {
      const animationInstance = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/loading/loading.json",
      });

      // Cleanup function untuk menghindari animasi ganda
      return () => {
        animationInstance?.destroy();
      };
    }
  }, []);

  return (
    <div className="fixed flex justify-center items-center bg-white w-full h-full top-0 left-0 right-0 bottom-0 z-[999]">
      <div className="w-[10%]" ref={animationContainer}></div>
    </div>
  );
};

export default Loading;

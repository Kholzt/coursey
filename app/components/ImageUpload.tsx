"use client";

import { UploadDropzone } from "@/utils/uploadthing";
import React, { useState } from "react";

const ImageUpload = ({ name, ...props }: { name: string }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
    <div>
      <UploadDropzone
        endpoint="imageUploader"
        className="text-black"
        onClientUploadComplete={(res: any) => {
          if (res && res.length > 0) {
            const url = res[0].url;
            setImageUrl(url); // Update the local state with the image URL
          }
        }}
        onUploadError={(error: Error) => {
          console.error("Upload error:", error);
        }}
      />
      {imageUrl && (
        <div className="mt-4">
          <p>Image uploaded successfully!</p>
          <img src={imageUrl} alt="Uploaded Image" className="h-32 w-32" />
        </div>
      )}
      <input type="hidden" name={name} {...props} />
    </div>
  );
};

export default ImageUpload;

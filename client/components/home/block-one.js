import React from "react";

export default function BlockOne() {
  return (
    <>
      <div className="block-one">
        <video
          className="block-one-vedio"
          src="/home-vedio/catcut.mp4"
          autoPlay
          muted
          loop
          type="video/mp4"
        ></video>
      </div>
    </>
  );
}

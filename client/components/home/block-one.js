import React from "react";

export default function BlockOne() {
  return (
    <>
      <div className="block-one object-fit-fill">
        <video
          className="block-one-vedio w-100 h-100"
          src="/home-vedio/新しい家族、生後4ヶ月の子猫を迎えました【サイベリアン】.mp4"
          class="block-one-vedio"
          autoplay
          muted
          loop
          type="video/mp4"
        ></video>
      </div>
    </>
  );
}
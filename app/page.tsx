"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [zooming, setZooming] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [clicked, setClicked] = useState(false);

  const openMemories = () => {
    if (zooming) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setZooming(true);

    timeoutRef.current = setTimeout(() => {
      router.push("/memories");
    }, 1200);
  };

  return (
    <main className={`page ${zooming ? "zoom-active" : ""}`}>
      <div className="content">
        <h1>Happy Anniversary ❤️</h1>

        <p className="subtitle">
          I made something for us.
        </p>

        <button
          type="button"
          className={`image-button ${zooming ? "zooming" : ""}`}
          onClick={openMemories}
          aria-label="Open our memories"
        >
          <Image
            src="/ladybird.jpg"
            alt="A photo of us"
            fill
            priority
            sizes="(max-width: 768px) 80vw, 500px"
            className="anniversary-image"
          />

          <div className="image-overlay">
            <span>Tap me ♡</span>
          </div>
        </button>
      </div>

      <div
        className={`transition-overlay ${zooming ? "visible" : ""}`}
      />
    </main>
  );
}
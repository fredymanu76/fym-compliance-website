"use client";

import Image from "next/image";

interface ImageBreakSectionProps {
  src?: string;
  alt?: string;
  overlayText?: string;
}

export function ImageBreakSection({
  src = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
  alt = "Modern office environment",
  overlayText,
}: ImageBreakSectionProps) {
  return (
    <section className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
      {overlayText && (
        <>
          <div className="absolute inset-0 bg-bg-navy/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white heading-tight text-center px-4 max-w-3xl">
              {overlayText}
            </p>
          </div>
        </>
      )}
    </section>
  );
}

"use client";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";

interface ActivityGalleryProps {
  images: string[];
}

export default function ActivityGallery({ images }: ActivityGalleryProps) {
  if (!images || images.length === 0) return null;

  const galleryImages = images.map((src) => ({
    original: src,
    thumbnail: src,
    originalAlt: "Actividad El Taller",
    thumbnailAlt: "Miniatura Actividad El Taller",
    loading: "lazy" as const,
  }));

  return (
    <div className="activity-gallery-container rounded-2xl overflow-hidden shadow-lg border border-base-300 bg-base-200">
      <ImageGallery 
        items={galleryImages} 
        showPlayButton={true}
        showFullscreenButton={true}
        showNav={true}
        showThumbnails={images.length > 1}
        thumbnailPosition="bottom"
        useBrowserFullscreen={false}
      />
    </div>
  );
}

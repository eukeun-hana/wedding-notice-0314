import { useState, useEffect } from "react"
import { LazyDiv } from "../lazyDiv"
import "./index.scss"
import ArrowLeft from "../../icons/angle-left-sm.svg?react"
import { GALLERY_THUMBS, GALLERY_FULL } from "../../images"

export const GalleryThum = () => {
  const [viewerIndex, setViewerIndex] = useState<number | null>(null)

  const prevImage = () => {
    if (viewerIndex === null) return
    setViewerIndex((viewerIndex + GALLERY_FULL.length - 1) % GALLERY_FULL.length)
  }

  const nextImage = () => {
    if (viewerIndex === null) return
    setViewerIndex((viewerIndex + 1) % GALLERY_FULL.length)
  }
  return (
    <>
      <LazyDiv className="card gallery">
        <h2 className="english">Gallery</h2>
        <div className="break" />
        <div className="gallery-grid">
          {GALLERY_THUMBS.map((thumb, idx) => (
            <div
              key={idx}
              className="gallery-item"
              onClick={() => setViewerIndex(idx)}
            >
              <img
                src={thumb}
                alt={`thumb-${idx}`}
                draggable={false}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </LazyDiv>

      {/* 확대 뷰어 (전역 모달 아님) */}
      {viewerIndex !== null && (
        <div className="photo-viewer-overlay" onClick={() => setViewerIndex(null)}>
          <img
              src={GALLERY_FULL[viewerIndex]}
              className="photo-viewer-image"
              onClick={(e) => e.stopPropagation()}
              decoding="async"
            />
          <div className="carousel-control">
            <div className="control left" onClick={(e) => { e.stopPropagation(); prevImage()}}>
                <ArrowLeft className="arrow" />
            </div>
            
            <div className="control right" onClick={(e) => { e.stopPropagation(); nextImage()}}>
                <ArrowLeft className="arrow right" />
            </div>
         
          </div>
          <button
            className="photo-viewer-close"
            onClick={() => setViewerIndex(null)}
          >
            ✕
          </button>
        </div>
      )}
    </>
  )
}

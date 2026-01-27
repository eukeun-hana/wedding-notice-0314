import { useState, useRef } from "react" // ✅ useRef 추가
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

  // ✅ (추가) 스와이프 시작 좌표 저장
  const touchStartXRef = useRef<number | null>(null)
  const touchStartYRef = useRef<number | null>(null)

  // ✅ (추가) 스와이프 감도(원하면 30~60 조절)
  const SWIPE_THRESHOLD = 40

  // ✅ (추가) 터치 시작
  const handleTouchStart = (e: React.TouchEvent) => {
    if (viewerIndex === null) return
    const t = e.touches[0]
    touchStartXRef.current = t.clientX
    touchStartYRef.current = t.clientY
  }

  // ✅ (추가) 터치 종료 → dx로 prev/next
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (viewerIndex === null) return
    if (touchStartXRef.current == null || touchStartYRef.current == null) return

    const t = e.changedTouches[0]
    const dx = t.clientX - touchStartXRef.current
    const dy = t.clientY - touchStartYRef.current

    // 다음 스와이프를 위해 초기화
    touchStartXRef.current = null
    touchStartYRef.current = null

    // ✅ 세로 움직임이 더 크면 스와이프가 아닌 것으로 보고 무시(오작동 방지)
    if (Math.abs(dy) > Math.abs(dx)) return

    // ✅ 오른쪽으로 스와이프 = 이전 사진
    if (dx > SWIPE_THRESHOLD) {
      prevImage()
      return
    }

    // ✅ 왼쪽으로 스와이프 = 다음 사진
    if (dx < -SWIPE_THRESHOLD) {
      nextImage()
      return
    }
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
        <div
          className="photo-viewer-overlay"
          onClick={() => setViewerIndex(null)}
          // ✅ (추가) 스와이프 감지(모바일에서 제일 확실)
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={GALLERY_FULL[viewerIndex]}
            className="photo-viewer-image"
            onClick={(e) => e.stopPropagation()}
            decoding="async"
            // ✅ (추가) 이미지 위에서 스와이프해도 overlay의 onClick(닫기)로 안 흘러가게
            onTouchStart={(e) => {
              e.stopPropagation()
              handleTouchStart(e)
            }}
            onTouchEnd={(e) => {
              e.stopPropagation()
              handleTouchEnd(e)
            }}
          />

          <div className="carousel-control">
            <div
              className="control left"
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
            >
              <ArrowLeft className="arrow" />
            </div>

            <div
              className="control right"
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
            >
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

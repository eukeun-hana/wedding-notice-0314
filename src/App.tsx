import { Cover } from "./component/cover"
import { Location } from "./component/location"
import "./App.scss"
import { Invitation } from "./component/invitation"
import { BGEffect } from "./component/bgEffect"
import { GalleryThum } from "./component/galleryThumnail"
import { LazyDiv } from "./component/lazyDiv"
import GuestBook from "./component/guestbook"
import { ShareButton } from "./component/shareButton"
import { BGM } from "./component/bgm"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <BGM />
    <div className="background">
      <BGEffect/>
      <div className="card-view">
        <LazyDiv className="card-group">
          {/* 표지 */}
          <Cover />
          {/* 모시는 글 */}
          <Invitation />
        </LazyDiv>
        <LazyDiv className="card-group">
          {/* 오시는길 */}
          <Location />
        </LazyDiv>

        <LazyDiv className="card-group">
          {/* 갤러리 */}
          <GalleryThum />
          {/* 방명록 */}
          <GuestBook />
        </LazyDiv>

        
        <ShareButton />
      </div>
    </div>
    </>    
  )
}

export default App

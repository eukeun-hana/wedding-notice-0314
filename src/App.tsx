import { Cover } from "./component/cover"
import "./App.scss"
import { Invitation } from "./component/invitation"
import { BGEffect } from "./component/bgEffect"
import { Gallery } from "./component/gallery"
import { LazyDiv } from "./component/lazyDiv"
import GuestBook from "./component/guestbook"
import { ShareButton } from "./component/shareButton"
import { BGM } from "./component/bgm"

function App() {
  return (
    <>
    <BGM />
    <div className="background">
      <BGEffect />
      <div className="card-view">
        
        <LazyDiv className="card-group">
          {/* 표지 */}
          <Cover />

          {/* 모시는 글 */}
          <Invitation />
        </LazyDiv>

        <LazyDiv className="card-group">
          {/* 결혼식 날짜 (달력) 
          <Calendar />*/}
         
          {/* 겔러리 */}
          <Gallery />
          <GuestBook />
          
        </LazyDiv>
        <ShareButton />
        
      </div>
    </div>
    </>
    
    
  )
}

export default App

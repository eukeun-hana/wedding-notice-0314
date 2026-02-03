import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용시
            <br />
            지하철 7호선 <b>굴포천역 8번출구</b> 나와서
            <br />
            → 신호 없는 횡단보도 건넌 후
            <br />
            → 200m 직진, 1층에 스타벅스 있는 거림타워 건물입니다.
            <br />

          </div>
          <div />
          
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>경복궁 부평점</b> 검색
            <br />
            - 주차 요금은 무료입니다.
            <br />
            (건물 주차장 만차 시 공영주차장 이용
            네이버 검색 - 굴포천역 주차장)
          </div>
          <div />
        </div>
      </LazyDiv>
    </>
  )
}

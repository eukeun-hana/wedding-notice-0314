import {
  BRIDE_FULLNAME,
  GROOM_FULLNAME,
  WEDDING_DATE,
  WEDDING_DATE_FORMAT,
} from "../../const"
import { COVER_IMAGE } from "../../images"
import { LazyDiv } from "../lazyDiv"

const DAY_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

export const Cover = () => {
  return (
    <LazyDiv className="card cover">
      <div className="image-wrapper">
        <img src={COVER_IMAGE} alt="sample" />
      </div>
      <div className="subtitle">We are getting married</div>
       <div className="names">
        {GROOM_FULLNAME}
        <div className="divider" />
        {BRIDE_FULLNAME}
      </div>
      <div className="info">{WEDDING_DATE.format(WEDDING_DATE_FORMAT)}</div>
    </LazyDiv>
  )
}

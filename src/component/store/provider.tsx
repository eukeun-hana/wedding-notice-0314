/* eslint-disable @typescript-eslint/no-explicit-any */

import { PropsWithChildren, useState } from "react"
import { StoreContext } from "./context"

export const StoreProvider = ({ children }: PropsWithChildren) => {
  const [kakao, setKakao] = useState<any>(null)

  return (
    <StoreContext.Provider value={{ kakao, setKakao }}>
      {children}
    </StoreContext.Provider>
  )
}

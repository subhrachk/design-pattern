import React, { ReactNode } from 'react'
export type LeftType = {
    children : ReactNode
}

export const Left = ({children}: LeftType) => {
  return (
    <h1 style={{backgroundColor : 'green'}}>{children}</h1>
  )
}

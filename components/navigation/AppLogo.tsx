"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export const AppLogo = () => {
  const router = useRouter();
  const [hover, setHover] = useState(false);

 const HandleLogoHover = () => {
   setHover(!hover)
 }

  return (
    <div className="relative group flex mx-3 h-[48px] w-[48px] rounded-[14px] overflow-hidden" onMouseEnter={HandleLogoHover} onMouseLeave={() => setHover(!hover)}>
        <Image
         width={50}
         height={50}
         src={!hover ? '/logo.png' : '/logo-black.png'}
         alt="logo image"
        />
    </div>
  )
}


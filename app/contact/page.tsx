'use client'

import React from 'react'

type Props = {}

export default function page({}: Props) {
  let play = false;
  return (
    <div className="flex m-6 flex-col gap-2">
        <p className = "text-3xl mx-auto font-bold">Contact information</p>
        <p className = "text-xl"><b>Name :</b> Nattaphat songsi-in</p>
        <p className = "text-xl"><b>Address :</b> null</p>

        <p className = "text-xl"><b>Some cool nissan video :</b> </p>
        <div>
        <iframe 
          width="560" height="315" 
          src="https://www.youtube.com/embed/7ECCnREVYUg?si=a7kEIFS6Hy1Zl_KE" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>

    </div>
  )
}
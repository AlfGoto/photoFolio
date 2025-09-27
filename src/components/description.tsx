"use client"

import { useState } from "react";

export default function Description({ title, desc }: { title: string, desc: string }) {
  const [show, setShow] = useState(false);

  return <div
    className={`z-100 absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white text-sm px-4 py-2 rounded-lg ${show && "opacity-1"}`}
    onClick={() => { setShow(!show) }
    }>
    <p>{title}</p>
    <p className="text-xs opacity-80">{desc}</p>
  </div >
}


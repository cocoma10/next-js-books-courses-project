//here recieve each item and extract the details  
import React from 'react'
//import Link from 'next/link'
//import { AlignJustify } from "lucide-react";
import Image from "next/image";

const Livreitem = ({livre}) => {
  return (
    <div>
      <div >
        <div >
          <h2>
            {livre?._id}
          </h2>
          <h2>
           {/* <AlignJustify className="w-3 h-3" /> */} 
            {livre?.tiltle}
          </h2>
        </div>
        <h2>{livre?.author}</h2>
        <h2>{livre?.banner}</h2>

        <Image src={`http://localhost:5000${livre?.banner}`}  alot="logo" width={100} height={90}  />

      </div>
    </div>
  )
}

export default Livreitem

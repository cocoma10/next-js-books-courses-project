//here we map the items and send each item individually 

import React from 'react'
import Livreitem from './Livreitem'
const LivreList = ({LivreList}) => {
  return (
    <div >
       {LivreList?.map((item) => (
        <div key={item.id}>
          <h2>
            <Livreitem livre={item} />
          </h2>
        </div>
      ))}
    </div>
  )
}

export default LivreList

//here we just fetch  

"use client";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import LivreList from "./LivreList";
//here we just fetch  
const Livres = () => {
  const [livres, setLivres] = useState();
  
  useEffect(() => {
    async function fetchLivres() {
      const response = await fetch("http://localhost:5000/api/livres", {
        method: "GET",
        //mode: "cors", // Specify CORS mode
      });
      const data = await response.json();
      setLivres(data);
    }

    fetchLivres();
  }, []); 

  return (
    <div>
      <div>
        <LivreList LivreList={livres} />
      </div>
    </div>
  );
};

export default Livres;

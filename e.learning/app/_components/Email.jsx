import React, { useState } from "react";
import { MessageCircleMore } from "lucide-react";
const Email = () => {
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
  const handleSend = async () =>{
    const data= {email,message};
    try{
      const respo= await fetch('http://localhost:3000/api/contacts',{
        method: 'POST',
        body:JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      });
      if(respo.ok){
        console.log("success")
      }else{
        console.log("error !!")
      }
    }catch(error){
      console.log(error)
    };
    setEmail('');
    setMessage('');
  }
  return (
    <div>
      <div className="flex flex-col items-center justify-center mb-16 ">
        <p className=" flex text-[#111010] font-bold text-[70px] ml-5 mb-2 ">
          LET'S TALK{" "}
          <span className="text-[#0A3AE3] mt-4 ml-2">
            <MessageCircleMore
              size={50}
              strokeWidth={4.25}
              absoluteStrokeWidth
            />
          </span>
        </p>

        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" placeholder="EMAIL" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="app-form-group message">
              <input className="app-form-control" placeholder="MESSAGE" value={message} onChange={(e)=>setMessage(e.target.value)} />
            </div>
            <div className="app-form-group buttons">
              <button onClick={handleSend} className="text-[15px] font-bold bg-[#F0D901] mt-2 p-1 h-8 rounded-md">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;

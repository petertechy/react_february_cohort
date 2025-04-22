import React, { useEffect, useState } from 'react'

    
    
    const Chat = ({socket}) => {
//         socket.current.on("broacastMsg", (received)=>{
//         console.log(received)
//     const [message, setmessage] = useState("")
//     const [allmessage, setallmessage] = useState([])
//     const submitMessage = ()=>{
//         socket.current.emit("sendMsg", message)
//         console.log(message)
//     }
// })

const [message, setmessage] = useState("")
    const [allmessage, setallMessage] = useState([])
    useEffect(() => {
        if(socket.current){
            socket.current.on("broadcastMsg", (receivedMsg)=>{
                setallMessage([...allmessage, receivedMsg])
                // console.log(receivedMsg)
            })
        }
    })

const submitMessage = () =>{
    // console.log(message)
    socket.current.emit("sendMsg",message)
}

useEffect(() => {
    if(socket.current){
        
    }
    }, [])

  return (
    <>
        <div className='mx-auto p-3 my-4 rounded-3 shadow col-7'>
            <h1>Chat App</h1>
        <input className='form-control mb-3' type="text" onChange={(e)=>setmessage(e.target.value)} />
        <button onClick={submitMessage} className='btn btn-outline-success w-100'>Send Message</button>

        <div>
            {allmessage.map((msg,index)=>(
                <div key={index}>
                    {msg}
                </div>
            ))}
   
        </div>
        </div>
    </>
  )
}

export default Chat
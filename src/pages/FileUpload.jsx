import axios from 'axios'
import React, { useState } from 'react'

const FileUpload = () => {
    const [file, setfile] = useState("")
    const [image, setimage] = useState("")

    const createFile = (e)=>{
        let image = e.target.files[0]
        let reader = new FileReader()
       
        reader.readAsDataURL(image)

        
        reader.onload = () =>{
            console.log(reader.result)
            setfile(reader.result)
        }


    }

    const uploadFile = () =>{
        let url = "http://localhost:5700/file-upload"
        axios.post(url, {file})
        .then((response)=>{
            console.log(response.data)
            setimage(response.data.imageLink)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <>
       <div className='mx-auto col-7 rounded p-3 my-3'>

       <input onChange={(e)=>createFile(e)} className='form-control mb-3' type="file" />

       <button onClick={uploadFile}  className='btn btn-info my-2'>Upload File</button>

       <img width={200} src={image}  />
       </div>
    </>
  )
}

export default FileUpload
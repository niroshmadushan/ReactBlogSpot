
import axios from "axios";
import { useEffect,useState } from 'react';
import { useNavigate } from "react-router-dom";


function Post() {




const [listOfPost,setlistOfpost]=useState([]);  
const navigate = useNavigate();
  useEffect(()=>{
 
    const values = {
      query:"SELECT * FROM `posts`;"
    }
      
    axios.post("http://localhost:3001/getdata/sql",values).then((response)=>{
      setlistOfpost(response.data)
    })
  },[])
  return (
    
    <div className='z-10 float-left w-screen mt-16 cursor-pointer'>
      <center>
     {listOfPost.map(({title,postText,username,img,id},index)=>{
      return(
       
      <div key={index} className='m-5  ml-[10px] relative w-[800px] rounded-[25px] bg-slate-200 shadow-lg p-4 ' onClick={()=>{navigate(`/post/${id}`)}}>
        <div className="font-medium text-center bg-black text-cyan-50 rounded-[10px]">{title}</div>
        <div className="font-mono bg-white rounded-[8px] mt-[8px]  w-[760px] min-h-[150px]">
            <div className="float-left"><img src={img} className="w-[180px] h-[130px] p-1 rounded-[15px] mt-[5px] ml-10" alt="post art"></img></div><div className=" float-left h-[130px] w-[15px]"></div>
            <p className="p-5 ml-10 text-justify">{postText}</p>
            </div><br/>
        <div className="font-medium text-center bg-blue-700 h-[40px]  p-1 text-cyan-50 rounded-[10px]">Writer Username : {username}</div>
      </div>
      )
     })}
     </center>
    </div>
  );
}

export default Post;
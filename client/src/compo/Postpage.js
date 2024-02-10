import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import './compo.css';
import { useFormik } from 'formik';
import * as Yup from'yup';

const validationSchema =Yup.object({
  value1: Yup.string().required(" * Name Is requerd"),  
  value2: Yup.string().required(" * Comment Is requerd"),  
});


function Postpage() {
    let {id}=useParams();
  
    const [listOfPost,setlistOfpost]=useState([]); 
    const [listOfcomnts,setlistOfcomnts]=useState([]); 
    
    const formik = useFormik({
      initialValues: {
          query:"INSERT INTO `comments`(`name`, `comment`, `pid`, `createdAt`, `updatedAt`) VALUES (?,?,?,?,?)",
          value1:'',
          value2:'',
          value3:id,
       
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        
         axios.post("http://localhost:3001/getdata",values).then((response)=>{
              document.getElementById('value1').value = '';
              document.getElementById('value2').value = '';
              alert("Comment SuccessFully");
             
              
              const values2 = {
                query:`SELECT * FROM comments WHERE pid=${id};`
              }
                
              axios.post("http://localhost:3001/getdata/sql",values2).then((response)=>{
                setlistOfcomnts(response.data)
              })
             
})
            
      },
     
    });







    useEffect(()=>{
        const values = {
          query:`SELECT * FROM posts where id='${id}';`
        }
          
        axios.post("http://localhost:3001/getdata/sql",values).then((response)=>{
          setlistOfpost(response.data)

        })

        const values2 = {
          query:`SELECT * FROM comments WHERE pid=${id};`
        }
          
        axios.post("http://localhost:3001/getdata/sql",values2).then((response)=>{
          setlistOfcomnts(response.data)
        })



      },[id])
      console.log(listOfPost)
  return (
    <div className='z-10 float-left w-screen mt-16'><center>
    {listOfPost.map(({title,postText,username,img},index)=>{
        return(
          
            <div key={index}>
            
            <div className='font-mono text-[25px] font-bold bg-blue-200 w-[95%] rounded-[25px]' >{title}</div>
            <div className="font-mono bg-white rounded-[8px] mt-[8px] ml-[-25px]  w-[85%] min-h-[150px]">
            <div className="float-left"><img src={img} className="w-[50%] p-1 rounded-[15px] mt-[20px]  mb-5" alt="post art"></img></div><div className=" float-left h-[100%] w-[15px]"></div>
            
           <div className='float-left'><p className="p-5 ml-10 text-justify">{postText}</p>
           <div className='usn'>Writer User Name : {username}</div>
           </div> 
            </div>
            <center>
            <div className='w-[100%] float-left m-auto' >
              <div className='cmnt'>
               <p>Comments Section</p>
               <div className='cmntbody min-h-16'>
              <>

            
 {listOfcomnts.map(({name,comment},index)=>{
    return(
        <p className='font-mono w-[75%] bg-blue-200 rounded-[5px] m-[5px] mb-10px text-blue-600'>{name} : {comment}</p>
    )
 })}
    </>

               </div>
               
              <div className='cmntbox'>
              
              <form onSubmit={formik.handleSubmit} className='fom'>
                <table>
                  <tr>
                    <th>
                      <label>
                        Name :
                      </label>
                    </th>
                    <td>
                    {formik.touched.value1 && formik.errors.value1 ? (
                                <div className='ermsg'>{formik.errors.value1}</div>
                                ) : null}
                    <input className='set' autoComplete='off' 
                             id="value1"
                            name="value1"
                          
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}  
                            placeholder='Type Comment here ...'/> 
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label>
                        Comment :
                      </label>
                    </th>
                    <td>
                    {formik.touched.value2 && formik.errors.value2 ? (
                                <div className='ermsg'>{formik.errors.value2}</div>
                                ) : null}
                    <textarea autoComplete='off' 
                             id="value2"
                            name="value2"
                          
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}  
                            placeholder='Type Comment here ...'/> 
                    </td>
                  </tr>
                </table>
            
                            
                    
                             <button type='submit' className='btnv2'>Post</button>
              </form>
              </div>
              </div>
            </div></center>
            </div>
        )
    })}
    </center>
    </div>
    
    
  )
}

export default Postpage
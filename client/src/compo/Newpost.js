
import './compo.css';
import * as Yup from'yup';
import { useFormik } from 'formik';
import axios from "axios";
import React  from 'react';
import { useNavigate } from "react-router-dom";

const validationSchema =Yup.object({
    value1: Yup.string().required(" * Title is required"),
    value2: Yup.string().required(" * Post Text is required"),
    value3: Yup.string().required(" * User Name is required"),
    value4: Yup.string().required( " * Url is required")
    
});
function Newpost() {
    const navigate = useNavigate();
    const input1 =null;
    const formik = useFormik({
        initialValues: {
            query:"INSERT INTO `posts`(`title`, `postText`, `username`,`img`,`createdAt`, `updatedAt`) VALUES(?,?,?,?,?,?)",
            value1:'',
            value2:'',
            value3:'',
            value4:''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          
            axios.post("http://localhost:3001/getdata",values).then((response)=>{
                document.getElementById('value1').value = '';
                document.getElementById('value2').value = '';
                document.getElementById('value3').value = '';
                document.getElementById('value4').value = '';
                alert("Data Insert SuccessFully");
                navigate("/home")
               
             })
              
        },
       
      });
  
   
  return (
<div className='z-10 float-left w-screen mt-12'>
      <center>
      <div  className='m-5  ml-[10px] relative w-[90%] rounded-[25px] bg-b shadow-lg p-4 '>
       <div className='font-mono frm'>
        <form onSubmit={formik.handleSubmit} > 
        
            <table className=''>
                <tbody>
                <tr>
                    <th>
                        <label>
                            Title :
                           
                        </label>
                    </th>
                    <td>
                    {formik.touched.value1 && formik.errors.value1 ? (
                                <div className='ermsg'>{formik.errors.value1}</div>
                                ) : null}
                    <input autoComplete='off' 
                             id="value1"
                            name="value1"
                            ref={input1}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}  
                            placeholder='Enter Title here ...'/> 
                            
                    </td>
                </tr>
                <tr>
                    <th><div>
                    <label >
                            Text Post :
                        </label>
                    </div>
                        
                    </th>
                    <td>
                    {formik.touched.value2 && formik.errors.value2 ? (
                        <div className='ermsg'>{formik.errors.value2}</div>
                        ) : null}
                    <textarea  autoComplete='off' 
                    id="value2"
                    name="value2"
                    ref={input1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}  
                    placeholder='Enter text here ...' ></textarea>
                   
                  
                   
                    </td>
                </tr>
                
                
                
                
                <tr>
                    <th>
                        <label>
                            Image URL :
                        </label>
                    </th>
                    <td>
                    {formik.touched.value4 && formik.errors.value4 ? (
                        <div className='ermsg'>{formik.errors.value4}</div>
                        ) : null}
                    <input type="text" 
                    name="value4" 
                    id='value4'
                    ref={input1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}  
                    autoComplete='off' 
                    placeholder='Enter url here ..'/> 

                       
                    </td>
                </tr>
                <tr>
                    <th>
                        <label>
                            User Name :
                        </label>
                    </th>
                    <td>
                    {formik.touched.value3 && formik.errors.value3 ? (
                        <div className='ermsg'>{formik.errors.value3}</div>
                        ) : null}
                    <input type="text" 
                    name="value3" 
                    id='value3' 
                    ref={input1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}  
                    autoComplete='off' 
                    placeholder='Entere username here ...'/>  
                    
                    </td>
                </tr>
                </tbody>
            </table>
            <button type='submit' className='btn2'>Submit</button>
            </form>
       
    </div>
      </div>
      </center>
   
    </div>





   
  )
}

export default Newpost
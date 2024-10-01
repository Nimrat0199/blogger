import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full  bg-[#0A0A0A] hover:bg-slate-900  text-center rounded-xl p-4'>
            <div className='w-full flex justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl ' />
            </div>
            <h2
            className='md:text-xl text-sm text-red-500 md:font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard
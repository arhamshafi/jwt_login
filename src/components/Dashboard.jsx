import React, { useContext } from 'react'
import { App_context } from '../context'
import { useNavigate } from 'react-router-dom'

function Dashboard() {

let {crnt_user , set_crnt_user} = useContext(App_context)
const navigate = useNavigate()
  return (
    <div className='w-full h-[100px] bg-orange-700 text-white flex justify-between items-center px-10'>
        <h1 className='text-4xl text-white font-bold'>Welcome {crnt_user?.name} </h1>
         <button className='bg-black py-1 px-3 rounded-xl text-white ' onClick={()=>{ set_crnt_user(null) , navigate("/") }} >Log out</button>
    </div>
  )
}

export default Dashboard
import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import {FcGoogle} from 'react-icons/fc';


const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {

    console.log("ye rha mera form type");
    console.log(formtype)
  return (
    <div className=' flex max-w-[1080px]  py-12 mx-auto gap-x-12 gap-y-0 justify-between w-11/12 mb-8 '>

        <div className='w-11/12 max-w-[450px]'>
            <h1 className='text-white font-semibold text-[1.875rem] font-serif'>{title}</h1>
            <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                <span className='text-richblack-100'>{desc1}</span>
                <br />
                <span className='text-blue-100 italic text-sm'>{desc2}</span>
            </p>

            {formtype === "signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='h-[1px] w-full bg-richblack-200'></div>
                <p className='text-richblack-200 font-medium leading-[1.374rem]'>OR</p>
                <div className='h-[1px] w-full bg-richblack-200'></div>
            </div>

            <button className='text-white flex justify-center items-center border-white border-[1px] rounded-md w-full font-medium px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle className=''></FcGoogle>
                <p className=''>Sign Up with Google</p>
            </button>

        </div>

        <div className='relative w-11/12 max-w-[450px] '>
            <img src={frameImage}
                alt="Pattern"
                width={558}
                height={504}
                loading="lazy"/>

            <img src={image}
                alt="Students"
                width={558}
                height={490}
                loading="lazy" className='absolute -top-4 right-4'/>    
        </div>

    </div>
  )
}

export default Template

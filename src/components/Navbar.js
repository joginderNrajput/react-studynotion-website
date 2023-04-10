import React from 'react'
import logo from "../assets/Logo.svg"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"


const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1080px] py-4 mx-auto  '>

        <Link to="/"> 
            <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
        </Link>

        <nav>
            <ul className='flex gap-x-6 text-white'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex items-center gap-x-4'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-richblack-700 text-richblack-100 px-[12px] py-[8px] border-white border-[1px] rounded-md hover:bg-blue-900 hover:border-green-700 hover:border-[1px] focus:bg-blue-800 focus:border-green-700 focus:border-[2px]'>
                        Login
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button className='bg-richblack-700 text-richblack-100 px-[12px] py-[8px] border-white border-[1px] rounded-md hover:bg-blue-900 hover:border-green-700 hover:border-[1px] focus:bg-blue-800 focus:border-green-700 focus:border-[2px]'>
                        Sign Up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button className='bg-richblack-700 text-richblack-100 px-[12px] py-[8px] border-white border-[1px] rounded-md hover:bg-blue-900 hover:border-green-700 hover:border-[1px] focus:bg-blue-800 focus:border-green-700 focus:border-[2px]' onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button className='bg-richblack-700 text-richblack-100 px-[12px] py-[8px] border-white border-[1px] rounded-md hover:bg-blue-900 hover:border-green-700 hover:border-[1px] focus:bg-blue-800 focus:border-green-700 focus:border-[2px]'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
      
    </div>
  )
}

export default Navbar

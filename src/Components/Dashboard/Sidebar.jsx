import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import useRole from '../../Hooks/useRole'
import { MdLogout } from "react-icons/md";
import { AuthContext } from '../../Auth/ContextProvider';
import toast from 'react-hot-toast';

function Sidebar() {
    const [role] = useRole()
    const { user, LogOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handelLogout = () => {
        LogOut()
        navigate('/')
        toast.success("LogOut successfully")
    }
    return (
        <div className='z-10 md:fixed flex flex-col overflow-x-hidden bg-[#f2f2f2] w-64  px-2 py-4 absolute inset-y-0 left-0 transform'>

            <div className='flex justify-center '>
                <div className='block cursor-pointer p-4 font-bold border-2 rounded-xl'>
                    <Link to='/'>
                        <img
                            className=''
                            src='https://i.ibb.co/0JfPLPG/main.png'
                            alt='logo'
                            width='100'
                            height='100'
                        />
                    </Link>
                </div>
            </div>


            <div className='mt-14'>
                <div className='px-3 flex flex-col'>
                    {
                        role === 'admin' ?

                            <>
                                <NavLink to="/dashboard/adminDashboard" className={({ isActive }) => `border-2 px-5 py-2 mb-4 font-semibold text-lg rounded-xl ${isActive ? 'bg-[#C4BA8F]' : ''}`}>
                                    Admin Dashboard
                                </NavLink>
                                <NavLink to="/dashboard/manageUsers" className={({ isActive }) => `border-2 px-5 py-2 mb-4 font-semibold text-lg rounded-xl ${isActive ? 'bg-[#C4BA8F]' : ''}`}>
                                    Manage Users
                                </NavLink>
                                <NavLink to="/dashboard/approvedPremium" className={({ isActive }) => `border-2 px-5 py-2 mb-4 font-semibold text-lg rounded-xl ${isActive ? 'bg-[#C4BA8F]' : ''}`}>
                                    Approved Premium
                                </NavLink>
                                <NavLink to="/dashboard/approvedContactRequest" className={({ isActive }) => `border-2 px-5 py-2 mb-4 font-semibold text-lg rounded-xl ${isActive ? 'bg-[#C4BA8F]' : ''}`}>
                                    Approved Contact Request
                                </NavLink>
                                <NavLink to="/dashboard/successStory" className={({ isActive }) => `border-2 px-5 py-2 mb-4 font-semibold text-lg rounded-xl ${isActive ? 'bg-[#C4BA8F]' : ''}`}>
                                    Success Story
                                </NavLink>
                            </>
                            :
                            <>
                                <NavLink to="/dashboard/biodata" className={({ isActive }) => `border-2 px-5 py-2 mb-4 font-semibold text-lg rounded-xl ${isActive ? 'bg-[#C4BA8F]' : ''}`}>
                                    Biodata
                                </NavLink>
                                <NavLink to="/dashboard/viewBiodata" className={({ isActive }) => `border-2 px-5 py-2 mb-4 font-semibold text-lg rounded-xl ${isActive ? 'bg-[#C4BA8F]' : ''}`}>
                                    View Biodata
                                </NavLink>
                                <NavLink to="/dashboard/myContactRequest" className={({ isActive }) => `border-2 px-5 py-2 mb-4 font-semibold text-lg rounded-xl ${isActive ? 'bg-[#C4BA8F]' : ''}`}>
                                    My Contact Request
                                </NavLink>
                                <NavLink to="/dashboard/favouritesBiodata" className={({ isActive }) => `border-2 px-5 py-2 mb-4 font-semibold text-lg rounded-xl ${isActive ? 'bg-[#C4BA8F]' : ''}`}>
                                    Favourites Biodata
                                </NavLink>
                                <NavLink to="/dashboard/married" className={({ isActive }) => `border-2 px-5 py-2 mb-4 font-semibold text-lg rounded-xl ${isActive ? 'bg-[#C4BA8F]' : ''}`}>
                                    Married
                                </NavLink>
                            </>

                    }
                </div>

            </div>

            <button onClick={handelLogout} className='py-3 bg-[#302F2A] mt-5 text-white flex items-center justify-center font-semibold rounded-lg'>LogOut <span className='pl-3'><MdLogout /></span></button>
        </div>
    )
}

export default Sidebar
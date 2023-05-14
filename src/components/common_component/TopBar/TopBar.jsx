import React from 'react';
import "./TopBar.scss";
import LinkedInlogo from '../../../assets/linkedinLogo.png';
import UserLogo from '../../../assets/user.png';
import {
    AiOutlineSearch,
    AiOutlineUserSwitch
} from 'react-icons/ai';
import { BiHome,BiMessageDots } from 'react-icons/bi';
import { FiBriefcase } from 'react-icons/fi';
import { HiOutlineBell } from 'react-icons/hi';

const TopBar = () => {
    return (
        <div className='topbar-main'>
            <img src={LinkedInlogo} alt="Linkedin logo" className='linkedin-logo' />

            <div className='react-icons'>
                <AiOutlineSearch
                    size={30}
                    className='react-icon'
                    onClick={() => { }}
                />
                <BiHome
                    size={30}
                    className='react-icon'
                    onClick={() => { }}
                />
                <AiOutlineUserSwitch
                    size={30}
                    className='react-icon'
                    onClick={() => { }}
                />
                <FiBriefcase size={30} className='react-icon' />
                <BiMessageDots size={30} className='react-icon' />
                <HiOutlineBell size={30} className='react-icon' />

            </div>
            <img src={UserLogo} alt="user-logo" className='user-logo' />
        </div>
    )
}

export default TopBar
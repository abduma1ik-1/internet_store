import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

export const Header = () => {
    const navigate = useNavigate()
    const {trash} = useSelector((state) => state)
    const Logout = () => {
        localStorage.removeItem('token')
        window.location.replace('/auth')
    }

    return (
        <div className='header'>
            <div className='header_inner'>
                <div className='logo'>Logo</div>
                <div className='nav'>
                    <div className='nav_bar'>Main</div>
                    <div className='nav_bar'>Profile</div>
                    <div className='nav_bar'>Example</div>
                </div>
                <div style={{display: 'flex', gap: '10px'}} className='header_btn'>
                    <button onClick={() => navigate(-1)}>Back</button>
                    <Link style={{textDecoration: 'none'}} to='/trash'><button style={{display: 'flex', gap: '10px', alignItems: 'center'}}>Trash <div style={{fontSize: '20px'}}>{trash?.results?.length}</div></button></Link>
                    <button onClick={Logout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

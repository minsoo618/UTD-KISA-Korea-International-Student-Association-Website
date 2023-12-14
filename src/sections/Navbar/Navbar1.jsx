import React from 'react';
import { NavLink, NavBtn, NavBtnLink} from './NavBarElements';

const Navbar = (props) => {
    console.log('navbar');
    console.log(props.userObj);
    console.log(props.isLoggedIn);
    return (
        <>
            <NavLink to="/Main" className="logoMenu1">
            </NavLink>
             <div className="navbar">
             
                <NavLink to="/Main" className="logoMenu">
                    <img src={require('../../images/logo.png')}
                     className="logo"/>
                </NavLink>
                

                <div className='Menu'>
                <div className='dropdown'>
                    <div className="dropbtn">
                        About Us 
                        <div className="dropdown-menu">
                            <NavLink to="/AboutUs">About KISA</NavLink>
                            <NavLink to="/Faculties">Faculties</NavLink>
                        </div>
                    </div>
                </div>
                |

                <div className='dropdown'>
                    <div className="dropbtn">
                        Event
                        <div className="dropdown-menu">
                            <NavLink to="/WriteMainPast">Past Event</NavLink>
                            <NavLink to="/WriteMainUpcome">Upcoming Event</NavLink>
                        </div>
                    </div>
                </div>
                |
                <div className='dropdown'>
                    <div className="dropbtn">
                        Source
                        <div className="dropdown-menu">
                            <NavLink to="/WriteMain">Gallery</NavLink>
                            <NavLink to="/Other">Other</NavLink>
                        </div>
                    </div>
                </div>
                |
                <NavLink to="/Contact" className="Link">
                    Contact 
                </NavLink>
                </div>

                <NavBtn className="Btn">
                    {props.isLoggedIn ? (
                        <NavBtnLink to='/profile' className="bLink">{props.userObj.displayName}</NavBtnLink> // 이 부분 bLink 바꿔야함 (이름이 들어갈 수 있을정도의 크기) 
                        ) : (
                        <NavBtnLink to='/signIn' className="bLink">Sign In</NavBtnLink>)} 
                </NavBtn> 
            </div>
            
        </>
    )
}

export default Navbar;
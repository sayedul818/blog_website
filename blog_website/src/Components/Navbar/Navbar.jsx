import { Link, NavLink } from 'react-router-dom';
import { FaFacebook,FaInstagram,FaTwitter,FaBars, FaXmark } from "react-icons/fa6";
import { useState } from 'react';
const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen]=useState(false);
    const [active,setActive]=useState(0);
    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems=[
        {id:1,path:"/",link:"Home"},
        {id:2,path:"/about",link:"About Us"},
        {id:3,path:"/blog",link:"Blogs"},
        {id:4,path:"/contact",link:"Contact"},
        {id:5,path:"/service",link:"Services"},

    ]
    return (
        <header className='bg-black text-white fixed top-0 right-0 left-0 '>
            <nav className='px-4 py-4 max-w-7xl mx-auto flex items-center justify-between'>
                <Link to={"/"} className='text-xl font-bold text-white'>Design<span className='text-orange-500'>DK</span></Link>
                <ul className='md:flex gap-12 text-lg hidden'>
                    {
                        navItems.map(({path,link,id})=><li className='text-white' key={id}>
                            <NavLink onClick={()=>setActive(id)} className={` ${active==id?' text-orange-500 underline underline-offset-4 transition-all ease-out duration-100':'text-white'}`} to={path}>{link}</NavLink>
                        </li>)
                    }
                </ul>
                <div className='text-white  lg:flex gap-6 items-center hidden'>
                    <a className='hover:text-orange-500' href="/"><FaFacebook></FaFacebook></a>
                    <a className='hover:text-orange-500' href="/"><FaInstagram></FaInstagram></a>
                    <a className='hover:text-orange-500' href="/"><FaTwitter></FaTwitter></a>
                    <button className='bg-orange-500 px-6 py-2 font-medium rounded-lg hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Log in</button>
                    {/* The button to open modal */}
                    {/* <label htmlFor="my_modal_6" className="btn">open modal</label> */}
                    
                    {/* Put this part before </body> tag */}
                    {/* <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                    <div className="modal" role="dialog">
                      <div className="modal-box">
                        <h3 className="text-lg font-bold">Hello!</h3>
                        <p className="py-4">This modal works with a hidden checkbox!</p>
                        <div className="modal-action">
                          <label htmlFor="my_modal_6" className="btn">Close!</label>
                        </div>
                      </div>
                    </div> */}
                </div>
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='cursor-pointer'>
                        {
                            isMenuOpen?<FaXmark className='w-5 h-5'></FaXmark>:<FaBars className='w-5 h-5'></FaBars>
                        }                       
                    </button>
                </div>
            </nav>
            <div>
                <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-16 bg-white ${isMenuOpen? "fixed  top-0 left-0 w-full transition-all ease-out duration-200":"hidden"}`}>
                    {
                        navItems.map(({path,link,id})=><li className='text-black' key={id}>
                            <NavLink  onClick={()=>setActive(id)} className={` ${active==id?' text-orange-500 underline underline-offset-4 transition-all ease-out duration-100':'text-black'}`} to={path}>{link}</NavLink>
                        </li>)
                    }
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
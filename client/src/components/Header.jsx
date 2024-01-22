import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-color-reversed.png';
import Button from './Button';
import { HiOutlineBars3 as HamburgerIcon} from "react-icons/hi2";
import { IoCloseOutline as ExitIcon} from "react-icons/io5";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const linkStyles = 'hover:text-gray-300 border-b-4 border-ocean hover:border-lime transition-all ease-in-out duration-300';
    const menuLinkStyles = ' hover:text-lime transition-all ease-in-out duration-300';
    return (
        <header>
            {/* Default Menu */}
            <div className="bg-ocean font-halogen font-medium text-white lg:flex justify-center px-4">
                <nav className="lg:grid lg:grid-cols-4 h-24 flex justify-between items-center max-w-screen-2xl">
                    <Link to={'/'} className="lg:col-span-1 flex justify-start lg:justify-center">
                        <img src={logo} alt="Logo" className='h-12' />
                    </Link>
                    <ul className="hidden lg:flex justify-center col-span-2 space-x-6">
                        <Link to={'about'} className={linkStyles}>About</Link>
                        <Link to={'courses'} className={linkStyles}>Courses</Link>
                        <Link to={'coaching'} className={linkStyles}>Coaching</Link>
                        <Link to={'resources'} className={linkStyles}>Resources</Link>
                    </ul>
                    <div className="hidden space-x-4 lg:flex justify-center">
                        <Button text="Log In" onClick={'courses'} colors="border-2 border-solid border-jet bg-white text-jet hover:bg-sun-400" />
                        <Button text="Get Started" onClick={'courses'} colors="border-2 border-jet bg-lime text-jet hover:bg-sun-400" />
                    </div>
                    {/* Hamburger Icon */}
                    <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <HamburgerIcon className="hover:text-moss h-8 lg:hidden" />
                    </button>
                </nav>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <>
                    <div className={`absolute top-0 left-0 h-full w-full font-halogen space-y-2 text-2xl font-bold bg-jet text-white flex flex-col items-start py-12 px-8 justify-start`}>
                        <div className='w-full flex justify-end'>
                            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <ExitIcon className="h-16" />
                            </button>
                        </div>
                        <Link to={'about'} className={menuLinkStyles} onClick={() => setIsMenuOpen(false)}>About</Link>
                        <Link to={'courses'} className={menuLinkStyles} onClick={() => setIsMenuOpen(false)}>Courses</Link>
                        <Link to={'coaching'} className={menuLinkStyles} onClick={() => setIsMenuOpen(false)}>Coaching</Link>
                        <Link to={'resources'} className={menuLinkStyles} onClick={() => setIsMenuOpen(false)}>Resources</Link>
                    </div>
                </>
            )}
        </header>
    );
};

export default Header;
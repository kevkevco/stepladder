import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-color-reversed.png';
import Button from './Button';
import { HiOutlineBars3 as HamburgerIcon } from 'react-icons/hi2';
import { IoCloseOutline as ExitIcon } from 'react-icons/io5';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const linkStyles =
    'hover:text-gray-300 border-b-4 border-ocean hover:border-lime transition-all ease-in-out duration-300';
  const menuLinkStyles =
    ' hover:text-lime transition-all ease-in-out duration-300';
  return (
    <header>
      {/* Default Menu */}
      <div className="justify-center bg-ocean px-4 font-halogen tracking-wide text-white lg:flex">
        <nav className="flex h-24 max-w-screen-2xl items-center justify-between lg:grid lg:grid-cols-4">
          <Link
            to={'/'}
            className="flex justify-start lg:col-span-1 lg:justify-center"
          >
            <img src={logo} alt="Logo" className="h-12" />
          </Link>
          <ul className="col-span-2 hidden justify-center space-x-6 pt-2 lg:flex">
            <Link to={'about'} className={linkStyles}>
              About
            </Link>
            <Link to={'courses'} className={linkStyles}>
              Courses
            </Link>
            <Link to={'coaching'} className={linkStyles}>
              Coaching
            </Link>
            <Link to={'resources'} className={linkStyles}>
              Resources
            </Link>
          </ul>
          <div className="hidden justify-center space-x-4 lg:flex">
            <Button
              text="Log In"
              onClick={'courses'}
              colors="border-0 border-jet bg-white text-jet hover:bg-sun-400"
            />
            <Button
              text="Get Started"
              onClick={'courses'}
              colors="border-0 border-jet bg-lime text-jet hover:bg-sun-400"
            />
          </div>
          {/* Hamburger Icon */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <HamburgerIcon className="h-auto w-12 hover:text-moss lg:hidden" />
          </button>
        </nav>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div
            className={`fixed inset-0 z-50 flex w-full flex-col items-start justify-start space-y-2 bg-jet px-8 py-12 font-halogen text-2xl font-bold text-white`}
          >
            <div className="flex w-full justify-end">
              <button
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <ExitIcon className="h-auto w-20" />
              </button>
            </div>
            <Link
              to={'about'}
              className={menuLinkStyles}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to={'courses'}
              className={menuLinkStyles}
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              to={'coaching'}
              className={menuLinkStyles}
              onClick={() => setIsMenuOpen(false)}
            >
              Coaching
            </Link>
            <Link
              to={'resources'}
              className={menuLinkStyles}
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;

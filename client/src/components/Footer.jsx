import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-color-reversed.png';
import Highlight from './Highlight.jsx';
import { LuClipboardCopy as ClipboardDocumentIcon} from "react-icons/lu";


const linkStyles = "font-halogen decoration-moss-700 hover:underline transition-all ease-in-out duration-300";

function Footer() {
    return (
        <footer>
            <div className='bg-jet px-12 py-8 space-y-6 text-white'>
                <div className="flex flex-wrap justify-start gap-x-40 gap-y-4">
                    <div>
                        <img src={logo} alt="Stepladder Logo" className='h-12' />
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <EmailCopyLink />

                    </div>
                    <ul className="flex flex-col content-start justify-start space-y-2">
                        <Highlight><Link to={'about'} className={linkStyles}>About</Link></Highlight>
                        <Highlight><Link to={'courses'} className={linkStyles}>Courses</Link></Highlight>
                        <Highlight><Link to={'coaching'} className={linkStyles}>Coaching</Link></Highlight>
                        <Highlight><Link to={'resources'} className={linkStyles}>Resources</Link> </Highlight>
                    </ul>
                </div>
                <hr className="py-4 border-moss"></hr>
                <span className="text-sm text-jet-100">
                    Stepladder<br />
                    c/o  Joel Goldberg<br />
                    50 W. Montgomery Ave., Ste. 330<br />
                    Rockville, MD 20850
                </span>
                <div className="flex text-sm items-center justify-between text-jet-200">
                    <span>Copyright © 2024 Stepladder. All rights reserved.</span>
                    {/* <span className="bold">{String.fromCharCode(124)}</span> */}
                    <div className="font-halogen">Website by <Link to="https://github.com/kevkevco" className="hover:text-moss hover:font-bold transition-all ease-in-out duration-00">@kevkevco</Link></div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

const EmailCopyLink = () => {
    const [isCopied, setIsCopied] = useState(false);

    const email = "info@stepladder.org";

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1500); // Hide notification after 1.5 seconds
        } catch (err) {
            console.error('Failed to copy email: ', err);
        }
    };

    return (
        <div className="space-y-2 flex flex-col items-start">
            <button onClick={handleCopyEmail} className={`group font-halogen hover:font-bold transition-all ease-in-out duration-300 hover:text-bold hover:text-moss`}>
            <ClipboardDocumentIcon className='hidden text-moss group-hover:block h-4 mb-[-16px] ml-[-21.5px]' /> info@stepladder.org 
            </button>
            {isCopied && <span className="font-halogen float-left bg-moss-200 opacity-80 font-bold text-sm rounded-lg px-4 py-2 text-jet-600">
                Copied to clipboard.
            </span>}
        </div>
    );
};

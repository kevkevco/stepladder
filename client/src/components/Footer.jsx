import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-color-reversed.png';
import Highlight from './Highlight.jsx';
import { LuClipboardCopy as ClipboardDocumentIcon} from "react-icons/lu";

const linkStyles = "font-halogen hover:text-moss hover:font-bold transition-all ease-in-out duration-100";

function Footer() {
    return (
        <footer>
            <div className='bg-jet px-12 py-8 space-y-6 text-white'>
                <div className="flex flex-wrap justify-start gap-x-40">
                    <div>
                        <img src={logo} alt="Stepladder Logo" className='h-12' />
                    </div>
                    <div className='font-poppins flex flex-col space-y-1'>
                        <EmailCopyLink />
                        
                    </div>
                    <ul className="flex underline underline-offset-4 decoration-1 flex-col content-start justify-start space-y-2">
                        <Link to={'about'} className={linkStyles}>About</Link>
                        <Link to={'courses'} className={linkStyles}>Courses</Link>
                        <Link to={'coaching'} className={linkStyles}>Coaching</Link>
                        <Link to={'resources'} className={linkStyles}>Resources</Link>
                    </ul>
                </div>
                <hr className="py-4 border-moss"></hr>
                <span className="text-sm text-jet-100">
                            Stepladder<br />
                            c/o  Joel Goldberg<br />
                            50 W. Montgomery Ave., Ste. 330<br />
                            Rockville, MD 20850
                        </span>
                <div class="flex text-sm items-center justify-between text-jet-200">
                    <span>Copyright © 2024 Stepladder. All rights reserved.</span>
                    {/* <span className="bold">{String.fromCharCode(124)}</span> */}
                    <div>Website by <Link to="https://github.com/kevkevco" className="hover:text-moss hover:font-bold transition-all ease-in-out duration-100">@kevkevco</Link></div>
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
            setTimeout(() => setIsCopied(false), 3000); // Hide notification after 2 seconds
        } catch (err) {
            console.error('Failed to copy email: ', err);
        }
    };

    return (
        <div className="space-y-2 flex flex-col items-start">
            <button onClick={handleCopyEmail} className={linkStyles}>
                info@stepladder.org
            </button>
            {isCopied && <span className="font-halogen float-left bg-moss-200 opacity-80 font-bold text-sm rounded-lg px-4 py-2 text-jet-600">
                Copied to clipboard.
            </span>}
        </div>
    );
};

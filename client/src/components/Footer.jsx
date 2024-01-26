import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-color-reversed.png';
import Highlight from './Highlight.jsx';
import { LuClipboardCopy as ClipboardDocumentIcon } from 'react-icons/lu';

const linkStyles =
  'font-halogen decoration-moss-700 hover:underline transition-all ease-in-out duration-300';

function Footer() {
  return (
    <footer>
      <div className="space-y-6 bg-jet px-12 py-8 text-white">
        <div className="flex flex-wrap justify-start gap-x-40 gap-y-4">
          <div>
            <img src={logo} alt="Stepladder Logo" className="h-12" />
          </div>
          <div className="flex flex-col space-y-1">
            <EmailCopyLink />
          </div>
          <ul className="flex flex-col content-start justify-start space-y-2">
            <Highlight>
              <Link to={'about'} className={linkStyles}>
                About
              </Link>
            </Highlight>
            <Highlight>
              <Link to={'courses'} className={linkStyles}>
                Courses
              </Link>
            </Highlight>
            <Highlight>
              <Link to={'coaching'} className={linkStyles}>
                Coaching
              </Link>
            </Highlight>
            <Highlight>
              <Link to={'resources'} className={linkStyles}>
                Resources
              </Link>{' '}
            </Highlight>
          </ul>
        </div>
        <hr className="border-moss py-4"></hr>
        <span className="text-sm text-jet-100">
          Stepladder
          <br />
          c/o Joel Goldberg
          <br />
          50 W. Montgomery Ave., Ste. 330
          <br />
          Rockville, MD 20850
        </span>
        <div className="flex items-center justify-between text-sm text-jet-200">
          <span>Copyright © 2024 Stepladder. All rights reserved.</span>
          {/* <span className="bold">{String.fromCharCode(124)}</span> */}
          <div className="font-halogen">
            Website by{' '}
            <Link
              to="https://github.com/kevkevco"
              className="duration-00 transition-all ease-in-out hover:font-bold hover:text-moss"
            >
              @kevkevco
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

const EmailCopyLink = () => {
  const [isCopied, setIsCopied] = useState(false);

  const email = 'info@stepladder.org';

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
    <div className="flex flex-col items-start space-y-2">
      <button
        onClick={handleCopyEmail}
        className={`hover:text-bold group font-halogen transition-all duration-300 ease-in-out hover:font-bold hover:text-moss`}
      >
        <ClipboardDocumentIcon className="mb-[-16px] ml-[-21.5px] hidden h-4 text-moss group-hover:block" />{' '}
        info@stepladder.org
      </button>
      {isCopied && (
        <span className="float-left rounded-lg bg-moss-200 px-4 py-2 font-halogen text-sm font-bold text-jet-600 opacity-80">
          Copied to clipboard.
        </span>
      )}
    </div>
  );
};

import React, { useEffect } from 'react';
import { useRouteError } from 'react-router-dom';
import Button from './Button';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  useEffect(() => {
    alert(
      "Stepladder's website is currently under construction. We apologize for any inconvenience. Please email us at info@stepladder.org or check back later."
    );
  }, []);

  return (
    <div className="h-[100%] flex-grow bg-lime-100 p-8">
      <h1 className="mb-8 min-w-[400px] font-halogen text-3xl font-bold xl:text-5xl">
        Oops!
        <br />
        <span
          style={{ textDecorationSkipInk: 'none' }}
          className="font-poppins italic underline decoration-sun-400 decoration-[1rem] underline-offset-[-0.7rem]"
        >
          Sorry, an unexpected error occurred.
        </span>
      </h1>
      <p className="text-s font-open">
        <b>Error: </b>
        <i>{error.statusText || error.message}</i>
      </p>
      <div className="mt-6">
        <Button
          text="Back to the homepage"
          onClick={'/'}
          colors="hover:shadow-lg font-halogen bg-sky hover:bg-sun"
        />
      </div>
    </div>
  );
}

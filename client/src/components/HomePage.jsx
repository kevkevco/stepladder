import React from 'react';
import heroImage from '../assets/pexels-michael-burrows-7129712.jpg';
import Button from './Button';
import Highlight from './Highlight';
import stepsSky from '../assets/steps-sky.svg';
import verticalLineSun from '../assets/vertical-line-sun.svg';
import verticalLineOcean from '../assets/vertical-line-ocean.svg';
// import iconBookSky from '../assets/icon-book-sky.svg';
// import iconFamilySun from '../assets/icon-family-sun.svg';
// import iconCashSky from '../assets/icon-cash-sky.svg';
// import iconCertificateOcean from '../assets/icon-certificate-ocean.svg';
import financialStepsIsometric from '../assets/financial-steps-isometric.png';
import { FaCheck as CheckIcon } from 'react-icons/fa';
import { MdCheckBoxOutlineBlank as CheckBox } from 'react-icons/md';
import financialGoalsImage from '../assets/unsplash-u3hmzw5U-SI.jpg';

function HomePage() {
  return (
    <div className={'flex min-h-[calc(100vh-400px)] flex-col'}>
      <HeroSection />
      <Statistics />
      <Headline />
      <FinancialGoals />
      {/*<ClassesSection />
            <FinancialCoachingSection />
            <SignupForm /> */}
    </div>
  );
}

export default HomePage;

function HeroSection() {
  return (
    <section className="flex w-full justify-center px-8  py-36">
      <div className="grid max-w-screen-2xl content-center md:grid-cols-2">
        <div className="z-10 order-last mx-4 flex flex-col justify-center px-4 md:order-first lg:mt-40 lg:px-12">
          <h1 className="mb-8 min-w-[400px] font-halogen text-3xl xl:text-5xl">
            Financial Stability
            <br />
            <div></div>
            is{' '}
            <span
              style={{ textDecorationSkipInk: 'none' }}
              className="font-black italic tracking-wider underline decoration-sun-400 decoration-[1rem] underline-offset-[-0.7rem]"
            >
              Within Reach
            </span>
          </h1>
          <p className="text-s font-open">
            Managing your finances shouldn't be a burden. Our mission is to{' '}
            empower you with essential financial knowledge and tools to guide
            you towards a future of financial independence and security. That's
            why our volunteer financial professionals offer high-quality
            financial services and guidance in a welcoming, professional
            environment at <b>no cost.</b>
          </p>
          <div className="mt-6">
            <Button
              text="Take the first step"
              onClick={'/coaching'}
              colors="hover:shadow-lg font-halogen bg-sky hover:bg-sun"
            />
          </div>
        </div>
        <div className="relative overflow-visible md:col-span-1">
          <div className="bg-ocean">
            <img
              className="z-[-1] -translate-x-8 -translate-y-8 object-fill "
              src={heroImage}
              alt=""
            />
          </div>
          <div className="absolute bottom-[-4rem] right-[10px] z-50 hidden h-[350px] w-[80px] overflow-hidden md:block">
            <img
              src={verticalLineSun}
              alt=""
              className="h-[500px] object-cover"
            />
          </div>
          {/* <div className='z-1 hidden md:block absolute right-[5px] mt-[80px] w-[65px]'>
                        <img src={iconCertificateOcean} alt="" className="object-fit" />
                    </div> */}
          {/* <div className='z-1 hidden md:block absolute right-[5vw] w-[70px]'>
                        <img src={iconCashSky} alt="" className="object-fit" />
                    </div> */}
        </div>
      </div>
    </section>
  );
}

function Statistics() {
  return (
    <section className="flex w-full flex-wrap items-center justify-center space-x-4 bg-moss-400 p-16 text-center font-halogen text-jet-900 md:space-x-[10vw]">
      <div className="p-4">
        <h2 className="text-2xl font-bold">1000+</h2>
        <p className="text-md">People Served</p>
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold">19 Years</h2>
        <p className="text-md">Experience</p>
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold">200+</h2>
        <p className="text-md">Classes Led</p>
      </div>
    </section>
  );
}

function Headline() {
  return (
    <div className="flex   items-center justify-center  bg-moss-200 py-24 text-jet">
      <div className="z-1 absolute left-[20px] mr-12 hidden h-[360px] w-[120px] overflow-hidden md:block">
        <img src={stepsSky} alt="" className="h-[600px] object-cover" />
      </div>
      <blockquote className="z-10 text-center">
        <span className="font-halogen text-2xl font-thin italic tracking-tight md:text-4xl">
          Small financial changes
        </span>
        <br />
        <span className="font-poppins text-3xl font-black md:text-5xl">
          Can make a{' '}
          <Highlight styles="decoration-moss-400 underline">
            <span className="italic">big</span>
          </Highlight>{' '}
          difference.
        </span>
      </blockquote>
      {/* <div className='z-1 hidden md:block absolute pt-[150px] right-[32px] w-[75px]'>
                <img src={iconFamilySun} alt="" className="object-fit" />
            </div>
            <div className='z-1 hidden md:block absolute left-[100px] w-[50px] mt-[400px]'>
                <img src={iconBookSky} alt="" className="object-fit" />
            </div> */}
    </div>
  );
}

function FinancialGoals() {
  return (
    <section className="flex w-full items-center justify-center overflow-hidden py-20">
      <div className="flex max-w-[2000px] flex-wrap items-start justify-center space-x-24 px-8 py-4">
        <div className="relative">
          <div className="absolute -left-[40px] top-[50px] z-50 h-[50px] w-[500px] origin-left rotate-90 overflow-hidden md:block">
            <img
              src={verticalLineOcean}
              alt=""
              className="h-[550px] object-cover grayscale"
            />
          </div>
          <div className=" bg-earth">
            <img
              className="z-[-1] h-[500px] w-[600px] -translate-x-8 -translate-y-8 overflow-hidden object-cover object-right"
              src={financialGoalsImage}
              alt=""
            />
          </div>
        </div>
        <div className="">
          <h1 className="min-w-[500px] pb-12 pt-24 font-halogen text-4xl italic tracking-tight text-jet">
            Reach your goals.
            <br />
            <div className="font-poppins text-5xl font-bold not-italic text-jet">
              Realize Financial Freedom.
            </div>
          </h1>
          <ul className="text-md mt-4 translate-x-12 space-y-4 font-poppins text-2xl font-bold text-earth-600">
            <li className="relative">
              <CheckIcon className="absolute bottom-2 left-[-3rem] z-50 h-8 w-auto text-jet" />
              <CheckBox className="z-1 absolute left-[-3rem] h-7 w-auto text-moss" />
              Raise your credit score.
            </li>
            <li className="relative">
              <CheckIcon className="absolute bottom-2 left-[-3rem] z-50 h-8 w-auto text-jet" />
              <CheckBox className="z-1 absolute left-[-3rem] h-7 w-auto text-moss" />
              Reduce or eliminate credit card debt.
            </li>
            <li className="relative">
              <CheckIcon className="absolute bottom-2 left-[-3rem] z-50 h-8 w-auto text-jet" />
              <CheckBox className="z-1 absolute left-[-3rem] h-7 w-auto text-moss" />
              Start saving money.
            </li>
            <li className="relative">
              <CheckIcon className="absolute bottom-2 left-[-3rem] z-50 h-8 w-auto text-jet" />
              <CheckBox className="z-1 absolute left-[-3rem] h-7 w-auto text-moss" />
              Begin a retirement plan.
            </li>
            <li className="relative">
              <CheckIcon className="absolute bottom-2 left-[-3rem] z-50 h-8 w-auto text-jet" />
              <CheckBox className="z-1 absolute left-[-3rem] h-7 w-auto text-moss" />
              Start college funds for children.
            </li>
            <li className="relative">
              <CheckIcon className="absolute bottom-2 left-[-3rem] z-50 h-8 w-auto text-jet" />
              <CheckBox className="z-1 absolute left-[-3rem] h-7 w-auto text-moss" />
              Buy a home.
            </li>
          </ul>
          <div className="text-s max-w-2xl text-wrap py-12 font-open">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            eius praesentium nemo eos quidem inventore! Natus ut libero eos
            provident vitae placeat ipsum. Earum nobis aspernatur dolorem
            perspiciatis doloremque vel. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aut inventore odio esse consequuntur nam debitis
            dolor magnam officiis repellat molestiae culpa vel, a doloremque
            distinctio harum dolores deserunt tempore alias.
          </div>
          <Button
            text="Get started"
            onClick={'/coaching'}
            colors="hover:shadow-lg text-white font-halogen bg-earth hover:bg-moss-600"
          />
        </div>
      </div>
    </section>
  );
}

// function ClassesSection() {
//     return (
//         <section className="p-6 bg-ocean">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">Comprehensive Financial Education...</h2>
//             <p className="mt-4 text-md md:text-lg text-gray-600">Small financial changes can make a big difference...</p>
//             <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Learn More</button>
//         </section>
//     );
// }

// function FinancialCoachingSection() {
//     return (
//         <section className="p-6 bg-white">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">Free financial expertise when you need it the most.</h2>
//             <p className="mt-4 text-md md:text-lg text-gray-600">Stepladder offers high-quality financial coaching...</p>
//             <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Sign Up for a Financial Coaching Session</button>
//         </section>
//     );
// }

// function SignupForm() {
//     return (
//         <section className="p-6 bg-gray-100">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">Get started - Sign Up or Join Our Community</h2>
//             <form className="mt-6 flex flex-col gap-4 items-center">
//                 <input type="text" name="fullName" placeholder="Full Name" className="p-2 border border-gray-300 rounded w-full md:w-1/2" />
//                 <input type="email" name="email" placeholder="Email Address" className="p-2 border border-gray-300 rounded w-full md:w-1/2" />
//                 {/* Additional form fields */}
//                 <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Step into Financial Growth</button>
//             </form>
//         </section>
//     );
// }

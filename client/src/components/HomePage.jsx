import React from 'react';
import heroImage from '../assets/home-hero.jpg';
import Button from './Button';
import Highlight from './Highlight';
import stepsSky from '../assets/steps-sky.svg';
import verticalLineSun from '../assets/vertical-line-sun.svg';
// import iconBookSky from '../assets/icon-book-sky.svg';
// import iconFamilySun from '../assets/icon-family-sun.svg';
// import iconCashSky from '../assets/icon-cash-sky.svg';
// import iconCertificateOcean from '../assets/icon-certificate-ocean.svg';
import financialStepsIsometric from '../assets/financial-steps-isometric.png';
import { FaCheck as CheckIcon } from "react-icons/fa";
import { MdCheckBoxOutlineBlank as CheckBox} from "react-icons/md";

function HomePage() {
    return (
        <div className={"flex flex-col min-h-[calc(100vh-400px)]"}>
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
        <section className="w-full flex justify-center py-10 bg-gradient-to-t from-sun-100 to-sky-100">
            <div className="content-center grid md:grid-cols-2 max-w-screen-2xl">
                <div className='z-10 order-last md:order-first flex flex-col justify-center px-4 lg:px-12 lg:mt-40'>
                    <h1 className="font-halogen min-w-[400px] xl:text-5xl text-3xl mb-8">
                        Financial Stability<br />
                        <div ></div>
                        is <span style={{ textDecorationSkipInk: 'none' }} className='italic tracking-wider font-black underline underline-offset-[-0.7rem] decoration-sun-400 decoration-[1rem]'>Within Reach</span></h1>
                    <p className="text-s font-open">
                        Managing your finances shouldn't be a burden. Our mission is to <b>empower you</b> with essential financial knowledge and tools to guide you towards a future of financial independence and security. That's why we offer high-quality financial services and guidance in a welcoming, professional environment at <b>no cost.</b>
                    </p>
                    <div className="mt-6">
                        <Button text="Take the first step" onClick={'/coaching'} colors="hover:shadow-lg font-halogen bg-sky hover:bg-sun" />
                        {/* <Button text="Take the first step" onClick={'/coaching'} colors=" font-halogen bg-sky hover:bg-gradient-to-t hover:from-sun hover:to-sky transition-all transition-300 text-white" /> */}
                    </div>
                </div>
                <div className='relative overflow-visible md:col-span-1'>
                    <div className='bg-gradient-to-t from-sun to-sky'>
                        <img className="z-[-1] opacity-70 object-fill " src={heroImage} alt="" />
                    </div>
                    <div className='z-50 hidden md:block absolute bottom-[-10rem] right-[10px] h-[250px] overflow-hidden w-[80px]'>
                        <img src={verticalLineSun} alt="" className="h-[500px] object-cover" />
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
        <section className="w-full flex font-halogen bg-ocean space-x-4 md:space-x-[10vw] text-white flex-wrap justify-center items-center text-center p-16">
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
        <div className="bg-moss-300 flex justify-center items-center py-24">
            <div className='z-1 hidden md:block absolute left-[20px] h-[360px] w-[120px] mr-12 overflow-hidden'>
                <img src={stepsSky} alt="" className="h-[400px] object-cover" />
            </div>
            <blockquote className="z-10 text-jet text-center">
                <span className="font-halogen font-thin tracking-tight text-2xl md:text-4xl italic">Small financial changes</span><br />
                <span className="font-poppins font-black text-3xl md:text-5xl">Can make a <Highlight styles="decoration-moss-400 underline"><span className='italic'>big</span></Highlight> difference.</span>
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
        <section className="w-full flex items-center justify-center py-20 bg-gradient-to-t from-sun-100 to-sky-100 overflow-hidden">
            <div className="flex flex-wrap justify-center items-start space-x-24 max-w-[2000px] px-8 py-4">
                <div className='bg-gradient-to-t from-sun to-sky h-[500px] w-[600px]'>
                    <div className='z-1 hidden md:block rotate-90 translate-y-[300px] absolute translate-x-[-260px] overflow-hidden h-[50px] w-[500px]'>
                        <img src={verticalLineSun} alt="" className="h-[500px]  object-cover" />
                    </div>
                    <img className="h-full object-cover opacity-90" src={financialStepsIsometric} alt="" />
                </div>
                <div className=''>
                    <h1 className="font-halogen text-jet tracking-tight min-w-[500px] pb-12 pt-24 italic text-3xl">
                        Reach your goals.<br />
                        <div className='font-poppins text-jet font-bold text-4xl not-italic'>
                            Realize Financial Freedom.
                        </div>
                    </h1>
                    <ul className="mt-4 space-y-4 font-poppins font-bold text-md text-earth-600 text-2xl translate-x-12">
                        <li className='relative'><CheckIcon className='text-jet z-50 absolute h-8 w-auto bottom-2 left-[-3rem]' /><CheckBox className='h-7 left-[-3rem] w-auto text-moss z-1 absolute' />Raise your credit score.</li>
                        <li className='relative'><CheckIcon className='text-jet z-50 absolute h-8 w-auto bottom-2 left-[-3rem]' /><CheckBox className='h-7 left-[-3rem] w-auto text-moss z-1 absolute' />Reduce or eliminate credit card debt.</li>
                        <li className='relative'><CheckIcon className='text-jet z-50 absolute h-8 w-auto bottom-2 left-[-3rem]' /><CheckBox className='h-7 left-[-3rem] w-auto text-moss z-1 absolute' />Start saving money.</li>
                        <li className='relative'><CheckIcon className='text-jet z-50 absolute h-8 w-auto bottom-2 left-[-3rem]' /><CheckBox className='h-7 left-[-3rem] w-auto text-moss z-1 absolute' />Begin a retirement plan.</li>
                        <li className='relative'><CheckIcon className='text-jet z-50 absolute h-8 w-auto bottom-2 left-[-3rem]' /><CheckBox className='h-7 left-[-3rem] w-auto text-moss z-1 absolute' />Start college funds for children.</li>
                        <li className='relative'><CheckIcon className='text-jet z-50 absolute h-8 w-auto bottom-2 left-[-3rem]' /><CheckBox className='h-7 left-[-3rem] w-auto text-moss z-1 absolute' />Buy a home.</li>
                    </ul>
                    <div className="text-s font-open text-wrap max-w-2xl py-12">
                        Managing your finances shouldn't be a burden. Our mission is to <b>empower you</b> with essential 
                        financial knowledge and tools to guide you towards a future of financial independence and sec
                        rity. That's why we offer high-quality financial services and guidance in a welcoming, professi
                        onal environment at <b>no cost.</b>
                    </div>
                    <Button text="Get started" onClick={'/coaching'} colors="hover:shadow-lg text-white font-halogen bg-earth hover:bg-sun" />
                </div>
            </div>
        </section >
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

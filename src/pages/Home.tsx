import { Nav } from "@/components/user";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";



const Home = () => {
    const mainRef = useRef<HTMLParagraphElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);
    useEffect(() => {
        gsap.from(mainRef.current, {
            opacity: 0,
            scale: 1,
            duration: 0.5,
            y: 30,
            ease: "back.out"
        })
        gsap.to(mainRef.current, {
            opacity: 1,
            scale: 1,
            duration: 1,
            y: 0,
            ease: "back.out"
        });

        gsap.from(subRef.current, {
            opacity: 0,
            scale: 1,
            duration: 0.5,
            y: 30,
            ease: "back.out"
        })

        gsap.to(subRef.current, {
            opacity: 1,
            scale: 1,
            duration: 1,
            y: 0,
            ease: "back.out"
        })
    }, []);

    return (
        <div className="bg-primaryBlack h-screen w-screen flex flex-col justify-center items-center">
            <Nav />
            <div className="flex flex-col items-center justify-center  w-full">
                <p className="text-[48px] [text-shadow:_0_2px_6px_rgba(14_165_223_/_0.2)] leading-snug title  xl:text-7xl  font-extrabold  bg-gradient-to-b from-blue-100 to-blue-600 inline-block text-transparent bg-clip-text" ref={mainRef} >Hi, I am Prabej.</p>
                <p ref={subRef} className="font-light" style={{ letterSpacing: '0.3rem' }} >- FULLSTACK DEVELOPER -</p>
            </div>
        </div>
    );
};

export default Home;

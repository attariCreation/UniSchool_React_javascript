import { useRef, useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/button'; // Adjust path as needed
import { Link } from 'react-router-dom'; // or use <a href="#" /> if not using react-router
// import HeroImg from "../../assets/images/hero-compressed.webp"
import HeroImg from "../../assets/images/managment2.webp"

const useIntersectionObserver = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

const Hero = () => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver();

  return (
    <section
      className="relative bg-gradient-to-br from-background to-secondary/30 md:py-16 overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div
          className="text-center md:text-left transition-all duration-1000"
          style={{
            opacity: isSectionVisible ? 1 : 0,
            transform: isSectionVisible ? 'translateY(0)' : 'translateY(10px)',
          }}
        >
          <h1
            className="sm:mt-5 font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight transition-all duration-1000"
            style={{
              opacity: isSectionVisible ? 1 : 0,
              transform: isSectionVisible ? 'translateY(0)' : 'translateY(10px)',
              transitionDelay: '200ms',
            }}
          >
            Unified Management.
            <br />
            <span
              className="text-primary transition-all duration-1000"
              style={{
                opacity: isSectionVisible ? 1 : 0,
                transform: isSectionVisible ? 'translateY(0)' : 'translateY(10px)',
                transitionDelay: '400ms',
              }}
            >
              Boundless Learning.
            </span>
          </h1>
          <p
            className="mt-6 text-lg text-foreground/80 max-w-xl mx-auto md:mx-0 transition-all duration-1000"
            style={{
              opacity: isSectionVisible ? 1 : 0,
              transform: isSectionVisible ? 'translateY(0)' : 'translateY(10px)',
              transitionDelay: '600ms',
            }}
               >
            UniSchool empowers educational institutions with an all-in-one system for streamlined
            administration, effective teaching, and engaged learning communities.
          </p>
          <div
            className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4 transition-all duration-1000"
            style={{
              opacity: isSectionVisible ? 1 : 0,
              transform: isSectionVisible ? 'translateY(0)' : 'translateY(10px)',
              transitionDelay: '800ms',
            }}
          >
            <Button
              size="lg"
              className="bg-accent  text-white hover:bg-accent/90  transition-transform hover:scale-105 shadow-lg hover:shadow-xl rounded-full px-8 py-3 text-base font-semibold group"
            >
              <Link to="#">
                Create School
                <ChevronRight className="inline ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="transition-transform hover:scale-105 shadow-md hover:shadow-lg rounded-full px-8 py-3 text-base font-semibold"
            >
              <Link to="#features">Learn More</Link>
            </Button>
          </div>
        </div>
        <div
          className="
         
         relative mt-10 md:mt-0 transition-all duration-1000 rounded-xl  shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
          style={{
            opacity: isSectionVisible ? 1 : 0,
            transform: isSectionVisible ? 'scale(1)' : 'scale(0.9)',
            transitionDelay: '300ms',
          }}
        >
         
          <img
            src={HeroImg}
            alt="UniSchool Dashboard Preview"
            width="600"
            height="450"
            loading="lazy"
            className="rounded-xl object-cover w-full h-full max-h-[500px] mx-auto bg-transparent"
          />

          <div
            className="absolute bottom-10 right-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl -z-10 transition-all duration-1000"
            style={{
              opacity: isSectionVisible ? 0.5 : 0,
              transform: isSectionVisible ? 'scale(1)' : 'scale(0.9)',
            }}
          />
          <div
            className="absolute -top-10 -left-10 w-40 h-40  bg-accent/20 rounded-full blur-2xl -z-10 transition-all duration-1000"
            style={{
              opacity: isSectionVisible ? 0.5 : 0,
              transform: isSectionVisible ? 'scale(1)' : 'scale(0.9)',
              transitionDelay: '200ms',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

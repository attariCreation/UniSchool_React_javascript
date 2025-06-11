import { useIntersectionObserver } from '../../hooks/use-intersection-observer'; // Ensure this works in React

const schoolLogos = [
  { src: "https://placehold.co/150x80.png", alt: "School Logo 1", hint: "school logo" },
  { src: "https://placehold.co/150x80.png", alt: "School Logo 2", hint: "education partner" },
  { src: "https://placehold.co/150x80.png", alt: "School Logo 3", hint: "university emblem" },
  { src: "https://placehold.co/150x80.png", alt: "School Logo 4", hint: "academy icon" },
  { src: "https://placehold.co/150x80.png", alt: "School Logo 5", hint: "institute brand" },
  { src: "https://placehold.co/150x80.png", alt: "School Logo 6", hint: "learning center" },
];

const TrustSection = () => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver();

  return (
    <section id="trust" className="py-16 sm:py-24 bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground">
            Trusted by Leading Educational Institutions
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            UniSchool is proud to partner with diverse institutions dedicated to excellence in education.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {schoolLogos.map((logo, index) => (
            <div
              key={index}
              className="transition-all duration-1000 hover:scale-110"
              style={{
                opacity: isSectionVisible ? 1 : 0,
                transform: isSectionVisible ? 'scale(1)' : 'scale(0.9)',
                transitionDelay: `${(index + 1) * 100}ms`
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

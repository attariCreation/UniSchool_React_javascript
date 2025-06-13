import React from 'react';
import { Link } from 'react-router-dom';
const teamMembers = [
  {
    name: 'Syed Babar Ali - Team Leader',
    role: 'Frontend & Backend Support',
    desc: 'Assists both in frontend enhancements and backend integration to keep everything connected.',
    portfolio: "https://samplePortfolio"
  },
  {
    name: 'Abdul Hannan',
    role: 'Frontend Lead',
    desc: 'Leads the frontend with clean UI and smooth UX using React.js and TailwindCSS.',
     portfolio: "https://samplePortfolio"
  },
  {
    name: 'Ali',
    role: 'Social Media and marketing with frontend assistance',
    desc: 'Manages server logic, APIs, and ensures data security and scalability using Node.js and MongoDB.',
     portfolio: "https://samplePortfolio"
  },
  {
    name: 'Abu hurairah',
    role: 'Frontend and marketing',
    desc: 'Supports frontend development and handles deployment, optimization, marketing flow.',
     portfolio: "https://samplePortfolio"
  },
];

const TeamSection = () => {
  return (
    <section id="about-team" className="py-20 bg-secondary/30 text-foreground">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet the Team – Tech Dynamos</h2>
        <p className="text-lg text-foreground/70 mb-6 max-w-2xl mx-auto">
          We’re a passionate team of developers building efficient, scalable, and user-friendly school management solutions.
        </p>
        <a
          href="https://your-portfolio-site.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-10 text-primary font-medium underline hover:text-primary/80 transition"
        >
          Visit our Portfolio
        </a>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((dev, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10 shadow text-left hover:scale-[1.03] transition flex flex-col gap-5 align-center justify-between py-10"
            >
            <div>
            <h3 className="text-xl font-semibold mb-1">{dev.name}</h3>
              <p className="text-sm text-primary font-medium mb-2">{dev.role}</p>
            </div>
              <p className="text-sm text-foreground/70">{dev.desc}</p>
              <Link to={dev.portfolio} className="text-sm text-accent hover:underline">Portfolio </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

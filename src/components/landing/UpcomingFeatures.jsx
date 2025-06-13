import React from 'react';

const upcomingFeatures = [
  {
    title: "Complete Printable Templates",
    desc: "Print ID cards, fee slips, circulars, reports — all formatted and branded.",
    role: "Admin/Office",
    color: "bg-blue-100 text-blue-800",
  },
  {
    title: "Smart Timetable Generator",
    desc: "Auto-schedules classes based on subjects, teachers, and constraints.",
    role: "Admins & Teachers",
    color: "bg-purple-100 text-purple-800",
  },
  {
    title: "Chatbot Integration",
    desc: "Instantly search tasks or get help using a smart assistant inside UniSchool.",
    role: "All Users",
    color: "bg-green-100 text-green-800",
  },
  {
    title: "Advanced Attendance System",
    desc: "Switch from manual to smart attendance via QR, facial, or biometric methods.",
    role: "Teachers",
    color: "bg-accent/20 text-accent",
  },
  {
    title: "Multi-Campus Support",
    desc: "Manage and switch between different branches from one control panel.",
    role: "Admins",
    color: "bg-indigo-100 text-indigo-800",
  },
  {
    title: "Interactive Whiteboards",
    desc: "Teachers can teach and draw interactively on digital whiteboards.",
    role: "Teachers",
    color: "bg-accent/20 text-accent",
  },
  {
    title: "Presentation Software Integration",
    desc: "Use Prezi, Google Slides, or Canva directly inside your class dashboard.",
    role: "Teachers",
    color: "bg-yellow-100 text-yellow-800",
  },
];

const ComingFeatures = () => {
  return (
    <section id="features-roadmap" className="py-20 bg-background text-foreground">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">What's Coming to UniSchool</h2>
        <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto">
          We’re just getting started — exciting features are on the way to make UniSchool even more powerful and adaptable.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {upcomingFeatures.map((feature, i) => (
            <div
              key={i}
              className={`p-5 rounded-lg border border-white/10 shadow hover:scale-[1.02] transition backdrop-blur-sm ${feature.color}`}
            >
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm opacity-80">{feature.desc}</p>
              <p className="mt-3 text-xs font-medium uppercase opacity-70">{feature.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingFeatures;

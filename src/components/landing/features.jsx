import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ClipboardCheck, UsersRound, MessageSquareText, BarChartBig, LibraryBig, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/use-intersection-observer';

const featuresData = [
  {
    icon: <ClipboardCheck className="h-10 w-10 text-primary mb-4" />,
    title: 'Assignment & Attendance',
    description: 'Effortlessly manage assignments, track submissions, and monitor student attendance in real-time.',
  },
  {
    icon: <UsersRound className="h-10 w-10 text-primary mb-4" />,
    title: 'Role-Based Dashboards',
    description: 'Customized views for Principals, Admins, Teachers, Students, and Parents for relevant information at a glance.',
  },
  {
    icon: <MessageSquareText className="h-10 w-10 text-primary mb-4" />,
    title: 'Parent-Teacher Integration',
    description: 'Facilitate seamless communication and schedule meetings between parents and teachers effectively.',
  },
  {
    icon: <BarChartBig className="h-10 w-10 text-primary mb-4" />,
    title: 'Performance & Analytics',
    description: 'Gain valuable insights into student performance and institutional effectiveness with robust analytics.',
  },
  {
    icon: <LibraryBig className="h-10 w-10 text-primary mb-4" />,
    title: 'Custom LMS & Library',
    description: 'A flexible Learning Management System and digital library to support diverse educational needs.',
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-primary mb-4" />,
    title: 'Secure & Reliable',
    description: 'Built with industry-standard security protocols to ensure data privacy and system reliability.',
  },
];

const Features = () => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver();

  return (
    <section id="features" className="py-16 sm:py-24 bg-background" ref={sectionRef}>
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground">Everything You Need, All In One Place</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            UniSchool provides a comprehensive suite of tools designed to simplify school management and enhance the educational experience for everyone involved.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={feature.title}
              className="transition-all duration-1000"
              style={{
                opacity: isSectionVisible ? 1 : 0,
                transform: isSectionVisible ? 'translateY(0)' : 'translateY(10px)',
                transitionDelay: `${(index + 1) * 100}ms`
              }}
            >
              <Card className="bg-card shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col text-center items-center transform hover:-translate-y-1">
                <CardHeader>
                  <div className="transition-transform hover:scale-110 hover:rotate-5">
                    {feature.icon}
                  </div>
                  <CardTitle className="font-headline text-xl font-semibold text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 
import { School, UserPlus, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const steps = [
  {
    icon: <School className="h-12 w-12 text-accent" />,
    title: 'Create Your School',
    description: "Set up your institution on UniSchool in minutes. Customize settings to fit your school's unique needs.",
  },
  {
    icon: <UserPlus className="h-12 w-12 text-accent" />,
    title: 'Add Your Team',
    description: 'Easily invite administrators, teachers, and staff. Assign roles and permissions effortlessly.',
  },
  {
    icon: <Users className="h-12 w-12 text-accent" />,
    title: 'Engage Students & Parents',
    description: 'Welcome students and parents to join the platform for seamless communication and access to resources.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground">Get Started in 3 Simple Steps</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            UniSchool is designed for ease of use. Follow these simple steps to transform your school management.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={step.title} className="bg-card shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="items-center">
                <div className="p-4 bg-accent/10 rounded-full mb-4">
                  {step.icon}
                </div>
                <CardTitle className="font-headline text-xl font-semibold text-foreground">{index + 1}. {step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 
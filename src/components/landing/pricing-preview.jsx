import { Button } from '../ui/button.jsx';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card.jsx';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: "Coming Soon",
    features: ["Core Management Tools", "Up to 100 Students", "Basic Support"],
    cta: "Learn More",
    isFeatured: false,
  },
  {
    name: "Pro",
    price: "Coming Soon",
    features: ["All Basic Features", "Up to 500 Students", "Advanced Analytics", "Priority Support"],
    cta: "Learn More",
    isFeatured: true,
  },
  {
    name: "Enterprise",
    price: "Coming Soon",
    features: ["All Pro Features", "Unlimited Students", "Custom Integrations", "Dedicated Account Manager"],
    cta: "Contact Us",
    isFeatured: false,
  }
];

const PricingPreview = () => {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Choose the plan that best fits your institution's needs. Detailed pricing coming soon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 ${plan.isFeatured ? 'border-2 border-primary relative overflow-hidden' : ''}`}
            >
              {plan.isFeatured && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}

              <CardHeader className="text-center">
                <CardTitle className="font-headline text-2xl font-semibold text-white">{plan.name}</CardTitle>
                <CardDescription className="text-4xl font-bold text-primary mt-2">{plan.price}</CardDescription>
                {plan.price !== "Coming Soon" && <p className="text-sm text-muted-foreground">per month</p>}
              </CardHeader>

              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-foreground/80">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <a href="#" className="w-full">
                  <Button
                    className={`w-full ${plan.isFeatured ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-accent text-white  hover:bg-accent/90'} transition-transform hover:scale-105`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-foreground/70">
            Need a custom solution or have more questions?{' '}
            <a href="#" className="text-primary hover:underline font-medium">Contact our sales team</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;

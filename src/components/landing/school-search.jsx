import { Input } from '../ui/input.jsx';
import { Button } from '../ui/button';
import { Search } from 'lucide-react';

const SchoolSearch = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock search functionality
    alert("Search functionality is a mockup for this demo.");
  };

  return (
    <section id="join-school" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground">Join an Existing School</h2>
        <p className="mt-4 mb-8 text-lg text-foreground/80 max-w-xl mx-auto">
          Already a part of a UniSchool institution? Enter the school name or code below to access your dashboard.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <Input
            type="text"
            placeholder="Enter school name or code"
            className="flex-grow text-base h-12 shadow-sm focus:ring-primary focus:border-primary"
            aria-label="School name or code"
          />
          <Button 
            type="submit" 
            size="lg" 
            className="h-12 bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            <Search className="mr-2 h-5 w-5" />
            Search
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SchoolSearch; 
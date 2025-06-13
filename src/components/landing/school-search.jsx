import { Input } from '../ui/input.jsx';
import { Button } from '../ui/button';
import { Search } from 'lucide-react';
import Img from "../../assets/images/unischool2.webp";

const SchoolSearch = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Search functionality is a mockup for this demo.");
  };

  return (
    <section id="join-school" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left Text + Search */}
          <div className="w-full md:w-1/2 text-center">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-foreground">
              Join an Existing School
            </h2>
            <p className="mt-4 mb-8 text-lg text-foreground/80 max-w-2xl mx-auto">
              Already a part of a UniSchool institution? Enter the school name or code below to access your dashboard.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
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

          {/* Right Image */}
          <div className="w-full ml-20 md:w-1/2 max-w-md mx-auto">
            <img
              src={Img}
              alt="Join School"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolSearch;

import { useState } from 'react';
import { ChevronDown, PlayCircle, Dumbbell, Users, BookOpen, ArrowRight } from 'lucide-react';
import image1 from "../assets/imageOne.jpg"
import benchPressImg from "../assets/bench-press.jpg";
import squatImg from "../assets/squat.jpg";
import deadliftImg from "../assets/deadlift.jpg";
import pullupImg from "../assets/pullup.jpg";

const RepNationLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const exerciseData = [
    {
      name: 'Bench Press',
      image: benchPressImg,
      targets: 'Chest, Triceps, Shoulders'
    },
    {
      name: 'Squat',
      image: squatImg,
      targets: 'Quads, Glutes, Core'
    },
    {
      name: 'Deadlift',
      image: deadliftImg,
      targets: 'Back, Hamstrings, Traps'
    },
    {
      name: 'Pull-up',
      image: pullupImg,
      targets: 'Back, Biceps, Core'
    }
  ];

  return (
    <div className="font-sans">
      {/* Navigation */}
      <nav className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Dumbbell className="mr-2" />
            <span className="text-2xl font-bold">RepNation</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-blue-400 transition">Features</a>
            <a href="#muscles" className="hover:text-blue-400 transition">Muscle Groups</a>
            <a href="#exercises" className="hover:text-blue-400 transition">Exercises</a>
            <a href="#testimonials" className="hover:text-blue-400 transition">Testimonials</a>
          </div>
          
          <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition">
            Sign Up Free
          </button>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <ChevronDown />
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 p-4">
            <a href="#features" className="block py-2 hover:text-blue-400">Features</a>
            <a href="#muscles" className="block py-2 hover:text-blue-400">Muscle Groups</a>
            <a href="#exercises" className="block py-2 hover:text-blue-400">Exercises</a>
            <a href="#testimonials" className="block py-2 hover:text-blue-400">Testimonials</a>
            <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Sign Up Free
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Master Your Fitness Journey with Visual Muscle Guidance
            </h1>
            <p className="text-xl mb-8">
              RepNation helps you understand which muscles you&apos;re working and how to perform exercises correctly with HD video demonstrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition">
                Get Started
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-full transition flex items-center justify-center">
                <PlayCircle className="mr-2" />
                Watch Demo
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={image1} alt="Muscle diagram interactive preview" className="rounded-lg shadow-xl" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-800 to-transparent"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features That Set Us Apart</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users />
              </div>
              <h3 className="text-xl font-bold mb-2">Interactive Muscle Maps</h3>
              <p className="text-gray-600">Explore detailed muscle anatomy with interactive visuals that help you understand which muscles you&apos;re targeting.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <PlayCircle />
              </div>
              <h3 className="text-xl font-bold mb-2">HD Video Demonstrations</h3>
              <p className="text-gray-600">Watch professional trainers demonstrate every exercise with proper form and technique explained step by step.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen />
              </div>
              <h3 className="text-xl font-bold mb-2">Comprehensive Exercise Library</h3>
              <p className="text-gray-600">Access hundreds of exercises organized by muscle group, difficulty level, and equipment needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Muscle Groups Section */}
      <section id="muscles" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Muscle Groups</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Chest', 'Back', 'Shoulders', 'Arms', 'Abs', 'Legs'].map((muscle) => (
              <div key={muscle} className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg cursor-pointer transition">
                <h3 className="text-xl font-bold mb-2">{muscle}</h3>
                <p className="text-gray-600 mb-4">Discover exercises that target your {muscle.toLowerCase()} muscles.</p>
                <a href={`#${muscle.toLowerCase()}`} className="text-blue-600 font-semibold flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exercise Preview Section */}
      <section id="exercises" className="bg-gray-900 text-white py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Exercises</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {exerciseData.map((exercise) => (
          <div key={exercise.name} className="bg-gray-800 p-4 rounded-lg overflow-hidden">
            <img 
              src={exercise.image} 
              alt={exercise.name} 
              className="w-full h-48 object-cover rounded mb-4" 
            />
            <h3 className="text-xl font-bold mb-2">{exercise.name}</h3>
            <p className="text-gray-300 mb-4">Targets: {exercise.targets}</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition flex items-center justify-center">
              <PlayCircle className="mr-2" /> Watch Tutorial
            </button>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-full transition">
          View All Exercises
        </button>
      </div>
    </div>
  </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Fitness Enthusiast",
                comment: "RepNation has completely transformed my workout routine. The visual muscle guides help me understand exactly what I'm working on."
              },
              {
                name: "Sarah Williams",
                role: "Personal Trainer",
                comment: "I recommend RepNation to all my clients. The video demonstrations make it easy for beginners to learn proper form."
              },
              {
                name: "Michael Chen",
                role: "Bodybuilder",
                comment: "The comprehensive exercise library has helped me discover new exercises to add to my training regimen."
              }
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-gray-100 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">&quot;{testimonial.comment}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Master Your Fitness Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of fitness enthusiasts using RepNation to improve their workouts and achieve their fitness goals.</p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition">
            Sign Up For Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <Dumbbell className="mr-2" />
                <span className="text-2xl font-bold">RepNation</span>
              </div>
              <p className="text-gray-400">Your visual guide to fitness mastery</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold mb-4">Learn</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Muscle Groups</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Exercise Library</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Workout Plans</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} RepNation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RepNationLanding;
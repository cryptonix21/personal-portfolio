import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTypewriter } from '../hooks/useTypewriter';

function Hero() {
  const { displayText } = useTypewriter("Hey, I am Gopal Gurram", 100);

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative" 
      style={{ background: 'linear-gradient(to right, #fffcf5 0%, #fffcf5 100%)' }}
    >
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <div className="w-full text-center">
          <div className="text-3xl font-bold mb-4 text-gray-900 min-h-[40px] flex items-center justify-center">
            {displayText}
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Full Stack Web3
            <span className="text-uni-pink"> & Frontend Developer</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
            Creating seamless user experiences and innovative blockchain solutions
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/projects"
              className="bg-uni-pink hover:bg-uni-pink-dark text-white px-6 py-2 rounded-full transition-colors duration-200"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="border-2 border-uni-pink text-uni-pink hover:bg-uni-pink hover:text-white px-6 py-2 rounded-full transition-all duration-200"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      
      <Link
        to="/skills"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-uni-purple hover:text-uni-pink transition-colors duration-200"
      >
        <ArrowDown size={32} />
      </Link>
    </section>
  );
}

export default Hero;
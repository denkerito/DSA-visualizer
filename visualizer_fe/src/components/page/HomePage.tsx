import HomeCard from '../card/HomeCard';
import { useState, useEffect } from 'react';
import { Zap, Code } from 'lucide-react';

function HomePage(){
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animazione di entrata
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Tracking mouse position
    const handleMouseMove = (e : MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-black overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Dynamic gradient that follows mouse */}
          <div
            className="absolute inset-0 opacity-30 transition-all duration-1000 ease-out"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #8b5cf6 0%, #7c3aed 25%, transparent 50%)`
            }}
          />
          {/* Animated grid */}
          <div className="absolute inset-0 opacity-20">
            <div 
              className="h-full w-full animate-pulse" 
              style={{
                backgroundImage: `
                  linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }} 
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
          

          {/* Main Headline */}
          <h1 className={`text-center max-w-5xl transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="block text-6xl md:text-8xl font-black text-white mb-4 leading-none">
              MASTERING
            </span>
            <span className="block text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-4 leading-none">
              ALGORITHMS
            </span>
            <span className="block text-6xl md:text-8xl font-black text-white leading-none">
                &amp; DATA STRUCTURES
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-gray-300 text-center max-w-3xl mt-8 leading-relaxed transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Explore the world of algorithms and data structures with interactive visualizations and hands-on examples. 
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 mt-12 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button className="group relative px-8 py-4 bg-purple-600 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="relative z-10 flex items-center">
                <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Start Learning
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button className="group px-8 py-4 bg-transparent text-white font-semibold rounded-2xl border-2 border-gray-700 hover:border-purple-500 transition-all duration-300 hover:bg-purple-900 hover:bg-opacity-20">
              <div className="flex items-center">
                <Code className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                About Us
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Data Structures Section */}
      <div className="relative bg-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Master Data Structures
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <HomeCard title="array" description="Linear collection of elements with indexed access" />
            <HomeCard title="list" description="Dynamic sequence of elements with flexible size" />
            <HomeCard title="stack" description="Last-In-First-Out (LIFO) data structure" />
            <HomeCard title="queue" description="First-In-First-Out (FIFO) data structure" />
            <HomeCard title="binary tree" description="Hierarchical structure with nodes and branches" />
            <HomeCard title="graph" description="Network of connected vertices and edges" />
            <HomeCard title="heap" description="Complete binary tree with heap property" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
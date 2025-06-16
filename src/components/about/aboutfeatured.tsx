import React from 'react';
import DecorativeBackground from '../utils/DecorativeBackground';
type FeatureItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
};

const features: FeatureItem[] = [
  {
    id: 1,
    title: 'Explore Your Team',
    description:
      'Discover and build a cohesive team by leveraging insights and collaboration tools to achieve your project goals.',
    image: '/images/about/1.webp',
    icon: 'bi bi-hdd-stack',
  },
  {
    id: 2,
    title: 'Digital Whiteboard',
    description:
      'Transform your brainstorming sessions with our intuitive digital whiteboard for seamless collaboration.',
      image: '/images/about/4.webp',
    icon: 'bi bi-brightness-high',
  },
  {
    id: 3,
    title: 'Design To Development',
    description:
      'Bridge the gap between design and development with efficient processes that bring your ideas to life.',
      image: '/images/about/3.webp',
    icon: 'bi bi-calendar4-week',
  },
];

const Featured: React.FC = () => { 
  return (
    <section id="featured" className="featured mx-4 sm:mx-0">
      {/* Section Title */}
      <div className="container mx-auto text-center sm:mb-12 sm:py-12 sm:w-1/2 w-full py-5 mb-5" data-aos="fade-up">
        <h2 className="text-xl sm:text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white/90">Unlock the potential of your business with our innovative solutions.</h2>
      </div>

      {/* Cards */}
      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="card shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay={`${feature.id * 100}`}
          >
            
            <div className="relative">
              <img src={feature.image} alt={feature.title} className="img-fluid" />
           
            </div>
            <div className='pt-5 pb-3 dark:text-white/80 text-black/80 relative bg-gradient-to-tl from-blue-100 via-blue-50 to-white dark:from-blue-800 dark:via-blue-950 dark:to-black'>
              <DecorativeBackground rowCount={8}/>
            <div className="p-3 mx-auto text-3xl text-blue-600 mb-4 bg-blue-200 rounded-full w-16 h-16 flex justify-center align-middle items-center hover:bg-blue-500 hover:text-white">
                <i className={`${feature.icon} text-2xl`}></i>
              </div>
              <div className="px-6 pt-3 pb-6">
              <h3 className="text-xl font-semibold mb-4 text-center">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
            </div>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;

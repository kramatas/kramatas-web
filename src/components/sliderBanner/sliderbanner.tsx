import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slidebanner.css';
// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Dynamic banner data
const bannerSlides = [
  {
    image: 'images/sliderbanner/1.webp',
    title: 'Digital Services',
    description: 'Transform your business with cutting-edge digital solutions.',
    classNames: 'bg-gradient-to-t from-blue-950 via-black to-blue-950'
  },
  {
    image: 'images/sliderbanner/2.webp',
    title: 'Cloud Solutions',
    description: 'Leverage the cloud for scalability and agility.',
    classNames: 'bg-gradient-to-t from-indigo-950 via-black to-indigo-950'
  },
  {
    image: 'images/sliderbanner/3.webp',
    title: 'Engineering Services',
    description: 'Innovative engineering solutions to streamline your operations.',
    classNames: 'bg-gradient-to-t from-green-950 via-black to-green-950'
  },
  {
    image: 'images/sliderbanner/4.webp',
    title: 'Consulting & Staffing',
    description: 'Expert consulting to drive your business forward.',
    classNames: 'bg-gradient-to-t from-pink-950 via-black to-pink-950'
  },
];

export default function SliderBanner() {
  const progressCircle = useRef<SVGCircleElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = (_s: any, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', `${progress}`);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="w-full" id="home">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {bannerSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[600px] overflow-hidden">
               <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
                ></div>

                <div className={`absolute inset-0 ${slide.classNames} opacity-70`}></div>
               <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
    
                <h2 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl mb-4" style={{lineHeight: 'normal'}}>
                {slide.title}
                </h2>
                <p className="text-lg md:text-2xl text-gray-200 mb-6 max-w-xl mt-2">
                {slide.description}
                </p>

                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button
                        as={Link}
                        href="#contact"
                        className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                        Get started
                    </Button>
                    <a href="#services" className="text-sm/6 font-semibold text-white">
                        Learn more <span aria-hidden="true">→</span>
                    </a>
                    </div>
            </div>
            </div>
          </SwiperSlide>
        ))}
         <div className="autoplay-progress absolute right-3 bottom-0 z-10">
          <svg viewBox="0 0 48 48" className="w-12 h-12">
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="white"
              strokeWidth="4"
              fill="none"
              ref={progressCircle}
            ></circle>
          </svg>
          <span ref={progressContent} className="absolute text-white text-xs"></span>
        </div>
      </Swiper>
    </div>
  );
}

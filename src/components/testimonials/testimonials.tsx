// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, CardBody } from '@nextui-org/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './testimonials.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Kramatas IT Solutions has revolutionized our business processes with their exceptional software solutions!",
      name: "John Doe",
      position: "CEO, Tech Innovations",
      rating: 5,
    },
    {
      quote: "The team's expertise in mobile and web applications is impressive, and they delivered exactly what we needed.",
      name: "Jane Smith",
      position: "CTO, Future Ventures",
      rating: 4,
    },
    {
      quote: "Their client-centric approach and commitment to quality make Kramatas a pleasure to work with.",
      name: "Alice Johnson",
      position: "Project Manager, Global Enterprises",
      rating: 5,
    },
    {
      quote: "Exceptional service and top-notch technology solutions. We highly recommend them!",
      name: "Robert Brown",
      position: "Founder, Digital World Inc.",
      rating: 4,
    },
    {
      quote: "Working with Kramatas has been a game-changer for our company. Their team is highly skilled and professional.",
      name: "Lisa White",
      position: "Head of IT, Solutions Hub",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex justify-center mt-2">
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} className={index < rating ? 'text-yellow-400' : 'text-gray-300'}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <>
     <div id="team" className="flex flex-col items-center gap-10 p-8 bg-blue-100 dark:bg-blue-950 pt-24 relative">
      <div className="max-w-7xl mx-auto container py-24 overflow-hidden">
        <div className='section-title mb-8'>
        <h2 className="text-4xl font-semibold text-center p-3 dark:text-white/80 text-black/80">What Our Clients Say</h2>
        </div>
       <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper mx-auto"
        >

          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="py-16">
            <Card className="w-full max-w-xs sm:max-w-sm h-96 mx-auto dark:text-white/80 text-black/80 relative bg-gradient-to-tl from-blue-100 via-blue-50 to-white dark:from-blue-800 dark:via-blue-950 dark:to-black">
                <CardBody className="text-center p-12">
                  <p className="text-lg font-light italic">"{testimonial.quote}"</p>
                  <div className="mt-4">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                    {renderStars(testimonial.rating)}
                  </div>
                </CardBody>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
    </>
  );
}

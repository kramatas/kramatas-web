
import { Card, CardBody } from '@nextui-org/react';
import Featured from './aboutfeatured';
import DecorativeBackground from '../utils/DecorativeBackground';
const AboutSection = () => {
  return (
    <section id="about" className="about py-24 relative dark:bg-blue-950 bg-blue-50">
      <DecorativeBackground/>
          <div className="text-center">
          <div className="text-center mb-2 mt-0 relative text-4xl font-medium leading-tight text-gray-900 dark:text-white inline-block p-2 section-title">
          <h2 className="text-dark dark:text-white pb-">About Us</h2>
        </div>
      </div>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 py-16">
          {/* Left Content */}
          <div className="lg:w-5/12 space-y-5 text-gray-600 dark:text-white/80" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white/90">
            Innovators in IT solutions, empowering your digital journey.
            </h2>
            <p>
            At Kramatas Technologies, we are dedicated to transforming businesses through innovative technology solutions. As a premier provider of IT services, we empower organizations to achieve operational excellence, scalability, and digital transformation.
            </p>
            <p>
            Our team of industry experts specializes in delivering end-to-end solutions tailored to meet your unique business needs, whether it’s optimizing your digital infrastructure, leveraging cloud technologies, or streamlining your processes through automation.
            </p>
            <p>
            We are driven by a passion for innovation, and our commitment to quality is unmatched. With a focus on customer success, we partner with businesses of all sizes to help them stay ahead of the curve in today’s rapidly evolving digital landscape.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              <span>Read More</span>
              <i className="bi bi-arrow-right ml-2"></i>
            </a>
          </div>

          {/* Right Content - Icon Boxes */}
          <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-x-8">
            {/* Icon Box 1 */}
            <Card
              className="transition duration-300 mt-8 dark:text-white/80 text-black/80 relative bg-gradient-to-tl from-blue-100 via-blue-50 to-white dark:from-blue-800 dark:via-blue-950 dark:to-black mb-4 shadow-medium rounded-large"
              data-aos="fade-up"
              data-aos-delay="200"
            >      
            <DecorativeBackground rowCount={6}/>
                <CardBody className='p-5 text-gray-600 dark:text-white/80'>
              <i className="fas fa-user-check text-3xl text-blue-600 mb-4 bg-blue-50 rounded-full w-16 h-16 flex justify-center align-middle items-center hover:bg-blue-500 hover:text-white"></i>
              <h3 className="text-xl font-semibold mb-2 text-black/90 dark:text-white/90">Client-Centric Approach</h3>
              <p>
              We prioritize understanding your business goals to provide customized solutions that align with your vision.
              </p>
              </CardBody>
            </Card>

            {/* Icon Box 2 */}
            <Card
              className="transition duration-300 mb-8 dark:text-white/80 text-black/80 relative bg-gradient-to-tl from-blue-100 via-blue-50 to-white dark:from-blue-800 dark:via-blue-950 dark:to-black shadow-medium rounded-large"
              data-aos="fade-up"
              data-aos-delay="300"
            >
               <DecorativeBackground rowCount={6}/>
                <CardBody className='p-5'>
                <i className="fas fa-lightbulb text-3xl text-green-600 mb-4 bg-green-50 rounded-full w-16 h-16 flex justify-center align-middle items-center hover:bg-green-500 hover:text-white"></i>
                <h3 className="text-xl font-semibold mb-2 text-black/90 dark:text-white/90">Expertise and Innovation</h3>
                <p>
                Our team stays at the forefront of technology trends, ensuring you receive cutting-edge solutions.
                </p>
              </CardBody>
            </Card>

            {/* Icon Box 3 */}
            <Card
              className="transition duration-300 mt-8 dark:text-white/80 text-black/80 relative bg-gradient-to-tl from-blue-100 via-blue-50 to-white dark:from-blue-800 dark:via-blue-950 dark:to-black mb-4 shadow-medium rounded-large"
              data-aos="fade-up"
              data-aos-delay="400"
            >
               <DecorativeBackground rowCount={6}/>
                <CardBody className='p-5'>
              <i className="fas fa-layer-group text-3xl text-red-600 mb-4 bg-red-50 rounded-full w-16 h-16 flex justify-center align-middle items-center hover:bg-red-500 hover:text-white"></i>
              <h3 className="text-xl font-semibold mb-2 text-black/90 dark:text-white/90">Scalability and Efficiency</h3>
              <p>
              From startups to enterprises, we craft scalable solutions that drive sustainable growth and operational efficiency.
              </p>
              </CardBody>
            </Card>

            {/* Icon Box 4 */}
            <Card
              className="transition duration-300 mb-8 dark:text-white/80 text-black/80 relative bg-gradient-to-tl from-blue-100 via-blue-50 to-white dark:from-blue-800 dark:via-blue-950 dark:to-black shadow-medium rounded-large"
              data-aos="fade-up"
              data-aos-delay="500"
            >
               <DecorativeBackground rowCount={6}/>
                 <CardBody className='p-5'>
              <i className="fas fa-handshake  text-3xl text-purple-600 mb-4 bg-purple-50 rounded-full w-16 h-16 flex justify-center align-middle items-center hover:bg-purple-500 hover:text-white"></i>
              <h3 className="text-xl font-semibold mb-2 text-black/90 dark:text-white/90">Integrity and Trust</h3>
              <p>
              We believe in building long-term partnerships based on transparency, reliability, and mutual trust.
              </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <Featured/>
    </section>
  );
};

export default AboutSection;

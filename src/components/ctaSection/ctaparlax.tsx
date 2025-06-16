

import './ctaparalax.css'
import { Button } from '@nextui-org/button';
export default function ParallaxCTA() {

  return (
    <>
    <div id="call-to-action" className="call-to-action section dark-background">
    <img src="/images/ctaBg1.webp" alt=""/>
    <div className="container mx-auto">
      <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
        <div className="col-xl-10">
          <div className="text-center mx-auto text-white">
        <h1 className="text-4xl font-bold mb-4">Empower Your Business with Innovative IT Solutions</h1>
        <p className="text-lg mb-6">Discover how our services can enhance your business operations.</p>
        
        <div className="flex justify-center gap-4">
          <Button as='a' href="#contact" className="px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-200">
            Get in Touch
          </Button>
          <Button as='a' href="#services" className="px-6 py-3 text-white bg-transparent border border-white rounded-md hover:bg-white hover:text-blue-600 transition duration-200">
            Learn More
          </Button>
        </div>
        </div>
      </div>
    </div>
    </div>
  </div>
   </>
  );
}

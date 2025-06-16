
import {Card } from '@nextui-org/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './contactForm';


const ContactUs = () => {
   

  return (
    <section className="relative overflow-hidden py-20 bg-white dark:bg-blue-950 z-20" id="contact">
      <ToastContainer style={{ zIndex: '9999', top: '95px' }} />
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-wrap lg:justify-between">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 lg:mb-0">
             
              <h2 className="mb-6 text-[32px] font-bold sm:text-[40px] lg:text-[36px] xl:text-[40px] dark:text-white/80 text-black/80">
              Contact Us
              </h2>
              <p className="mb-9 text-base leading-relaxed dark:text-white/80 text-black/80">
              At Kramatas Technologies, we are dedicated to transforming businesses through innovative technology solutions. As a premier provider of IT services, we empower organizations to achieve operational excellence, scalability, and digital transformation.
              </p>

              <div className="mb-8 flex w-full">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-50 text-primary sm:h-[70px] sm:max-w-[70px]">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className='fill-blue-400' xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z" />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">Our Location</h4>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Dallas, Texas, USA.
                  </p>
                </div>
              </div>

              <div className="mb-8 flex w-full">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-50 text-primary sm:h-[70px] sm:max-w-[70px]">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-blue-400'>
                    <path d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.19997 22.8499C5.84997 19.4999 3.24997 15.7499 1.89997 12.2999C0.39997 8.59994 0.54997 5.54994 2.29997 3.84994C2.34997 3.79994 2.44997 3.74994 2.49997 3.69994L6.69997 1.19994C7.74997 0.599942 9.09997 0.899942 9.79997 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499ZM3.79997 5.54994C2.84997 6.59994 2.89997 8.74994 3.99997 11.4999C5.24997 14.6499 7.64997 18.0999 10.8 21.2499C13.9 24.3499 17.4 26.7499 20.5 27.9999C23.2 29.0999 25.35 29.1499 26.45 28.1999L28.85 24.0999C28.85 24.0499 28.85 24.0499 28.85 23.9999L24.45 21.0499C24.45 21.0499 24.35 21.0999 24.25 21.2499L23.15 22.8499C22.45 23.8499 21.1 24.1499 20.1 23.4999C13.8 19.5999 9.89997 14.1499 8.49997 11.9499L9.64997 10.6999C10.24997 10.0499 10.84997 10.3499 11.84997 11.0499L16.29997 13.4499L17.64997 12.0999C18.39997 11.0999 18.64997 9.74994 17.64997 8.64994L15.84997 6.84994L13.64997 5.24994L10.34997 1.94994L9.19997 3.49994L3.79997 5.54994Z" />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">Phone</h4>
                  <p className="text-base text-body-color dark:text-dark-6"><a href="tel:+14694718146" className="hover:text-indigo-400">+1 (469) 471 8146</a></p>
                </div>
              </div>

              <div className="flex w-full">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-50 text-primary sm:h-[70px] sm:max-w-[70px]">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-blue-400'>
                    <path d="M26.6 6H5.4C4.1 6 3 7.1 3 8.4V23.6C3 24.9 4.1 26 5.4 26H26.6C27.9 26 29 24.9 29 23.6V8.4C29 7.1 27.9 6 26.6 6ZM26.6 8C27 8 27.4 8.2 27.7 8.6L17.5 16.6C16.7 17.4 15.3 17.4 14.5 16.6L4.3 8.6C4.6 8.2 5 8 5.4 8H26.6ZM5 24V10.4L14.7 17.6C15.5 18.4 16.9 18.4 17.7 17.6L27.4 10.4V24H5Z" />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">Email</h4>
                  <p className="text-base text-body-color dark:text-dark-6"><a href="mailto:j2me.nanda@gmail.com" className="hover:text-indigo-400">info@kramatas.com</a></p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <Card className='mt-12'>
            <ContactForm/>
            </Card>
          </div>
        </div>
      </div>
      <span className='w-full absolute bottom-0 left-0 fill-blue-100 dark:fill-blue-900 -z-10' style={{transform: 'rotate(180deg)'}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 80" fillOpacity={0.5}>
      <path d="M0 0v100-79.4a1892 1892 0 0 1 500 0l500 66.7V0H0Z"></path>
      </svg>
      </span>
      <span className='w-full absolute top-0 left-0 fill-blue-100 dark:fill-blue-900 -z-10'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fillOpacity={0.5}>
      <path d="M0 0v100-79.4a1892 1892 0 0 1 500 0l500 66.7V0H0Z"></path>
      </svg>
      </span>
    </section>
  );
};

export default ContactUs;

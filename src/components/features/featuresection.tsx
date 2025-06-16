import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from './services';
const featuresData = [
    {
      title: "Custom Software Development",
      description: "Tailored software solutions for businesses to enhance productivity and streamline processes.",
      points: [
        "Expertise in building web, mobile, and enterprise applications."
      ],
      icon: "/images/features/features-1.png",
      classNames: 'bg-gradient-to-tr from-yellow-50 via-blue-100 to-yellow-50 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950',
    },
    {
      title: "Cloud Computing Solutions",
      description: "Cloud migration and management services, scalable cloud infrastructure, and disaster recovery solutions.",
      points: [
        "Cloud infrastructure, SaaS, PaaS, and IaaS solutions.",
        "Backup and disaster recovery solutions on the cloud."
      ],
      icon: "/images/features/features-2.png",
      classNames: 'bg-gradient-to-br from-pink-50 via-blue-100 to-pink-50 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950',
    },
    {
      title: "Data Analytics & Business Intelligence",
      description: "Data-driven insights for informed decision-making, with integration from various sources.",
      points: [
        "Predictive analytics and advanced machine learning models.",
        "Integration of data into centralized dashboards."
      ],
      icon: "/images/features/features-3.png",
      classNames: 'bg-gradient-to-tl from-green-50 via-blue-100 to-green-50 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950',
    },
    {
      title: "Cybersecurity Services",
      description: "Network security, vulnerability assessments, and endpoint protection services.",
      points: [
        "Compliance with industry standards like GDPR and HIPAA.",
        "Data encryption services and security solutions."
      ],
      icon: "/images/features/features-4.png",
      classNames: 'bg-gradient-to-bl from-indigo-50 via-blue-100 to-indigo-50 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950',
    },
    {
      title: "IT Consulting",
      description: "IT strategy consulting to optimize technology infrastructure and enable digital transformation.",
      points: [
        "Technology roadmap creation for future business growth.",
        "Digital transformation services for modernizing legacy systems."
      ],
      icon: "/images/features/features-5.png",
      classNames: 'bg-gradient-to-tr from-purple-50 via-blue-100 to-purple-50 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950',
    },
    {
      title: "System Integration",
      description: "Seamless integration of various business systems and real-time data synchronization.",
      points: [
        "API development and management for system connectivity."
      ],
      icon: "/images/features/features-6.png",
      classNames: 'bg-gradient-to-br from-green-50 via-blue-100 to-green-50 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950',
    },
    {
      title: "Managed IT Services",
      description: "24/7 monitoring and management of IT infrastructure with proactive maintenance.",
      points: [
        "Help desk and support services for end-users."
      ],
      icon: "/images/features/features-7.png",
      classNames: 'bg-gradient-to-tl from-teal-50 via-blue-100 to-teal-50 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950',
    },
    {
      title: "Network Solutions",
      description: "Design, setup, and management of secure corporate networks and VPN solutions.",
      points: [
        "Wi-Fi, LAN, and WAN solutions for business environments."
      ],
      icon: "/images/features/features-8.png",
      classNames: 'bg-gradient-to-br from-orange-50 via-blue-100 to-orange-50 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950',
    },
    {
      title: "Software Testing & Quality Assurance",
      description: "Comprehensive testing services for high-quality web and mobile applications.",
      points: [
        "Manual and automated testing, including performance and stress testing."
      ],
      icon: "/images/features/features-9.png",
      classNames: 'bg-gradient-to-tl from-red-50 via-blue-100 to-red-50 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950',
    },
    {
      title: "IT Infrastructure Management",
      description: "Hardware procurement, server management, and data center solutions.",
      points: [
        "Virtualization solutions to reduce IT costs and improve efficiency."
      ],
      icon: "/images/features/features-10.png",
      classNames: 'bg-gradient-to-tr from-yellow-50 via-blue-100 to-yellow-50 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950',
    }
  ];
  
const FeatureSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="services" className="pt-20 dark:bg-blue-950 bg-sky-100 relative">
      {/* Section Title */}
      <div className="text-center" data-aos="fade-up">
      <div className="text-center lg:mb-6 mb-2 mt-0 relative text-4xl font-medium leading-tight text-gray-900 dark:text-white inline-block p-2 section-title">
          <h2 className="text-dark dark:text-white">Our Services</h2>
        </div>
        <p className="text-xl text-gray-500">
          Explore our cutting-edge IT solutions and services.
        </p>
      </div>
      <span className='absolute w-full left-0 top-0 fill-blue-100 dark:fill-blue-900'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path d="M0 0v100S0 4 500 4s500 96 500 96V0H0Z"></path></svg>
      </span>
       <span className="absolute bottom-0 left-0 w-full fill-blue-100 dark:fill-blue-900" style={{transform: 'rotate(180deg)'}}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillOpacity="0.8"
            d="M0,288L80,266.7C160,245,320,203,480,170.7C640,139,800,117,960,122.7C1120,128,1280,160,1360,176L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </span>
     
      <div className="container mx-auto max-w-7xl px-4">
      <Services/>
        {featuresData.map((feature, index) => (
         <React.Fragment key={index}>
          <div className={`my-4 rounded-lg p-6 ${feature.classNames}`}>
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } items-center gap-6 rounded-sm`}
            
            data-aos="fade-up"
          >
            {/* Image Section */}
            <div
              className="flex justify-center items-center md:w-1/2"
              data-aos="zoom-out"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-full max-w-xs h-64"
              />
            </div>

            {/* Content Section */}
            <div className="text-black/80 dark:text-white/80 md:w-1/2" data-aos="fade-up" data-aos-delay={`${(index + 1) * 100}`}>
              <h3 className="text-2xl font-semibold text-black/90 dark:text-white/90 mb-4">
                {feature.title}
              </h3>
              <p className="text-lg italic mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start">
                    <i className="bi bi-check text-green-500 mr-2"></i>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </div>
        
          </React.Fragment>
        ))}
     </div>
    </section>
  );
};

export default FeatureSection;

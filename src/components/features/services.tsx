import { faDigitalTachograph, faDatabase, faLaptopCode, faRobot, faUsersCog, faGlobe, faCode, faMobileAlt,  faCloud, faShieldAlt, faPalette, faUsers, faPeopleArrows, faHandshake, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, CardHeader, Tabs, Tab } from "@nextui-org/react";
import DecorativeBackground from "../utils/DecorativeBackground";
const categoryIcons: { [key: string]: IconDefinition } = {
  "Digital Services": faLaptopCode,
  "Engineering & Cloud": faCloud,
  "Consulting & Staffing": faUsersCog,
};
interface ServiceCardProps {
  name: string;
  icon: IconDefinition; 
  description: string;
}
const categorizedServices = {
  
  "Digital Services": [
    { 
      name: "Digital Tech Services", 
      icon: faDigitalTachograph,
      description: "Empowering businesses with cutting-edge digital technologies. Our solutions are tailored to optimize your operations, enhance customer experience, and drive growth, ensuring you stay ahead in a rapidly evolving digital landscape." 
    },
    { 
      name: "UI/UX Services", 
      icon: faPalette,
      description: "Crafting user-centered interfaces that captivate. Our designs are built to provide an intuitive user experience, ensuring seamless interactions and satisfaction that reflects your brand’s identity and values." 
    },
    { 
      name: "Metaverse", 
      icon: faGlobe,
      description: "Expanding your brand into immersive digital spaces. We help create engaging metaverse experiences that allow for deep customer interactions, offering virtual environments where imagination meets technology." 
    },
    { 
      name: "AI & ML", 
      icon: faRobot,
      description: "Unlocking automation and insights with AI and machine learning. Our AI solutions streamline business processes, offer predictive insights, and enable intelligent decision-making, fostering innovation." 
    }
  ],
  "Engineering & Cloud": [
    { 
      name: "Data Engineering", 
      icon: faDatabase,
      description: "Building powerful data ecosystems. We specialize in constructing scalable data infrastructures that provide actionable insights, empowering data-driven decisions across your organization." 
    },
    { 
      name: "Cloud Services", 
      icon: faCloud,
      description: "Enabling scalable and secure cloud environments. Our cloud solutions ensure flexibility, efficiency, and data accessibility, tailored to your specific business needs for optimal performance." 
    },
    { 
      name: "App Development & Modernization", 
      icon: faMobileAlt,
      description: "Transforming ideas into robust applications. We develop high-performance applications and modernize legacy systems to adapt to the latest technology standards and business demands." 
    },
    { 
      name: "Cybersecurity", 
      icon: faShieldAlt,
      description: "Protecting your assets with advanced security protocols. Our comprehensive cybersecurity services guard against threats, ensuring data integrity and compliance with industry regulations." 
    }
  ],
  "Consulting & Staffing": [
    { 
      name: "Staffing", 
      icon: faUsers,
      description: "Connecting you with top-tier talent. Our staffing services match your business needs with skilled professionals, ensuring you have the right people for successful project execution." 
    },
    { 
      name: "Staff Augmentation & Consulting", 
      icon: faPeopleArrows,
      description: "Enhancing your team’s capabilities. We provide experts on-demand to bridge skill gaps, strengthen your workforce, and drive project success with industry-leading consultants." 
    },
    { 
      name: "Contract Staffing", 
      icon: faHandshake,
      description: "Offering flexibility with contract staffing solutions. Whether short-term or project-specific, our contract staffing meets immediate workforce requirements with specialized skills." 
    },
    { 
      name: "Digital Transformation Consulting", 
      icon: faCode,
      description: "Guiding your journey to digital maturity. Our consultants provide strategic insights and roadmaps for successful digital transformations, optimizing your business for the future." 
    }
  ]
};


const ServiceCard: React.FC<ServiceCardProps> = ({ name, icon, description }) => (
  <Card className="dark:text-white/80 text-black/80 relative bg-gradient-to-tl from-blue-100 via-blue-50 to-white dark:from-blue-800 dark:via-blue-950 dark:to-black mb-4 mx-2 flex flex-col h-full shadow-medium rounded-large">
  <DecorativeBackground/>
    <CardHeader className="flex items-center">
      <div className="w-10 h-10 rounded-full flex justify-center items-center bg-transparent border border-gray-200">
        <FontAwesomeIcon icon={icon} className="text-xl" width={40}/>
      </div>
      <h4 className="ml-4 text-large font-medium dark:text-white/90 text-black/90 text-start">{name}</h4>
    </CardHeader>
    <CardBody>
      <p>{description}</p>
    </CardBody>
  </Card>
);

const Services = () => {
  return (
        <div className="text-center mt-6">
        <Tabs aria-label="Service Categories" color='primary' classNames={{tabList: 'bg-blue-100 dark:bg-blue-800'}}>
          {Object.entries(categorizedServices).map(([category, services]) => (
            
            <Tab key={category}title={
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={categoryIcons[category as keyof typeof categoryIcons]} />
              </div>
            }>
              <div className="flex flex-wrap max-w-7xl">
                {services.slice(0, 4).map((service, index) => (
                  <div key={index} className="w-full md:w-1/4 lg:w-1/4 mt-4">
                    <ServiceCard {...service} />
                  </div>
                ))}
              </div>
            </Tab>
          ))}
        </Tabs>
        </div>
  );
};

export default Services;

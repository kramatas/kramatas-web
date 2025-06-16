import { Card, CardHeader, Image, CardBody } from '@nextui-org/react';

const products = [
  {
    name: 'NewsSphere',
    description: `NewsSphere enables users to access location-specific news interactively through a map-based interface. It aggregates news from various global publishers, so users can explore all the latest updates in one place without switching platforms. Sharing options make it easy to spread news on social media like Facebook, LinkedIn, and Twitter.`,
    downloadLink: '#', 
    image: "/images/products/p1.webp",
  },
  {
    name: 'TechReader',
    description: `TechReader provides the latest tech news from top sources like TechCrunch, Engadget, and Gizmodo. Stay updated on the latest in technology with this easy-to-use app.`,
    downloadLink: '#', 
    image: "/images/products/p2.webp",
  },
  {
    name: 'DTalk',
    description: `DTalk (Device Talk) is an intuitive app for tracking the distance of Bluetooth-connected devices and alerting you when they stray. Perfect for safeguarding valuables, it also allows connected devices to share status updates with each other. Never worry about misplacing your things again!`,
   
    downloadLink: '#', 
    image: "/images/products/p3.webp",
  },
  {
    name: 'Profile Lite',
    description: `Profile Lite allows automatic profile switching (silent, vibration, normal) based on Wi-Fi settings, saving you time in adapting your device settings for various environments like work, home, or other places.`,
    downloadLink: '#', 
    image: "/images/products/p4.webp",
  },
];

export default function Products() {
  return (
    <div className="flex flex-col items-center gap-10 p-8 bg-white dark:bg-blue-950 pt-24 relative" id="products">
       <span className='absolute w-full top-0 left-0 fill-blue-100 dark:fill-blue-900'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
          <path d="M0 0v100l500-48 500 48V0H0z" opacity=".5"></path><path d="M0 0h1000v52H0z" opacity=".5"></path>
          <path d="M0 0v4l500 48 500-48V0H0z" opacity=".5"></path><path d="M0 0v4l500 48 500-48V0H0z"></path>
        </svg>
       </span>
      <div className='section-title mb-8'>
      <h2 className="text-4xl font-semibold text-center p-3 dark:text-white/80 text-black/80">Our Products</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <Card key={index} className="border-t-4 border-b-4 border-blue-200 dark:text-white/80 text-black/80 relative bg-gradient-to-br from-blue-100 via-blue-50 to-white dark:from-blue-800 dark:via-blue-950 dark:to-black shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
            <span className='absolute bottom-0 left-0 w-full fill-blue-100 dark:fill-blue-900'>
            <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
              fillOpacity="0.6"
              d="M0,160L60,186.7C120,213,240,267,360,288C480,309,600,299,720,288C840,277,960,267,1080,261.3C1200,256,1320,256,1380,256L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
            <path
              fillOpacity="0.4"
              d="M0,64L60,69.3C120,75,240,85,360,96C480,107,600,117,720,122.7C840,128,960,128,1080,144C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
            <path
              fillOpacity="0.8"
              d="M0,224L60,234.7C120,245,240,267,360,277.3C480,288,600,288,720,266.7C840,245,960,203,1080,181.3C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
            </svg>

            </span>
            <CardHeader>
                <Image
                alt={`${product.name} Image`}
                className=""
                src={product.image}
                />
            </CardHeader>
            <CardBody className='pt-0 pb-8'>
            <p className="text-large font-medium mb-0 dark:text-white/90 text-black/90">{product.name}</p>
            <p className="text-small mt-3">{product.description}</p>
          
            </CardBody>
          </Card>
        ))}
      </div>
     </div>
  );
}

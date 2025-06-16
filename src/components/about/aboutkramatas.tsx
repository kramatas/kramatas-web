import { Listbox, ListboxItem } from '@nextui-org/react';
import { FaCheckCircle } from 'react-icons/fa';
const AboutKramatas = () => {
  const points = [
    {
      title: "Founding Principles",
      description: "Established by a dedicated team with diverse expertise, united to deliver top-notch products and solutions.",
    },
    {
      title: "Motto",
      description: "\"Developing the best and easiest-to-use software products while striving to provide exceptional software services.\" This captures the goal of addressing real-world challenges with affordable solutions.",
    },
    {
      title: "Commitment to Quality",
      description: "From the beginning, the company has focused on quality-driven, client-centered services.",
    },
    {
      title: "Technology Expertise",
      description: "Skilled in a wide range of tech areas, including mobile applications, GPS, Google Glass, and web-based solutions, providing broad support to meet diverse client needs.",
    },
    {
      title: "Adaptation & Innovation",
      description: "In a fast-paced market, Kramatas stands out through its adaptability and focus on innovation to boost productivity.",
    },
    {
      title: "Global Reach",
      description: "Dedicated to establishing development centers worldwide to meet industry demands on a global scale.",
    },
    {
      title: "Empowering Clients",
      description: "Committed to delivering solutions that help clients gain a competitive edge and meet strategic business goals.",
    },
    {
      title: "Client Satisfaction",
      description: "Focused on meeting and exceeding client expectations by addressing both explicit and implicit needs.",
    },
    {
      title: "Long-Term Responsibility",
      description: "Believes in the ongoing relevance and impact of its services, ensuring solutions remain effective and support long-term client success.",
    },
  ];
  const iconClasses = "text-xl pointer-events-none flex-shrink-0 text-amber-600";
  return (
    <section className="p-5 mt-10 bg-transparent" data-aos-delay="100">
      <div className="content" data-aos="fade-up">
        <p className="mb-6 text-black/80 dark:text-white/80">
        Founded in 2014, our mission is to empower clients by delivering innovative solutions and top-quality consulting, IT services, and products that drive business success. We are dedicated to building strong partnerships through exceptional support, enhancing the value of software services while reducing operational costs for organizations. Our commitment to continuous improvement ensures that working with us remains a rewarding experience for all stakeholders, as we strive to meet and exceed business objectives with impactful and cost-effective solutions.
        </p>
      </div>
      <Listbox className="">
        {points.map((point, index) => (
          <ListboxItem
            key={index}
            startContent={<FaCheckCircle className={iconClasses} />}
            className="hover:bg-amber-100 dark:hover:bg-amber-800 transition-colors"
          >
            <div className='flex flex-col'>
            <span className="text-small mb-2 dark:text-white/80 text-black/80">{point.title}</span>
            <span className="text-small text-default-400 dark:text-white/60 text-black/60">{point.description}</span>
            </div>
          </ListboxItem>
        ))}
      </Listbox>
    </section>
  );
};

export default AboutKramatas;

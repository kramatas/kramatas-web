//import { Card, CardHeader, CardBody, CardFooter, Avatar } from "@nextui-org/react";
import ComingSoon from "../utils/ComingSoon";
// Team members data
/* const teamMembers = [
  {
    name: "Mr. Sudhakar Palanivelu",
    role: "Operations Manager",
    bio: "15+ years in IT, specializing in corporate training, project management, and market research.",
    avatar: "/images/profile.png",
    followers: "4.2K",
    following: "120",
  },
  {
    name: "Mr. Mahesha Shivanna",
    role: "Delivery Manager",
    bio: "16+ years of experience in mobile and web application development, and mentoring teams.",
    avatar: "/images/profile.png",
    followers: "8.1K",
    following: "340",
  },
  {
    name: "MR. Dibyajyothi Dalai",
    role: "Senior Developer",
    bio: "14+ years of product development experience, focusing on solving system challenges.",
    avatar: "/images/profile.png",
    followers: "5.7K",
    following: "210",
  },
  {
    name: "Mr. Nandakumar Reddy K.",
    role: "Team Lead",
    bio: "11+ years in mobile and web development, known for his perfectionism and sense of humor.",
    avatar: "/images/profile.png",
    followers: "6.3K",
    following: "180",
  },
]; */

export default function TeamSectionNew() {
  return (
    <div id="team" className="flex flex-col items-center gap-10 p-8 bg-blue-100 dark:bg-blue-950 pt-24 relative">
  
   <div className='section-title mb-8'>
   <h2 className="text-4xl font-semibold text-center p-3 dark:text-white/80 text-black/80">Our Team</h2>
   </div>
   {/*  <div className="flex flex-wrap gap-6 justify-center">
      {teamMembers.map((member, index) => (
        <Card key={index} className="max-w-[340px] p-6 mb-8 dark:text-white/80 text-black/80 relative bg-gradient-to-br from-blue-100 via-blue-50 to-white dark:from-blue-800 dark:via-blue-950 dark:to-black">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Avatar isBordered radius="full" size="md" src={member.avatar} className="border-blue-500" />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-600">
                  {member.name}
                </h4>
                <h5 className="text-small tracking-tight">{member.role}</h5>
              </div>
            </div>
          
          </CardHeader>
          <CardBody className="px-3 text-small py-4">
            <p>{member.bio}</p>
          </CardBody>
          <CardFooter className="gap-3">
            <div className="flex gap-1">
              <p className="font-semibold text-small">{member.following}</p>
              <p className="text-small">Following</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold text-small">{member.followers}</p>
              <p className="text-small">Followers</p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div> */}
    <ComingSoon/>
    </div>
  );
}

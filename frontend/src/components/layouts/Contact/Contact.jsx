import React from "react";

const TeamMember = ({
  name,
  role,
  description,
  imgSrc,
  github,
  linkedin,
  portfolio,
}) => {
  return (
    <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
      <div className="rounded overflow-hidden shadow-md bg-white">
        <div className="absolute -mt-20 w-full flex justify-center">
          <div className="h-32 w-32">
            <img
              src={imgSrc}
              alt={`${name} Avatar`}
              className="rounded-full object-cover h-full w-full shadow-md"
            />
          </div>
        </div>
        <div className="px-6 mt-16">
          <div className="font-bold text-3xl text-center pb-1">{name}</div>
          <p className="text-gray-800 text-sm text-center">{role}</p>
          <p className="text-center text-gray-600 text-base pt-3 font-normal">
            {description}
          </p>
          <div className="w-full flex justify-center pt-5 pb-5">
            {/* Social media links */}
            {/* Replace these with actual links */}
            <a href={github} className="mx-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#718096"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a href={linkedin} className="mx-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#718096"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-linkedin"
              >
                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
              </svg>
            </a>
            <a href={portfolio} className="mx-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#718096"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-linkedin"
              >
                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h0.01M6.5 17.5h0.01M6.5 6.5h0.01M17.5 17.5h0.01M12 17.5h0.01M12 6.5h0.01" />

                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const teamMembers = [
    {
      name: "Deepesh Genani",
      description:
        "Aspiring MERN Stack Developer with a strong foundation in web development and a positive mindset. Passionate about creating impactful applications using MongoDB, ExpressJS, ReactJS, and NodeJS. Eager to learn and grow in a dynamic tech environment. Open to exciting opportunities in the field. 🚀#MERNStack #WebDevelopment #TechEnthusiast.",
      imgSrc:
        "https://cdn.discordapp.com/avatars/743003407236726837/a3b439d9b699a8f0874d9bab801efd56.png?size=4096",
      github: "https://github.com/ASCE-D",
      linkedin: "https://linkedin.com/in/deepeshgenani",
      portfolio: "",
    },
    {
      name: "Ashish Pandey",
      description:
        "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
      imgSrc: "https://crypto-eacsqnzcj-tehnoking.vercel.app/assets/IMG-20230220-WA0015-e4b240b5.jpg",
      github: "https://github.com/Ashish2271",
      linkedin: "https://www.linkedin.com/in/ashish-pandey-338b73220/",
      portfolio: "",
    },
    {
      name: "Anirudh Rai",
      description:
      "Passionate and driven college student aspiring to become a developer.  Committed to honing technical skills and staying up-to-date with emerging technologies. Seeking opportunities to collaborate with industry professionals and contribute to innovative projects. Open to internships that offer growth and hands-on experience in the dynamic field of software development.",
      imgSrc: "https://cdn.discordapp.com/attachments/950500676897767448/1145401152138133544/my_pic.jpg",
      github: "https://github.com/ANii693",
      linkedin: "https://www.linkedin.com/in/anirudh-rai693/",
      portfolio: "",
    },
    // Add other team members here
  ];

  return (
    <div>
      {/* Header section */}
      {/* ... (your header JSX) */}

      {/* Team members section */}
      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                description={member.description}
                imgSrc={member.imgSrc}
                github={member.github}
                linkedin={member.linkedin}
                portfolio={member.portfolio}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

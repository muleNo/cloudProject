import Pic from "./assets/images/Pic.jpg";

const logotext = "Mulugeta";

const meta = {
  title: "Mulugeta Assefa",
  description:
    "I'm a backend Java developer, currently working in Florida, USA",
};

const introdata = {
  title: "Mulugeta Assefa",
  animated: {
    first: "I'm a Java developer",
    second: "I'm a Software Engineer",
    third: "Web-based application developer",
  },
  your_img_url: Pic,
};

const dataabout = {
  aboutme:
    "Experienced Java Developer with over 5 years, proficient in all stages of the software development lifecycle. Excelling in a variety of tasks such as analysis, design, coding, implementation, testing, and training, I possess deep experience in programming and web application development using Java, J2EE, Hibernate, and Spring. My expertise in client-server technologies is complemented by my proficiency with CSS, HTML, and XML. I have a strong track record of developing web services using Spring Boot. With a keen eye for detail and a passion for delivering high-quality solutions, I am dedicated to driving innovation and exceeding expectations",
  name: "Mulugeta Assefa",
  phone: "+1 980-890-1474",
  email: "mulugeta.assefa233@gmail.com",
  address: "Tampa, Florida, USA",
  degree: "Master",
  experience: "5+ Years",
};

const Experience = [
  {
    jobtitle: "Senior Software Developer",
    where:
      "YOM CD CONSULTING, Addis Ababa, Ethiopia Engineering design company",
    date: "Jan/2019 - Feb/2022",
  },
  {
    jobtitle: "Software Developer",
    where:
      "YOM CD CONSULTING, Addis Ababa, Ethiopia Engineering design company",
    date: "Dec/2015 - Jan/2019",
  },
  {
    jobtitle: "Software Developer",
    where:
      "YOM CD CONSULTING, Addis Ababa, Ethiopia Engineering design company",
    date: "Nov/2014 - Dec/2015",
  },
];

const skills = [
  {
    skills: [
      "Java",
      "SQL",
      "HTML",
      "CSS",
      "JavaScript",
      "XML",
      "jQuery",
      "Ajax",
      "Servlet",
      "JSP",
      "PHP",
      "Typescript",
      "React",
      "Eclipse",
      "IntelliJ IDEA",
      "Maven",
      "Postman",
      "Docker",
      "Jenkins",
      "Kubernetes",
      "Git",
      "GitHub",
      "MS Visio",
      "Junit",
      "Kafka",
    ],
  },
];

const education = [
  {
    title: "Master of Science in Computer Science",
    description:
      "In progress via distance education; expected completion December 2024\nMaharishi International University, Fairfield, Iowa",
  },
  {
    title: "Bachelor of Science in Computer Science",
    description: "Microlink Information Technology College, Mekelle, Ethiopia",
  },
];

const contactConfig = {
  YOUR_EMAIL: "mulugeta.assefa233@gmail.com",
  YOUR_FONE: "(980) 890-1474",
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/in/mulugeta-assefa/",
};

export {
  meta,
  dataabout,
  skills,
  education,
  contactConfig,
  socialprofils,
  introdata,
  logotext,
  Experience, // Make sure this is exported
};

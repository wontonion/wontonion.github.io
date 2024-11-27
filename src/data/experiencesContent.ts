export interface Experience {
  title: string;
  period: string;
  company: string;
  description?: string;
  achievements?: string[];
}

export const experiences: Experience[] = [
  {
    title: "Master's student in Computer Science👨‍🎓",
    period: "2024 - Expected 2025", 
    company: "Johns Hopkins University",
    description: "After several years in industry, I'm pursuing advanced studies to deepen my expertise in AI and software engineering. Passionate about bridging the gap between theoretical AI concepts and practical software development using TypeScript Full Stack.",
  },
  {
    title: "Software Engineer💻",
    period: "2020 - 2024",
    company: "Foshan, Guangdong, China",
    description: "This my first job being a software engineer. I was responsible for developing and maintaining the company's website and internal tools using Java and Spring Boot, equipped with MySQL and Redis. Really apperciate the opportunity to work and learn with such a great team.",
  },
  {
    title: "Budget Planning Consultant🧮",
    period: "2018 - 2020",
    company: "Shanghai, China",
    description: "This my first job after graduating. I was responsible for budget planning and financial analysis for the clients' budget planning system. I also took charge of some data transformation and analysis tasks with clients' original system and budget system.",
  },
  {
    title: "Honor Graduate in BA🎓",
    period: "2014 - 2018",
    company: "Guangzhou, Guangdong, China",
    description: "I graduated with a Bachelor's degree in Business Administration. I was the top of my class and received the honor graduate award. I explored knowledge in finance and accouting and statistics. It became my inpiration to learn more about AI and data science. Really enjoy the time spent in university and the friends I made there.",
  },
  // ... more experiences
]; 
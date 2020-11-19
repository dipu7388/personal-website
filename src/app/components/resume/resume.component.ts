import { Component, OnInit } from "@angular/core";

@Component({
  selector: "dk-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.scss"]
})
export class ResumeComponent implements OnInit {
  projects: {
    name: string;
    duration: string;
    features: string[];
    link: string;
  }[] = [
    {
      name: "Classroom - Web apps for academic solutions",
      duration: "(09/2018 – 07/2019)",
      features: [
        "Gradescope Module- Provide a digital solution for evaluation of assessments.",
        "Email Module :- App to integrate email functionality, ease of classroom communication."
      ],
      link: ""
    },
    {
      name: "Chat Bot",
      duration: "(07/2019 – 07/2019)",
      features: [
        "Developed customised rich UI interface.",
        "Developed back-end (Node.Js) and integrated with dialog flow."
      ],
      link: "https://www.lsnetx.com/"
    },
    {
      name: "LSNetX (SaaS based e-Commerce Platform)",
      duration: "(06/2019 – Present)",
      features: [
        "SPA app with responsiveness. multiple Template Designs for ecommerce platform.",
        "Point of sale, with online support"
      ],
      link: "https://www.lsnetx.com/"
    },
    {
      name: "LSnetx Website",
      duration: "(07/2019 – 07/2019)",
      features: [
        "Responsive website for lsnetx.",
        "Two iterations successfully developed."
      ],
      link: "https://www.lsnetx.com/"
    },
    {
      name: "Libsys Website",
      duration: "(08/2019 – 08/2019)",
      features: ["SPA application for Company website with responsiveness."],
      link: "https://www.libsys.co.in"
    },
    {
      name: "CBCS (Choice based credit system)",
      duration: "(03/2019 – Present)",
      features: [
        "SPA app to allow students to choose elective and compulsory to meet minimum required credits."
      ],
      link: "https://www.lsacademia.com/"
    },
    {
      name: "Personel Website",
      duration: "(11/2019 – Present)",
      features: ["PWA(SPA) beautiful web app for personal information."],
      link: "https://dipu7388.github.io/"
    }
  ];
  experience: {
    role: string;
    company: string;
    location: string;
    duration: string;
    link: string;
  }[] = [
    {
      role: "Software Engineer",
      duration: "07/2018 – Present",
      company: "Libsys Ltd.",
      link: "http://libsys.co.in/",
      location: "Gurugram, India"
    }
  ];
  education: {
    course: string;
    institute: string;
    location: string;
    duration: string;
    projects: string[];
    link: string;
  }[] = [
    {
      course: "M.Sc. Computer Science",
      institute: "University of Delhi",
      location: "New Delhi, India",
      duration: "07/2016 – 06/2018",
      projects: ["Text Summarization", "Network Sampling"],
      link: "http://cs.du.ac.in/"
    },
    {
      course: "PGDCA",
      institute: "Indian Statistical Institute",
      location: "Kolkata, India",
      duration: "07/2015 – 06/2016",
      projects: [],
      link: "https://www.isical.ac.in/"
    },
    {
      course: "BCA",
      institute: "Indira Gandhi National Open University",
      location: "Varanasi, India",
      duration: "07/2012 – 06/2015",
      projects: [],
      link: "http://www.ignou.ac.in/"
    },
    {
      course: "Senior Secondary",
      institute: "UP Board",
      location: "Mirzapur, India",
      duration: "2009-2011",
      projects: [],
      link: ""
    },
    {
      course: "Higher Secondary",
      institute: "UP Board",
      location: "Robertsganj, India",
      duration: "2008-2009",
      projects: [],
      link: ""
    }
  ];
  language: { name: string; proficiency: string }[] = [
    {
      name: "English",
      proficiency: "Professional Working Proficiency"
    },
    {
      name: "Hindi",
      proficiency: "Native or Bilingual Proficiency"
    }
  ];
  interests: string[] = [
    "Data Science",
    "Spring Boot",
    "Data Structure",
    "Algorithm",
    "Chat Bot Dev",
    "Music",
    "Badminton"
  ];
  feSkills: { name: string; confidence: string }[] = [
    {
      name: "Angular",
      confidence: "80%"
    },
    {
      name: "Javascript",
      confidence: "76%"
    },
    {
      name: "Typescript",
      confidence: "76%"
    },
    {
      name: "HTML5",
      confidence: "85%"
    },
    {
      name: "CSS3, SASS",
      confidence: "78%"
    }

  ];
  beSkills: { name: string; confidence: string }[] = [
    {
      name: "Problem Solving",
      confidence: "75%"
    },
    {
      name: "Data Structure and Algorithms",
      confidence: "70%"
    },
    {
      name: "Java",
      confidence: "50%"
    },
    {
      name: "C, C++",
      confidence: "60%"
    },
    {
      name: "Python",
      confidence: "60%"
    },
    {
      name: "Node Js",
      confidence: "60%"
    },
    {
      name: "Git",
      confidence: "60%"
    }
  ];
  constructor() {}

  ngOnInit() {}
}

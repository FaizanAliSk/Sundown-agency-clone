
import image from './image.webp'

import img1 from './image1.jpg'
import img2 from './image2.jpg'
import img3 from './image3.jpg'
import img4 from './image4.jpg'
import img5 from './image5.jpg'
import img6 from './image6.jpg'
import img7 from './image7.jpg'

import page1 from './page4-1.jpg'
import page2 from './page4-2.jpg'
import page3 from './page4-3.jpg'

import BrandVideo from './video.mp4';

const projects = [
    {
      title: "Play New Kidvision",
      company: "NIKE",
      category: "Environment",
      img: img1,
    },
    {
      title: "SOHO NYC",
      company: "ARC'TERYX",
      category: "Environment",
      img: img2,
    },
    {
      title: "Makers Studio HOI",
      company: "NIKE",
      category: "Experiential",
      img: img3,
    },
    {
      title: "SOHO 2023",
      company: "CONVERSE",
      category: "Environment",
      img: img4,
    },
    {
      title: "NYFW Popup",
      company: "AFTERPAY",
      category: "Experiential",
      img: img5,
    },
    {
      title: "Air Force 1 2021",
      company: "NIKE",
      category: "Environment",
      img: img6,
    },
    {
      title: "50th Anniversary",
      company: "NIKE",
      category: "Environment",
      img: img7,
    },
  ];
const tabs = [
        {
            id: 0,
            title: "Design",
            image: page1,
            description: "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
        },
        {
            id: 1,
            title: "Project",
            image: page2,
            description: "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
        },
        {
            id: 2,
            title: "Execution",
            image: page3,
            description: "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
        }
    ];

export {
    image,
    projects,
    BrandVideo,
    tabs
}



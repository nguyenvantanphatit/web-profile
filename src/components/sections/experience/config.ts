import { Experience } from '@/types/experience';
import { Lightbulb, Target, Users } from 'lucide-react';
const experiences:  Experience[] = [
  {
    company: "Echo Medi",
    logo: "/placeholder.svg?height=40&width=40",
    period: "02/2024 - Present",
    role: "FRONT-END DEVELOPMENT",
    color: "border-red-400",
    accent: "stroke-red-400",
    bg: "bg-red-50",
    iconColor: "text-red-500",
    icon: Users,
    description: [
      'Developed a responsive and efficient user interface for Echo Medi’s main website using Next.js and Tailwind CSS to provide an optimized experience for online appointment scheduling, test result viewing, and product purchasing.',
      'Integrated secure and user-friendly payment systems with VNPay and Momo, facilitating smooth and reliable online transactions.',
      'Enhanced website security and user authentication by implementing FPT SMS Brandname for OTP-based authentication.',
      'Created an internal information platform for Echo Medi employees, allowing staff to manage schedules, access patient information, and stay updated on company workflows.',
      'Built and managed a Health Care Blog that provides informative and engaging health articles, contributing to the site’s SEO and user engagement.'
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'React.js', 'Shadcn', 'Momo', 'FPT SMS']
  },
  {
    company: "TMTECH Vietnam",
    logo: "/placeholder.svg?height=40&width=40",
    period: "11/2023 - 01/2024",
    role: "SOFTWARE ENGINEER",
    color: "border-yellow-400",
    accent: "stroke-yellow-400",
    bg: "bg-yellow-50",
    iconColor: "text-yellow-500",
    icon: Lightbulb,
    description: [
      'Utilized ReactJS and Ant Design (Antd) to develop a user-friendly interface for managing client information, staff, products, quotations, purchase orders, production, and payments.',
      'Implemented a Node.js backend to handle API requests and used MySQL for efficient data storage and management.',
      'Leveraged socket.io for real-time tracking of quotations and monitoring production progress, ensuring timely notifications of completed purchase orders (PO).',
      'Integrated drag-and-drop functionality for creating products and tasks, along with real-time chat features to enhance collaboration and communication between staff and purchase orders (PO).'
    ],
    technologies: ['React.js', 'Ant Design (Antd)', 'Node.js', 'MySQL', 'socket.io']
  },
  {
    company: "Viet Japan Digital",
    logo: "/placeholder.svg?height=40&width=40",
    period: "04/2023 - 04/2023",
    role: "INTERN",
    color: "border-teal-400",
    accent: "stroke-teal-400",
    bg: "bg-teal-50",
    iconColor: "text-teal-500",
    icon: Target,
    description: [
      'Used ZaloPay to process gift code promotions for customers, achieving seamless and efficient handling of promotional offers.',
      'Utilized Angular to fix layout issues, implement hide and show features for transaction history, and manage lottery functionalities and forms, improving user experience and functionality.',
      'Developed a platform specializing in promoting businesses, finding partners, and connecting experts between Vietnam and Japan using multilingual support with i18n.',
      'Utilized ReactJS for the frontend, Node.js for the backend, MySQL for the database, and Ant Design for UI components.'
    ],
    technologies: ['ZaloPay', 'Angular', 'React.js', 'Node.js', 'MySQL', 'Ant Design']
  }
]

export { experiences };
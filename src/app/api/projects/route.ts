import { NextResponse } from "next/server";
import Project from "@/models/Project";
import { withDB } from "@/middleware/db";

const MOCK_PROJECTS = [
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website showcasing my work, blog posts, and contact information. Built with React and Tailwind CSS, deployed on Netlify.",
    image: "/1.png",
    technologies: ["React", "Tailwind CSS", "Netlify"],
    demoUrl: "https://your-portfolio.netlify.app",
    githubUrl: "https://github.com/username/portfolio-website",
    createdAt: new Date("2025-05-10T08:00:00Z"),
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with product listings, shopping cart, and payment integration via Stripe. Features JWT auth and order management.",
    image: "/2.png",
    technologies: ["Node.js", "Express", "MongoDB", "Stripe", "React"],
    demoUrl: "https://shop-demo.example.com",
    githubUrl: "https://github.com/username/e-commerce-platform",
    createdAt: new Date("2025-04-22T14:15:00Z"),
  },
  {
    title: "Real-Time Chat App",
    description:
      "A WebSocket-powered chat application supporting private rooms, emoji reactions, and message history persistence. Built with Socket.IO.",
    image: "/3.png",
    technologies: ["Node.js", "Express", "Socket.IO", "MongoDB"],
    demoUrl: "https://chat-app.example.com",
    githubUrl: "https://github.com/username/real-time-chat-app",
    createdAt: new Date("2025-03-30T11:45:00Z"),
  },
  {
    title: "Content Blogging Platform",
    description:
      "A CMS for writing, editing, and publishing blog posts. Includes markdown support, WYSIWYG editor, and category/tag management.",
    image: "/4.png",
    technologies: ["Next.js", "MongoDB", "GraphQL", "Apollo"],
    demoUrl: "https://chat-app.example.com",
    githubUrl: "https://github.com/username/blogging-platform",
    createdAt: new Date("2025-02-18T09:20:00Z"),
  },
  {
    title: "Task Management App",
    description:
      "A kanban-style task manager with drag-and-drop cards, due-date reminders, and user authentication. Hosted on Heroku.",
    image: "/5.png",
    technologies: ["Vue.js", "Firebase", "Vuetify"],
    demoUrl: "https://task-manager-demo.herokuapp.com",
    githubUrl: "https://github.com/username/task-manager-app",
    createdAt: new Date("2025-01-05T16:30:00Z"),
  },
];

export const GET = withDB(async () => {
  try {
    const projects = await Project.find({}).sort({ createdAt: -1 });
    if (projects.length === 0) {
      // If no projects found, return mock data
      return NextResponse.json({ projects: MOCK_PROJECTS }, { status: 200 });
    }
    return NextResponse.json({ projects }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
});

export const POST = withDB(async (request: Request) => {
  try {
    const body = await request.json();
    const project = await Project.create(body);
    return NextResponse.json({ project }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
});


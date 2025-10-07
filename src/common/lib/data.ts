import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import filedriveImg from '@/../public/images/file-drive.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import puddleImg from '@/../public/images/puddle.png';
import portfolioPageImg from '@/../public/images/portfolio-page.png';
import eventlyImg from '@/../public/images/evently.png';
import scrapeFlowImg from '@/../public/images/scrapeflow.png';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Education',
    id: 'education',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Software Development Intern',
    location: 'Oorjaa',
    description:
      'Converted synchronous APIs to asynchronous FastAPI, handling 75% more requests under peak load. Introduced TDD workflow with automated tests, shortening development cycles by 30%. Built CI/CD pipeline using GitHub Actions + Testcontainers, cutting testing costs by over 40%.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'May 2025 - Present',
  },
  {
    title: 'Software Developer Intern',
    location: 'Vruksh Ecosystem Foundation',
    description:
      'Developed Python and Shell scripts to automate manual tasks, cutting installation and manual work by 50%. Containerized and orchestrated 10+ services with Docker + Docker Compose. Led a 15-member team, ensuring 100% of project milestones were delivered on time.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Jul 2024 - Mar 2025',
  },
  {
    title: 'Freelancer',
    location: 'Alignerr, Data Annotate, Scale AI',
    description:
        'Evaluated and enhanced LLM performance across domains including coding, software engineering, and cultural alignment. Designed and solved coding challenges, implemented feature-building tests, and assessed model capabilities using structured evaluation methods. Contributed to RLHF efforts for improving reasoning, code generation, and India-centric and image-generation model outputs.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Jan 2024 - Present',
  }
] as const;

export const educationData = [
  {
    title: 'BTech Computer Science and Engineering (AI & ML)',
    location: 'Shri Ramdeobaba College of Engineering and Management, Nagpur',
    description: `Bachelor's degree in Computer Science and Engineering with specialization in AI & ML. CGPA: 9.32/10`,
    icon: React.createElement(BookIcon),
    date: '2022 - Present',
  },
  {
    title: 'Higher Secondary Certificate',
    location: 'Smt. S.B.J Junior College',
    description: `Higher Secondary Certificate in Science with focus on Mathematics and Physics. Percentage: 80.1%`,
    icon: React.createElement(BookIcon),
    date: '2019 - 2021',
  },
  {
    title: 'Indian Certificate of Secondary Education',
    location: 'Podar International School, Kalyan',
    description: `ICSE certification with specialization in Mathematics and Science. Percentage: 90.1%`,
    icon: React.createElement(BookIcon),
    date: '2009 - 2019',
  },
] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
};

export const projectsData = [
  {
    title: 'ScrapeFlow - No-code web-scraping platform',
    description: `Built a Next.js SaaS platform to scrape both static and dynamic webpages, tested on over 1k scrape jobs. Implemented Puppeteer-based automation for content extraction and authentication, reducing manual scraping effort by ~70%.`,
    tags: ['Next.js', 'TypeScript', 'Puppeteer', 'Supabase', 'Vercel', 'Webhooks'],
    imageUrl: scrapeFlowImg,
    link: 'https://github.com/adi-tyasingh',
  },
  {
    title: 'Evently - Event Booking Platform',
    description:
      'Designed a scalable event booking system with concurrency control to prevent overselling. Built APIs with FastAPI + DynamoDB, containerized with Docker, and deployed on AWS Load Balancer + Auto Scaling Group.',
    tags: ['FastAPI', 'DynamoDB', 'Docker', 'AWS', 'Python', 'Load Testing'],
    imageUrl:eventlyImg,
    link: 'https://github.com/adi-tyasingh',
  },
  {
    title: 'Puddle - Online peer-to-peer e-commerce platform',
    description:
      'Built a full-stack shopping portal using Django, Jinja templates, SQLite, and Django ORM. Containerized application with Docker and created a CD pipeline via GitHub Actions, reducing deployment time by ~60%.',
    tags: [
      'Django',
      'Python',
      'SQLite',
      'Docker',
      'GitHub Actions',
      'SOLID Principles',
    ],
    imageUrl: puddleImg,
    link: 'https://github.com/adi-tyasingh',
  },
  {
    title: 'Portfolio',
    description: `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Framer Motion',
      'Tailwind CSS',
      'Responsive Design',
    ],
    imageUrl: portfolioPageImg,
    link: 'https://github.com/adi-tyasingh',
  },
] as const;

export const skillsData = [
  ['Python', '/svgs/python.svg'],
  ['C++', '/svgs/c++.svg'],
  ['Java', '/svgs/java.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['React', '/svgs/react.svg'],
  ['Django', '/svgs/django.svg'],
  ['FastAPI', '/svgs/fastapi.svg'],
  ['Flask', '/svgs/flask.svg'],
  ['Tailwind CSS', '/svgs/tailwind-css.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Docker', '/svgs/Docker.svg'],
  ['AWS', '/svgs/aws.svg'],
  ['GitHub Actions', '/svgs/github.svg'],
  ['Jenkins', '/svgs/jenkins.svg'],
  ['Pytest', '/svgs/pytest.svg'],
  ['Postman', '/svgs/postman.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['React', '/svgs/react.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
] as const;

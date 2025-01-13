import React from 'react';
import './Projects.css';
import { MdConstruction } from 'react-icons/md';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Tournimus',
      description:
        'A comprehensive tournament organization platform designed to streamline the management and tracking of sports tournaments. Created to address a gap in the Slovenian market, where many tournament organizers still rely on manual paper-based methods for recording games and scores, Tournimus offers a modern digital solution that enhances efficiency and accuracy in tournament administration.',
      year: '2024',
      techStack: 'Next.js • React • Tailwind',
      githubLink: 'https://github.com/nejc-j/Tournimus',
      websiteLink: 'https://tournimus.vercel.app/',
      imgSrc: '/projects/tournimus.png',
      bgImage: '/projects/tournimus-bg.jpg',
    },
    {
      id: 2,
      title: 'CoachUP ',
      description:
        'CoachUP is a platform that connects users with professional sports coaches, catering to individuals seeking to explore new sports or enhance their skills in a specific discipline. The platform offers an accessible way for users to find and engage with qualified coaches, supporting personal growth and athletic improvement through tailored coaching services.',
      year: '2024',
      techStack: 'Next.js • React • Tailwind',
      githubLink: 'https://github.com/nejc-j/coaching-platform',
      websiteLink: 'https://coachup.netlify.app/',
      imgSrc: '/projects/coachup.jpg',
      bgImage: '/projects/coachup-bg.jpg',
    },
    {
      id: 3,
      title: 'Online Store',
      description:
        'This project is an online store prototype developed with the goal of gaining hands-on experience with Stripe and understanding the intricacies of online transactions. The demo showcases the integration of secure payment processing and provides insights into e-commerce workflows, enhancing my knowledge of payment gateways and financial technologies.',
      year: '2023',
      techStack: 'React • Vite • NodeJS',
      githubLink: 'https://github.com/nejc-j/Online-Store',
      websiteLink: 'https://master--onlinestoredemo-jernejjakop.netlify.app/',
      imgSrc: '/projects/store.png',
      bgImage: '/projects/store-bg.jpg',
    },
    {
      id: 4,
      title: 'Recipe Finder',
      description:
        'A web application built to explore the integration of external APIs, utilizing the Spoonacular API to provide users with an extensive database of recipes. The project was created to gain experience working with third-party APIs, improving skills in data fetching, manipulation, and presentation, all while offering an engaging user experience in discovering new recipes.',
      year: '2023',
      techStack: 'HTML • JavaScript • Tailwind',
      githubLink: 'https://github.com/nejc-j/Recipe-Finder',
      websiteLink: 'https://master--recipefinder-jernejjakop.netlify.app/',
      imgSrc: '/projects/recipefinder.jpg',
      bgImage: '/projects/recipefinder-bg.jpg',
    },
  ];

  return (
    <section id='projects' className='projects'>
      <div className='projects-header'>
        <svg
          width='100'
          height='100'
          viewBox='0 0 280 280'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='title-icon title-icon-left'
        >
          <g clipPath='url(#clip0_9_271)'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M164.899 44.9171L145.8 125.998L189.627 55.16C190.985 52.9661 194.033 52.6119 195.857 54.4361L225.564 84.1427C227.388 85.9669 227.034 89.0153 224.84 90.3727L154.002 134.2L235.083 115.101C237.594 114.509 240 116.415 240 118.994V161.006C240 163.586 237.594 165.491 235.083 164.899L154.002 145.8L224.84 189.628C227.034 190.985 227.388 194.033 225.564 195.858L195.857 225.564C194.033 227.388 190.985 227.034 189.627 224.84L145.8 154.002L164.899 235.083C165.491 237.594 163.585 240 161.006 240H118.994C116.414 240 114.509 237.594 115.101 235.083L134.2 154.002L90.3726 224.84C89.0153 227.034 85.9668 227.388 84.1426 225.564L54.4361 195.857C52.6119 194.033 52.9661 190.985 55.16 189.627L125.997 145.8L44.9171 164.899C42.4061 165.491 40 163.586 40 161.006V118.994C40 116.415 42.406 114.509 44.9171 115.101L125.998 134.2L55.16 90.3728C52.9661 89.0154 52.6119 85.9669 54.4361 84.1427L84.1426 54.4362C85.9668 52.612 89.0153 52.9662 90.3726 55.1601L134.2 125.998L115.101 44.9171C114.509 42.4061 116.414 40 118.994 40L161.006 40C163.586 40 165.491 42.406 164.899 44.9171ZM140 151.429C146.312 151.429 151.429 146.312 151.429 140C151.429 133.688 146.312 128.571 140 128.571C133.688 128.571 128.571 133.688 128.571 140C128.571 146.312 133.688 151.429 140 151.429Z'
              fill='#AEAE9D'
            />
          </g>
          <defs>
            <clipPath id='clip0_9_271'>
              <rect
                width='200'
                height='200'
                fill='white'
                transform='translate(40 40)'
                s
              />
            </clipPath>
          </defs>
        </svg>
        <h1 className='section-title-brighter'>PROJECTS</h1>
        <svg
          width='100'
          height='100'
          viewBox='0 0 280 280'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='title-icon title-icon-right'
        >
          <g clipPath='url(#clip0_9_271)'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M164.899 44.9171L145.8 125.998L189.627 55.16C190.985 52.9661 194.033 52.6119 195.857 54.4361L225.564 84.1427C227.388 85.9669 227.034 89.0153 224.84 90.3727L154.002 134.2L235.083 115.101C237.594 114.509 240 116.415 240 118.994V161.006C240 163.586 237.594 165.491 235.083 164.899L154.002 145.8L224.84 189.628C227.034 190.985 227.388 194.033 225.564 195.858L195.857 225.564C194.033 227.388 190.985 227.034 189.627 224.84L145.8 154.002L164.899 235.083C165.491 237.594 163.585 240 161.006 240H118.994C116.414 240 114.509 237.594 115.101 235.083L134.2 154.002L90.3726 224.84C89.0153 227.034 85.9668 227.388 84.1426 225.564L54.4361 195.857C52.6119 194.033 52.9661 190.985 55.16 189.627L125.997 145.8L44.9171 164.899C42.4061 165.491 40 163.586 40 161.006V118.994C40 116.415 42.406 114.509 44.9171 115.101L125.998 134.2L55.16 90.3728C52.9661 89.0154 52.6119 85.9669 54.4361 84.1427L84.1426 54.4362C85.9668 52.612 89.0153 52.9662 90.3726 55.1601L134.2 125.998L115.101 44.9171C114.509 42.4061 116.414 40 118.994 40L161.006 40C163.586 40 165.491 42.406 164.899 44.9171ZM140 151.429C146.312 151.429 151.429 146.312 151.429 140C151.429 133.688 146.312 128.571 140 128.571C133.688 128.571 128.571 133.688 128.571 140C128.571 146.312 133.688 151.429 140 151.429Z'
              fill='#AEAE9D'
            />
          </g>
          <defs>
            <clipPath id='clip0_9_271'>
              <rect
                width='200'
                height='200'
                fill='white'
                transform='translate(40 40)'
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className='project-container'>
        {projects.slice(0, 2).map((project) => (
          <div
            key={project.id}
            className={`project project-${project.id}`}
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className='project-img-container'>
              <img
                src={project.imgSrc}
                alt={project.title}
                className='project-img'
              />
            </div>
            <div className='project-info'>
              <h3>
                {project.title}
                {project.id === 2 && (
                  <span
                    style={{
                      color: '#FFD700',
                      fontSize: '0.8em',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.2em',
                    }}
                  >
                    (under construction <MdConstruction />)
                  </span>
                )}
              </h3>

              <p className='project-year'>{project.year}</p>
              <p className='project-tech'>{project.techStack}</p>
              <p className='project-description'>{project.description}</p>
              <div className='links'>
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src='/icons/github.png'
                    alt='GitHub icon'
                    className='github-icon'
                  />
                  GitHub
                </a>
                <a
                  href={project.websiteLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src='/icons/spletna-stran.png'
                    alt='Website Icon'
                    className='website-icon'
                  />
                  Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Separator Line */}
      {/* Separator Line */}
      <div className='older-projects-separator'>
        <div className='separator-line left-line'>
          <div className='line-inner'></div>
        </div>
        <span>OLDER PROJECTS</span>
        <div className='separator-line right-line'>
          <div className='line-inner'></div>
        </div>
      </div>

      <div className='project-container last-projects'>
        {projects.slice(2).map((project) => (
          <div
            key={project.id}
            className={`project project-${project.id}`}
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className='project-img-container'>
              <img
                src={project.imgSrc}
                alt={project.title}
                className='project-img'
              />
            </div>
            <div className='project-info'>
              <h3>{project.title}</h3>
              <p className='project-year'>{project.year}</p>
              <p className='project-tech'>{project.techStack}</p>
              <p className='project-description'>{project.description}</p>
              <div className='links'>
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src='/icons/github.png'
                    alt='GitHub icon'
                    className='github-icon'
                  />
                  GitHub
                </a>
                <a
                  href={project.websiteLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src='/icons/spletna-stran.png'
                    alt='Website Icon'
                    className='website-icon'
                  />
                  Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

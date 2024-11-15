import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Technologies from './components/Technologies/Technologies';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const headerHeight = document.querySelector('header').offsetHeight;
    const logoImg = document.querySelector('.logo img');

    // ABOUT Section Animations
    let vhOffsetAbout = window.innerHeight * 0.4;

    // ABOUT Section Title and Icon Animations with Reveal Effect
    gsap.fromTo(
      ['.about .section-title', '.about .title-icon'],
      {
        autoAlpha: 0,
        y: 200,
        clipPath: 'inset(0% 0% 100% 0%)', // Start fully hidden from the top (invisible wall effect)
      },
      {
        autoAlpha: 1,
        y: 0,
        clipPath: 'inset(0% 0% 0% 0%)', // Reveal completely by "removing" the wall
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '#about',
          start: `top bottom-=${vhOffsetAbout}px`,
          end: 'bottom top',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      '.about .profile-placeholder',
      { autoAlpha: 0, x: -75 },
      {
        autoAlpha: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.about .profile-placeholder',
          start: `top bottom-=${vhOffsetAbout}px`,
          end: 'bottom top',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );

    gsap.fromTo(
      '.about .introduction',
      { autoAlpha: 0, x: 75 },
      {
        autoAlpha: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.about .introduction',
          start: `top bottom-=${vhOffsetAbout}px`,
          end: 'bottom top',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );

    ScrollTrigger.create({
      trigger: '.about .introduction',
      start: `top-=${headerHeight} top`,
      pin: true,
      endTrigger: '.about .profile-placeholder',
      end: 'bottom center',
      pinSpacing: true,
      scrub: true,
      markers: true,
    });

    // TECHNOLOGIES Section Title and Icon Animations
    let vhOffsetTech = window.innerHeight * 0.4;

    gsap.fromTo(
      ['.technologies .section-title-brighter', '.technologies .title-icon'],
      {
        autoAlpha: 0,
        y: 200,
        clipPath: 'inset(0% 0% 100% 0%)', // Start fully hidden from the top (invisible wall effect)
      },
      {
        autoAlpha: 1,
        y: 0,
        clipPath: 'inset(0% 0% 0% 0%)', // Reveal completely by "removing" the wall
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '#technologies',
          start: `top bottom-=${vhOffsetTech}px`,
          end: 'bottom top',
          toggleActions: 'play none none none',
        },
      }
    );

    // TECHNOLOGIES Section Animations with Pinning
    const techTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#technologies',
        start: 'top top',
        end: '+=200%',
        pin: true, // Pin the whole technologies section
        scrub: true,
        markers: true,
      },
    });

    // Animate the tech stack title and description first
    const techStackTitleSpans = document.querySelectorAll(
      '.tech-stack h2 span'
    );
    const techStackParagraph = document.querySelector('.tech-stack p');

    techTimeline
      .fromTo(
        techStackTitleSpans,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.05,
          stagger: 0.05,
          ease: 'power1.out',
        }
      )
      .fromTo(
        techStackParagraph,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        }
      );

    // List items start appearing immediately after the text appears
    const techListItems = document.querySelectorAll('.tech-section ul li');
    techTimeline.fromTo(
      techListItems,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
      },
      '-=0.5' // Overlapping animation so list items appear right after the text
    );

    // Background, text, and header color change for Technologies section
    ScrollTrigger.create({
      trigger: '#technologies',
      start: 'top center+=20%',
      end: 'bottom top',
      scrub: true,
      onEnter: () => {
        gsap.to('.about, .technologies', {
          backgroundColor: '#262626',
          duration: 1,
        });
        gsap.to('.technologies', { color: '#AEAE9D', duration: 1 });
        gsap.to('.technologies .tech-stack, .technologies .tech-list li', {
          color: '#AEAE9D',
          duration: 1,
        });
        gsap.to('.about .introduction', { color: '#fff', duration: 1 }); // Change about introduction text to white
        gsap.to('header', {
          backgroundColor: '#262626',
          color: '#fff',
          duration: 1,
        });
        gsap.to('header a', { color: '#fff', duration: 1 });
        gsap.to('header .contact-link', {
          backgroundColor: '#fff',
          color: '#000',
          duration: 1,
        });
        logoImg.src = '/icons/logo-light.png';
      },
      onLeaveBack: () => {
        gsap.to('.about, .technologies', {
          backgroundColor: '#f2f2f2',
          duration: 1,
        });
        gsap.to('.technologies', { color: '#000', duration: 1 });
        gsap.to('.technologies .tech-stack, .technologies .tech-list li', {
          color: '#000',
          duration: 1,
        });
        gsap.to('.about .introduction', { color: '#000', duration: 1 });
        gsap.to('header', {
          backgroundColor: '#f2f2f2',
          color: '#000',
          duration: 1,
        });
        gsap.to('header a', { color: '#000', duration: 1 });
        gsap.to('header .contact-link', {
          backgroundColor: '#0e0e0c',
          color: '#fff',
          duration: 1,
        });
        logoImg.src = '/icons/logo-dark.png';
      },
      markers: true,
    });

    // PROJECTS Section: Animate Older Projects Separator Lines
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.older-projects-separator',
          start: 'top bottom',
          end: '+=1500', // Extend the scroll distance over which the animation occurs
          scrub: true,
          toggleActions: 'play none none none',
          // markers: true, // Uncomment for debugging
        },
      })
      .fromTo(
        '.left-line .line-inner',
        { width: '0%' },
        { width: '100%', ease: 'none' }
      )
      .fromTo(
        '.right-line .line-inner',
        { width: '0%' },
        { width: '100%', ease: 'none' },
        '>' // Start after the left line animation completes
      );

    // Contact Section: Reset header to original styles when contact section reaches the top of the screen
    ScrollTrigger.create({
      trigger: '#contact',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onEnter: () => {
        gsap.to('header', {
          backgroundColor: '#f2f2f2',
          color: '#000',
          duration: 1,
        });
        gsap.to('header a', { color: '#000', duration: 1 });
        gsap.to('header .contact-link', {
          backgroundColor: '#0e0e0c',
          color: '#fff',
          duration: 1,
        });
        if (logoImg) {
          logoImg.src = '/icons/logo-dark.png';
        }
      },
      onLeaveBack: () => {
        gsap.to('header', {
          backgroundColor: '#262626',
          color: '#fff',
          duration: 1,
        });
        gsap.to('header a', { color: '#fff', duration: 1 });
        gsap.to('header .contact-link', {
          backgroundColor: '#fff',
          color: '#000',
          duration: 1,
        });
        if (logoImg) {
          logoImg.src = '/icons/logo-light.png';
        }
      },
      markers: true,
    });

    // PROJECTS Section Animations
    let vhOffsetProjects = window.innerHeight * 0.25;
    gsap.fromTo(
      ['.projects .section-title-brighter', '.projects .title-icon'],
      {
        autoAlpha: 0,
        y: 200,
        clipPath: 'inset(0% 0% 100% 0%)', // Start fully hidden from the top (invisible wall effect)
      },
      {
        autoAlpha: 1,
        y: 0,
        clipPath: 'inset(0% 0% 0% 0%)', // Reveal completely by "removing" the wall
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '#projects',
          start: `top bottom-=${vhOffsetProjects}px`,
          end: 'bottom top',
          toggleActions: 'play none none none',
          markers: true,
        },
      }
    );

    // Refresh ScrollTrigger after all calculations
    ScrollTrigger.refresh();

    // Add resize listener to handle layout changes
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Header />
      <Landing />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

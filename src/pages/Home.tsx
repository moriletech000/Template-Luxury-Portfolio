import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { TextReveal } from '../components/TextReveal';
import { FadeInUp } from '../components/FadeInUp';
import { ImageReveal, ResilientImage } from '../components/ImageReveal';
import { projects } from '../data/projects';

export const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroImageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center overflow-hidden"
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left: Name */}
            <div className="md:col-span-7 z-10">
              <h1 className="font-display font-light text-text leading-none mb-6">
                <span className="block text-[clamp(4rem,9vw,10rem)]">
                  <TextReveal delay={2.8}>Elara</TextReveal>
                </span>
                <span className="block text-[clamp(4rem,9vw,10rem)]">
                  <TextReveal delay={3.2}>Morgan</TextReveal>
                </span>
              </h1>

              <FadeInUp delay={3.6}>
                <p className="font-sans font-light text-sm md:text-base tracking-widest uppercase text-text-muted">
                  Documentary · Portrait · Editorial
                </p>
              </FadeInUp>
            </div>

            {/* Right: Hero Image */}
            <motion.div
              className="md:col-span-5 h-[60vh] md:h-screen"
              initial={{ x: '100%', clipPath: 'inset(0 100% 0 0)' }}
              animate={{ x: 0, clipPath: 'inset(0 0% 0 0)' }}
              transition={{
                duration: 1.2,
                delay: 2.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <motion.div className="h-full w-full" style={{ y: heroImageY }}>
                <ResilientImage
                  unsplashId="1534528741775-53994a69daeb"
                  seed="hero-portrait"
                  alt="Elara Morgan"
                  size={{ w: 900, h: 1200 }}
                  loading="eager"
                  className="h-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <FadeInUp delay={4} className="absolute bottom-12 left-6 md:left-12">
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span className="text-xs font-sans tracking-widest text-text-muted uppercase">
              Scroll
            </span>
            <svg
              width="12"
              height="20"
              viewBox="0 0 12 20"
              fill="none"
              className="text-accent"
            >
              <path
                d="M6 0L6 18M6 18L1 13M6 18L11 13"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        </FadeInUp>
      </section>

      {/* Selected Work Section */}
      <section className="py-24 md:py-32 max-w-[1800px] mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <FadeInUp>
            <h2 className="font-display font-light text-[clamp(3rem,6vw,8rem)] text-text leading-none">
              Selected Work
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <span className="font-sans text-sm text-text-muted tracking-wider">
              (2020–2024)
            </span>
          </FadeInUp>
        </div>

        {/* Asymmetric Grid */}
        <div className="space-y-8 md:space-y-16">
          {/* Row 1: Large + Tall */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <ImageReveal
              delay={0.1}
              className="md:col-span-7 project-item group cursor-none"
            >
              <Link to={`/project/${projects[0].id}`}>
                <motion.div
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    type: 'spring',
                    damping: 30,
                    stiffness: 100,
                  }}
                >
                  <ResilientImage
                    unsplashId={projects[0].coverImageId}
                    seed={projects[0].coverImageSeed}
                    alt={projects[0].title}
                    size={{ w: 1600, h: 900 }}
                  />
                  <motion.div className="absolute inset-0 bg-bg/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-display text-3xl md:text-5xl italic text-text mb-2">
                      {projects[0].title}
                    </h3>
                    <p className="font-sans text-sm text-text-muted tracking-wider">
                      {projects[0].year} · {projects[0].category}
                    </p>
                  </motion.div>
                </motion.div>
              </Link>
            </ImageReveal>

            <ImageReveal
              delay={0.25}
              className="md:col-span-5 project-item group cursor-none"
            >
              <Link to={`/project/${projects[1].id}`}>
                <motion.div
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    type: 'spring',
                    damping: 30,
                    stiffness: 100,
                  }}
                >
                  <ResilientImage
                    unsplashId={projects[1].coverImageId}
                    seed={projects[1].coverImageSeed}
                    alt={projects[1].title}
                    size={{ w: 1200, h: 1600 }}
                  />
                  <motion.div className="absolute inset-0 bg-bg/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-display text-3xl md:text-4xl italic text-text mb-2">
                      {projects[1].title}
                    </h3>
                    <p className="font-sans text-sm text-text-muted tracking-wider">
                      {projects[1].year} · {projects[1].category}
                    </p>
                  </motion.div>
                </motion.div>
              </Link>
            </ImageReveal>
          </div>

          {/* Row 2: Text Block + Two Medium */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <FadeInUp delay={0.1} className="md:col-span-3 flex items-center">
              <div>
                <p className="font-display text-2xl md:text-3xl italic text-text leading-relaxed mb-4">
                  "Photography is the art of frozen time... the ability to store
                  emotion and feelings within a frame."
                </p>
                <p className="font-sans text-sm text-text-muted tracking-wider">
                  — Meshack Otieno
                </p>
              </div>
            </FadeInUp>

            <ImageReveal
              delay={0.2}
              className="md:col-span-4 project-item group cursor-none"
            >
              <Link to={`/project/${projects[2].id}`}>
                <motion.div
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    type: 'spring',
                    damping: 30,
                    stiffness: 100,
                  }}
                >
                  <ResilientImage
                    unsplashId={projects[2].coverImageId}
                    seed={projects[2].coverImageSeed}
                    alt={projects[2].title}
                    size={{ w: 900, h: 1200 }}
                  />
                  <motion.div className="absolute inset-0 bg-bg/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-display text-3xl md:text-4xl italic text-text mb-2">
                      {projects[2].title}
                    </h3>
                    <p className="font-sans text-sm text-text-muted tracking-wider">
                      {projects[2].year} · {projects[2].category}
                    </p>
                  </motion.div>
                </motion.div>
              </Link>
            </ImageReveal>

            <ImageReveal
              delay={0.35}
              className="md:col-span-5 project-item group cursor-none"
            >
              <Link to={`/project/${projects[3].id}`}>
                <motion.div
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    type: 'spring',
                    damping: 30,
                    stiffness: 100,
                  }}
                >
                  <ResilientImage
                    unsplashId={projects[3].coverImageId}
                    seed={projects[3].coverImageSeed}
                    alt={projects[3].title}
                    size={{ w: 1600, h: 1000 }}
                  />
                  <motion.div className="absolute inset-0 bg-bg/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-display text-3xl md:text-4xl italic text-text mb-2">
                      {projects[3].title}
                    </h3>
                    <p className="font-sans text-sm text-text-muted tracking-wider">
                      {projects[3].year} · {projects[3].category}
                    </p>
                  </motion.div>
                </motion.div>
              </Link>
            </ImageReveal>
          </div>

          {/* Row 3: Three Equal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {projects.slice(4, 7).map((project, index) => (
              <ImageReveal
                key={project.id}
                delay={0.15 * index}
                className="project-item group cursor-none"
              >
                <Link to={`/project/${project.id}`}>
                  <motion.div
                    className="relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{
                      type: 'spring',
                      damping: 30,
                      stiffness: 100,
                    }}
                  >
                    <ResilientImage
                      unsplashId={project.coverImageId}
                      seed={project.coverImageSeed}
                      alt={project.title}
                      size={{ w: 1000, h: 1250 }}
                    />
                    <motion.div className="absolute inset-0 bg-bg/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-display text-2xl md:text-3xl italic text-text mb-2">
                        {project.title}
                      </h3>
                      <p className="font-sans text-sm text-text-muted tracking-wider">
                        {project.year} · {project.category}
                      </p>
                    </motion.div>
                  </motion.div>
                </Link>
              </ImageReveal>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

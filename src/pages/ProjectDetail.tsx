import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { projects } from '../data/projects';
import { FadeInUp } from '../components/FadeInUp';
import { ImageReveal, ResilientImage } from '../components/ImageReveal';

export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const heroRef = useRef(null);

  const project = projects.find((p) => p.id === id);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroImageY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="font-display text-4xl text-text mb-4">
            Project not found
          </h1>
          <Link
            to="/"
            className="font-sans text-sm tracking-widest text-accent hover:text-text transition-colors"
          >
            ← BACK TO HOME
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16"
    >
      {/* Hero Image with Parallax */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
          <ResilientImage
            unsplashId={project.images[0].unsplashId}
            seed={project.images[0].seed}
            alt={project.title}
            size={{ w: project.images[0].width, h: project.images[0].height }}
            loading="eager"
            className="h-full"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />

        {/* Back Button */}
        <FadeInUp delay={0.3} className="absolute top-24 left-6 md:left-12 z-10">
          <button
            onClick={() => navigate('/')}
            className="font-sans text-xs tracking-widest text-text hover:text-accent transition-colors uppercase flex items-center gap-2"
          >
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              className="text-accent"
            >
              <path
                d="M20 6H2M2 6L7 1M2 6L7 11"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
            Back
          </button>
        </FadeInUp>
      </section>

      {/* Project Info */}
      <section className="py-16 md:py-24 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Left: Title and Details */}
          <div className="md:col-span-7">
            <FadeInUp>
              <h1 className="font-display font-light text-[clamp(3rem,6vw,7rem)] text-text leading-none mb-8">
                {project.title}
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <p className="font-sans text-base md:text-lg text-text leading-relaxed mb-8">
                {project.description}
              </p>
            </FadeInUp>
          </div>

          {/* Right: Meta Info */}
          <div className="md:col-span-5">
            <FadeInUp delay={0.3}>
              <div className="space-y-6">
                <div>
                  <p className="font-sans text-xs tracking-widest text-text-muted uppercase mb-2">
                    Year
                  </p>
                  <p className="font-display text-2xl text-text">
                    {project.year}
                  </p>
                </div>

                <div>
                  <p className="font-sans text-xs tracking-widest text-text-muted uppercase mb-2">
                    Category
                  </p>
                  <p className="font-display text-2xl text-text">
                    {project.category}
                  </p>
                </div>

                <div>
                  <p className="font-sans text-xs tracking-widest text-text-muted uppercase mb-2">
                    Location
                  </p>
                  <p className="font-display text-2xl text-text">
                    {project.location}
                  </p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Image Gallery - Masonry Style */}
      <section className="pb-24 md:pb-32 max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {project.images.slice(1).map((image, index) => (
            <ImageReveal key={index} delay={0.15 * index}>
              <ResilientImage
                unsplashId={image.unsplashId}
                seed={image.seed}
                alt={`${project.title} - Image ${index + 2}`}
                size={{ w: image.width, h: image.height }}
              />
            </ImageReveal>
          ))}
        </div>
      </section>

      {/* Next Project */}
      <section className="py-16 md:py-24 border-t border-accent/20">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <FadeInUp>
            <Link
              to={`/project/${nextProject.id}`}
              className="group block"
              data-cursor-hover
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-sans text-xs tracking-widest text-text-muted uppercase">
                  Next Project
                </h3>
                <motion.div
                  className="flex items-center gap-2 text-accent"
                  whileHover={{ x: 10 }}
                  transition={{
                    type: 'spring',
                    damping: 30,
                    stiffness: 200,
                  }}
                >
                  <span className="font-sans text-sm tracking-widest uppercase">
                    View
                  </span>
                  <svg
                    width="20"
                    height="12"
                    viewBox="0 0 20 12"
                    fill="none"
                  >
                    <path
                      d="M0 6H18M18 6L13 1M18 6L13 11"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                  </svg>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
                <div className="md:col-span-7">
                  <h2 className="font-display font-light text-[clamp(2.5rem,5vw,6rem)] text-text leading-none group-hover:text-accent transition-colors duration-300">
                    {nextProject.title}
                  </h2>
                </div>

                <div className="md:col-span-5">
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
                      unsplashId={nextProject.coverImageId}
                      seed={nextProject.coverImageSeed}
                      alt={nextProject.title}
                      size={{ w: 1600, h: 1000 }}
                    />
                  </motion.div>
                </div>
              </div>
            </Link>
          </FadeInUp>
        </div>
      </section>
    </motion.div>
  );
};

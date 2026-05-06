import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { FadeInUp } from '../components/FadeInUp';
import { WordReveal } from '../components/TextReveal';
import { Marquee } from '../components/Marquee';
import { ResilientImage } from '../components/ImageReveal';

export const About = () => {
  const parallaxRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    alert('Thank you for your message! I will get back to you soon.');
  };

  const awards = [
    {
      year: '2024',
      award: 'International Photography Awards',
      category: 'Gold - Portrait',
    },
    {
      year: '2024',
      award: 'Sony World Photography Awards',
      category: 'Finalist',
    },
    {
      year: '2023',
      award: 'Prix de la Photographie Paris',
      category: 'Silver - Editorial',
    },
    { year: '2023', award: 'Hasselblad Masters', category: 'Nominee' },
    {
      year: '2022',
      award: 'LensCulture Portrait Awards',
      category: "Editor's Choice",
    },
    {
      year: '2022',
      award: 'British Journal of Photography',
      category: 'Ones to Watch',
    },
    {
      year: '2021',
      award: 'Taylor Wessing Portrait Prize',
      category: 'Shortlist',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16"
    >
      {/* About Section */}
      <section className="py-24 md:py-32 max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Left: Portrait with Parallax */}
          <div
            ref={parallaxRef}
            className="md:col-span-5 h-[60vh] md:h-[80vh] overflow-hidden"
          >
            <motion.div className="h-full w-full" style={{ y: imageY }}>
              <ResilientImage
                unsplashId="1534528741775-53994a69daeb"
                seed="about-photographer"
                alt="Elara Morgan"
                size={{ w: 800, h: 1000 }}
                loading="eager"
                className="h-full"
              />
            </motion.div>
          </div>

          {/* Right: Biography */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <FadeInUp>
              <h2 className="font-display font-light text-[clamp(3rem,6vw,7rem)] text-text leading-none mb-8">
                About
              </h2>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
                <p>
                  Elara Morgan is an award-winning photographer based between
                  New York and Paris, specializing in portrait, editorial, and
                  documentary photography. Her work explores the intersection of
                  light, emotion, and human connection.
                </p>

                <p>
                  With over a decade of experience, Elara has collaborated with
                  leading publications including Vogue, Harper's Bazaar, The New
                  York Times Magazine, and National Geographic. Her distinctive
                  approach combines classical composition with contemporary
                  sensibility.
                </p>

                <p>
                  Her work has been exhibited internationally at galleries in
                  London, Tokyo, Milan, and New York. She holds an MFA in
                  Photography from the Royal College of Art and regularly
                  conducts workshops on portrait photography and visual
                  storytelling.
                </p>

                <p className="text-text-muted italic">
                  "I believe that every photograph should tell a story that
                  words cannot express. My goal is to capture not just what
                  people look like, but who they are."
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee text="Available for editorial commissions · Fine art prints · Commercial photography · Documentary projects" />

      {/* Awards Section */}
      <section
        id="awards"
        className="py-24 md:py-32 max-w-[1400px] mx-auto px-6 md:px-12"
      >
        <FadeInUp>
          <h2 className="font-display font-light text-[clamp(2.5rem,5vw,6rem)] text-text leading-none mb-16">
            Awards & Recognition
          </h2>
        </FadeInUp>

        <div className="space-y-1">
          {awards.map((award, index) => (
            <FadeInUp key={index} delay={0.05 * index}>
              <motion.div
                className="grid grid-cols-12 gap-4 py-4 border-b border-accent/10 hover:border-accent/30 transition-colors duration-300"
                whileHover={{ x: 10 }}
                transition={{
                  type: 'spring',
                  damping: 30,
                  stiffness: 200,
                }}
              >
                <div className="col-span-2 md:col-span-1">
                  <span className="font-sans text-sm text-accent">
                    {award.year}
                  </span>
                </div>
                <div className="col-span-10 md:col-span-7">
                  <span className="font-sans text-sm md:text-base text-text">
                    {award.award}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-4 md:text-right">
                  <span className="font-sans text-sm text-text-muted italic">
                    {award.category}
                  </span>
                </div>
              </motion.div>
            </FadeInUp>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 md:py-32 bg-bg border-t border-accent/20"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <FadeInUp>
            <h2 className="font-display font-light text-[clamp(2.5rem,5vw,6rem)] text-text leading-tight mb-12">
              <WordReveal>Let's create something beautiful</WordReveal>
            </h2>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            {/* Left: Contact Info */}
            <div className="md:col-span-5">
              <FadeInUp delay={0.2}>
                <div className="space-y-8">
                  <div>
                    <p className="font-sans text-xs tracking-widest text-text-muted uppercase mb-3">
                      Email
                    </p>
                    <a
                      href="mailto:hello@elaramorgan.com"
                      className="group relative inline-block"
                      data-cursor-hover
                    >
                      <span className="font-display text-2xl md:text-3xl text-text group-hover:text-accent transition-colors duration-300">
                        hello@elaramorgan.com
                      </span>
                      <svg
                        className="absolute -bottom-1 left-0 w-full h-[1px]"
                        style={{ overflow: 'visible' }}
                      >
                        <motion.line
                          x1="0"
                          y1="0"
                          x2="100%"
                          y2="0"
                          stroke="currentColor"
                          strokeWidth="1"
                          className="text-accent"
                          initial={{ pathLength: 0 }}
                          whileHover={{ pathLength: 1 }}
                          transition={{ duration: 0.4 }}
                        />
                      </svg>
                    </a>
                  </div>

                  <div>
                    <p className="font-sans text-xs tracking-widest text-text-muted uppercase mb-3">
                      Follow
                    </p>
                    <div className="space-y-3">
                      {[
                        { name: 'Instagram', handle: '@elaramorgan' },
                        { name: 'Behance', handle: 'elaramorgan' },
                        { name: 'LinkedIn', handle: 'elara-morgan' },
                      ].map((social) => (
                        <a
                          key={social.name}
                          href="#"
                          className="flex items-center gap-3 group"
                          data-cursor-hover
                        >
                          <span className="font-sans text-sm text-text-muted group-hover:text-accent transition-colors duration-300">
                            {social.name}
                          </span>
                          <span className="font-sans text-sm text-text">
                            {social.handle}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInUp>
            </div>

            {/* Right: Contact Form */}
            <div className="md:col-span-7">
              <FadeInUp delay={0.3}>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="w-full bg-transparent border-b border-text-muted focus:border-accent outline-none py-3 font-sans text-base text-text placeholder-text-muted transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="w-full bg-transparent border-b border-text-muted focus:border-accent outline-none py-3 font-sans text-base text-text placeholder-text-muted transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={5}
                      className="w-full bg-transparent border-b border-text-muted focus:border-accent outline-none py-3 font-sans text-base text-text placeholder-text-muted resize-none transition-colors duration-300"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative px-12 py-4 border border-accent text-accent font-sans text-sm tracking-widest uppercase overflow-hidden"
                    whileHover="hover"
                    data-cursor-hover
                  >
                    <motion.span
                      className="absolute inset-0 bg-accent"
                      initial={{ x: '-100%' }}
                      variants={{
                        hover: { x: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 group-hover:text-bg transition-colors duration-300">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                  </motion.button>
                </form>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-accent/10">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-text-muted">
            © 2024 Elara Morgan. All rights reserved.
          </p>
          <p className="font-sans text-xs text-text-muted italic">
            Crafted with intention.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

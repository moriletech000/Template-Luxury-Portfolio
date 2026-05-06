import { motion } from 'framer-motion';

interface MarqueeProps {
  text: string;
  repeat?: number;
  duration?: number;
}

export const Marquee = ({ text, repeat = 4, duration = 30 }: MarqueeProps) => {
  const repeatedText = Array(repeat).fill(text).join(' · ');

  return (
    <div className="overflow-hidden whitespace-nowrap py-8 border-y border-accent/20">
      <motion.div
        className="inline-block"
        animate={{
          x: [0, -1920],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <span className="text-accent font-sans text-sm tracking-widest uppercase">
          {repeatedText} · {repeatedText}
        </span>
      </motion.div>
    </div>
  );
};

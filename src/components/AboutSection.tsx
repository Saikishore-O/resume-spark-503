import { motion } from "framer-motion";
import { Target, Lightbulb, TrendingUp } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Who I Am",
    text: "A BSc Computer Science graduate with hands-on experience in Python, SQL, and data visualization tools. I love digging into data to find patterns and stories.",
  },
  {
    icon: Lightbulb,
    title: "What Drives Me",
    text: "I'm passionate about AI, machine learning, and turning complex datasets into clear, actionable insights that help businesses make smarter decisions.",
  },
  {
    icon: TrendingUp,
    title: "My Goal",
    text: "To join a data-driven team where I can grow as a data analyst, contribute to impactful projects, and continue learning cutting-edge tools and techniques.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-primary text-sm mb-2">01.</p>
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <card.icon className="text-primary mb-4" size={28} />
              <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

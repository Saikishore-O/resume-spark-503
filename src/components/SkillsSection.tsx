import { motion } from "framer-motion";
import { Code, Database, BarChart3, Users } from "lucide-react";

const categories = [
  {
    icon: Code,
    title: "Languages & Libraries",
    skills: ["Python", "Pandas", "NumPy", "SQL"],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    skills: ["Excel", "Tableau", "Power BI", "Data Cleaning"],
  },
  {
    icon: BarChart3,
    title: "AI & ML",
    skills: ["Machine Learning", "NLP", "Data Modeling", "Visualization"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Hard Working", "Punctual", "Goal Oriented", "Adaptability"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-primary text-sm mb-2">02.</p>
          <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <cat.icon className="text-primary" size={22} />
                <h3 className="font-semibold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono rounded-md bg-primary/10 text-primary border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

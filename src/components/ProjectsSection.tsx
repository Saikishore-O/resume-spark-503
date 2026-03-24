import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Aircraft Accident Injury Level Prediction",
    description:
      "Built a machine learning model to predict injury severity in aircraft accidents using ICAO dataset. Applied preprocessing and feature encoding, then trained a Linear Regression model for prediction.",
    tech: ["Python", "Machine Learning", "Data Preprocessing", "Linear Regression"],
    github: "https://github.com/Saikishore-O",
  },
  {
    title: "Email Spam Classification",
    description:
      "Built a spam classifier using NLP techniques, Naive Bayes, and SVM algorithms. Applied text preprocessing, feature extraction, and evaluated with precision and recall metrics.",
    tech: ["Python", "NLP", "Machine Learning", "Naive Bayes", "SVM"],
    github: "https://github.com/Saikishore-O",
  },
];

const allTech = [...new Set(projects.flatMap((p) => p.tech))];

const ProjectsSection = () => {
  const [filter, setFilter] = useState<string | null>(null);

  const filtered = filter
    ? projects.filter((p) => p.tech.includes(filter))
    : projects;

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="font-mono text-primary text-sm mb-2">03.</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Projects</h2>

          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setFilter(null)}
              className={`px-3 py-1.5 text-xs font-mono rounded-md border transition-colors ${
                !filter
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              All
            </button>
            {allTech.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-3 py-1.5 text-xs font-mono rounded-md border transition-colors ${
                  filter === t
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs font-mono rounded bg-primary/10 text-primary"
                  >
                    {t}
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

export default ProjectsSection;

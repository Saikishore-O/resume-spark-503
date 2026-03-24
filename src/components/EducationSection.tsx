import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "BSc in Computer Science",
    institution: "Deeksha Degree College (K.U)",
    year: "2021 – 2024",
    score: "CGPA: 6.44",
  },
  {
    degree: "Intermediate MPC",
    institution: "Ushodhaya Junior College",
    year: "2019 – 2021",
    score: "71%",
  },
  {
    degree: "SSC (TS)",
    institution: "ZPHS High School",
    year: "2018 – 2019",
    score: "CGPA: 7.0",
  },
];

const certifications = [
  {
    title: "AI Data Analyst",
    issuer: "Tech Mahindra SMART Academy",
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Simplilearn",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-primary text-sm mb-2">04.</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education & Certifications</h2>
        </motion.div>

        {/* Education */}
        <div className="space-y-4 mb-12">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-xl p-5 flex items-start gap-4"
            >
              <GraduationCap className="text-primary mt-1 shrink-0" size={22} />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{edu.year}</span>
                </div>
                <p className="text-sm text-muted-foreground">{edu.institution}</p>
                <p className="text-xs font-mono text-primary mt-1">{edu.score}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Award className="text-primary" size={20} />
            Certifications
          </h3>
          <div className="space-y-3">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="glass-card rounded-xl p-5"
              >
                <h4 className="font-semibold">{cert.title}</h4>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;

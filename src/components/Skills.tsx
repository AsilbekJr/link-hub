import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = [
    "React", "TypeScript", "Tailwind CSS", 
    "Node.js", "Next.js", "Figma", 
    "Git", "Vercel", "UI/UX"
  ];

  return (
    <div className="w-full mb-8 fade-in delay-300">
      <h2 className="text-xl font-semibold mb-4 text-center text-foreground">Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill) => (
          <Badge 
            key={skill} 
            variant="secondary" 
            className="px-3 py-1 cursor-default hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Skills;

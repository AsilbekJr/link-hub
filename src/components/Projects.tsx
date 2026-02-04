import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Dashboard",
            description: "To'liq boshqaruv paneli (Admin Dashboard). React va Recharts yordamida.",
            link: "#"
        },
        {
            title: "Task Management App",
            description: "Drag & Drop funksiyali vazifalar boshqaruvchisi. Zustand bilan.",
            link: "#"
        }
    ];

  return (
    <div className="w-full mb-8 space-y-4 fade-in delay-500">
        <h2 className="text-xl font-semibold mb-4 text-center text-foreground">Loyihalar</h2>
        {projects.map((project, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-md border-border/50 hover:bg-card/80 transition-colors">
                <CardHeader>
                    <CardTitle className="text-card-foreground">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button asChild size="sm" variant="outline" className="w-full">
                        <a href={project.link} target="_blank" rel="noreferrer">Ko'rish</a>
                    </Button>
                </CardFooter>
            </Card>
        ))}
    </div>
  )
}

export default Projects;

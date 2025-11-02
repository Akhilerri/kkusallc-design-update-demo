import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { CaseStudyModal } from "./sections/CaseStudyModal";
import { mockProjects } from "../data/mockProjects";

export function ProjectsGallery() {
  const [selectedProject, setSelectedProject] = useState<typeof mockProjects[0] | null>(null);

  // Get first 4 featured projects
  const featuredProjects = mockProjects.slice(0, 4);

  const handleProjectClick = (project: typeof mockProjects[0]) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-normal text-gray-900 mb-6">
              Recent Projects
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our diverse range of interior design and manufacturing projects, from luxury hotels to corporate headquarters, each tailored to our clients' unique vision.
            </p>
          </div>

          {/* Project Grid - 2x2 */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {featuredProjects.map((project) => {
              const primaryImage = project.images?.[0];
              return (
                <div
                  key={project.id}
                  className="group cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-3xl mb-4 aspect-[4/3]">
                    {primaryImage ? (
                      <img
                        src={primaryImage.url}
                        alt={primaryImage.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">No Image</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Project Info */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {project.segment || project.client || "Interior Design"}
                      </p>
                    </div>
                    <button 
                      className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:bg-primary transition-colors"
                      aria-label="View project details"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
      />
    </>
  );
}
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Project } from '../../../../shared/types/projects';

interface PortfolioGalleryProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
  className?: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const primaryImage = project.images?.[0];

  return (
    <div
      className="group cursor-pointer"
      onClick={() => onClick(project)}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-3xl mb-4 aspect-[4/3]">
        {primaryImage ? (
          <img
            src={primaryImage.url}
            alt={primaryImage.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-sm">No Image Available</span>
          </div>
        )}
        
        {/* Featured badge */}
        {project.isFeatured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-lg">
              Featured
            </span>
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
            {project.segment || project.client || 'Interior Design'}
          </p>
        </div>
        <button 
          className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0"
          aria-label="View project details"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  projects,
  onProjectClick,
  className = '',
}) => {
  if (projects.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <div className="text-gray-600 text-lg mb-2">No projects found</div>
        <p className="text-gray-500 text-sm">
          Try adjusting your filters to see more projects.
        </p>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      {/* Grid Layout - 2 columns on all screen sizes */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={onProjectClick}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioGallery;
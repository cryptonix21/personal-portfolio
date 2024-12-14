import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../constants/projects';

function Projects() {

  return (
    <section id="projects" className="py-16 bg-cream-50 pt-28">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects in blockchain development and web3 technologies
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <li 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg border border-cream-200 hover:border-uni-pink transition-all duration-300 flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold text-uni-pink mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed line-clamp-4">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 mb-6 flex-grow">
                {project.tech.map((tech, techIndex) => (
                  <li 
                    key={techIndex}
                    className="bg-cream-50 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium hover:bg-cream-100 transition-colors duration-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  className="text-gray-600 hover:text-uni-pink transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View GitHub Repository"
                >
                  <Github size={20} />
                </a>
                <a
                  href={project.live}
                  className="text-gray-600 hover:text-uni-pink transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Live Project"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
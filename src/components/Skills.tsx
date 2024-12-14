import { 
  Blocks, 
  Code2, 
  Database,
  FileCode,
  Globe,
  HardDrive,
  Layout,
  Server,
  Container,
  Cpu,
  Box,
  Network,
} from 'lucide-react';

function Skills() {
  const skills = {
    "Blockchain": [
      { name: "Solidity", icon: <FileCode className="w-6 h-6" /> },
      { name: "Smart Contracts", icon: <Blocks className="w-6 h-6" /> },
      { name: "Ethers.js", icon: <Globe className="w-6 h-6" /> },
      { name: "Foundry", icon: <HardDrive className="w-6 h-6" /> }
    ],
    "Frontend": [
      { name: "React", icon: <Code2 className="w-6 h-6" /> },
      { name: "TypeScript", icon: <Box className="w-6 h-6" /> },
      { name: "Next.js", icon: <Network className="w-6 h-6" /> },
      { name: "Tailwind CSS", icon: <Layout className="w-6 h-6" /> }
    ],
    "Backend": [
      { name: "Node.js", icon: <Server className="w-6 h-6" /> },
      { name: "Docker", icon: <Container className="w-6 h-6" /> },
      { name: "REST APIs", icon: <Cpu className="w-6 h-6" /> },
      { name: "MongoDB", icon: <Database className="w-6 h-6" /> }
    ]
  };

  return (
    <section id="skills" className="py-16 bg-cream-50 pt-52">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Skills & Expertise
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern web applications and blockchain solutions
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div 
              key={category}
              className="bg-white rounded-xl p-8 shadow-lg border border-cream-200 relative hover:border-uni-pink transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-uni-pink mb-6">
                {category}
              </h3>
              <ul className="grid grid-cols-2 gap-4">
                {items.map((skill) => (
                  <li 
                    key={skill.name}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-cream-50 transition-colors duration-300 group"
                  >
                    <span className="text-gray-600 group-hover:text-uni-pink transition-colors duration-300">
                      {skill.icon}
                    </span>
                    <span className="text-gray-700 font-medium text-sm">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
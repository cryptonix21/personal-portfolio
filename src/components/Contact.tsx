import { Github, Linkedin, Mail } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-16 bg-cream-50 pt-44 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          <div className="flex justify-center items-center gap-12">
            <a
              href="https://github.com/cryptonix21"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              <div className="p-5 rounded-full bg-white shadow-lg border border-cream-200 group-hover:border-uni-pink transition-colors duration-300">
                <Github className="w-8 h-8 text-gray-600 group-hover:text-uni-pink transition-colors duration-300" />
              </div>
              <span className="text-gray-600 group-hover:text-uni-pink transition-colors duration-300">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/gopalgurram/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              <div className="p-5 rounded-full bg-white shadow-lg border border-cream-200 group-hover:border-uni-pink transition-colors duration-300">
                <Linkedin className="w-8 h-8 text-gray-600 group-hover:text-uni-pink transition-colors duration-300" />
              </div>
              <span className="text-gray-600 group-hover:text-uni-pink transition-colors duration-300">LinkedIn</span>
            </a>

            <a
              href="mailto:gopalgurram1@gmail.com"
              className="group flex flex-col items-center gap-3"
            >
              <div className="p-5 rounded-full bg-white shadow-lg border border-cream-200 group-hover:border-uni-pink transition-colors duration-300">
                <Mail className="w-8 h-8 text-gray-600 group-hover:text-uni-pink transition-colors duration-300" />
              </div>
              <span className="text-gray-600 group-hover:text-uni-pink transition-colors duration-300">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
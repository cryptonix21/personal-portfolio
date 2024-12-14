import resumePDF from '../assets/Gopal_Gurram_Resume.pdf';

export const handleDownload = () => {
  const link = document.createElement('a');
  link.href = resumePDF;
  link.download = 'Gopal_Gurram_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export function Resume() {
  return (
    <section id="resume" className="py-16 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Resume</h2>
          <button
            onClick={handleDownload}
            className="bg-uni-pink hover:bg-uni-pink-dark text-white px-8 py-3 rounded-full transition-all duration-300 flex items-center space-x-2"
          >
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </section>
  );
}

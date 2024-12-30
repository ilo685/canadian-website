import React from 'react';

const FAQSection = () => {
  return (
    <div className="bg-blue-900 text-white p-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-start">
          <div className="w-2/3">
            <h1 className="text-4xl font-mono font-bold mb-8">FAQ</h1>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">
                Pourquoi faire appel à un consultant en immigration?
              </h2>
              <p className="text-gray-200 mb-6">
                Considérez votre consultant comme votre guide touristique à travers le complexe système d'immigration canadien.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                Que comprend la consultation?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Les types de programmes qui vous conviennent le mieux.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Où au Canada vos compétences sont nécessaires.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Comment se démarquer des autres candidats.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Conseils juridiques de RCIC.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Assistance et solutions personnalisées pour les cas compliqués.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-1/3 flex justify-end">
            <img 
              src="../../public/iccrc-logo.png" 
              alt="ICCRC Logo" 
              className="mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
import React from 'react';

const AdvantagesSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl  font-mono text-blue-800">Les avantages</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4  max-w-5xl mx-auto">
        <div className="text-center md:w-1/3">
          <img
            src="../../public/canada.svg"
            alt="Maple Leaf"
            className="w-12 mx-auto mb-4"
          />
          <p className="">
            L’immigration au Canada est l’opportunité d’une vie; vous pouvez poursuivre votre carrière et votre
            développement des affaires, profiter de bons soins de santé, d’une éducation de classe mondiale et d’un niveau de vie élevé.
          </p>
        </div>

        {/* Column 2 */}
        <div className="text-center md:w-1/3">
          <img
            src="../../public/canada.svg"
            alt="Maple Leaf"
            className="w-12 mx-auto mb-4"
          />
          <p className="">
            Les consultants d’UIS Canada maîtrisent les politiques, les règlements et les programmes
            d’immigration canadiens. Parlez avec un conseiller personnel des meilleurs itinéraires pour vous et votre famille.
          </p>
        </div>

        {/* Column 3 */}
        <div className="text-center md:w-1/3">
          <img
            src="../../public/canada.svg"
            alt="Maple Leaf"
            className="w-12 mx-auto mb-4"
          />
          <p className="">
            UIS Canada travaille exclusivement avec des consultants en immigration canadiens (RCIC) entièrement
            autorisés et réglementés. Les consultants d’UIS Canada sont certifiés par l’ICCRC.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSection;

import React, { useState } from 'react';

    const brandData = [
      { 
        name: 'CFN (CloudFusion Networks)', 
        story: 'The story of CloudFusion Networks...', 
        logo: 'https://abcwize.co.za/images/CFN%20(CloudFusion%20Networks).jpg' 
      },
      { 
        name: 'ECS (EcoConnect Solutions)', 
        story: 'The story of EcoConnect Solutions...', 
        logo: 'https://abcwize.co.za/images/ECS%20(EcoConnect%20Solutions).jpg' 
      },
      { 
        name: 'FGN (Fibre Green Networks)', 
        story: 'The story of Fibre Green Networks...', 
        logo: 'https://abcwize.co.za/images/FGN%20(Fibre%20Green%20Networks).jpg' 
      },
      { 
        name: 'SCS (Solar Cloud Solutions)', 
        story: 'The story of Solar Cloud Solutions...', 
        logo: 'https://abcwize.co.za/images/SCS%20(Solar%20Cloud%20Solutions).jpg' 
      },
      { 
        name: 'SLS (SkyLink Solutions)', 
        story: 'The story of SkyLink Solutions...', 
        logo: 'https://abcwize.co.za/images/SLS%20(SkyLink%20Solutions).jpg' 
      },
    ];

    function Storytelling() {
      const [currentStep, setCurrentStep] = useState(0);

      const nextStep = () => {
        if (currentStep < brandData.length - 1) {
          setCurrentStep(currentStep + 1);
        }
      };

      const prevStep = () => {
        if (currentStep > 0) {
          setCurrentStep(currentStep - 1);
        }
      };

      return (
        <div className="storytelling">
          <h2>{brandData[currentStep].name}</h2>
          <img src={brandData[currentStep].logo} alt={`${brandData[currentStep].name} logo`} className="logo" />
          <p>{brandData[currentStep].story}</p>
          <div className="navigation">
            <button onClick={prevStep} disabled={currentStep === 0}>Previous</button>
            <button onClick={nextStep} disabled={currentStep === brandData.length - 1}>Next</button>
          </div>
        </div>
      );
    }

    export default Storytelling;

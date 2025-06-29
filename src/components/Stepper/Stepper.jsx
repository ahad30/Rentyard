import React from "react";

const Stepper = ({ currentStep, steps }) => {
  return (
    <div className="w-full">
      <div className="flex items-center">
        {steps.map((_, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <div className="flex items-center">
                <div className={`flex-1 h-1 ${
                  index <= currentStep ? 'bg-blue-600' : 'bg-gray-200'
                }`} />
                <div className="w-4"></div> 
                <div className={`flex-1 h-1 ${
                  index <= currentStep ? 'bg-blue-600' : 'bg-gray-200'
                }`} />
              </div>
            )}

            <div className={`w-full h-1  ${
              index <= currentStep ? 'bg-[#272B35]' : 'bg-gray-200'
            }`} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
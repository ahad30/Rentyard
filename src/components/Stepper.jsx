import React from "react";

const Stepper = ({ currentStep, steps }) => {
  return (
    <div className="w-full">
      <div className="flex items-center">
        {steps.map((_, index) => (
          <React.Fragment key={index}>
            {/* Step line with gap */}
            {index > 0 && (
              <div className="flex items-center">
                <div className={`flex-1 h-1 ${
                  index <= currentStep ? 'bg-blue-600' : 'bg-gray-200'
                }`} />
                <div className="w-4"></div> {/* This creates the gap */}
                <div className={`flex-1 h-1 ${
                  index <= currentStep ? 'bg-blue-600' : 'bg-gray-200'
                }`} />
              </div>
            )}
            
            {/* Step circle */}
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
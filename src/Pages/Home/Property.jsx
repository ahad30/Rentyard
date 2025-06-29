import { useState } from "react";
import { ArrowDown, MoveDown, Plus, Upload } from "lucide-react";
import FormField from "../../components/FormFields/FormField";
import PhotoUpload from "../../components/PhotoUpload";
import Stepper from "../../components/Stepper/Stepper";
import Modal from "../../components/Modal/Modal";
import { AllModals } from "../../components/Modal/AllModals";
import { toast } from "sonner";
import { Accordion, AccordionTab } from 'primereact/accordion'; 
import StepperContent from "../../components/Stepper/StepperContent";

const Property = () => {
  const query = new URLSearchParams(location.search);
  const propertyType = query.get("propertyType");
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ["Property Info", "Payment"];
  const [modalState, setModalState] = useState({
    isOpen: false,
    currentField: null,
    currentData: {},
  });

  const [formData, setFormData] = useState({
    propertyAddress: {},
    petFees: {},
    leasingInfo: {},
    parking: {},
    charges: {},
    nearestEducationalInstitution: {},
    rentFrequencyPayment: {},
    nearestStations: {},
    applicationAgreement: {},
    nearestLandmark: {},
    aboutProperty: {},
    utilitiesProvider: {},
    communityAmenities: {},
    featuredPhotos: [],
    morePhotos: [],
    videos: [],
  });
  console.log(formData);

  const getTitle = () => {
    switch (propertyType) {
      case "single":
        return "Single House Property Information";
      case "apartment":
        return "Apartments Information";
      case "condominiums":
        return "Condominiums Information";
      default:
        return "Property Information";
    }
  };

  const handleAddClick = (fieldName) => {
    setModalState({
      isOpen: true,
      currentField: fieldName,
      currentData: formData[fieldName] || {},
    });
  };

  const handleModalSave = () => {
    setFormData((prev) => ({
      ...prev,
      [modalState.currentField]: modalState.currentData,
    }));
    setModalState({ isOpen: false, currentField: null, currentData: {} });
  };

  const handleModalClose = () => {
    setModalState({ isOpen: false, currentField: null, currentData: {} });
  };

  const handleFieldChange = (fieldName, value) => {
    setModalState((prev) => ({
      ...prev,
      currentData: {
        ...prev.currentData,
        [fieldName]: value,
      },
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderModalContent = () => {
    const Component = AllModals[modalState.currentField];
    if (!Component) return null;

    return (
      <Component
        data={modalState.currentData}
        onChange={(fieldName, value) => handleFieldChange(fieldName, value)}
      />
    );
  };

  
  return (
    <div className="max-w-7xl mx-auto bg-white p-8">
       <StepperContent currentStep={currentStep} getTitle={getTitle} handleAddClick={handleAddClick} formData={formData}/>

      <Stepper currentStep={currentStep} steps={steps} />

      {/* Navigation buttons */}
      <div className="flex items-center justify-between mt-10  pt-8">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className={`px-6 py-2 transition-colors ${
            currentStep === 0
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Back
        </button>
        <div>
        {currentStep === steps.length - 1 ? 
        <span className="me-2 text-[#6F6C6A]">Total with card charge: <span className="text-black font-bold">$970</span> </span>
        : ""}
          <button
          onClick={handleNext}
         
          className={`px-8 py-2 rounded-lg transition-colors bg-blue-600 text-white hover:bg-blue-700 `}
        >
          {currentStep === steps.length - 1 ? "Pay & add property" : "Next"}
        </button>
        </div>
      </div>
      {/* Modal */}
      <Modal
        isOpen={modalState.isOpen}
        onClose={handleModalClose}
        onSave={handleModalSave}
        title={`${
          modalState.currentField
            ? modalState.currentField.replace(/([A-Z])/g, " $1")
            : ""
        } `}
      >
        {renderModalContent()}
      </Modal>
    </div>
  );
};

export default Property;

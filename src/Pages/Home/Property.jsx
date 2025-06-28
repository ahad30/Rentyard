import { useState } from 'react';
import { ArrowDown, MoveDown, Plus, Upload } from 'lucide-react';
import FormField from '../../components/FormFields/FormField';
import PhotoUpload from '../../components/PhotoUpload';
import Stepper from '../../components/Stepper';
import Modal from '../../components/Modal/Modal';
import fieldConfigs from '../../utils/fieldConfigs';
import { AllModals } from '../../components/Modal/AllModals';


const Property = () => {
 const query = new URLSearchParams(location.search);
  const propertyType = query.get('propertyType')
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ['Property Info', 'Payment'];
   const [modalState, setModalState] = useState({
    isOpen: false,
    currentField: null,
    currentData: {}
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
    videos: []
  });
  console.log(formData)

  const getTitle = () => {
    switch(propertyType) {
      case 'single':
        return 'Single House Property Information';
      case 'apartment':
        return 'Apartments Information';
      case 'condo':
        return 'Condominiums Information';
      default:
        return 'Property Information';
    }
  };

  const handleAddClick = (fieldName) => {
    // const config = fieldConfigs[fieldName];
    // if (config) {
      setModalState({
        isOpen: true,
        currentField: fieldName,
        currentData: formData[fieldName] || {}
      });
    // }
  };

  const handleModalSave = () => {
    setFormData(prev => ({
      ...prev,
      [modalState.currentField]: modalState.currentData
    }));
    setModalState({ isOpen: false, currentField: null, currentData: {} });
  };

  const handleModalClose = () => {
    setModalState({ isOpen: false, currentField: null, currentData: {} });
  };

  const handleFieldChange = (fieldName, value) => {
    setModalState(prev => ({
      ...prev,
      currentData: {
        ...prev.currentData,
        [fieldName]: value
      }
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


  const renderStepContent = () => {
    switch(currentStep) {
      case 0:
        return (
    <div className="max-w-7xl mx-auto bg-white p-8">
      <h1 className="text-xl font-semibold text-gray-900 mb-8">{getTitle()}</h1>
      
    <div className="space-y-0 grid grid-cols-2 gap-5">
              <FormField 
                label="Property address" 
                isRequired={true}
                field="propertyAddress"
                onAddClick={handleAddClick}
              />
              
              <FormField 
                label="Pet fees(Optional, add fees if you allow pet)" 
                field="petFees"
                onAddClick={handleAddClick}
              />
              
              <FormField 
                label="Leasing info" 
                isRequired={true}
                field="leasingInfo"
                onAddClick={handleAddClick}
              />
              
              <FormField 
                label="Parking" 
                isOptional={true}
                field="parking"
                onAddClick={handleAddClick}
              />
              
              <FormField 
                label="Charges" 
                isRequired={true}
                field="charges"
                onAddClick={handleAddClick}
              />
              
              <FormField 
                label="Nearest educational institution" 
                isRecommended={true}
                field="nearestEducationalInstitution"
                onAddClick={handleAddClick}
              />
              
              <FormField 
                label="Rent frequency & payment reminder" 
                isRequired={true}
                field="rentFrequencyPayment"
                onAddClick={handleAddClick}
              />
              
              <FormField 
                label="Nearest stations" 
                isRecommended={true}
                field="nearestStations"
                onAddClick={handleAddClick}
              />
              
              <FormField 
                label="Application agreement" 
                isOptional={true}
                field="applicationAgreement"
                onAddClick={handleAddClick}
              />
              
              <FormField 
                label="Nearest landmark" 
                isRecommended={true}
                field="nearestLandmark"
                onAddClick={handleAddClick}
              />
              
              <FormField 
                label="About the property" 
                isOptional={true}
                field="aboutProperty"
                onAddClick={handleAddClick}
              />
              
              <FormField 
                label="Utilities provider" 
                isRecommended={true}
                field="utilitiesProvider"
                onAddClick={handleAddClick}
              />
              
              <FormField 
                label="Community's amenity/features" 
                isRecommended={true}
                field="communityAmenities"
                onAddClick={handleAddClick}
              />
            </div>

      {/* Property gallery section */}
      <div className="mt-12 mb-8 bg-white border border-[#E0E0E0] rounded-xl">
        <h2 className="text-lg font-medium text-gray-900  p-3">
          Property gallery<span className="text-[#6F6C6A]">(Its not unit photo)*</span>
        </h2>
        
        <div className="mb-6 bg-white border-t border-gray-200 p-3">
          <div className="flex items-center justify-between mb-4">
            <h1 className="w-[50%] text-sm font-medium text-gray-700">Featured photos*</h1>
            <h1 className="text-sm w-[50%] mx-auto text-gray-500">More photos<span className="text-gray-400">(optional)</span></h1>
          </div>
          
  <div className="flex flex-col lg:flex-row gap-3">
  {/* Featured photo - now matches grid height */}
  <div className="w-full lg:w-[25%]">
    <div className="h-full"> 
      <PhotoUpload 
        label="Upload cover photo" 
        isMain={true}
        className="h-[100%]"  
      />
    </div>
  </div>
  
  {/* More photos grid */}
  <div className="w-full lg:w-[60%]">  
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-x-3 gap-y-2">
      {[...Array(12)].map((_, index) => (
        <div key={index} className="aspect-square">
          <PhotoUpload 
          className="h-[100%] w-full" 
            
          /> 
        </div>
      ))}
    </div>
  </div>
</div>
        </div>

 
      </div>

             {/* Videos section */}
        <div className="mt-8 border border-[#E0E0E0] rounded-xl px-3">
          <div className="flex items-center justify-between py-4">
            <span className="text-sm text-gray-700">
              Videos <span className="text-gray-400">(optional)</span>
            </span>
            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
              <ArrowDown className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

    </div>
        );
      
      case 1:
        return  <div>Payment</div>;
      
      default:
        return null;
    }
  };


 
  return (


    <div className="max-w-7xl mx-auto bg-white p-8">
      
      {renderStepContent()}

      <Stepper currentStep={currentStep} steps={steps} />


      {/* Navigation buttons */}
      <div className="flex items-center justify-between  pt-8">
        <button 
          onClick={handleBack}
          disabled={currentStep === 0}
          className={`px-6 py-2 transition-colors ${
            currentStep === 0 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Back
        </button>
        <button 
          onClick={handleNext}
          // disabled={currentStep === steps.length - 1}
          className={`px-8 py-2 rounded-lg transition-colors bg-blue-600 text-white hover:bg-blue-700 `}
        >
          {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
       {/* Modal */}
      <Modal
        isOpen={modalState.isOpen}
        onClose={handleModalClose}
        onSave={handleModalSave}
        // title={fieldConfigs[modalState.currentField]?.title || ''}
      >
        {renderModalContent()}
      </Modal>
    </div>
  );
};

export default Property;
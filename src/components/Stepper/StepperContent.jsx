import React from "react";
import FormField from "../FormFields/FormField";
import PhotoUpload from "../PhotoUpload";
// import { Accordion, AccordionTab } from 'primereact/accordion';
import { ArrowDown, ChevronDown, Upload } from "lucide-react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import SubscriptionPlans from "../../Pages/Home/SubscriptionPlans";

function Icon({ id, open }) {
  return (
    <ArrowDown
      className={`${
        id === open ? "rotate-180" : ""
      } h-4 w-4 transition-transform 
      `}
    />
  );
}

const StepperContent = ({
  currentStep,
  getTitle,
  handleAddClick,
  formData,
}) => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  switch (currentStep) {
    case 0:
      return (
        <div className="max-w-7xl mx-auto bg-white p-8">
          <h1 className="text-xl font-semibold text-gray-900 mb-8">
            {getTitle()}
          </h1>

          <div className="space-y-0 flex flex-col lg:flex-row gap-5">
            <div className="flex-1 space-y-4">
              <div>
                <FormField
                  label="Property address"
                  isRequired={true}
                  field="propertyAddress"
                  onAddClick={handleAddClick}
                />
                {formData?.propertyAddress &&
                  Object.keys(formData.propertyAddress).length > 0 && (
                    <div className=" border-gray-200 border-t-0 border-l border-b border-r p-3 font-bold">
                      <>
                        {formData?.propertyAddress.propertyName},{" "}
                        {formData.propertyAddress.propertyWebsite},{" "}
                        {formData.propertyAddress.aptSuit}
                      </>
                    </div>
                  )}
              </div>

              <div>
                <FormField
                  label="Leasing info"
                  isRequired={true}
                  field="leasingInfo"
                  onAddClick={handleAddClick}
                />

                {formData?.leasingInfo && (
                  <>{formData?.leasingInfo.leasingManagerName}</>
                )}
              </div>

              <FormField
                label="Charges"
                isRequired={true}
                field="charges"
                onAddClick={handleAddClick}
              />

               <FormField
                label="Rent frequency & payment reminder"
                isRequired={true}
                field="rentFrequencyPayment"
                onAddClick={handleAddClick}
              />

              <FormField
                label="Pet fees(Optional, add fees if you allow pet)"
                field="petFees"
                onAddClick={handleAddClick}
              />
              
              <FormField
                label="Parking"
                isOptional={true}
                field="parking"
                onAddClick={handleAddClick}
              />

              

              <FormField
                label="Nearest educational institution"
                isRecommended={true}
                field="nearestEducationalInstitution"
                onAddClick={handleAddClick}
              />

             
            </div>

            <div className="flex-1 space-y-4">
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
          </div>

          {/* Property gallery section */}
          <div className="mt-12 mb-8 bg-white border border-[#E0E0E0] rounded-xl">
            <h2 className="text-lg font-medium text-gray-900  p-3">
              Property gallery
              <span className="text-[#6F6C6A]">(Its not unit photo)*</span>
            </h2>

            <div className="mb-6 bg-white border-t border-gray-200 p-3">
              <div className="flex items-center justify-between mb-4">
                <h1 className="w-[50%] text-sm font-medium text-gray-700">
                  Featured photos*
                </h1>
                <h1 className="text-sm w-[50%] mx-auto text-gray-500">
                  More photos<span className="text-gray-400">(optional)</span>
                </h1>
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
                        <PhotoUpload className="h-[100%] w-full" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Videos section */}

          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              {" "}
              <div className="flex items-center w-full p-4 ">
                <span className="text-sm font-medium text-gray-700">
                  Videos{" "}
                  <span className="text-gray-400 font-normal">(optional)</span>
                </span>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div className="p-4  flex flex-col md:flex-row items-start gap-5">
                <div className=" space-y-2 min-w-[200px]">
                  <h3 className="text-sm font-medium text-gray-700">
                    Property Video (optional)
                  </h3>
                  <div className="h-full">
                    <PhotoUpload isVideo={true} className="h-[100%] p-3" />
                  </div>
                </div>

                <div className=" space-y-2 min-w-[100px]">
                  <h3 className="text-sm font-medium text-gray-700">
                    Property Virtual Tour (optional)
                  </h3>
                  <div className="h-full">
                    <PhotoUpload isVideo={true} className="h-[100%] p-3" />
                  </div>
                </div>

                <div className="space-y-2 min-w-[100px]">
                  <h3 className="text-sm font-medium text-gray-700">
                    Property Aerial Video (optional)
                  </h3>
                  <div className="h-full">
                    <PhotoUpload isVideo={true} className="h-[100%] p-3" />
                  </div>
                </div>
              </div>
            </AccordionBody>
          </Accordion>
        </div>
      );

    case 1:
      return <SubscriptionPlans />;

    default:
      return null;
  }
};

export default StepperContent;

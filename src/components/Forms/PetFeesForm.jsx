import CheckboxField from "../FormFields/CheckboxField";
import InputField from "../FormFields/InputField";
import SelectField from "../FormFields/SelectField";
import TextareaField from "../FormFields/TextareaField";

const PetFeesForm = ({ data, onChange}) => {
  return (
    <div className="space-y-4">
   
        <>
         <div className="flex gap-5 items-center w-full">
               <div className="flex-1">
                  <SelectField
            label="Allowed Pet Types"
            value={data.petType || ''}
            onChange={(val) => onChange('petType', val)}
            options={[
              { value: "cats", label: "Cats only" },
              { value: "dogs", label: "Dogs only" },
              { value: "both", label: "Both cats and dogs" },
              { value: "none", label: "No pets" }
            ]}
            required
          />
               </div>
         
     <div className="flex-1">
           <InputField
            label="Max weight(LB)"
            value={data.maxWeight || ''}
            onChange={(val) => onChange('maxWeight', val)}
            type="number"
            required
          />
     </div>
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
           <InputField
            label="Pet Deposit"
            value={data.petDeposit || ''}
            onChange={(val) => onChange('petDeposit', val)}
            type="number"
            required
          />
           <InputField
            label="Monthly Pet Fee"
            value={data.monthlyPetFee || ''}
            onChange={(val) => onChange('monthlyPetFee', val)}
            type="number"
            required
          />
          <InputField
            label="One time Pet Fee"
            value={data.onetimePetFee || ''}
            onChange={(val) => onChange('onetimePetFee', val)}
            type="number"
            required
          />
  
         </div>
        
        </>
   
      
    </div>
  );
};

export default PetFeesForm;
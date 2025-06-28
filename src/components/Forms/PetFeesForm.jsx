import CheckboxField from "../FormFields/CheckboxField";
import InputField from "../FormFields/InputField";
import SelectField from "../FormFields/SelectField";
import TextareaField from "../FormFields/TextareaField";

const PetFeesForm = ({ data, onChange}) => {
  return (
    <div className="space-y-4">
   
        <>
          <InputField
            label="Pet Deposit"
            value={data.petDeposit || ''}
            onChange={(val) => onChange('petDeposit', val)}
            type="number"
          />
          <InputField
            label="Monthly Pet Fee"
            value={data.petFee || ''}
            onChange={(val) => onChange('petFee', val)}
            type="number"
          />
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
          />
          <TextareaField
            label="Pet Restrictions"
            value={data.petRestrictions || ''}
            onChange={(val) => onChange('petRestrictions', val)}
          />
        </>
   
      
    </div>
  );
};

export default PetFeesForm;
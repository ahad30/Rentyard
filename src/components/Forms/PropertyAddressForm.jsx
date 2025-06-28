// components/ModalForms/PropertyAddressForm.jsx
import InputField from "../FormFields/InputField";
import SelectField from "../FormFields/SelectField";

export default function PropertyAddressForm({ data, onChange }) {
  return (
     <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InputField
          label="Street Address"
          value={data.street || ''}
          onChange={(val) => onChange('street', val)}
          required
        />
        <InputField
          label="City"
          value={data.city || ''}
          onChange={(val) => onChange('city', val)}
          required
        />
        <InputField
          label="State"
          value={data.state || ''}
          onChange={(val) => onChange('state', val)}
          required
        />
        <InputField
          label="ZIP Code"
          value={data.zipCode || ''}
          onChange={(val) => onChange('zipCode', val)}
          required
        />
      </div>
      <SelectField
        label="Country"
        value={data.country || ''}
        onChange={(val) => onChange('country', val)}
        options={[
          { value: "us", label: "United States" },
          { value: "ca", label: "Canada" },
          { value: "uk", label: "United Kingdom" }
        ]}
        required
      />

    </div>
  );
}

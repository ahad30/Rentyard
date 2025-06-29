import InputField from "../FormFields/InputField";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { useEffect, useState } from "react";

export default function PropertyAddressForm({ data, onChange }) {
  const [country, setCountry] = useState(data?.country || "");
  const [region, setRegion] = useState(data?.region || "");

  // Sync local state with parent form data
  useEffect(() => {
    setCountry(data?.country || "");
    setRegion(data?.region || "");
  }, [data?.country, data?.region]);

  const handleCountryChange = (val) => {
    setCountry(val);
    onChange("country", val);
    // Reset region when country changes
    setRegion("");
    onChange("region", "");
  };

  const handleRegionChange = (val) => {
    setRegion(val);
    onChange("region", val);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InputField
          label="Property name as identifier*"
          value={data.propertyName || ''}
          onChange={(val) => onChange('propertyName', val)}
          required
          placeholder="Dallas apartments complex"
        />
        <InputField
          label="Property website(optional)"
          value={data.propertyWebsite || ''}
          onChange={(val) => onChange('propertyWebsite', val)}
          placeholder="www.example.com"
        />
        <InputField
          label="Apt, suite, unit (if applicable)"
          value={data.aptSuit || ''}
          onChange={(val) => onChange('aptSuit', val)}
          required
          placeholder="123"
        />
        <InputField
          label="Street Address"
          value={data.street || ''}
          onChange={(val) => onChange('street', val)}
          required
          placeholder="111 Austin Ave"
        />
        <InputField
          label="City"
          value={data.city || ''}
          onChange={(val) => onChange('city', val)}
          required
          placeholder="Dallas"
        />
        <InputField
          label="Total apartment unit"
          value={data.apartmentUnit || ''}
          onChange={(val) => onChange('apartmentUnit', val)}
          required
          placeholder="e.g. 1234"
        />
        <InputField
          label="ZIP Code"
          value={data.zipCode || ''}
          onChange={(val) => onChange('zipCode', val)}
          required
          placeholder="12354"
        />
      
        <div>
          <label className="block text-xs font-semibold mb-2">
            Country/Region*
          </label>
          <CountryDropdown
            value={country}
            onChange={handleCountryChange}
            className="w-full py-2 border rounded-md text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold mb-2">
            State/Province*
          </label>
          <RegionDropdown
            country={country}
            value={region}
            onChange={handleRegionChange}
            className="w-full py-2 border rounded-md text-sm"
            disableWhenEmpty={true}
            blankOptionLabel="Select region..."
          />
        </div>
      </div>
    </div>
  );
}
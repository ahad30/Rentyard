import { UploadIcon } from "lucide-react";
import Select from "react-select";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { PhoneInput } from 'react-international-phone';


const customRender = (props) => {
  const {
    options,
    value,
    disabled,
    onChange,
    onBlur,
    customProps,
    ...selectProps
  } = props;

  return (
    <Select
      {...selectProps}
      options={options}
      isDisabled={disabled}
      isSearchable={true}
      isClearable={true}
      value={customProps.reactSelectValue}
      onChange={customProps.onChange}
      className="text-sm"
      classNamePrefix="select"
    />
  );
};

const RoleSpecificFields = ({
  selectedRole,
  formData,
  handleInputChange,
  country,
  setCountry,
  region,
  setRegion
}) => {
  if (!selectedRole) return null;

  switch (selectedRole) {
    case "landlord":
      return (
        <div className="mb-8 bg-gray-100 rounded-lg">
          <h1 className="text-sm font-medium text-[#6F6C6A] p-3">
            Proof of ownership
          </h1>

          <div className="p-6 bg-white  border border-gray-200">
            <label className="text-sm text-[#272B35]  font-semibold">
              Ownership docs*
            </label>
            <button className="flex items-center bg-gray-100 px-32 rounded-xl py-2 text-sm border-2 border-dashed border-[#E0E0E0] mt-3">
              <UploadIcon size={19} className=" mr-2 text-[#272B35]" />
              <p className="text-[#6F6C6A]">(Pdf only)</p>
            </button>
          </div>
        </div>
      );

    case "realtor":
      return (
        <div className="mb-8 bg-gray-100  rounded-lg">
          <h1 className="text-sm font-medium text-[#6F6C6A] p-3">
            Realtor Verification
          </h1>
          <div className="p-6 bg-white  border border-gray-200 grid grid-cols-3 gap-5">
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Licensed number*
              </label>
              <input
                type="text"
                placeholder="0000-000-000"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-3"
                value={formData.licensedNumber}
                onChange={(e) =>
                  handleInputChange("licensedNumber", e.target.value)
                }
              />
            </div>

            <div>
              <label className="text-sm text-[#272B35]  font-semibold">
                Additional documents for realtor
              </label>
              <button className="flex items-center bg-gray-100 px-32 rounded-xl py-2 text-sm border-2 border-dashed border-[#E0E0E0] mt-3">
                <UploadIcon size={19} className=" mr-2 text-[#272B35]" />
                <p className="text-[#6F6C6A]">(Pdf only)</p>
              </button>
            </div>

            <div>
              <label className="text-sm text-[#272B35]  font-semibold">
                Agreement with landlord*
              </label>
              <button className="flex items-center bg-gray-100 px-32 rounded-xl py-2 text-sm border-2 border-dashed border-[#E0E0E0] mt-3">
                <UploadIcon size={19} className=" mr-2 text-[#272B35]" />
                <p className="text-[#6F6C6A]">(Pdf only)</p>
              </button>
            </div>
          </div>
        </div>
      );

    case "management":
      return (
        <div className="mb-8 bg-gray-100  rounded-lg">
          <h1 className="text-sm font-medium text-[#6F6C6A] p-3">
            Company & office info
          </h1>
          <div className="p-6 bg-white  border border-gray-200 grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
            <div>
              <label className="block text-xs font-semibold mb-1">
                Company name*
              </label>
              <input
                type="text"
                placeholder="RentYard group"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                value={formData.companyName}
                onChange={(e) =>
                  handleInputChange("companyName", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">
                Country/Region*
              </label>
              <div className="w-full">
                <CountryDropdown
                  value={country?.value || ""}
                  name="countryField"
                  customRender={customRender}
                  customProps={{
                    reactSelectValue: country,
                    classNamePrefix: "country-",
                    onChange: (value) => {
                      setCountry(value ? value : undefined);
                      setRegion(null);
                      handleInputChange("countryField", value?.value || "");
                    },
                  }}
                />
              </div>
            </div>

                        <div>
              <label className="block text-xs font-semibold mb-1">
                State/Province*
              </label>
              <div className="w-full">
                <RegionDropdown
                  disabled={!country}
                  country={country?.value || ""}
                  value={region?.value || null}
                  name="regionField"
                  customRender={customRender}
                  customProps={{
                    reactSelectValue: region,
                    classNamePrefix: "region-",
                    onChange: (value) => {
                      setRegion(value ? value : undefined);
                      handleInputChange("regionField", value?.value || "");
                    },
                  }}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">
                Contact email*
              </label>
              <input
                type="email"
                placeholder="example@company.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                value={formData.contactEmail}
                onChange={(e) =>
                  handleInputChange("contactEmail", e.target.value)
                }
              />
            </div>

            <div className="-mt-1">
              <label className="text-xs  font-semibold">
                Agreement with landlord/owner*
              </label>
              <button className="flex items-center bg-gray-100  rounded-xl py-2 text-sm border-2 border-dashed border-[#E0E0E0] w-full justify-center">
                <UploadIcon size={19} className=" mr-2 text-[#272B35]" />
                <p className="text-[#6F6C6A]">(Pdf only)</p>
              </button>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1">
                Company identifier (EIN/TIN)*
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                value={formData.companyIdentifierEIN}
                onChange={(e) =>
                  handleInputChange("companyIdentifierEIN", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">
                Office address*
              </label>
              <input
                type="text"
                placeholder="10 Drury lane"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                value={formData.officeAddress}
                onChange={(e) =>
                  handleInputChange("officeAddress", e.target.value)
                }
              />
            </div>


           <div className="col-span-1">
  <label className="block text-xs font-semibold mb-1">
    Phone number*
  </label>
  <div className="">
    <PhoneInput
      defaultCountry="us"
      value={formData.phoneNumber}
      onChange={(phone) => handleInputChange("phoneNumber", phone)}
      inputClassName="w-full px-3 py-2 border border-gray-300 !rounded-r-lg focus:outline-none  text-sm"
       countrySelectorStyleProps={{
        buttonClassName: "!px-2 ",
        
      }}

    />
  </div>
</div>
  
            <div>
              <label className="block text-xs font-semibold mb-1">
                Year in use*
              </label>
              <input
                type="text"
                placeholder="5003"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                value={formData.yearInUse}
                onChange={(e) => handleInputChange("yearInUse", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">
                Apt, suite, unit (if applicable)
              </label>
              <input
                type="text"
                placeholder="2501"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                value={formData.aptSuite}
                onChange={(e) => handleInputChange("aptSuite", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">
                Zip code*
              </label>
              <input
                type="text"
                placeholder="10007"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                value={formData.zipCode}
                onChange={(e) => handleInputChange("zipCode", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">
                Your job title*
              </label>
              <input
                type="text"
                placeholder="Software Engineer"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                value={formData.jobTitle}
                onChange={(e) => handleInputChange("jobTitle", e.target.value)}
              />
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default RoleSpecificFields;

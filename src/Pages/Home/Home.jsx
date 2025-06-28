import { useState } from "react";
import {
  HomeIcon,
  BuildingOfficeIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import { KeyRound, User } from "lucide-react";
import RoleSpecificFields from "../../components/RoleSpecificFields";



const Home = () => {
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [formData, setFormData] = useState({
    realtorVerification: "",
    licensedNumber: "",
    additionalDocuments: "",
    agreementWithRentyard: false,
    companyBrokerInfo: "",
    companyName: "",
    companyIdentifierEIN: "",
    yearInUse: "",
    officeAddress: "",
    aptSuite: "",
    phoneNumber: "",
    cityRegion: "",
    zipCode: "",
    contactEmail: "",
    jobTitle: "",
    countryField: "",
    regionField: "",
 
  });

  const handlePropertyTypeSelect = (type) => {
    setSelectedPropertyType(type);
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleInputChange = (field, value) => {
    console.log(field, value);
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  
  return (
    <div className="py-5">
      <div className="w-full max-w-7xl mx-auto bg-white p-8">
        {/* Property type */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-6">
            Property type
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div
              className={`p-4 border-2 rounded-xl cursor-pointer flex items-center gap-5 transition-all ${
                selectedPropertyType === "single"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => handlePropertyTypeSelect("single")}
            >
              <HomeIcon className="w-6 h-6 font-semibold" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  Single house Property
                </h3>
                <p className="text-xs text-gray-500 mt-3">
                  Single unit house for single family
                </p>
              </div>
            </div>

            <div
              className={`p-4 border-2 rounded-xl cursor-pointer transition-all flex items-center gap-4 ${
                selectedPropertyType === "apartment"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => handlePropertyTypeSelect("apartment")}
            >
              <BuildingOfficeIcon className="w-6 h-6 font-semibold" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  Apartments complex
                </h3>
                <p className="text-xs text-gray-500 mt-3">
                  Multiple unit house for  families
                </p>
              </div>
            </div>

            <div
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all flex items-center gap-4 ${
                selectedPropertyType === "condo"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => handlePropertyTypeSelect("condo")}
            >
              <BuildingOffice2Icon className="w-6 h-6 font-semibold" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  Condominiums
                </h3>
                <p className="text-xs text-gray-500 mt-3">
                      Multiple unit house for  families
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Roles */}

        <div
          className={`mb-8 ${
            !selectedPropertyType
              ? "opacity-50 pointer-events-none cursor-not-allowed"
              : ""
          }`}
        >
          <h2 className="text-lg font-bold text-gray-900 mb-6">
            Select your role
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all flex items-center gap-4 ${
                selectedRole === "landlord"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => handleRoleSelect("landlord")}
            >
              <KeyRound className="w-6 h-6 font-semibold" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">Landlord</h3>
                <p className="text-xs text-gray-500 mt-3">
                  Owner of the property
                </p>
              </div>
            </div>

            <div
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all flex items-center gap-4 ${
                selectedRole === "realtor"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => handleRoleSelect("realtor")}
            >
              <User className="w-6 h-6 font-semibold" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">Realtor</h3>
                <p className="text-xs text-gray-500 mt-3">
                  Manage property on behalf of owner
                </p>
              </div>
            </div>

            <div
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all flex items-center gap-4 ${
                selectedRole === "management"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`} 
              onClick={() => handleRoleSelect("management")}
            >
              <BuildingStorefrontIcon className="w-6 h-6 font-semibold" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  Property management company
                </h3>
                <p className="text-xs text-gray-500 mt-3">
                  For management company
                </p>
              </div>
            </div>
          </div>
        </div>

        <RoleSpecificFields selectedRole={selectedRole} formData={formData} handleInputChange={handleInputChange} country={country} setCountry={setCountry} region={region} setRegion={setRegion}/>

        {/* Agreement */}

        <div
          className={`'mb-8 mt-5' ${
            !selectedRole
              ? "opacity-50 pointer-events-none cursor-not-allowed"
              : ""
          }`}
        >
          <label className="flex items-center text-sm">
            <input
              type="checkbox"
              className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded"
              checked={formData.agreementWithRentyard}
              onChange={(e) =>
                handleInputChange("agreementWithRentyard", e.target.checked)
              }
            />
            Accept RentYard property adding Terms & Conditions
          </label>
        </div>

        {/* Get Started Button */}
        <div className="flex items-center justify-end">
          <button
         
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:cursor-not-allowed disabled:bg-gray-300"
            disabled={
              !selectedPropertyType ||
              !selectedRole ||
              !formData.agreementWithRentyard ||
              (selectedRole === "management" && (!country || !region))
            }
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
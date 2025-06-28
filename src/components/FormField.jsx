import { Plus } from "lucide-react";

  const FormField = ({ label, isRequired = false, isOptional = false, isRecommended = false, placeholder = "", field, type = "text" }) => (
    <div className="flex items-center justify-between py-4 border rounded-xl px-3 border-[#E0E0E0]">
      <div className="flex-1">
        <label className="text-sm text-gray-700">
          {label}
          {isRequired && <span className="text-red-500 ml-1">(Required)</span>}
          {isOptional && <span className="text-gray-400 ml-1">(Optional)</span>}
          {isRecommended && <span className="text-gray-400 ml-1">(Optional but recommended)</span>}
        </label>
      </div>
     <button 
    //   onClick={onClick}
      className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
    >
      <Plus className="w-4 h-4 mr-1" />
      Add
    </button>
    </div>
  );

export default FormField
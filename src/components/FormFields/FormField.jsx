import { Plus } from 'lucide-react';
import React from 'react'

const FormField = ({ label, isRequired, isOptional, isRecommended, field, onAddClick }) => {
  const getStatusText = () => {
    if (isRequired) return <span className="text-red-500">(Required)</span>;
    if (isRecommended) return <span className="text-gray-400">(recommended)</span>;
    if (isOptional) return <span className="text-gray-400">(optional)</span>;
    return null;
  };

  return (
    <div className="border  border-gray-200 rounded-t-lg p-4 hover:border-gray-300 transition-colors">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-900">
            {label} {getStatusText()}
          </h3>
        </div>
        <button
          onClick={() => onAddClick(field)}
          className=" text-blue-500 hover:bg-blue-50 flex items-center justify-center px-2 py-1"
        >
          <Plus className="w-4 h-4 mr-2" /> Add
        </button>
      </div>
    </div>
  );
};

export default FormField
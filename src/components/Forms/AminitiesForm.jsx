import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

const AmenitiesForm = ({ data = {}, onChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Available amenities with their icons (using Lucide React icons or simple text)
  const availableAmenities = [
    { id: 'airConditioning', name: 'Air conditioning', icon: '❄️' },
    { id: 'cableReady', name: 'Cable ready', icon: '📺' },
    { id: 'ceilingFan', name: 'Ceiling fan', icon: '🌀' },
    { id: 'highCeilings', name: 'High ceilings', icon: '⬆️' },
    { id: 'privateBalcony', name: 'Private balcony', icon: '🏠' },
    { id: 'refrigerator', name: 'Refrigerator', icon: '🧊' },
    { id: 'woodedViews', name: 'Wooded views', icon: '🌲' },
    { id: 'wifiHookup', name: 'WiFi hookup', icon: '📶' },
    { id: 'hardwoodFloor', name: 'Hardwood Floor (home)', icon: '🪵' },
    { id: 'hardwoodFloorHomes', name: 'Hardwood Floor (homes)', icon: '🏘️' },
    { id: 'fireplace', name: 'Fireplace (home)', icon: '🔥' },
    { id: 'firstAidKit', name: 'First aid kit', icon: '🩹' },
    { id: 'carbonMonoxideAlarm', name: 'Carbon monoxide alarm', icon: '⚠️' },
    { id: 'expandedPatio', name: 'Expanded patio (home)', icon: '🏡' },
    { id: 'freeParkingPremises', name: 'Free parking on premises', icon: '🅿️' },
    { id: 'fireExtinguisher', name: 'Fire extinguisher', icon: '🧯' }
  ];

  const selectedAmenities = data.amenities || [];

  const filteredAmenities = availableAmenities.filter(amenity =>
    amenity.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !selectedAmenities.find(selected => selected.id === amenity.id)
  );

  const handleAmenitySelect = (amenity) => {
    const newSelected = [...selectedAmenities, amenity];
    onChange('amenities', newSelected);
  };

  const handleAmenityRemove = (amenityId) => {
    const newSelected = selectedAmenities.filter(amenity => amenity.id !== amenityId);
    onChange('amenities', newSelected);
  };

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search amenities"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
      </div>

      {/* Available Amenities */}
      {filteredAmenities.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Available Amenities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredAmenities.map((amenity) => (
              <button
                key={amenity.id}
                onClick={() => handleAmenitySelect(amenity)}
                className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-left"
              >
                <span className="text-lg">{amenity.icon}</span>
                <span className="text-gray-700">{amenity.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Selected Amenities */}
      {selectedAmenities.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Selected Amenities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {selectedAmenities.map((amenity) => (
              <div
                key={amenity.id}
                className="flex items-center justify-between gap-3 p-3 bg-white border border-gray-200 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{amenity.icon}</span>
                  <span className="text-gray-700">{amenity.name}</span>
                </div>
                <button
                  onClick={() => handleAmenityRemove(amenity.id)}
                  className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {selectedAmenities.length === 0 && filteredAmenities.length === 0 && searchTerm && (
        <div className="text-center py-8 text-gray-500">
          <p>No amenities found matching "{searchTerm}"</p>
        </div>
      )}

      {selectedAmenities.length === 0 && !searchTerm && (
        <div className="text-center py-8 text-gray-500">
          <p>No amenities selected. Search and click to add amenities.</p>
        </div>
      )}
    </div>
  );
};

export default AmenitiesForm;
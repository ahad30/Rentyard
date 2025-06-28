import { Upload } from "lucide-react";

const PhotoUpload = ({ isMain = false, className }) => (
  <div className={`
    border-2 border-dashed border-[#316EED] rounded-lg 
    flex items-center justify-center 
    ${isMain ? 'bg-gray-50' : 'bg-[#F6F9FF]'} 
    ${className}
  `}>
   <div>
     <div className="flex w-[50%] mx-auto flex-col items-center justify-center text-center px-6 py-2 border-2 border-dashed border-[#316EED] rounded-lg">
      <Upload className="w-5 h-5 text-[#272B35] mb-2" />
      
    </div>
    <p className="text-lg font-semibold mt-3">
        {isMain ? 'Upload cover photo' : ''}
      </p>
    <p className="text-sm font-semibold text-[#6F6C6A] mt-1 text-center">
        {isMain ? '(Jpg, png only)' : ''}
      </p>

   </div>
  </div>
);

export default PhotoUpload;
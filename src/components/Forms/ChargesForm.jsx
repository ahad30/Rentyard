import React from 'react'
import InputField from '../FormFields/InputField'
import SelectField from '../FormFields/SelectField'

const ChargesForm = ({data, onChange}) => {
  return (
<div className="flex flex-col lg:flex-row items-end w-full">
  {/* Application Fee Input */}
  <div className="flex-1">
    <InputField
      label="Application fee(one-time)"
      value={data.applicationFee || ''}
      onChange={(val) => onChange('applicationFee', val)}
      required
      placeholder=""
      type="number"
      className={""}
    />
  </div>
  
  {/* Select Field */}
  <div className="w-[180px] -ml-[150px]">
    <SelectField
      value={data.applicationType || ''}
      onChange={(val) => onChange('applicationType', val)}
      options={[
        { label: "All 18+ applicant", value: "All 18+ applicant" },
        { label: "Primary Only", value: "Primary Only" },
      ]}
      placeholder="Select type"
      className={"border-none mb-2"}
    />
  </div>
  
  {/* Admin Fee Input */}
  <div className="flex-1">
    <InputField
      label="Admin fee(one-time)"
      value={data.adminFee || ''}
      onChange={(val) => onChange('adminFee', val)}
      required
      placeholder=""
      type="number"
    />
  </div>
</div>
  )
}

export default ChargesForm
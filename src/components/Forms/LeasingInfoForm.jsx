import React from 'react'
import InputField from '../FormFields/InputField'
import { PhoneInput } from 'react-international-phone'
import CheckboxField from '../FormFields/CheckboxField'

const LeasingInfoForm = ({data, onChange}) => {
  return (
       <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Leasing manager name"
          value={data.leasingManagerName || ''}
          onChange={(val) => onChange('leasingManagerName', val)}
          required
          placeholder="Dallas apartments complex"
        />
         <div className="">
           <label className="block text-sm  mb-2">
            Country/Region*
          </label>
           <PhoneInput
             defaultCountry="us"
             value={data.phoneNumber}
             onChange={(phone) => onChange("phoneNumber", phone)}
             inputClassName="w-full px-3 py-2 border border-gray-300 !rounded-r-lg focus:outline-none  text-sm"
              countrySelectorStyleProps={{
               buttonClassName: "!px-2 ",
               
             }}
       
           />
         </div>
        <InputField
          label="Leasing manager email"
          value={data.leasingManagerEmail || ''}
          onChange={(val) => onChange('leasingManagerEmail', val)}
          required
          placeholder="example@gmail.com"
          type='email'
        />

        <CheckboxField
          label="Address(same as property)"
          checked={data?.addressConfirmation || false}
          onChange={(val) => onChange('addressConfirmation', val)}
          required
        />

      </div>
    </div>
  )
}

export default LeasingInfoForm
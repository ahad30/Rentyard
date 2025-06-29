import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import SelectField from "../FormFields/SelectField";


const RentForm = ({ data, onChange }) => {
  const [reminderDate, setReminderDate] = useState(null);
  const [dueDate, setDueDate] = useState(null);

  const handleReminderDateChange = (e) => {
    setReminderDate(e.value);
    onChange('reminderDate', e.value ? e.value.getDate() : null);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.value);
    onChange('dueDate', e.value ? e.value.getDate() : null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">

      <div className="">
        <SelectField
          label="Rent payment frequency"
          value={data.paymentFrequency || ''}
          onChange={(val) => onChange('paymentFrequency', val)}
          options={[
            { label: "Weekly", value: "Weekly" },
            { label: "Monthly", value: "Monthly" },
            { label: "Quarterly", value: "Quarterly" },
            { label: "Annually", value: "Annually" },
          ]}
        />
      </div>

      {/* Rent Reminder Date Calendar */}
      <div className="w-full">
        <label htmlFor="reminderDate" className="block text-sm font-medium text-gray-700 mb-1">
          Rent Reminder date*
        </label>
        <Calendar
          id="reminderDate"
          value={reminderDate}
          onChange={handleReminderDateChange}
          dateFormat="d"
          showIcon 
          placeholder="25th Every month"
          required
          view="date"
          className='border border-gray-200 px-2 py-2 rounded-lg'
        />
      </div>

      {/* Rent Due Date Calendar */}
      <div className="w-full">
        <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 mb-1">
          Rent due date*
        </label>
        <Calendar
          id="dueDate"
          value={dueDate}
          onChange={handleDueDateChange}
          dateFormat="d"
          showIcon    
          placeholder="5th Every month"
          view="date"
         className='border border-gray-200 px-2 py-2 rounded-lg'
        />
      </div>
    </div>
  );
};

export default RentForm;
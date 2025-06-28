const fieldConfigs = {
  propertyAddress: {
    title: "Property Address",
    fields: [
      { type: "input", name: "street", label: "Street Address", required: true },
      { type: "input", name: "city", label: "City", required: true },
      { type: "input", name: "state", label: "State", required: true },
      { type: "input", name: "zipCode", label: "ZIP Code", required: true },
      { type: "select", name: "country", label: "Country", required: true, options: [
        { value: "us", label: "United States" },
        { value: "ca", label: "Canada" },
        { value: "uk", label: "United Kingdom" }
      ]},
    ]
  },
  leasingInfo: {
    title: "Leasing Information",
    fields: [
      { type: "select", name: "leaseType", label: "Lease Type", required: true, options: [
        { value: "monthly", label: "Monthly" },
        { value: "yearly", label: "Yearly" },
        { value: "flexible", label: "Flexible" }
      ]},
      { type: "input", name: "minLeaseTerm", label: "Minimum Lease Term", type: "number" },
      { type: "input", name: "maxLeaseTerm", label: "Maximum Lease Term", type: "number" },
      { type: "textarea", name: "leasingNotes", label: "Additional Leasing Notes" },
    ]
  },
  charges: {
    title: "Property Charges",
    fields: [
      { type: "input", name: "rentAmount", label: "Monthly Rent", required: true, type: "number" },
      { type: "input", name: "securityDeposit", label: "Security Deposit", type: "number" },
      { type: "input", name: "applicationFee", label: "Application Fee", type: "number" },
      { type: "checkbox", name: "utilitiesIncluded", label: "Utilities included in rent" },
      { type: "textarea", name: "additionalCharges", label: "Additional Charges Description" },
    ]
  },
  petFees: {
    title: "Pet Policy & Fees",
    fields: [
      { type: "checkbox", name: "petsAllowed", label: "Pets allowed" },
      { type: "input", name: "petDeposit", label: "Pet Deposit", type: "number" },
      { type: "input", name: "petFee", label: "Monthly Pet Fee", type: "number" },
      { type: "select", name: "petType", label: "Allowed Pet Types", options: [
        { value: "cats", label: "Cats only" },
        { value: "dogs", label: "Dogs only" },
        { value: "both", label: "Both cats and dogs" },
        { value: "none", label: "No pets" }
      ]},
      { type: "textarea", name: "petRestrictions", label: "Pet Restrictions" },
    ]
  }
};

export default fieldConfigs
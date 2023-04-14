import React, { useState, useContext } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface FormContextType {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormContext = React.createContext<FormContextType>({
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
  handleInputChange: () => {},
});

const FormField: React.FC<{ label: string; name: keyof FormData }> = ({
  label,
  name,
}) => {
  const { formData, handleInputChange } = useContext(FormContext);
  return (
    <label>
      {label}
      <input
        type="text"
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
      />
    </label>
  );
};

const MyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform form submission or validation here
    console.log("Form data:", formData);
  };

  return (
    <section>
      <h2>Submit Form</h2>
      <FormContext.Provider value={{ formData, handleInputChange }}>
        <form onSubmit={handleSubmit}>
          <FormField label="First Name:" name="firstName" />
          <FormField label="Last Name:" name="lastName" />
          <FormField label="Email:" name="email" />
          <FormField label="Password:" name="password" />
          <button type="submit">Submit</button>
        </form>
      </FormContext.Provider>
    </section>
  );
};

export default MyForm;

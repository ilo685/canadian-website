import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom"; 
import DeadlineNotice from "./DeadLine";
import countriesData from './countries.json'; 

const CanadaImmigrationForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countriesData);

  useEffect(() => {
    const results = countriesData.filter((country) =>
      country.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(results);
  }, [searchTerm]);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      country: "",
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Prénom est requis"),
      lastName: Yup.string().required("Nom est requis"),
      age: Yup.number()
        .required("Âge est requis")
        .min(18, "Vous devez avoir au moins 18 ans"),
      country: Yup.string().required("Pays de naissance est requis"),
      email: Yup.string().email("Email invalide").required("Email est requis"),
      phone: Yup.string().required("Téléphone est requis"),
    }),
    onSubmit: (values) => {
      localStorage.setItem("formData", JSON.stringify(values)); // Store form data in localStorage
      navigate("/deadline"); // Navigate to the deadline page after form submission
    },
  });

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('../../public/Capture.JPG')",
      }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen bg-opacity-50 text-white">
        <div className="absolute top-8">
          <img src="../../public/logo_white.png" alt="Logo" className="h-12" />
        </div>

        <div className="flex flex-col md:flex-row mt-24 items-center w-full max-w-5xl p-8 gap-8">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-6xl font-bold mb-4">L'IMMIGRATION AU CANADA</h1>
            <p className="text-lg">Découvrez si vous êtes admissible à un visa Canadien</p>
          </div>

          <div className="bg-black/50 rounded-lg shadow-lg md:w-1/2">
            <form onSubmit={formik.handleSubmit} className="space-y-4 p-8">
              <div>
                <input
                  placeholder=" Prénom"
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full p-2 text-black border rounded"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <p className="text-red-500 text-xs">{formik.errors.firstName}</p>
                )}
              </div>

              <div>
                <input
                  placeholder="Nom"
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full text-black p-2 border rounded"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <p className="text-red-500 text-xs">{formik.errors.lastName}</p>
                )}
              </div>

              <div>
                <input
                  placeholder="Age"
                  type="number"
                  id="age"
                  name="age"
                  className="w-full p-2  text-black text-black border rounded"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.age}
                />
                {formik.touched.age && formik.errors.age && (
                  <p className="text-red-500 text-xs">{formik.errors.age}</p>
                )}
              </div>

              <div>
                <select
                  id="country"
                  name="country"
                  className="w-full p-2 text-black border rounded text-black"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.country}
                >
                  <option value="">Sélectionner</option>
                  {filteredCountries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                {formik.touched.country && formik.errors.country && (
                  <p className="text-red-500 text-xs">{formik.errors.country}</p>
                )}
              </div>

              <div>
                <input
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  className="w-full text-black p-2 border rounded"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-xs">{formik.errors.email}</p>
                )}
              </div>

              <div>
                <input
                  placeholder="Téléphone"
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full text-black p-2 border rounded"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500 text-xs">{formik.errors.phone}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
              >
                COMMENCER
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanadaImmigrationForm;

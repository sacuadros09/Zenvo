import { useState } from 'react';
import Swal from 'sweetalert2';

export const useContactForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!formData.fullName || !formData.email) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Full Name and Email are required.',
      });
      return;
    }

    try {
      // Guardar los datos en localStorage
      const storedData = JSON.parse(localStorage.getItem('contactFormData')) || [];
      storedData.push(formData);
      localStorage.setItem('contactFormData', JSON.stringify(storedData));

      // Si el envío es exitoso, mostrar mensaje de éxito y limpiar el formulario
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Message sent successfully!',
      });
      setFormData(initialState);
    } catch (error) {
      // Manejar error y mostrar mensaje de error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to send message. Please try again later.',
      });
      console.error(error);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};
import { useState } from 'react';

export const useContactForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [message, setMessage] = useState(''); // Estado para el mensaje de éxito o error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación básica
    if (!formData.fullName || !formData.email) {
      setMessage('Full Name and Email are required.');
      return;
    }

    try {
      // Simulación de envío de datos a un servidor
      const response = await fetch('https://example.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const result = await response.json();
      console.log(result);

      // Si el envío es exitoso, mostrar mensaje de éxito y limpiar el formulario
      setMessage('Message sent successfully!');
      setFormData(initialState);
    } catch (error) {
      // Manejar error y mostrar mensaje de error
      setMessage('Failed to send message. Please try again later.');
      console.error(error);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    message, // Devuelve el mensaje de éxito o error
  };
};



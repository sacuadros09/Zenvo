import { ContactForm } from '../../components/ContactForm/ContactForm';
import { useContactForm } from '../../hooks/useContactForm';
import './ContactPage.css';

export const ContactPage = () => {
  const { formData, handleChange, handleSubmit } = useContactForm({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <h2>Ready to take your vision to the next level?</h2>
      <p>Complete our contact form and let us help you transform your ideas into reality.</p>
      <ContactForm 
        formData={formData} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
      />
    </div>
  );
};


import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

// Update interface to extend Record<string, unknown> to fix type error
interface EmailParams extends Record<string, unknown> {
  from_name: string;
  reply_to: string;
  subject: string;
  message: string;
}

export const useEmailService = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your user ID
    // Replace "user_yourUserID" with your actual EmailJS user ID
    emailjs.init("user_yourUserID");
    setIsInitialized(true);
  }, []);

  const sendEmail = async (params: EmailParams) => {
    if (!isInitialized) {
      throw new Error('Email service not initialized');
    }
    
    // Send the email using EmailJS
    // Replace "template_yourTemplateID" and "service_yourServiceID" with your actual template and service IDs
    return emailjs.send(
      "service_yourServiceID",
      "template_yourTemplateID",
      params
    );
  };

  return {
    isInitialized,
    sendEmail,
  };
};

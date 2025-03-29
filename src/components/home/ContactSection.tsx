import React from 'react';
import ContactForm from '@/components/home/contact/ContactForm';
import ContactInfo from '@/components/home/contact/ContactInfo';
import { personalInfo } from '@/data/personal';

// Define explicit type for personalInfo with email property
type PersonalInfoType = typeof personalInfo & {
  email: string;
};

const ContactSection = () => {
  // Cast personalInfo to include the email property
  const typedPersonalInfo = personalInfo as PersonalInfoType;
  
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />
          
          {/* Contact Information */}
          <ContactInfo 
            email={typedPersonalInfo.email}
            description={typedPersonalInfo.contactDescription}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 
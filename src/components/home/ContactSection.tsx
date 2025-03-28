import React from 'react';
import ContactForm from '@/components/home/contact/ContactForm';
import ContactInfo from '@/components/home/contact/ContactInfo';
import { personalInfo } from '@/data/personal';

const ContactSection = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />
          
          {/* Contact Information */}
          <ContactInfo 
            email={personalInfo.email}
            description={personalInfo.contactDescription}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 
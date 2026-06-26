import React from 'react';

const ContactFooter = () => {
  return (
    <>
      {/* Contact Section */}
      <section className="bg-gray-100 border-t border-gray-200">
        <div className="w-full">
           <img src="./images/contacto.png" alt="Contacto" className="w-full h-auto object-cover invert-safe" />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white">
        <div className="w-full">
           <img src="./images/footer.png" alt="Footer" className="w-full h-auto object-cover invert-safe" />
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;

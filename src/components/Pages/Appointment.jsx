import React, { useState, useEffect } from 'react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activeField, setActiveField] = useState(null);

  // Contact information with SVGs
  const contactInfo = [
    {
      id: 1,
      title: 'Visit Us',
      details: ['Solar Solutions Pvt Ltd', 'Hitech City, Hyderabad', 'Telangana - 500081'],
      icon: 'location-svg',
      animation: 'slideRight'
    },
    {
      id: 2,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 12345 67890', 'Mon-Sat: 9AM - 7PM'],
      icon: 'phone-svg',
      animation: 'slideUp'
    },
    {
      id: 3,
      title: 'Email Us',
      details: ['solar@solarenergy.com', 'support@solarenergy.com', '24/7 Support Available'],
      icon: 'email-svg',
      animation: 'slideLeft'
    }
  ];

  // Social media links
  const socialLinks = [
    { id: 1, name: 'facebook', url: '#', icon: 'facebook-svg' },
    { id: 2, name: 'twitter', url: '#', icon: 'twitter-svg' },
    { id: 3, name: 'linkedin', url: '#', icon: 'linkedin-svg' },
    { id: 4, name: 'instagram', url: '#', icon: 'instagram-svg' },
    { id: 5, name: 'youtube', url: '#', icon: 'youtube-svg' }
  ];

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 3) {
      errors.fullName = 'Name must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = 'Please enter a valid 10-digit number';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    return errors;
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 2000);
    } else {
      setFormErrors(errors);
    }
  };

  // Floating particles effect
  useEffect(() => {
    const particles = document.querySelectorAll('.contact-particle');
    particles.forEach((particle, index) => {
      particle.style.animation = `float ${8 + index * 2}s infinite ease-in-out`;
    });
  }, []);

  return (
    <div className="contact-main-wrapper">
      {/* Animated Background */}
      <div className="contact-background">
        <div className="contact-particle"></div>
        <div className="contact-particle"></div>
        <div className="contact-particle"></div>
        <div className="contact-particle"></div>
        <div className="contact-particle"></div>
      </div>

      {/* Main Container */}
      <div className="contact-container">
        {/* Header Section */}
        <div className="contact-header">
          <div className="contact-header-icon">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#059669" strokeWidth="1.5" fill="none"/>
              <path d="M12 6V12L16 14" stroke="#059669" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="12" cy="12" r="2" fill="#059669"/>
            </svg>
          </div>
          <h1 className="contact-title">
            <span className="contact-title-gradient">Get in Touch</span>
          </h1>
          <p className="contact-subtitle">
            Have questions about solar solutions? We're here to help 24/7
          </p>
        </div>

        <div className="contact-content-grid">
          {/* Left Side - Contact Info Cards */}
          <div className="contact-info-section">
            {contactInfo.map((info, index) => (
              <div 
                key={info.id} 
                className={`contact-info-card contact-animate-${info.animation}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`contact-info-icon contact-icon-${info.id}`}>
                  {info.icon === 'location-svg' && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" 
                        fill="white"/>
                    </svg>
                  )}
                  {info.icon === 'phone-svg' && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-.9.3l-2.2 2.2c-2.8-1.4-5.1-3.7-6.5-6.5l2.2-2.2c.3-.3.4-.7.2-1.1-.4-1.2-.6-2.4-.6-3.6 0-.5-.4-1-1-1H4c-.5 0-1 .5-1 1 0 8.8 7.2 16 16 16 .5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1z" 
                        fill="white"/>
                    </svg>
                  )}
                  {info.icon === 'email-svg' && (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" 
                        fill="white"/>
                    </svg>
                  )}
                </div>
                <div className="contact-info-content">
                  <h3>{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social Media Links */}
            <div className="contact-social-section">
              <h4>Follow Us</h4>
              <div className="contact-social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.id}
                    href={social.url}
                    className={`contact-social-link contact-social-${social.name}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon === 'facebook-svg' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                      </svg>
                    )}
                    {social.icon === 'twitter-svg' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                    )}
                    {social.icon === 'linkedin-svg' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                    )}
                    {social.icon === 'instagram-svg' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                      </svg>
                    )}
                    {social.icon === 'youtube-svg' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.9-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.9.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              {/* Success Message */}
              {submitSuccess && (
                <div className="contact-success-message">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#059669" strokeWidth="2"/>
                    <path d="M8 12L11 15L16 9" stroke="#059669" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>Message sent successfully! We'll contact you soon.</span>
                </div>
              )}

              {/* Name Field */}
              <div className="contact-form-group">
                <label htmlFor="fullName" className="contact-form-label">
                  Full Name <span className="contact-required">*</span>
                </label>
                <div className={`contact-input-wrapper ${activeField === 'fullName' ? 'contact-input-active' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="contact-input-icon">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" 
                      fill={formErrors.fullName ? '#ef4444' : '#059669'}/>
                  </svg>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onFocus={() => setActiveField('fullName')}
                    onBlur={() => setActiveField(null)}
                    className={`contact-form-input ${formErrors.fullName ? 'contact-input-error' : ''}`}
                    placeholder="Enter your full name"
                  />
                </div>
                {formErrors.fullName && (
                  <span className="contact-error-message">{formErrors.fullName}</span>
                )}
              </div>

              {/* Email Field */}
              <div className="contact-form-group">
                <label htmlFor="email" className="contact-form-label">
                  Email Address <span className="contact-required">*</span>
                </label>
                <div className={`contact-input-wrapper ${activeField === 'email' ? 'contact-input-active' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="contact-input-icon">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" 
                      fill={formErrors.email ? '#ef4444' : '#059669'}/>
                  </svg>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setActiveField('email')}
                    onBlur={() => setActiveField(null)}
                    className={`contact-form-input ${formErrors.email ? 'contact-input-error' : ''}`}
                    placeholder="Enter your email"
                  />
                </div>
                {formErrors.email && (
                  <span className="contact-error-message">{formErrors.email}</span>
                )}
              </div>

              {/* Phone Field */}
              <div className="contact-form-group">
                <label htmlFor="phone" className="contact-form-label">
                  Phone Number <span className="contact-required">*</span>
                </label>
                <div className={`contact-input-wrapper ${activeField === 'phone' ? 'contact-input-active' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="contact-input-icon">
                    <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-.9.3l-2.2 2.2c-2.8-1.4-5.1-3.7-6.5-6.5l2.2-2.2c.3-.3.4-.7.2-1.1-.4-1.2-.6-2.4-.6-3.6 0-.5-.4-1-1-1H4c-.5 0-1 .5-1 1 0 8.8 7.2 16 16 16 .5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1z" 
                      fill={formErrors.phone ? '#ef4444' : '#059669'}/>
                  </svg>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setActiveField('phone')}
                    onBlur={() => setActiveField(null)}
                    className={`contact-form-input ${formErrors.phone ? 'contact-input-error' : ''}`}
                    placeholder="Enter 10-digit number"
                    maxLength="10"
                  />
                </div>
                {formErrors.phone && (
                  <span className="contact-error-message">{formErrors.phone}</span>
                )}
              </div>

              {/* Subject Field */}
              <div className="contact-form-group">
                <label htmlFor="subject" className="contact-form-label">
                  Subject <span className="contact-required">*</span>
                </label>
                <div className={`contact-input-wrapper ${activeField === 'subject' ? 'contact-input-active' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="contact-input-icon">
                    <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" 
                      fill={formErrors.subject ? '#ef4444' : '#059669'}/>
                  </svg>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setActiveField('subject')}
                    onBlur={() => setActiveField(null)}
                    className={`contact-form-input ${formErrors.subject ? 'contact-input-error' : ''}`}
                    placeholder="Enter subject"
                  />
                </div>
                {formErrors.subject && (
                  <span className="contact-error-message">{formErrors.subject}</span>
                )}
              </div>

              {/* Message Field */}
              <div className="contact-form-group">
                <label htmlFor="message" className="contact-form-label">
                  Message <span className="contact-required">*</span>
                </label>
                <div className={`contact-input-wrapper ${activeField === 'message' ? 'contact-input-active' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="contact-input-icon">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z" 
                      fill={formErrors.message ? '#ef4444' : '#059669'}/>
                  </svg>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                    className={`contact-form-textarea ${formErrors.message ? 'contact-input-error' : ''}`}
                    placeholder="Type your message here..."
                    rows="5"
                  />
                </div>
                {formErrors.message && (
                  <span className="contact-error-message">{formErrors.message}</span>
                )}
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="contact-submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="contact-submit-spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M2 21L23 12L2 3L2 10L17 12L2 14L2 21Z" fill="white"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
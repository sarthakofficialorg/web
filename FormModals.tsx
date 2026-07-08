import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Heart, Mail, Phone, User, Tag, HelpCircle, CheckCircle2 } from 'lucide-react';
import { submitJoinForm, submitContactForm } from '../lib/firebase';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: 'Education & Mentorship',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setLoading(true);

    try {
      await submitJoinForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        skills: formData.skills,
        message: formData.message
      });
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        skills: 'Education & Mentorship',
        message: ''
      });
    } catch (err: any) {
      setError('Something went wrong. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 my-8"
          >
            {/* Header Section */}
            <div className="relative bg-gradient-to-r from-rose-600 to-pink-500 text-white p-6 md:p-8">
              <button
                id="btn-close-join-modal"
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/10 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 mb-2">
                <Heart className="w-6 h-6 fill-white text-white animate-pulse" />
                <h3 className="font-sans text-2xl font-bold tracking-tight">Join as a Volunteer</h3>
              </div>
              <p className="font-sans text-xs text-rose-50 leading-relaxed">
                Be the reason someone smiles today. Provide your info to join the SARTHAK family.
              </p>
            </div>

            {/* Body Form or Success Message */}
            <div className="p-6 md:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-4 border border-green-100">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-sans text-xl font-bold text-gray-900 mb-2">Thank You for Joining!</h4>
                  <p className="font-sans text-sm text-gray-600 max-w-sm mb-6">
                    Your application has been received successfully. Our onboarding team will get in touch with you shortly.
                  </p>
                  <button
                    id="btn-join-success-close"
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-sans text-sm font-semibold rounded-xl cursor-pointer shadow-md transition-all"
                  >
                    Done
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="bg-red-50 border border-red-100 text-red-700 text-xs p-3 rounded-xl font-medium">
                      {error}
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label className="block font-sans text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <User className="w-4 h-4" />
                      </span>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl font-sans text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-rose-500 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-sans text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                          <Mail className="w-4 h-4" />
                        </span>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl font-sans text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-rose-500 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-sans text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                          <Phone className="w-4 h-4" />
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          required
                          className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl font-sans text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-rose-500 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Area of Interest */}
                  <div>
                    <label className="block font-sans text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Primary Area of Interest
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <Tag className="w-4 h-4" />
                      </span>
                      <select
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        className="w-full pl-9 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-xl font-sans text-sm text-gray-800 focus:outline-none focus:border-rose-500 focus:bg-white transition-colors appearance-none"
                      >
                        <option value="Education & Mentorship">Education & Mentorship</option>
                        <option value="Food & Relief Drives">Food & Relief Drives</option>
                        <option value="Skill & Vocational Training">Skill & Vocational Training</option>
                        <option value="Health & Camps Coordination">Health & Camps Coordination</option>
                        <option value="Fundraising & Operations">Fundraising & Operations</option>
                        <option value="Media, Design & Writing">Media, Design & Writing</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message/Motivation */}
                  <div>
                    <label className="block font-sans text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Why do you want to join SARTHAK? *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Share a short note about your goals and how you would like to support..."
                      required
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl font-sans text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-rose-500 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="btn-submit-volunteer"
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-rose-600 hover:bg-rose-700 disabled:bg-rose-400 text-white font-sans text-sm font-semibold rounded-xl cursor-pointer shadow-md shadow-pink-100 hover:shadow-none transition-all"
                  >
                    {loading ? 'Submitting Application...' : 'Submit Volunteer Application'}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setLoading(true);

    try {
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message
      });
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (err: any) {
      setError('Something went wrong. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 my-8"
          >
            {/* Header Section */}
            <div className="relative bg-gradient-to-r from-gray-900 to-gray-850 text-white p-6 md:p-8">
              <button
                id="btn-close-contact-modal"
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/10 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 mb-2">
                <HelpCircle className="w-6 h-6 text-rose-500" />
                <h3 className="font-sans text-2xl font-bold tracking-tight">Contact Sarthak</h3>
              </div>
              <p className="font-sans text-xs text-gray-300 leading-relaxed">
                Have an inquiry, feedback, or need support? Drop us a message, and we'll reply right away.
              </p>
            </div>

            {/* Body Form or Success Message */}
            <div className="p-6 md:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-4 border border-green-100">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-sans text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                  <p className="font-sans text-sm text-gray-600 max-w-sm mb-6">
                    Thank you for reaching out. Your query has been logged. Our administrative office will email or call you shortly.
                  </p>
                  <button
                    id="btn-contact-success-close"
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="px-6 py-2.5 bg-gray-900 hover:bg-black text-white font-sans text-sm font-semibold rounded-xl cursor-pointer shadow-md transition-all"
                  >
                    Done
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="bg-red-50 border border-red-100 text-red-700 text-xs p-3 rounded-xl font-medium">
                      {error}
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label className="block font-sans text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <User className="w-4 h-4" />
                      </span>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Sarah Smith"
                        required
                        className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl font-sans text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-rose-500 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-sans text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                          <Mail className="w-4 h-4" />
                        </span>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="sarah@example.com"
                          required
                          className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl font-sans text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-rose-500 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-sans text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                          <Phone className="w-4 h-4" />
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          required
                          className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl font-sans text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-rose-500 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block font-sans text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="E.g., CSR Sponsorship, Donation Support, Event Inquiry"
                      required
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl font-sans text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-rose-500 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-sans text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Write your query or message in detail..."
                      required
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl font-sans text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-rose-500 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="btn-submit-contact"
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gray-900 hover:bg-black disabled:bg-gray-500 text-white font-sans text-sm font-semibold rounded-xl cursor-pointer shadow-md hover:shadow-none transition-all"
                  >
                    {loading ? 'Sending Message...' : 'Send Message'}
                    <Send className="w-4 h-4 text-rose-500" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

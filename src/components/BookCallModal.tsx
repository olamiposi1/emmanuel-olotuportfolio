import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Send, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { PROFILE_DATA } from '../data';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookCallModal: React.FC<BookCallModalProps> = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('2:00 PM EDT');
  const [projectType, setProjectType] = useState('UI/UX Design');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_cpj6f5g',
      'template_4aiyr5k',
      {
        from_name: name,
        from_email: email,
        project_type: projectType,
        preferred_date: selectedDate,
        preferred_time: selectedTime,
        message: message || 'No summary provided.',
      },
      'rGHHkGjX_c3YtXVi8'
    )
      .then(() => {
        setSubmitted(true);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        alert('Something went wrong sending your request. Please try again or email me directly.');
      });
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-neutral-100 dark:border-neutral-800 relative animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-300 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Schedule a 30-min intro</span>
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
              Book a call with Emmanuel
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              Let's discuss UI/UX design, website design, or full web development collaboration.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Project Type selector */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                  What would you like to discuss?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['UI/UX Design', 'Website Design', 'Web Development'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setProjectType(type)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all ${
                        projectType === type
                          ? 'bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-neutral-900 dark:border-white shadow-xs'
                          : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-700 border-neutral-200/80 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:border-neutral-700'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />
                    <span>Preferred Day</span>
                  </label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700 rounded-xl px-3 py-2 text-xs text-neutral-800 dark:text-neutral-200 font-medium focus:outline-none focus:border-neutral-900 dark:focus:border-white"
                  >
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Next Week">Next Week</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />
                    <span>Time Slot</span>
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700 rounded-xl px-3 py-2 text-xs text-neutral-800 dark:text-neutral-200 font-medium focus:outline-none focus:border-neutral-900 dark:focus:border-white"
                  >
                    <option value="10:00 AM WAT">10:00 AM WAT</option>
                    <option value="2:00 PM WAT">2:00 PM WAT</option>
                    <option value="4:30 PM WAT">4:30 PM WAT</option>
                  </select>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Connor"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-neutral-900 dark:focus:border-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-neutral-900 dark:focus:border-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                    Short project summary (optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell me a bit about your product or team goals..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700 rounded-xl px-3.5 py-2 text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-neutral-900 dark:focus:border-white resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-neutral-900 hover:bg-black dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-900 font-semibold text-xs sm:text-sm py-3 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-4"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Confirm Call Request</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 animate-in zoom-in-95 duration-200">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
              Call Confirmed!
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 max-w-sm mx-auto leading-relaxed">
  Thanks {name}! I've received your request for <strong className="text-neutral-900 dark:text-white">{selectedDate} at {selectedTime}</strong> and will confirm by email at <span className="text-neutral-900 dark:text-white underline">{email}</span> shortly.
</p>
            <button
              onClick={resetForm}
              className="mt-6 bg-neutral-900 hover:bg-black dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-900 text-xs font-semibold px-6 py-2.5 rounded-full shadow-xs transition-all"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
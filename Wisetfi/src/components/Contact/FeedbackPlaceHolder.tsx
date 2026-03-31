import React from "react";

const FeedbackPlaceHolder = () => {
  return (
    <React.Fragment>
      <div>
        <label
          htmlFor="Fullname"
          className="block text-sm font-medium text-white mb-2"
        >
          Full name
        </label>
        <input
          type="text"
          name="Fullname"
          id="Fullname"
          required
          className="py-3 px-4 block w-full bg-transparent border border-white/10 rounded-xl text-sm focus:border-secondary focus:ring-1 focus:ring-secondary text-white glass-morphism transition-all duration-300 placeholder:text-gray-500 outline-none"
        />
      </div>
      <div>
        <label
          htmlFor="Email"
          className="block text-sm font-medium text-white mb-2"
        >
          Email
        </label>
        <input
          type="email"
          name="Email"
          id="Email"
          required
          className="py-3 px-4 block w-full bg-transparent border border-white/10 rounded-xl text-sm focus:border-secondary focus:ring-1 focus:ring-secondary text-white glass-morphism transition-all duration-300 placeholder:text-gray-500 outline-none"
        />
      </div>
      <div>
        <label
          htmlFor="FeedbackMessage"
          className="block text-sm font-medium text-white mb-2"
        >
          Feedback
        </label>
        <textarea
          id="FeedbackMessage"
          name="FeedbackMessage"
          rows={4}
          className="py-3 px-4 block w-full bg-transparent border border-white/10 rounded-xl text-sm focus:border-secondary focus:ring-1 focus:ring-secondary text-white glass-morphism transition-all duration-300 placeholder:text-gray-500 outline-none"
        ></textarea>
      </div>
    </React.Fragment>
  );
};

export default FeedbackPlaceHolder;

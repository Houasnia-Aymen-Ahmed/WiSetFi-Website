import React from "react";

const FeedbackPlaceHolder = () => {
  return (
    <React.Fragment>
      <div>
        <label
          htmlFor="hs-fullname-feedback-2"
          className="block text-sm text-gray-700 font-medium dark:text-white"
        >
          Full name
        </label>
        <input
          type="text"
          name="Fullname"
          id="Fullname"
          required
          className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 text-white"
        />
      </div>
      <div>
        <label
          htmlFor="hs-email-feedback-2"
          className="block text-sm text-gray-700 font-medium dark:text-white"
        >
          Email
        </label>
        <input
          type="email"
          name="Email"
          id="Email"
          required
          className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 text-white"
        />
      </div>
      <div>
        <label
          htmlFor="hs-message-feedback-2"
          className="block text-sm text-gray-700 font-medium dark:text-white"
        >
          Feedback
        </label>
        <textarea
          id="FeedbackMessage"
          name="FeedbackMessage"
          className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 text-white"
        ></textarea>
      </div>
    </React.Fragment>
  );
};

export default FeedbackPlaceHolder;

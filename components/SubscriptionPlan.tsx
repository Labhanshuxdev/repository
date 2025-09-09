import React from 'react';

const CheckIcon: React.FC = () => (
  <svg className="h-6 w-6 text-brand-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

const SubscriptionPlan: React.FC = () => {
  return (
    <section className="bg-white my-12">
      <div className="container mx-auto px-4 py-12 rounded-lg shadow-lg border border-green-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4">Go Green with Our Weekly Subscription!</h2>
          <p className="text-lg text-brand-gray mb-8">
            Never run out of fresh veggies again. Get a curated box of seasonal, organic vegetables delivered to your door every week.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start gap-3 p-4">
              <CheckIcon />
              <div>
                <h3 className="font-semibold text-lg">Always Fresh</h3>
                <p className="text-gray-600">Hand-picked seasonal produce at its peak freshness.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4">
              <CheckIcon />
              <div>
                <h3 className="font-semibold text-lg">Convenient</h3>
                <p className="text-gray-600">Save time with automatic weekly deliveries. Pause or cancel anytime.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4">
              <CheckIcon />
              <div>
                <h3 className="font-semibold text-lg">Great Value</h3>
                <p className="text-gray-600">Enjoy exclusive prices and special items just for subscribers.</p>
              </div>
            </div>
          </div>
          <button className="mt-10 bg-brand-green text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-brand-green-dark transition-transform transform hover:scale-105 duration-300">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlan;
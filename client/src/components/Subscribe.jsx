import React from 'react';
import { FiCheck } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Subscribe = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Starter Pass",
      description: "Experience the full power of our journalism with a 7-day all-access pass.",
      price: "Free",
      period: "/week",
      isPopular: false,
      features: [
        "Full access to all premium content",
        "Full ability to comment, react, and join the debate",
        "Exclusive \"Starter\" profile badge"
      ],
      buttonText: "Select Plan",
      buttonStyle: "bg-white text-zinc-900 border border-zinc-300 hover:bg-zinc-50",
      route: "/checkout/starter"
    },
    {
      name: "Premium Monthly",
      description: "A seamless, distraction-free reading experience for dedicated followers.",
      price: "$9,90",
      period: "/month",
      isPopular: true,
      features: [
        "Ad-Free Experience",
        "Full access to all premium content",
        "Ad-free experience",
        "Full ability to comment, react, and join the debate",
        "Exclusive \"Premium\" profile badge"
      ],
      buttonText: "Select Plan",
      buttonStyle: "bg-[#0D7AD8] text-white hover:bg-[#0b65b2] shadow-md",
      route: "/checkout/premium"
    },
    {
      name: "Elite Yearly",
      description: "Designed for loyal readers with maximum benefits and a heavy discount.",
      price: "$99,90",
      period: "/year",
      isPopular: false,
      features: [
        "Ad-Free Experience",
        "Full access to all premium content",
        "Ad-free experience",
        "Full ability to comment, react, and join the debate",
        "Exclusive \"Elite\" profile badge"
      ],
      buttonText: "Select Plan",
      buttonStyle: "bg-white text-zinc-900 border border-zinc-300 hover:bg-zinc-50",
      route: "/checkout/elite"
    }
  ];

  return (
    <section 
      className="w-full bg-white py-16 px-4 md:px-8 select-none"
      style={{ fontFamily: '"Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight mb-3">
          Select Your Subscription Plan
        </h2>
        <p className="text-zinc-500 text-sm md:text-base max-w-xl mx-auto">
          Gain full access to all premium content. Choose the plan that suits you best to enjoy an uninterrupted, ad-free reading experience across all your devices.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, index) => (
          <div 
            key={index}
            className={`relative rounded-2xl bg-white p-8 flex flex-col justify-between transition-all duration-300 ${
              plan.isPopular 
                ? 'border-2 border-[#0D7AD8] shadow-xl md:-translate-y-2' 
                : 'border border-zinc-200 shadow-sm'
            }`}
          >
            {plan.isPopular && (
              <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-[#0D7AD8] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                Most Popular
              </div>
            )}

            <div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">{plan.name}</h3>
              <p className="text-zinc-500 text-xs md:text-sm mb-6 min-h-[40px]">{plan.description}</p>
              
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-black text-zinc-900 tracking-tight">{plan.price}</span>
                <span className="text-zinc-500 text-sm ml-1 font-medium">{plan.period}</span>
              </div>

              <div className="space-y-3.5 mb-8 text-left border-t border-zinc-100 pt-6">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-sky-50 flex items-center justify-center shrink-0 mt-0.5">
                      <FiCheck className="w-3 h-3 text-[#0D7AD8]" />
                    </div>
                    <span className="text-xs md:text-sm text-zinc-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={() => navigate(plan.route)}
              className={`w-full py-3 rounded-xl text-sm font-bold transition-colors cursor-pointer ${plan.buttonStyle}`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Subscribe;
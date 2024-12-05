import React, { useState } from 'react';

const QnA = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questionsAnswers = [
        {
            question: "What are the store hours?",
            answer: "Our store is open from 9 AM to 9 PM from Monday to Saturday, and 10 AM to 6 PM on Sundays."
        },
        {
            question: "Do you offer custom sports gear?",
            answer: "Yes, we offer custom sports gear. You can visit our store or contact us online for more details."
        },
        {
            question: "What is your return policy?",
            answer: "We have a 30-day return policy. Items must be in original condition with the receipt for a full refund."
        },
        {
            question: "Do you provide team discounts?",
            answer: "Yes, we offer special discounts for teams. Please contact our sales department for more information."
        },
        {
            question: "Can I order online and pick up in-store?",
            answer: "Absolutely! You can place your order online and choose the in-store pickup option at checkout."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-2xl mx-auto mt-10">
            <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {questionsAnswers.map((item, index) => (
                    <div key={index} className="border-b border-gray-200">
                        <button
                            className="w-full text-left py-4 px-6 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-medium">{item.question}</span>
                                <span>{activeIndex === index ? '-' : '+'}</span>
                            </div>
                        </button>
                        {activeIndex === index && (
                            <div className="px-6 py-4 bg-white">
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QnA;
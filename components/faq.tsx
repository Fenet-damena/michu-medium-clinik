'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "What services do you provide?",
      answer: "We offer comprehensive OB/GYN services including antenatal care, delivery services, gynecology, family planning, ultrasound and labs, and post-natal care."
    },
    {
      question: "Is Dr. Segni available for consultations?",
      answer: "Yes, Dr. Segni is available for consultations. We recommend booking in advance to ensure availability that suits your schedule."
    },
    {
      question: "What are your clinic hours?",
      answer: "Our clinic is open Monday to Friday from 8:00 AM to 5:00 PM, and Saturday from 9:00 AM to 1:00 PM. We're closed on Sundays."
    },
    {
      question: "Do you offer emergency services?",
      answer: "Yes, we provide emergency services for urgent OB/GYN cases. Please call us immediately at 09161828828 for emergency situations."
    },
    {
      question: "Is the clinic equipped with modern technology?",
      answer: "Yes, our clinic is equipped with state-of-the-art medical technology including advanced ultrasound machines and modern diagnostic equipment."
    },
    {
      question: "How can I book an appointment?",
      answer: "You can book an appointment by calling us at 09161828828 or visiting our clinic at Nagelle Arsi 03 Wuha Limat."
    }
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our clinic and services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-blue-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-4 bg-blue-50 hover:bg-blue-100 transition-colors text-left font-semibold text-blue-900 flex justify-between items-center"
              >
                <span>{faq.question}</span>
                <span className="text-2xl text-blue-600">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-blue-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

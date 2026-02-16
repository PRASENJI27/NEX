
import React from 'react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black">Success <span className="text-blue-500">Stories.</span></h2>
          <p className="text-gray-400">Dozens of reviews from trusted partners across India and the USA.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="p-8 rounded-3xl glass-card flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-500' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 italic leading-relaxed text-lg">"{review.content}"</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={review.avatar} className="w-12 h-12 rounded-full object-cover border border-white/10" alt={review.name} />
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{review.role}, {review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

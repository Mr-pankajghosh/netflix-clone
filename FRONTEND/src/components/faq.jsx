import { useState } from "react";
import { Plus, X } from "lucide-react";

const faqData = [
  {
    question: "What is Netflix?",
    answer: `Netflix is a streaming service where you can watch

📺 TV shows
🎬 Movies
📹 Documentaries
🎞️ Anime
🎥 Netflix Originals (exclusive content)

You can watch it on your phone, laptop, smart TV, or tablet, anytime you want — all you need is a subscription and internet connection`
  },
  {
    question: "How much does Netflix cost?",
    answer: `Netflix offers several subscription plans to fit your needs:

💵 Basic with ads — $6.99/month  
🎟️ Standard — $15.49/month  
🎥 Premium — $22.99/month

You can watch Netflix on your phone, tablet, Smart TV, laptop, or streaming device — all with unlimited access to thousands of shows and movies.`
  },
  {
    question: "Where can I watch?",
    answer: `You can watch Netflix anywhere, anytime!

🖥️ On the web at netflix.com  
📱 On your phone or tablet (iOS & Android)  
📺 On Smart TVs and streaming devices  
💻 On your laptop or desktop

Just sign in with your account and stream instantly — or download to watch offline!`
  },
  {
    question: "How do I cancel?",
    answer: `Netflix is totally flexible — no contracts, no commitments.

🧾 Go to your Account page  
⚙️ Click “Cancel Membership”  
✅ Confirm your cancellation

You can cancel anytime online in just a few clicks, and you can come back whenever you want.`
},
  {
    question: "What can I watch on Netflix?",
    answer: `Netflix offers something for everyone!

🎬 Blockbuster movies  
📺 Popular TV series  
🎥 Netflix Originals  
📹 Documentaries  
🎞️ Anime  
👨‍👩‍👧‍👦 Family & kids content

From comedy and drama to action and true crime — there's always something new to discover.`
  },
{
    question: "Is Netflix good for kids?",
    answer: `Netflix can be a great option for kids, but it depends on how it's used. The platform offers a wide variety of content, including kids' movies, TV shows, and cartoons. They also have a Kids profile that filters content to ensure that it's age-appropriate. Netflix has parental controls that allow you to set restrictions based on ratings and even create a PIN for specific profiles.

    However, there are also a lot of adult-oriented shows and movies on the platform, so it's important for parents to manage the content their kids are watching. Netflix even has "Netflix Kids" that includes just the content designed for younger audiences, with no access to mature content.`
}
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-black text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div
          key={index}
          className="bg-gray-800 border-b border-black rounded-lg mb-2"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center p-5 text-left text-xl font-medium"
          >
            {item.question}
            {openIndex === index ? <X size={28} /> : <Plus size={28} />}
          </button>
          {openIndex === index && (
            <div className="px-5 pb-5 text-gray-300 transition-all duration-300">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

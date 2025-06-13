import { useState } from "react";
import Modal from "./Modal"; // Make sure this path is correct

const footerLinks = [
  "FAQ", "Investor Relations", "Privacy", "Speed Test",
  "Help Centre", "Jobs", "Cookie Preferences", "Legal Notices",
  "Account", "Ways to Watch", "Corporate Information", "Only on Netflix",
  "Media Centre", "Terms of Use", "Contact Us"
];

const footerContent = {
  "Privacy": `This is the privacy content. We respect your data...Privacy Policy:
Netflix takes your privacy seriously. Our privacy policy explains how we collect, use, and protect your data when you use our services.

Data Collection:
Netflix collects certain information such as your viewing preferences, account details, and usage patterns to improve your experience on the platform.

Your Rights:
You have the right to request a copy of your personal data, request corrections, or delete it by following the guidelines outlined in the privacy policy.`,

"Speed Test":`Why Speed Matters:
A high internet speed ensures uninterrupted streaming, enabling you to watch movies and shows in HD or 4K quality.

Recommended Speeds for Netflix:

Standard Definition (SD): 3 Mbps

High Definition (HD): 5 Mbps

4K Ultra HD: 25 Mbps or higher

You can test your internet speed to see if it's optimized for Netflix streaming.`,

"Help Centre":`Getting Started:
Learn how to get started with Netflix on your device, create an account, and set up your profile.

Troubleshooting Issues:
If you're having trouble with your account, streaming, or device compatibility, visit the Help Centre to find troubleshooting guides or contact customer support.

Account Assistance:
If you need help with billing, subscriptions, or other account-related inquiries, check out our detailed FAQs or contact the support team.

`,

"Jobs":`Careers at Netflix:
Netflix is constantly looking for talented individuals to join its team. Explore job openings across various departments such as engineering, marketing, and customer support.

Work Culture:
At Netflix, we promote a culture of freedom and responsibility. Join us to work in a creative environment with opportunities for growth and impact.`,



  "Cookie Preferences": `You can set your cookie preferences here...What Are Cookies?
Cookies are small files that are stored on your device to improve your user experience by remembering your preferences and activity.

Cookie Usage on Netflix:
Netflix uses cookies to personalize content, recommend movies, and improve the streaming experience. You can control your cookie settings by adjusting preferences in your account settings.

Managing Cookies:
You can accept, block, or delete cookies through your browser or device settings at any time.`,
 

"FAQ": "Frequently Asked Questions: Here's a list of common queries...",
  "Legal Notices": `All legal details and disclaimers go here...Content:

Copyright Policy:
Netflix complies with international copyright laws and works with content providers to ensure that all streaming content is licensed and distributed legally.

Terms and Conditions:
Our legal terms govern your use of Netflix services. By using Netflix, you agree to abide by these terms, which include guidelines on acceptable use, payment policies, and more`

,

"Account":`Managing Your Account:
Learn how to update your account information, change your password, and manage your subscription.

Profile Management:
Set up and customize profiles for different family members to personalize recommendations and viewing history.

Payment & Billing:
Update payment methods, view past invoices, and manage billing preferences directly from your account settings.`,
  "Investor Relations": `Details about our investors and financials...Overview:
Netflix is a publicly traded company, listed on the NASDAQ under the ticker symbol "NFLX". Investors can view detailed financial reports, stock information, and more through Netflix's investor relations page.

Annual Reports & Earnings
You can find Netflix’s annual reports, quarterly earnings, and other important investor communications that reflect the company's financial health and growth.`,

"Ways to Watch":`Supported Devices:
Netflix is available on a wide range of devices, including smart TVs, mobile devices, game consoles, and computers. Find out how to set up Netflix on your preferred device.

Offline Viewing:
Download your favorite shows and movies to watch offline on supported mobile devices.

Multiple Screen Support:
Netflix allows multiple users to stream content simultaneously depending on your plan. Learn how to manage screen usage for different devices.`,

"Corporate Information":`Company Overview:
Netflix was founded in 1997 and has since grown into one of the world’s leading entertainment services. We create and distribute original content and partner with other producers.

Leadership Team:
Learn about Netflix’s leadership team, including the CEO, board members, and key executives who guide the company's growth and innovation.`,

"Only on Netflix":`Exclusive Originals:
Netflix is home to award-winning original content, including popular series like Stranger Things, The Crown, The Witcher, and movies like Bird Box.

Behind the Scenes:
Discover exclusive behind-the-scenes content and interviews with cast and creators about Netflix original shows and films.

`,


 "Media Centre":`Press Releases:
Stay updated with Netflix’s latest news, announcements, and media coverage. Find press releases, media kits, and other resources for journalists.

Media Partnerships:
Learn about Netflix's partnerships with various media outlets, content creators, and distributors.`,

"Terms of Use":`Netflix Terms of Service:
Netflix’s Terms of Use govern your access to and use of our services. This includes guidelines on content use, subscription, and the rules of conduct while using Netflix.

Modifications to Terms:
Netflix reserves the right to update and modify the Terms of Use as needed. Users will be notified of significant changes that may affect their subscription or access to content.`,

"Contact Us":`Customer Support:
For any issues or inquiries, contact Netflix's customer support team. We're here to help with everything from account problems to streaming issues.

Contact Information:

Email: support@netflix.com

Phone: +91-7854962134

Social Media: @NetflixHelp`
  // Add more as needed
};

export default function Footer() {
  const [modalData, setModalData] = useState({ show: false, title: "", content: "" });

  const openModal = (title) => {
    setModalData({
      show: true,
      title,
      content: footerContent[title] || "This content will be added soon..."
    });
  };

  const closeModal = () => {
    setModalData({ ...modalData, show: false });
  };

  return (
    <footer className='py-6 md:px-8 md:py-0 bg-black text-white border-t border-gray-800'>
      <div className="bg-black text-gray-400 p-6 text-sm">
        <div className="max-w-6xl mx-auto">
          <p className="mb-4">
            Questions? Call <a href="tel:0008009191743" className="underline">+91-7854962134</a>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
            {footerLinks.map((link, i) => (
              <button
                key={i}
                className="text-left underline hover:text-white"
                onClick={() => openModal(link)}
              >
                {link}
              </button>
            ))}
          </div>
          <div className="mb-2">
            {/* <button className="border border-gray-600 px-2 py-1 rounded text-white flex items-center gap-1"> */}
            <select className="bg-transparent border border-gray-500 text-white px-3 py-1 rounded">

              
              <option value="en" className="text-black">🌐 English ⌄</option>
      <option value="hi" className="text-black">हिन्दी</option>
      <option value="bn" className="text-black">বাংলা</option>
      <option value="or" className="text-black">ଓଡ଼ିଆ (Odia)</option>
      <option value="gu" className="text-black">ગુજરાતી (Gujarati)</option>
  <option value="ta" className="text-black">தமிழ் (Tamil)</option>
  <option value="te" className="text-black">తెలుగు (Telugu)</option>
  <option value="kn" className="text-black">ಕನ್ನಡ (Kannada)</option>
  <option value="ml" className="text-black">മലയാളം (Malayalam)</option>
  <option value="pa" className="text-black">ਪੰਜਾਬੀ (Punjabi)</option>
  <option value="mr" className="text-black">मराठी (Marathi)</option>
  <option value="ur" className="text-black">اردو (Urdu)</option>
  <option value="ne" className="text-black">नेपाली (Nepali)</option>
      </select>
            {/* </button> */}
          </div>
          <p className="text-gray-600 mt-4">Netflix India</p>
        </div>
      </div>

      <div className='flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
        <p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
          Built by{" "}
          <a
            href='https://github.com/Mr-pankajghosh'
            target='_blank'
            className='font-medium underline underline-offset-4'
          >
            Pankaj Ghosh
          </a>
          . The Source Code is available on{" "}
          <a
            href='https://github.com/Mr-pankajghosh'
            target='_blank'
            className='font-medium underline underline-offset-4'
          >
            GitHub
          </a>
        </p>
      </div>

      {/* Modal for footer link content */}
      <Modal
        show={modalData.show}
        onClose={closeModal}
        title={modalData.title}
        content={modalData.content}
      />
    </footer>
  );
}

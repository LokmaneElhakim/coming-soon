export type faqType = {
  id: number;
  question: string;
  answer: string;
};

export default function useGetfaq() {
  const faq: faqType[] = [
    {
      id: 10,
      question:
        "What kind of customer support is available for users of your AI platform?",
      answer:
        "We provide dedicated customer support to assist users with any inquiries or issues. Our support team is available through various channels, including email, chat, and phone, ensuring a prompt and helpful response to all queries.",
    },
    {
      id: 11,
      question: "What technology stack did you use to build your startup?",
      answer:
        "We utilized a robust technology stack incorporating cutting-edge tools and frameworks tailored to meet the demands of our AI-powered student assistant. It includes languages like JavaScript and Python, frameworks like React, and cloud services for scalability and efficiency.",
    },
    {
      id: 12,
      question: "When is your website scheduled to launch?",
      answer:
        "Our website launch is planned for the upcoming quarter. Stay tuned for updates on our official channels and social media platforms to be among the first to experience our AI-powered student assistant.",
    },
    {
      id: 13,
      question:
        "Is your platform designed exclusively for Algeria or is it accessible globally?",
      answer:
        "Our platform is designed to benefit students globally. While we're committed to enhancing the educational experience in Algeria, our AI-powered student assistant is accessible and beneficial to students around the world.",
    },
    {
      id: 14,
      question: "How can I get in touch with the technical support team?",
      answer:
        "For technical support, you can reach out to our dedicated team through multiple channels. Feel free to contact us via email at lokmaneelhakimbaslimane@gmail.com, or by filling the contact form ",
    },
    {
      id: 15,
      question: "What does your AI-powered student assistant software do?",
      answer:
        "Our AI-powered student assistant is designed to help students with various academic tasks, providing personalized support in areas such as studying, assignment completion, and exam preparation.",
    },
    {
      id: 16,
      question:
        "How does your AI differentiate itself from traditional tutoring methods?",
      answer:
        "Unlike traditional tutoring, our AI operates 24/7, offering instant assistance and adapting to individual learning styles. It provides continuous support, ensuring students receive help whenever they need it.",
    },
    {
      id: 17,
      question:
        "Can your AI assist with specific subjects or is it a general-purpose tool?",
      answer:
        "Our AI is versatile and can assist with a wide range of subjects. It adapts to various academic disciplines and offers tailored guidance based on the user's specific needs and curriculum.",
    },
    {
      id: 18,
      question:
        "How does the AI ensure data privacy and security for students?",
      answer:
        "We prioritize the security and privacy of user data. Our platform adheres to industry-standard encryption protocols, and we comply with data protection regulations to safeguard the personal information of students.",
    },
    {
      id: 19,
      question:
        "Is your student assistant AI compatible with different learning management systems (LMS)?",
      answer:
        "Yes, our AI is designed to integrate seamlessly with various learning management systems, ensuring a smooth experience for both students and educators within their existing educational frameworks.",
    },
    {
      id: 20,
      question: "How does the AI adapt to different learning paces and styles?",
      answer:
        "Our AI employs machine learning algorithms to understand and adapt to individual learning paces and styles. It continuously analyzes user interactions to provide increasingly personalized and effective assistance over time.",
    },
    {
      id: 21,
      question:
        "Can the AI provide real-time feedback on assignments and assessments?",
      answer:
        "Absolutely! Our AI offers real-time feedback on assignments and assessments, providing constructive insights to help students improve their understanding and performance.",
    },
    {
      id: 22,
      question:
        "What kind of support and resources does your AI provide for exam preparation?",
      answer:
        "Our AI assists students in exam preparation by offering targeted study materials, practice questions, and personalized study plans. It helps users focus on key concepts and areas that need improvement.",
    },
    {
      id: 23,
      question:
        "How can educators integrate your AI into their teaching methods?",
      answer:
        "Educators can easily incorporate our AI into their teaching methods by accessing relevant analytics and insights about students. This allows for a more informed and adaptive approach to classroom instruction.",
    },
  ];
  return faq;
}

import React, { useEffect } from "react";
import useGetfaq, { faqType } from "@/app/hooks/useGetfaq";
const FaqPage = () => {
  const faqs = useGetfaq();
  return (
    <>
      {/* 
        <h1 class="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">Frequently asked questions</h1>

        <div class="mt-12 space-y-8">
            <div class="border-2 border-gray-100 rounded-lg dark:border-gray-700">
            </div>
        </div> */}
      <section className="bg-white dark:bg-gray-900 overflow-x-hidden">
        <div className="container max-w-4xl px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center  lg:text-3xl dark:text-white">
            Frequently asked questions
          </h1>

          <div className="mt-12 space-y-8">
            {faqs.map((faq: faqType) => {
              return (
                <div className="border-2 border-gray-100 rounded-lg ">
                  <div className="flex items-center justify-between w-full p-8">
                    <h1 className="font-semibold text-gray-700 dark:text-white">
                      {faq.question}
                    </h1>
                  </div>

                  <hr className="border-gray-200 dark:border-gray-700" />

                  <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqPage;

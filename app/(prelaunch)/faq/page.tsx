import React from "react";
import useGetfaq, { faqType } from "@/app/hooks/useGetfaq";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
const FaqPage = () => {
  const faqs = useGetfaq();
  return (
    <>
      <div className="left-1.5 top-3.5 fixed cursor-pointer m-5/2 p-0 border-none rounded-full z-30">
        <Link
          href="/"
          className="left-3 top-3 fixed cursor-pointer m-5/2 p-3 border-none rounded-full z-30 bg-black"
        >
          <GoArrowLeft />
        </Link>
      </div>
      <section className="bg-white dark:bg-gray-900 overflow-x-hidden">
        <div className="container max-w-4xl px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center  lg:text-3xl dark:text-white">
            Frequently asked questions
          </h1>

          <div className="mt-12 space-y-8">
            {faqs.map((faq: faqType) => {
              return (
                <div
                  key={faq.id}
                  className="border-2 border-gray-100 rounded-lg "
                >
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

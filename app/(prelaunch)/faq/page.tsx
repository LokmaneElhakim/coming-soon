import React from "react";

const FaqPage = () => {
  return (
    <>
      <section className="bg-white  bg-inherit">
        <div className="container max-w-4xl px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center  lg:text-3xl dark:text-white">
            Frequently asked questions
          </h1>

          <div className="mt-12 space-y-8">
            <div className="border-2 border-gray-100 rounded-lg ">
              <div className="flex items-center justify-between w-full p-8">
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  How i can play for my appoinment ?
                </h1>
              </div>

              <hr className="border-gray-200 dark:border-gray-700" />

              <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab
                maxime cum laboriosam recusandae facere dolorum veniam quia
                pariatur obcaecati illo ducimus?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqPage;

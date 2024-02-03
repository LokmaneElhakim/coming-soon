"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Button from "@/components/Button";
import { Toaster, toast } from "sonner";
import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";

type Inputs = {
  firstName: string;
  email: string;
  message?: string;
};
const ContactUs = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>({
    defaultValues: {
      firstName: "",
      message: "",
      email: "",
    },
    shouldUnregister: true,
  });
  const onSubmit: any = (data: Inputs, e: React.FormEvent) => {
    e.preventDefault();
    /* you'll need the secret key to send emails (contact me for access)
     you can get your own version of it  by signing up at https://www.emailjs.com/
    */
    emailjs.init("BC8sGNr9RmNvoZTJW");
    emailjs
      .send("service_l7fduua", "template_wdfz5vk", data)
      .then(function (response) {
        if (response.status == 200) {
          toast.success("Thanks for joining our waitlist!", {
            description:
              "We'll keep you informed and notify you once we launch.",
          });
        }
      });
  };
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="sm:my-16 my-10 mx-auto max-w-lg "
      >
        <div className="flex flex-wrap mx-2 md:-mx-3 mb-6 items-start">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="name"
            >
              firstName
            </label>
            <input
              required
              className="appearance-none block w-full bg-gray-200 border text-gray-700 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="name"
              type="text"
              placeholder="Lokmane Elhakim"
              {...register("firstName")}
            />
            <p className="text-xs italic"></p>
          </div>
        </div>
        <div className="flex flex-wrap mx-2 md:-mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              placeholder="lokmaneelhakim@gmail.com"
              {...register("email")}
            />
          </div>
        </div>
        <div className="flex flex-wrap mx-2 md:-mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="message"
            >
              Message / feedback (optional)
            </label>
            <textarea
              className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
              placeholder="Hi, I am reaching out as a potential customer of your platform. I recently learned about your SaaS offerings and am incredibly excited about the possibilities they hold."
              {...register("message")}
            ></textarea>
          </div>
        </div>
        <Button
          cn="focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded md:w-max-fit lg:w-44 m-auto"
          type="submit"
          color="inverted"
          label="Join the wailist"
          handleClick={() =>
            setTimeout(() => {
              reset();
            }, 1500)
          }
        />
      </form>
      <Toaster richColors />
    </>
  );
};

export default ContactUs;

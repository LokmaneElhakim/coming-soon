"use client";
import Link from "next/link";
import { useState } from "react";

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="max-w-40 fixed bottom-4 right-4">
      <button
        className=" right-3 bottom-3 fixed cursor-pointer m-5/2 border-none rounded-full z-30 bg-black"
        onClick={modalVisible ? closeModal : openModal}
      >
        <img src="/svg/faq.svg" alt="faq img" className="p-2" />
      </button>

      {modalVisible && (
        <div className="modal">
          <div className="modal-content border border-black bg-black rounded-md block w-full max-w-32  mb-4 mr-10">
            <ul className="w-full">
              <li className="text-xs w-full border-b-2 py-4 px-0 bg-black">
                <Link href={"/faq"}>Help & FAQ</Link>
              </li>
              <li className="text-xs w-full border-b-2 py-4 px-0 bg-black">
                <Link href={"https://pitch.com"} target="_blank">
                  Pitch software
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

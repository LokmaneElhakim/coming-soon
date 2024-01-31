// in faqs add , what stack this project is built on.
// kayen li t9olhom w kayen li non

import TransitionLink from "@/components/animations/TransitionLink";

export default async function Index() {
  return (
    <>
      <div className="z-0 flex-1 w-full flex flex-col gap-20 items-center">
        <button className="right-3 top-3 fixed cursor-pointer m-5/2 p-3 border-none rounded-full z-30 bg-black">
          <a href="https://github.com/Lokmane04" target="_blank">
            <svg
              viewBox="0 0 16 16"
              className="w-5 h-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
        </button>
        <div className="text_container">
          <p className="slogan gradient_text">
            Empowering students
            <br />
            Unlocking potentials
          </p>
        </div>
        <p className="gradient_text description">
          Be the first to experience the future!
        </p>
        <div className="bg-emerald-800 rounded-xl">
          <TransitionLink href="/presentation" label="Take the tour" />
        </div>
        <footer>
          <p className="email_placeholder">
            Enter email to be notified when we launch.
          </p>
          <div className="email_form">
            <input
              type="email"
              className="bg-emerald-800 email_input"
              placeholder="Email Address"
            />
            <button className="email_submit bg-emerald-800" type="submit">
              Join the anticipation
            </button>
          </div>
          <button className="right-3 bottom-3 fixed cursor-pointer m-5/2 p-3 border-none rounded-full z-30 bg-black">
            <svg
              fill="#ffffff"
              height="20px"
              width="20px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 202.423 202.423"
              xmlSpace="preserve"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path d="M87.416,186.643c-4.359,0-7.885,3.541-7.885,7.874c0,4.362,3.525,7.906,7.885,7.906c4.357,0,7.885-3.544,7.885-7.906 C95.301,190.184,91.774,186.643,87.416,186.643z"></path>
                  <path d="M101.212,0c-34.694,0-62.92,28.226-62.92,62.92c0,4.142,3.358,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5 c0-26.423,21.497-47.92,47.92-47.92c26.422,0,47.918,21.497,47.918,47.92c0,26.425-21.496,47.923-47.918,47.923 c-0.259,0-0.516,0.013-0.769,0.039c-11.128,0.4-20.088,9.36-20.488,20.487c-0.026,0.253-0.039,0.509-0.039,0.769v30.922 c0,4.142,3.358,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5v-30.922c0-3.471,2.824-6.295,6.296-6.295 c34.693,0,62.918-28.227,62.918-62.923C164.13,28.226,135.906,0,101.212,0z"></path>{" "}
                </g>
              </g>
            </svg>
          </button>
        </footer>
      </div>
    </>
  );
}

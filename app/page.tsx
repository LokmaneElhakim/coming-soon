// in faqs add , what stack this project is built on.
// kayen li t9olhom w kayen li non
// github icon in the top right
export default async function Index() {
  return (
    <>
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
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
        <button className="tour">
          <p>Take the tour</p>
          <img
            src="/arrow-right.svg"
            width={30}
            height={15}
            style={{ marginLeft: 10 }}
          />
        </button>
        <footer>
          <p className="email_placeholder">
            Enter email to be notified when we launch.
          </p>
          <div className="email_form">
            <input
              type="email"
              className="email_input"
              placeholder="Email Address"
            />
            <button className="email_submit" type="submit">
              Join the anticipation
            </button>
          </div>
        </footer>
      </div>
    </>
  );
}

import emailjs from "@emailjs/browser";
const sendEmail = (data: {
  firstName: string | undefined;
  email: string | undefined;
  message: string | undefined;
}) => {
  let success;
  const { firstName, email, message } = data;
  const params = {
    firstName: firstName,
    email: email,
    message: message,
  };
  emailjs
    .send("service_l7fduua", "template_wrzysu9", data, "BC8sGNr9RmNvoZTJW")
    .then((dat) => {
      success = true;
      console.log(dat);
    })
    .catch(() => (success = false));
  /**
   * success variable to weather show notification or not
   */
  return success;
};
export default sendEmail;

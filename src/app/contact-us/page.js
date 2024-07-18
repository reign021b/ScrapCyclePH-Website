import { SMTPClient } from "emailjs";
import * as Yup from "yup";

const client = new SMTPClient({
  user: "user",
  password: "password",
  host: "smtp.your-email.com",
  ssl: true,
});

export default function ContactUs() {
  const emailSchema = Yup.object({
    topic: Yup.string(),
    email: Yup.string().email(),
    name: Yup.string().required(),
    postalCode: Yup.string().required(),
    phone: Yup.number().required().positive().integer(),
  });

  const initialValues = {
    topic: "",
    email: "",
    name: "",
    postalCode: "",
    phone: "",
  };

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  async function sendEmail(params) {
    try {
      const message = await client.sendAsync({
        text: "i hope this works",
        from: "you <username@your-email.com>",
        to: "someone <someone@your-email.com>, another <another@your-email.com>",
        cc: "else <else@your-email.com>",
        subject: "testing emailjs",
      });
      console.log(message);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex flex-col items-center mt-20 mb-60 container px-5 mx-auto max-w-xl">
      <h1 className="text-4xl font-semibold">Contact Us</h1>
      <p className="text-center mt-7 mb-10 text-slate-500">
        Need to reach us? Call or message our phone number (+63) 966-902-8659 or
        fill up the form and our team will get back to you within 24 hours.
      </p>

      {/* form */}
      {/* topic */}
      <h2 className="self-start mb-2 font-semibold">Topic</h2>
      <select class="form-select w-full px-4 py-3 rounded-xl mb-7 focus:border-green-600 focus:ring focus:ring-green-600 focus:ring-opacity-40">
        <option value="volvo">- Select Option -</option>
        <option value="volvo">Customer Service</option>
        <option value="saab">Business Partnership / Investment</option>
        <option value="mercedes">
          Public Relations - media and press inquiries only
        </option>
        <option value="audi">
          Strategic Alliance and National Partnerships
        </option>
        <option value="volvo">Technical Issues</option>
      </select>

      {/* email */}
      <h2 className="self-start mb-2 font-semibold">Email Address</h2>
      <input
        type="email"
        class="form-input w-full px-4 py-3 rounded-xl mb-7 focus:border-green-600 focus:ring focus:ring-green-600 focus:ring-opacity-40"
      />

      {/* full name */}
      <h2 className="self-start mb-2 font-semibold">Full Name</h2>
      <input
        type="text"
        class="form-input w-full px-4 py-3 rounded-xl mb-7 focus:border-green-600 focus:ring focus:ring-green-600 focus:ring-opacity-40"
      />

      {/* zip code */}
      <h2 className="self-start mb-2 font-semibold">ZIP/Postal Code</h2>
      <input
        type="text"
        class="form-input w-full px-4 py-3 rounded-xl mb-7 focus:border-green-600 focus:ring focus:ring-green-600 focus:ring-opacity-40"
      />

      {/* phone */}
      <h2 className="self-start mb-2 font-semibold">Phone Number</h2>
      <input
        type="tel"
        class="form-input w-full px-4 py-3 rounded-xl mb-7 focus:border-green-600 focus:ring focus:ring-green-600 focus:ring-opacity-40"
      />

      {/* message */}
      <h2 className="self-start mb-2 font-semibold">Your Message</h2>
      <textarea class="form-textarea w-full px-4 py-3 rounded-xl mb-7 focus:border-green-600 focus:ring focus:ring-green-600 focus:ring-opacity-40" />

      {/* submit button */}
      <button className="px-10 py-3 mt-6 w-full rounded-2xl font-medium bg-green-600 text-white hover:bg-green-800 transition duration-300">
        Submit Message
      </button>
    </div>
  );
}

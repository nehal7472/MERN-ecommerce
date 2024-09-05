/* eslint-disable no-unused-vars */
import ContactUs from "../assets/contact-cover.jpeg";
import PhoneIcon from "../assets/phone-icon.png";
import EmailIcon from "../assets/email-icon.png";
import InstaIcon from "../assets/insta-icon.png";
import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import Footer from "../Components/Footer";

export default function Contact() {
  let quotes = [
    {
      id: 0,
      text: "“Our contact number: +8801799015817”",
      subTitle: "― Dr. Chris Dayagdag",
      image: PhoneIcon,
    },
    {
      id: 1,
      text: "“Our Email Address: 007cryptic@gmail.com”",
      subTitle: "– Paul Cookson",
      image: EmailIcon,
    },
    {
      id: 2,
      text: "“Our Instagram link: www.instagram.com/neymarjr”",
      subTitle: "― Dr. Christopher Dayagdag",
      image: InstaIcon,
    },
  ];

  let [data, setData] = useState(quotes[0]);
  const URL = "http://localhost:5000/api/form/contact?";

  let displayData = (v) => {
    setData(quotes[v.id]);
  };

  const defaultContactFormData = {
    username: "",
    email: "",
    message: "",
  };

  let [contact, setContact] = useState(defaultContactFormData);
  let { user } = useAuth();

  const [userData, setUserData] = useState(true);

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      if (response.ok) {
        setContact(defaultContactFormData);
        const data = await response.json();
        toast.success("Message sent successfully");
      }
    } catch (error) {
      toast.error("Message not sent");
    }
  };

  return (
    <>
      <div
        className="bg-center bg-no-repeat bg-cover h-[350px] sm:h-[450px] md:h-[550px] flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 bg-[url('/assets/contact-cover.jpeg')]"
        style={{ backgroundImage: `url(${ContactUs})` }}
      >
        <div className="bg-[#363A21] px-4 py-2 rounded-lg mb-4 shadow-lg">
          <h1 className="text-lg sm:text-xl md:text-2xl text-white font-semibold">
            {data.text}
          </h1>
          <h2 className="text-sm sm:text-base md:text-lg text-white font-semibold text-start">
            {data.subTitle}
          </h2>
        </div>
        <div className="flex gap-2 sm:gap-4">
          {quotes.map((v, i) => (
            <img
              key={i}
              src={v.image}
              alt="Contact Icon"
              className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer transition-transform transform hover:scale-110"
              onClick={() => displayData(v)}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto flex flex-col items-center gap-6 px-4 sm:px-8 lg:px-16">
        <h2 className="text-center text-white text-xl sm:text-2xl lg:text-3xl font-semibold">
          Find us with Google Map
        </h2>
        <p className="text-lg text-white">Pathantula, Sylhet, Bangladesh</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7237.206027241218!2d91.84488763877312!3d24.911519442239253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37505541a3b9c88b%3A0xba0e4c8a58b719a1!2sPathantula%2C%20Sylhet!5e0!3m2!1sen!2sbd!4v1720469055084!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg"
        ></iframe>

        <form
          action="https://formspree.io/f/xovaqoav"
          method="POST"
          className="flex flex-col gap-4 w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            required
            autoComplete="off"
            value={contact.username}
            onChange={handleInput}
            className="input input-bordered w-full"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            autoComplete="off"
            value={contact.email}
            onChange={handleInput}
            className="input input-bordered w-full"
          />
          <textarea
            cols="30"
            rows="5"
            name="message"
            id="message"
            placeholder="Message"
            required
            autoComplete="off"
            value={contact.message}
            onChange={handleInput}
            className="textarea textarea-bordered w-full"
          />
          <button className="btn btn-primary w-full py-2 mt-4 shadow-lg">
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

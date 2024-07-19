import ContactUs from "../assets/contact-cover.jpg";
import PhoneIcon from "../assets/phone-icon.png";
import EmailIcon from "../assets/email-icon.png";
import InstaIcon from "../assets/insta-icon.png";
import { useState } from "react";
import { useAuth } from "../store/auth";

export default function Contact() {
  let quotes = [
    {
      id: 0,
      text: "“Our contact number : +8801799015817”",
      subTitle: "― Dr. Chris Dayagdag",
      image: PhoneIcon,
    },
    {
      id: 1,
      text: "“Our Email Address : 007cryptic@gmail.com”",
      subTitle: "– Paul Cookson",
      image: EmailIcon,
    },
    {
      id: 2,
      text: "“Our Instagram link : www.instagram.com/neymarjr”",
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
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact);

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
        console.log(data);
        alert("Message send successfully");
      }
    } catch (error) {
      console.log(error);
      alert("Message not send");
    }
  };

  return (
    <>
      <div
        className="bg-center bg-no-repeat bg-cover h-[550px] flex justify-center items-center flex-col px-[250px]"
        style={{ backgroundImage: `url(${ContactUs})` }}
      >
        <div className="bg-[#DA4544] px-[15px] py-[10px] rounded-lg mb-[15px]">
          <h1 className="text-[25px] text-[white] font-semibold">
            {data.text}
          </h1>
          <h2 className="text-[#fff] text-[20px] font-semibold text-start">
            {data.subTitle}
          </h2>
        </div>
        <div className="flex gap-4">
          {quotes.map((v, i) => {
            return (
              <img
                key={i}
                src={v.image}
                alt="AboutDot"
                className="w-[30px] cursor-pointer"
                onClick={() => displayData(v)}
              />
            );
          })}
        </div>
      </div>
      <div className="container flex flex-col gap-6 justify-center items-center">
        <h2 className="text-center text-white pt-[20px] w-[400px] text-3xl font-semibold">
          Find us with google map
        </h2>
        <p>Pathantula, Sylhet, Bangadesh</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7237.206027241218!2d91.84488763877312!3d24.911519442239253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37505541a3b9c88b%3A0xba0e4c8a58b719a1!2sPathantula%2C%20Sylhet!5e0!3m2!1sen!2sbd!4v1720469055084!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div>
          <form
            action="https://formspree.io/f/xovaqoav"
            method="POST"
            className="flex flex-col gap-[20px]"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              required
              autoComplete="off"
              value={contact.username}
              onChange={handleInput}
              className="input input-bordered input-error w-full max-w-xs"
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
              className="input input-bordered input-error w-full max-w-xs"
            />
            <div>
              <textarea
                cols={"30"}
                rows={"5"}
                type="text"
                name="message"
                id="message"
                placeholder="message"
                required
                autoComplete="off"
                value={contact.message}
                onChange={handleInput}
                className="textarea textarea-error"
              />
            </div>
            <button className="btn btn-error w-[70px] mb-[20px]">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

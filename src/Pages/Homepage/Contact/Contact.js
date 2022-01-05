import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nluamkg",
        "template_mdghi0l",
        e.target,
        "user_gkM6DYqFPBl3zKX8hb4zC"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    alert("Thanks for your message!");
    e.target.reset();
  };

  return (
    <>
      <div class="bg-gray-100">
        <div class="container mx-auto md:max-w-5xl flex flex-col items-center lg:flex-row py-20 md:py-24 lg:py-32">
          <div class="w-full lg:w-1/2 xl:w-2/5 hidden lg:block">
            <div class="aspect-w-3 aspect-h-4">
              <img
                className="shadow-2xl"
                src="https://i.ibb.co/J5Jjvqr/gym-body.png"
                class="object-cover"
                alt=""
              />
            </div>
          </div>
          <div class="lg:w-3/5 lg:pl-16 xl:pl-32 pt-10 md:pt-0">
            <h4 class="font-body font-semi-bold text-primary text-sm md:text-lg uppercase tracking-widest">
              DROP A MESSAGE
            </h4>
            <h2 class="font-header text-zink-300 font-serif text-2xl sm:text-3xl md:text-4xl xl:text-5xl pt-2 xl:pt-5">
              Reach Us At Email
            </h2>
            <p class="font-body font-light text-black text-sm pt-3 uppercase">
              Let us know your thoughts
            </p>
            <form onSubmit={sendEmail}>
              <div class="pt-8 md:pt-10 lg:pt-8 xl:pt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="w-full">
                  <label
                    for="home_name"
                    class="block relative h-0 w-0 overflow-hidden"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="border-b border-black mt-1 focus:ring-indigo-500 bg-gray-200 text-black p-2 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300"
                    placeholder="Name"
                    id="home_name"
                  ></input>
                </div>
                <div class="w-full">
                  <label
                    for="home_email"
                    class="block relative h-0 w-0 overflow-hidden"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="border-b border-black mt-1 focus:ring-indigo-500 bg-gray-200 text-black p-2 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300"
                    placeholder="Email"
                    id="home_email"
                  ></input>
                </div>
              </div>
              <div class="md:pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="w-full">
                  <label
                    for="home_phone"
                    class="block relative h-0 w-0 overflow-hidden"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="border-b border-black mt-1 focus:ring-indigo-500 bg-gray-200 text-black p-2 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300"
                    placeholder="Phone"
                    id="home_phone"
                  ></input>
                </div>
                <div class="w-full">
                  <label
                    for="home_address"
                    class="block relative h-0 w-0 overflow-hidden"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="border-b border-black mt-1 focus:ring-indigo-500 bg-gray-200 text-black p-2 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300"
                    placeholder="Address"
                    id="home_address"
                  ></input>
                </div>
              </div>
              <div class="pt-0 md:pt-6">
                <label
                  for="home_message"
                  class="block relative h-0 w-0 overflow-hidden"
                >
                  Message
                </label>
                <textarea
                  className="border-b border-black mt-1 focus:ring-indigo-500 bg-gray-200 p-2 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300"
                  placeholder="Description"
                  id="home_message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="block w-full font-bold justify-center mt-4 py-2 px-8 border border-gray-100 shadow-sm text-sm font-medium text-black hover:text-white transition uppercase bg-yellow-400 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

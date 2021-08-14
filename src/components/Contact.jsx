import React, { Component } from 'react'
import toast from "react-hot-toast";
import emailjs from 'emailjs-com'

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading('Sending Message...');
    const templateParams = {
      from_name: this.state.email,
      to_name: "sennebels@gmail.com",
      message: this.state.message
    };
    emailjs
      .send("service_vb780fd", "template_1f0e3rf", templateParams, "user_iKcb9b4DVPIx7HcQpW8gf")
      .then(() => {
        toast.dismiss(toastId)
        toast.success("Message sent!")
      })
      .catch(error => {
        toast.error("Your message was not able to be sent");
      })
  }

  render() {
    return (
      <div>
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{ opacity: "0.4", position: "absolute", left: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208867.62157009047!2d4.405237023020187!3d51.19682961303586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f6da2a095203%3A0x6a9c80feae18feda!2sOlympic%20swimming%20center%20Wezenberg!5e0!3m2!1sen!2sbe!4v1628935893673!5m2!1sen!2sbe"
            />
            <div style={{ display: 'flex', justifyContent: "space-between", zIndex: 20, position: "relative", width: 100 + "%", bottom: -370}}>
              <div className="contact-card" style={{width: 500}}>
              <form
                name="contact"
                onSubmit={this.handleSubmit}
              >
                <h2>
                  Contact
                </h2>
                <p className="leading-relaxed mb-5">
                  Stuur hier voor meer info een bericht.</p>
                <div className="relative mb-4">
                  <input
                  placeholder="Naam"
                  className="contact contact-input"
                    type="text"
                    id="name"
                    name="name"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="relative mb-4">
                  <input
                  placeholder="Email"
                  className="contact contact-input"
                    type="email"
                    id="email"
                    name="email"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="relative mb-4">
                  <textarea
                  placeholder="Bericht"
                  className="contact contact-textbox"
                  rows={5}
                    id="message"
                    name="message"
                    onChange={this.handleInputChange}
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Submit
                </button>
              </form>
              </div>
              <div className="contact-card">
                <div>
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                    ADRES
                  </h2>
                  <p className="mt-1">
                    STRAAT, NR<br />
                    STAD
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2>
                    EMAIL
                  </h2>
                  <a className="text-indigo-400 leading-relaxed">
                  ivan.faes1@gmail.com
                  </a>
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                    GSM
                  </h2>
                  <p className="leading-relaxed">+32-477-45-10-00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

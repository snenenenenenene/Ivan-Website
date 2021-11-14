import React, { Component } from 'react'
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
    const templateParams = {
      from_name: this.state.email,
      to_name: "ivan.faes1@gmail.com",
      message: this.state.message
    };
    emailjs
      .send("service_nbzu3fx", "template_kfs0kio", templateParams, "user_5uY4AFCVaYGd2r6z3giBo")
      .then(() => {
      })
      .catch(error => {
      })
  }

  render() {
    return (
      <div className="contact-content">
        <a className="anchor" id="contact"></a>
        <h2>Contact</h2>
        <div>
          <div>
              <div className="contact-full">
              <div className="contact-card" style={{flex: 4}}>
                  <form
                    name="contact"
                    onSubmit={this.handleSubmit}
                  >
                    <h2>
                      Contact
                    </h2>
                    <p>
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
                      className="contact-button">
                      Submit
                    </button>
                  </form>
                </div>
                <div className="contact-card" style={{flex: 1}}>
                  <div>
                    <h2 className="contact-title">
                      EMAIL
                    </h2>
                    <a href="mailto:ivan.faes1@gmail.com" className="contact-text">
                      ivan.faes1@gmail.com
                    </a>
                    <h2 className="contact-title">
                      GSM
                    </h2>
                    <p className="contact-text">+32-477-45-10-00</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

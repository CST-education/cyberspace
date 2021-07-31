import { Component } from 'react'
import './ContactForm.scss'

export class ContactFrom extends Component {
  state = {}

  render() {
    return (
      <div class="contact ">
        <div class="l-contact-columns">
          <div class="contact__form contact__area" tabindex="0">
            <div class="contact__bd">
              <h2 class="contact__headline">Let&#39;s talk about</h2>
              <form
                local="true"
                className="form"
                autocomplete="off"
                action="/contact/send"
                accept-charset="UTF-8"
                method="post"
              >
                <input name="utf8" type="hidden" value="&#x2713;" />

                <input
                  type="hidden"
                  name="authenticity_token"
                  value="qtdk2KQDcCocPaYVq4ol/cu6M+VPr5CIAM9HGbbTXj11Ma5+B7GrfUVrNM0fp2SFn6lYvfdrqzAhNKrtpAsM7Q=="
                />
                <div className="form__groupx">
                  <input
                    className="form__radio"
                    name="reason"
                    type="radio"
                    id="great-project"
                    value="project"
                    checked
                  />
                  <label
                    className="form__label form__label--radio"
                    for="great-project"
                  >
                    Your great project
                  </label>
                </div>
                <div className="form__groupx">
                  <input
                    className="form__radio"
                    name="reason"
                    type="radio"
                    id="coffee"
                    value="coffee"
                  />
                  <label
                    className="form__label form__label--radio"
                    for="coffee"
                  >
                    Meeting for a coffee
                  </label>
                </div>
                <div className="form__group">
                  <label for="email" class="form__label form__label--text">
                    What&#39;s your email?
                  </label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    class="form__text"
                    autocomplete="off"
                    value=""
                  />
                  <div className="budget_1627511572">
                    {/* <style media="screen">.budget_1627511572 {display:none;}</style> */}
                    <label for="budget">
                      If you see this field, leave it empty.
                    </label>
                    <input
                      type="text"
                      name="budget"
                      id="budget"
                      autocomplete="off"
                      tabindex="-1"
                    />
                  </div>
                </div>
                <div class="form__group">
                  <label
                    for="message"
                    className="form__label form__label--text"
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="form__textarea"
                    required
                    autocomplete="off"
                  ></textarea>
                </div>
                <input type="submit" class="btn contact__submit" value="Send" />
              </form>
            </div>
          </div>

          <div class="contact__trust contact__area">
            <div class="contact__bd">
              <h3 class="contact__subline">Trusted by</h3>
              <div class="contact__logos">
                <img
                  alt="Shutterstock"
                  loading="lazy"
                  src="/assets/trust-logos/Shutterstock-white-14c5f279536c3fe0ca0f13730fd1d59a15b99d7d058b208e0bafc2af3266a8fc.png"
                />
                <img
                  alt="Microsoft"
                  loading="lazy"
                  src="/assets/trust-logos/Microsoft-white-24ff580cdc7e100be7198da92962cf5801128e1b1072f41ca371bdb2e842764f.png"
                />
                <img
                  alt="zalando"
                  loading="lazy"
                  src="/assets/trust-logos/zalando-white-3dc88d19c750747f239b364408a1b1b1bd50fd7f1c9a1125bbd4f592ebafae84.png"
                />
                <img
                  alt="IBM"
                  loading="lazy"
                  src="/assets/trust-logos/IBM-white-5831c04c30622293c6bfb2ccdd49c1f0ed2e7e12830ee16ff951f02c5e465cce.png"
                />
                <img
                  alt="RedBull"
                  loading="lazy"
                  src="/assets/trust-logos/RedBull-white-c40a59a98266707c0edf1bb5ffd808d823a4fb6900d15da03db807009436dfc8.png"
                />
                <img
                  alt="Deutsche Bank"
                  loading="lazy"
                  src="/assets/trust-logos/DeutscheBank-white-bc18dd4b222f340b7ea1b04cafd6a5094085ad25c2ac7266acef142436c84aaa.png"
                />
              </div>
            </div>
          </div>
        </div>

        <button
          class="contact__close contact-trigger-close"
          aria-label="Close Overlay"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 42 42">
            <path
              stroke="currentColor"
              stroke-width="2"
              d="M41 2L1 40M1 2l40 38"
            />
          </svg>
        </button>
      </div>
    )
  }
}

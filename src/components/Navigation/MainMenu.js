import { Component } from 'react'
import './NavList.scss'
import menuBtnF from '../../images/icons/menuBtnF.svg'
import menuBtnB from '../../images/icons/menuBntB.svg'
import menuOverlay from '../../images/icons/menuOverlay.svg'
import './MainMenu.scss'
export class MainMenu extends Component {
  state = {
    isOpened: true,
  }
  handleClick = () => {
    this.setState({
      isOpened: !this.state.isOpened,
    })
  }
  render() {
    return (
      <>
        <button
          // className="menu-button menu-trigger"
          aria-labelledby="menu-button__label"
          onClick={this.handleClick}
          className={
            this.state.isOpened ? 'menu-button is-opened' : 'menu-button'
          }
        >
          <span id="menu-button__label" hidden>
            Open and Close Full Menu
          </span>
          <div className="menu-button__card" aria-hidden="true">
            <div className="menu-button__front">
              <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 82 82">
                <title>CS techno</title>
                <path
                  fill="pink"
                  fill-rule="evenodd"
                  d="M0 0h82v82H0V0zm61.6 51c.3.2 2 1.5 2.2 1.4l-4.5-4a104 104 0 0 1-5.4-4.4c-3.3-3-6.7-5.8-10.1-8.7.2 0 .4-.2.5-.3.2-.3.5-.2.8-.4 0 0 .6-.3.5-.4.3-.1.5-.5.9-.5l.3-.3c.5-.5 1.1-1 1.7-1.3.4-.3.7-.6 1.1-.7.2-.3.5-.4.8-.6l1.5-1 .9-.6.8-.6c.5-.2.8-.7 1.3-.8l.3-.2.6-.5 1.8-1.1.4-.2c.5-.5 1.2-.8 1.7-1.2l1.1-.7-2.7 1.6c0-.2.2-.3.3-.3a12.8 12.8 0 0 0 1.8-1.5l.3-.2H60L57.6 25l-.9.5-1.5 1h-.3l.1-.2 1.2-.7 1.5-1 2.6-1.7.2-.1c0-.2-.2 0-.2 0l.5-.5c.2-.2.4-.4.7-.4v-.1l-.4.2h-.3c-.1-.3 0-.3.1-.3l.7-.5c-.3 0-.6.3-.8.3l-1 .2c-.3.1-.4.3-.7.3.2-.3.6-.4.7-.8h-.1l-1.2.7c-.2 0-.3.1-.4 0l.2-.2.7-.4.8-.5 1-.6c-1 .2-1.7.8-2.5 1.2v-.2l-.7.2c.1-.1.4-.2.5-.5l.8-.4 1-.6c-.4 0-.6.2-.8.3l.5-.5-.5.2v-.3s-.4.3-.6.2l.7-.6c-.4 0-.7.2-1 .3l-3 1.6-2.5 1.5-.3.2c-.3 0-.5.3-.8.4l-1.7 1-2.8 2-2 1.4-1.1.7-2.3 1.6-1.7 1.3-.5.4c-2.8-2.4-5.6-4.6-8.4-7.1l-4.2-3.7c-.4-.4-.7-.9-1.3-1-.3-.2-.5 0-.7 0-.4-.2-2 2.1-2 2.1-.3.5-1.3 1.2-1.2 2 .2 1 2 2.2 2.7 2.8 1.5 1.3 3 2.1 4.4 3.4l2.8 2.5 2.9 2.4.3.3-2.3 2-4.2 3.6-1.4 1-.9.9-.7.7-1.1.8-1.5 1.4c-.2.2-.5.5-.4.8 0 .6 0 1.2.2 1.8.2.5.3 1 .2 1.4v.2c.1.6.6 1.6.8 1.8 0 .1.2.3.4.3.3.1.3.1.3.4l.6-.4.6-.4.4-.4c.7-.7-1.2.6-.4-.1l2.4-2.1 2.2-2 2.9-2.5.5-.4v.2l2-1.7 1.7-1.4.5-.4 1.9-1.5 1 1 1.7 1.4 1.5 1.2-1.3-1.3c.6.1 3.5 2.6 4 3 .1-.4 1.5.9 1.8 1.1l3.7 3.2-.2-.4-.4-.7c.9.5 1.6 1.4 2.4 2l-.1-.5 1 .7c.3-.3.5.1.8.4 1 .5 2 1.4 3 2-.5-.4-1.3-1-1.5-1.6l.2.1-3.2-3c.8-.3 1.2 1 1.8 1l-.5-.5c.2-.2 1 .8.9.7l.6.5v-.1c.1 0 .7.6.9.6.4.3 1.4 1.5 2 1.5a1 1 0 0 1-.4-.4c.6.4 1 1 1.7 1.3l-.3-.3 1 .6c.3-.3-2.6-2.5-2.5-2.5l-.5-.4c.2 0-.4-.6-.3-.7L61 51c.1-.2-1.9-1.3-2-1.6l2.8 2a.8.8 0 0 1-.2-.4zm-.4 7l-1.5-.2c-.2 0-1-.2-1 0l-1.1-.2-1.5.2h-5.2l-17.5.3c-.9-.1-2-.2-2.8-.1a59.1 59.1 0 0 0-8.4-.4c-.3 0-.2.2-.4.4-.3.3 0 .5-.2.9 0 0 0 .4.2.4-.1.3-.3.3-.2.6.1.6-.2 1.4 0 1.8l.1.7c.2.1.2.2.2.4.1.3.3.2.5.3H24c.4.1 1 .2 1.3.1.4 0 2.6.2 3 .1a238 238 0 0 0 27.8-.5h.7c.6 0 1.3-.3 1.8-.5.3 0 .5-.1.5-.3l.6-.2c.2 0 .2-.6 0-.8-.6-.2-.2 0-.5-.6 0-.2 1.5-.3.7-.4-.3 0 .8-.3.7-.4-.1 0-.6-.6-1-.6 0-.4 1.7-.4.7-.6-1.6-.1.6-.2 1-.4z"
                />
              </svg>

              {/* <img src={menuBtnF} alt="menuBtnF" /> */}
            </div>
            <div className="menu-button__back" focusable="false">
              <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 105 105">
                <g id="t" fill="none" fill-rule="evenodd">
                  <rect width="105" height="105" fill="#FFF" />
                  <path
                    id="MENU"
                    fill="green"
                    fill-rule="nonzero"
                    d="M30.929,45.36 L30.929,61 L27.042,61 L27.042,53.157 L23.569,58.516 L23.569,58.539 L21.407,58.539 L21.407,58.516 L17.911,53.111 L17.934,61 L14.047,61 L14.047,45.36 L16.945,45.36 L22.488,53.709 L28.031,45.36 L30.929,45.36 Z M41.576,48.741 L41.576,51.593 L48.522,51.593 L48.522,54.905 L41.576,54.905 L41.576,57.619 L49.511,57.619 L49.511,61 L37.689,61 L37.689,45.36 L49.511,45.36 L49.511,48.741 L41.576,48.741 Z M70.094,45.36 L70.094,61 L67.104,61 L59.606,52.421 L59.606,61 L55.719,61 L55.719,45.36 L58.686,45.36 L66.23,54.169 L66.23,45.36 L70.094,45.36 Z M91.183,45.36 L91.183,53.709 C91.183,58.562 88.377,61.345 83.892,61.345 C79.43,61.345 76.624,58.562 76.624,53.709 L76.624,45.36 L80.534,45.36 L80.534,53.778 C80.534,56.17 81.845,57.711 83.892,57.711 C85.939,57.711 87.273,56.17 87.273,53.778 L87.273,45.36 L91.183,45.36 Z"
                  />
                </g>
              </svg>

              {/* <img src={menuBtnB} alt="menuBtnB" /> */}
            </div>
          </div>
        </button>
        <svg
          // class="shape-overlays is-opened"
          className={
            this.state.isOpened ? 'shape-overlays is-opened' : 'shape-overlays'
          }
          viewbox="0 0 100 100"
          preserveaspectratio="none"
        >
          <defs>
            <lineargradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#00FDCF" />
              <stop offset="100%" stop-color="#0000FF" />
            </lineargradient>
            <lineargradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#0000FF" />
              <stop offset="100%" stop-color="#00FDCF" />
            </lineargradient>
          </defs>
          <rect
            class="shape-overlays__rect shape-overlays__rect--basic"
            width="100"
            height="100"
          />
          <rect
            class="shape-overlays__rect shape-overlays__rect--basic"
            width="100"
            height="100"
          />
          <rect
            class="shape-overlays__rect shape-overlays__rect--basic"
            width="100"
            height="100"
          />
        </svg>

        {/* <img src={menuOverlay} alt="menuOverlay" /> */}
      </>
    )
  }
}

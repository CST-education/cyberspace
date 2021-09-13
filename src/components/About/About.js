import { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import './About.scss'
import './about.css'
const about = [
  {
    id: 'sdacdvfdsv',
    accent: 'Cyber Space Technology',
    content:
      ' - це необмежений простір, в якому пізнають та навчаються створювати футуристичні новітні проекти. Світ змінюється кожну мить, ми повинні знати у якому саме напрямку, розуміти істину змін, опановувати їх та творити технологічно-інформаційну синергію.',
  },
  {
    id: 'vadfvarv',
    accent: 'Cyber MASTER',
    content:
      ' - програми для дорослих, що вирішили кардинально змінити діяльність або спеціалісти що бажають підвищити свій існуючий рівень, створені за потребами сучасного ринку IT. Кожен отримає все необхідне, щоб після навчання отримати завітний оффер, адже ведучі рекрутери завжди з нами!',
  },
  {
    id: 'adfvdf',
    accent: 'Cyber KIDS ',
    content:
      " - дитячі програми розвинуть здібності та таланти, сформують надійний фундамент для подальших досягнень вашої дитини. У Cyber Space Kids вже з дев'яти років маленькі генії опановують безмежний простір технологій, пізнають та підкорюють цифровий всесвіт. Для них це захоплююча подорож у всесвіт в якому людина та технології створюють шедеври!",
  },
  {
    id: 'adfvadv',
    accent: 'Get started! ',
    content:
      'Все починається з малого, з простого бажання пізнати технологію, саме тому Cyber Space Technology створили адаптивні курси, які дадуть змогу опанувати сферу IT та прокласти свій шлях у цифрове майбутнє кожному бажаючому!',
  },
]
export function About() {
  const [idx, setIdx] = useState(0)
  const handleSelect = (selectedIdx, e) => setIdx(selectedIdx)
  return (
    <section className="preamble">
      <div className="l-center-offset">
        {/* <div className="l-center-offset__content"> */}
        <Carousel
          activeIndex={idx}
          // onSelect={handleSelect}
          className="preamble-cardList"
        >
          {about.map((elem) => (
            <Carousel.Item className="preamble-card" key={elem.id}>
              <Carousel.Caption>
                <p className="l-center-offset__content">
                  <a href="/" className="l-center-offset__content--accent">
                    {elem.accent}
                  </a>
                  {elem.content}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        {/* <a href="/projects" className="btn btn--invert btn--block-sm">
            Проекти
          </a>
          <button className="btn btn--secondary btn--block-sm contact-trigger">
            Курси
          </button> */}
        {/* </div> */}
      </div>
    </section>
  )
}

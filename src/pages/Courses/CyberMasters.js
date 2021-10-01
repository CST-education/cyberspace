import comunity from '../../images/comunity.png'
import s from './CyberMasters.module.scss'
import coursesData from './masters.json'
import { NavLink } from 'react-router-dom'
import { SolidTitle } from '../../components/SolidTitle/SolidTitle'
import { Icons } from '../../components/Icons'
import { AnimateBorderCard } from '../../components/Cards/AnimateBorderCard'
import {
  Btn1,
  Btn2,
  Btn3,
  Btn4,
  Btn5,
  Btn6,
  Btn7,
  Btn8,
  Btn9,
  Btn10,
  Btn11,
  Btn12,
  Btn13,
  Btn14,
  Btn15,
  Btn16,
} from '../../components/Buttons/Buttons'
const {
  masters: { mainTitle, courses },
} = coursesData
function Courses() {
  function handleClick() {
    // открываем модальное модалку
  }
  return (
    <>
      <div className={s.img}>
        <div className={s.container}>
          <div className={s.header}>
            <NavLink to="/">
              <div className={s.jotformIcon}></div>
            </NavLink>
            {/* <a href="/"> Login / Sign Up</a> */}
          </div>
          <div className={s.start}>
            <h2 className={s.title1}>{mainTitle}</h2>
            <h1 className={s.title2}>
              <span>JavaScript</span> Development
            </h1>
            <ul>
              {courses.map(({ title }) => (
                <li>
                  <a className={s.introduceLink} href="/">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className={s.introduce}>
              Створюй власне майбутнє разом з
              <span className={s.introduceSpan}> {mainTitle}</span>
            </h3>
            <p className={s.introduce}>
              Поринь в Світ Інформаційних технологій!
            </p>
            <button className={s.button} onClick={handleClick}>
              GET STARTED
            </button>
          </div>
        </div>
      </div>
      <div className={s.page2}>
        <div className={s.container}>
          <SolidTitle titleText={mainTitle} />
          <ul className={s.iconList}>
            <li className={s.threeIcon}>
              <Icons name="masters-1" className={s.icon1Img} />
              <h3 className={s.iconTitle}>ВІЗУАЛЬНІ КОНСПЕКТИ Й МАТЕРІАЛИ</h3>
            </li>
            <li className={s.threeIcon}>
              <Icons name="masters-2" className={s.icon1Img} />
              <h3 className={s.iconTitle}>УНІКАЛЬНИЙ ФОРМАТ НАВЧАННЯ</h3>
            </li>
            <li className={s.threeIcon}>
              <Icons name="masters-3" className={s.icon1Img} />
              <h3 className={s.iconTitle}>ОБОВ'ЯЗКОВА ПРАКТИКА В ПРОЕКТАХ</h3>
            </li>
          </ul>
        </div>
      </div>
      <div className={s.page4}>
        <div className={s.container}>
          <ul className={s.memberships}>
            {courses.map(({ id, title, buttonText }) => (
              <AnimateBorderCard key={id}>
                <div className={s.memTitle}>{title}</div>
                <button className={s.btnGetFree}>{buttonText}</button>
              </AnimateBorderCard>
            ))}
          </ul>
        </div>
        <div className={s.page3}>
          <img className={s.page3Img} src={comunity} alt="" />
          <div className={s.information}>
            <h2 className={s.infoTitle}>Інфо для студентів</h2>
            <ul className={s.infoAll}>
              <li>
                <p>Графік занять</p>
              </li>
              <li>
                <p>IT English</p>
              </li>
              <li>
                <p>Проекти і практика</p>
              </li>
            </ul>
            {/* <button className={s.btnLearnMore}>Дізнатися більше</button> */}
            <Btn5 btnText="Дізнатися більше" />
          </div>
        </div>
      </div>
    </>
  )
}
export default Courses

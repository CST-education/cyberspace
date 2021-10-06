import comunity from '../../images/comunity.png'
import s from './CyberMasters.module.scss'
import coursesData from './masters.json'
import { NavLink } from 'react-router-dom'
import { SolidTitle } from '../../components/SolidTitle/SolidTitle'
import { Icons } from '../../components/Icons'
import { AnimateBorderCard } from '../../components/Cards/AnimateBorderCard'
import { Btn9 } from '../../components/Buttons/Buttons'
import { TypingText } from '../../components/TypingText/TypingText'
import { Modal } from '../../components/Modal/Modal'
import { useState } from 'react'
const {
  kids: { mainTitle, courses },
} = coursesData

function CyberKids() {
  const [showModal, setShowModal] = useState(false)

  function handleClick() {
    setShowModal(true)
    // открываем модальное модалку
  }
  function closeModal() {
    setShowModal(false)
  }
  return (
    <>
      {showModal && (
        <Modal toggleModal={closeModal}>
          <p>HELLO!</p>
        </Modal>
      )}
      <section className={s.hero}>
        <div className={s.container}>
          <div className={s.header}>
            <NavLink to="/">
              <div className={s.jotformIcon}></div>
            </NavLink>
          </div>
          <div className={s.start}>
            <h2 className={s.title1}>{mainTitle}</h2>
            <h1 className={s.title2}>
              <span>3D</span> Animation
            </h1>
            <ul>
              {courses.map(({ title }) => (
                <li key={title}>
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
      </section>

      <section className={s.features}>
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
      </section>

      <section className={s.courses}>
        <div className={s.container}>
          <ul className={s.memberships}>
            {courses.map(({ id, title, buttonText }) => (
              <AnimateBorderCard key={id} currentSelector="courseItem">
                <div className={s.memTitle}>{title}</div>
                <button className={s.btnGetFree} onClick={handleClick}>
                  {buttonText}
                </button>
              </AnimateBorderCard>
            ))}
          </ul>
        </div>
      </section>
      <section className={s.forStudents}>
        <img className={s.page3Img} src={comunity} alt="" />
        <div className={s.information}>
          <h2 className={s.infoTitle}>Інфо для студентів</h2>
          <ul className={s.infoAll}>
            <li>
              <TypingText text="Графік занять" />
            </li>
            <li>
              <TypingText text="IT English" />
            </li>
            <li>
              <TypingText text="Проекти і практика" />
            </li>
          </ul>
          <Btn9 btnText="Дізнатися більше" onClick={handleClick} />
        </div>
      </section>
    </>
  )
}
export default CyberKids

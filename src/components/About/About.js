import './About.scss'
export function About() {
  return (
    <section className="preamble">
      <div className="l-center-offset">
        <div className="l-center-offset__content">
          <h1 className="lead">
            Cyber Space Technology - простір, створений командой однодумців та
            фахівців своєї справи. Ми прагнемо створювати та об'єднувати людей,
            що хочуть розвиватись та змінювати світ на краще!
          </h1>
          <a href="/projects" className="btn btn--invert btn--block-sm">
            Проекти
          </a>
          <button className="btn btn--secondary btn--block-sm contact-trigger">
            Курси
          </button>
        </div>
      </div>
    </section>
  )
}

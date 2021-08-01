export function Blog() {
  return (
    <section className="blog subsection">
      <div className="l-center-offset l-center-offset--extended">
        <div className="l-center-offset__content">
          <h3 className="subhead">Актуальне</h3>
          <ul className="l-teaser-columns l-teaser-columns--blog">
            <li className="multi-teaser multi-teaser--condensed">
              <h2 className="multi-teaser__description">
                <a href="/">Post title</a>
              </h2>
              <div class="multi-teaser__artwork">
                <a
                  href="https://9elements.com/blog/productive-with-holocracy/"
                  aria-hidden="true"
                  tabindex="-1"
                >
                  <img
                    loading="lazy"
                    src="https://9elements.com/blog/content/images/size/w600/2021/05/The-last-coding-session.png"
                    alt=""
                    aria-hidden="true"
                  />
                </a>
              </div>
              <p class="multi-teaser__subline bodytext">
                Corporate growth kills individuality – or at least it tries to.
                We...
                <a href="https://9elements.com/blog/productive-with-holocracy/">
                  <span>&nbsp;—&nbsp;&nbsp;read more</span>
                </a>
              </p>
              <div class="multi-teaser__notes">
                Jun 07
                <br />
                2021
              </div>
            </li>
            <li className="multi-teaser multi-teaser--condensed">
              <h2 class="multi-teaser__description">
                <a href="/">
                  Digital Agency goes Beauty - Produkt- und Shop-Design für
                  J&#39;Tanicals
                </a>
              </h2>
              <p class="multi-teaser__subline bodytext">
                Als sehr technisch angesehene Agentur mit vielen Projekten und
                Par...
                <a href="https://cstechno.com/blog/digital-agency-goes-beauty-jtanicals/">
                  <span>&nbsp;—&nbsp;&nbsp;read more</span>
                </a>
              </p>
              <div class="multi-teaser__notes">
                Apr 26
                <br />
                2021
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

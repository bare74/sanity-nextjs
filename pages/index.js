import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export default function IndexPage({
  works,
  educations,
  skill,
  courses,
  contacts,
}) {
  return (
    <>
      <main>
        {/* <div className="toggle-switch">
          <label className="switch">
            <input type="checkbox" onclick="myFunction()" />
            <span className="slider round">
              <p>
                DARK
                <br />
                MODE
              </p>
            </span>
          </label>
        </div> */}
        {/* <!-- Navigation--> */}
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-primaryA fixed-top"
          id="sideNav"
        >
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">Bjørn Are Nielsen</span>
            <span className="d-none d-lg-block">
              {contacts?.length > 0 &&
                contacts.map((contact) => (
                  <div key={contact._id}>
                    {contact.image && (
                      <img
                        className="img-fluid img-profile rounded-circle mx-auto mb-2"
                        src={urlFor(contact.image.asset).width(200).url()}
                      />
                    )}
                  </div>
                ))}
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  Om meg
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#experience">
                  Arbeidserfaring
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#education">
                  Utdannelse
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#skills">
                  Datakunnskaper
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#awards">
                  Kurs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#interests">
                  Fritidsinteresser
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- Page Content--> */}
        <div className="container-fluid p-0">
          {/* <!-- Om meg--> */}
          <section className="resume-section" id="about">
            <div className="resume-section-content">
              <h1 className="mb-0">
                Bjørn Are
                <span className="text-primary">Nielsen</span>
              </h1>

              <div className="subheading mb-5">
                {contacts?.length > 0 &&
                  contacts.map((contact) => (
                    <div key={contact._id}>
                      <div className="subheading mb-5">
                        {contact?.adress} · {contact?.phone} ·{" "}
                        <a href={"mailto:" + contact?.email}>
                          {contact?.email}
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
              {contacts?.length > 0 &&
                contacts.map((contact) => (
                  <div key={contact._id}>
                    <p className="lead mb-5">{contact?.about}</p>{" "}
                  </div>
                ))}
              <ul className="list-inline dev-icons">
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/bj%C3%B8rn-are-nielsen-39529147/">
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </li>

                <li className="list-inline-item">
                  <a href="https://www.facebook.com/bjornare">
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <hr className="m-0" />
          {/* <!-- Arbeidserfaring--> */}
          <section className="resume-section" id="experience">
            <div className="resume-section-content">
              <h2 className="mb-xl-5">Arbeidserfaring</h2>
              {works.length > 0 && (
                <ul className="container">
                  {works.map((work) => (
                    <li key={work._id}>
                      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                          <h3 className="mb-0">{work?.title}</h3>
                          <div className="subheading mb-3">{work?.company}</div>
                          <p>{work?.text}</p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="text-primary">{work?.fromdate}</span>
                          <span className="text-primary">{work?.todate}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex-shrink-0">
                <span className="text-primary" id="Year-From-14"></span>
              </div>

              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0" id="Work-title"></h3>
                  <div className="subheading mb-3" id="Work-Place"></div>
                  <p id="Work-experience"></p>
                </div>
                <div className="flex-shrink-0">
                  <span id="Year-From" className="text-primary"></span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0" id="Work-title-2"></h3>
                  <div className="subheading mb-3" id="Work-Place-2"></div>
                  <p id="Work-experience-2"></p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary" id="Year-From-2"></span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0" id="Work-title-3"></h3>
                  <div className="subheading mb-3" id="Work-Place-3"></div>
                  <p id="Work-experience-3"></p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary" id="Year-From-3"></span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0" id="Work-title-4"></h3>
                  <div className="subheading mb-3" id="Work-Place-4"></div>
                  <p id="Work-experience-4"></p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary" id="Year-From-4"></span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0" id="Work-title-5"></h3>
                  <div className="subheading mb-3" id="Work-Place-5"></div>
                  <p id="Work-experience-5"></p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary" id="Year-From-5"></span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0" id="Work-title-6"></h3>
                  <div className="subheading mb-3" id="Work-Place-6"></div>
                  <p id="Work-experience-6"></p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary" id="Year-From-6"></span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0" id="Work-title-7"></h3>
                  <div className="subheading mb-3" id="Work-Place-7"></div>
                  <p id="Work-experience-7"></p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary" id="Year-From-7"></span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0" id="Work-title-8"></h3>
                  <div className="subheading mb-3" id="Work-Place-8"></div>
                  <p id="Work-experience-8"></p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary" id="Year-From-8"></span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0" id="Work-title-9"></h3>
                  <div className="subheading mb-3" id="Work-Place-9"></div>
                  <p id="Work-experience-9"></p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary" id="Year-From-9"></span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0" id="Work-title-10"></h3>
                  <div className="subheading mb-3" id="Work-Place-10"></div>
                  <p id="Work-experience-10"></p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary" id="Year-From-10"></span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0" id="Work-title-11"></h3>
                  <div className="subheading mb-3" id="Work-Place-11"></div>
                  <p id="Work-experience-11"></p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary" id="Year-From-11"></span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0" id="Work-title-12"></h3>
                  <div className="subheading mb-3" id="Work-Place-12"></div>
                  <p id="Work-experience-12"></p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary" id="Year-From-12"></span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0" id="Work-title-13"></h3>
                  <div className="subheading mb-3" id="Work-Place-13"></div>
                  <p id="Work-experience-13"></p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary" id="Year-From-13"></span>
                </div>
              </div>
            </div>
          </section>
          <hr className="m-0" />
          {/* <!-- Utdanning--> */}
          <section className="resume-section" id="education">
            <div className="resume-section-content">
              <h2 className="mb-5">Utdanning</h2>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0" id="school-place"></h3>
                  <div className="subheading mb-3" id="education-Title"></div>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary" id="Year-From-To"></span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0" id="school-place-2"></h3>
                  <div className="subheading mb-3" id="education-Title-2"></div>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary" id="Year-From-To-2"></span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0" id="school-place-3"></h3>
                  <div className="subheading mb-3" id="education-Title-3"></div>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary" id="Year-From-To-3"></span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0" id="school-place-4"></h3>
                  <div className="subheading mb-3" id="education-Title-4"></div>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary" id="Year-From-To-4"></span>
                </div>
              </div>
            </div>
          </section>
          <hr className="m-0" />
          {/* <!-- Datakunnskaper--> */}
          <section className="resume-section" id="skills">
            <div className="resume-section-content">
              <h2 className="mb-5">Datakunnskaper</h2>
              <div className="subheading mb-3">Programmer språk og verktøy</div>
              <ul className="list-inline dev-icons">
                <li className="list-inline-item">
                  <a href="https://en.wikipedia.org/wiki/HTML">
                    <i className="fa fa-html5" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://en.wikipedia.org/wiki/CSS">
                    <i className="fa fa-css3" aria-hidden="true"></i>
                  </a>
                </li>

                <li className="list-inline-item">
                  <a href="https://github.com/">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://nodejs.org/en">
                    <i className="fa fa-nodejs" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://react.dev/">
                    <i className="fa fa-react" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)">
                    <i className="fa fa-csharp"></i>
                  </a>
                </li>
              </ul>
              <div className="subheading mb-3">Programmer</div>
              <ul className="fa-ul mb-0">
                <li>
                  <span className="fa-li">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                  Asp .Net Core.
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                  Microsoft Office, Microsoft 365, Microsoft CRM.
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                  SuperOffice CRM
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                  E-Conomics – økonomi og logistikkprogram.
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                  Ibistic – webløsning til behandling av elektronisk faktura.
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                  Visma Global, Visma Business - økonomi og logistikkprogram.
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                  Webtemp CRM - Forretningssystem for bemanningsforetak
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                  Agile Development & Scrum
                </li>
              </ul>
            </div>
          </section>
          <hr className="m-0" />
          {/* <!-- Awards--> */}
          <section className="resume-section" id="awards">
            <div className="resume-section-content">
              <h2 className="mb-5">Kurs</h2>
              <ul className="fa-ul mb-0">
                <li>
                  <span className="fa-li"></span>
                  2022 - Universell Utforming for nettredaktører
                </li>
                <li>
                  <span className="fa-li"></span>
                  2018 - SuperOffice CRM Administratorkurs
                </li>
                <li>
                  <span className="fa-li"></span>
                  2012 - Trener 1 Kurs Håndball
                </li>
                <li>
                  <span className="fa-li"></span>
                  2012- Regnskapskurs Visma
                </li>
                <li>
                  <span className="fa-li"></span>
                  2010 - CMAS * Dykke sertifikat
                </li>
                <li>
                  <span className="fa-li"></span>
                  2002 - Salgskurs, If Skadeforsikring
                </li>
                <li>
                  <span className="fa-li"></span>
                  1999 - Norges Varehandels Høyskole, Avansert Butikkopplæring
                </li>
                <li>
                  <span className="fa-li"></span>
                  1996 - VHF Sertifikat
                </li>
                <li>
                  <span className="fa-li"></span>
                  1996 - Securitas Vekterkurs
                </li>
              </ul>
            </div>
          </section>
          {/* <!-- Fritidsinteresser--> */}
          <section className="resume-section" id="interests">
            <div className="resume-section-content">
              <h2 className="mb-5">Fritidsinteresser</h2>
              <p>
                Spilt Håndball i 25 år, håndball trener for Herrelaget fra
                2007-09 og 2013- 2016. Håndball trener for Jenter født 2001 fra
                2008-2018. J18 og 5 Div. fra 2017 – 2018. IT, Båtliv, dykking og
                lyd- og bilde.
              </p>
            </div>
          </section>
          <hr className="m-0" />
        </div>
        <script
          src="https://platform.linkedin.com/badges/js/profile.js"
          async
          defer
          type="text/javascript"
        ></script>
        {/* <!-- Bootstrap core JS--> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Core theme JS--> */}
        {/* <script src="js/scripts.js"></script> */}
      </main>
    </>
  );
}

const client = createClient({
  projectId: "iihwp4nb",
  dataset: "production",
  apiVersion: "2023-06-28",
  useCdn: false,
});

export async function getStaticProps() {
  const courses = await client.fetch(`*[_type == "course"]`);
  const skill = await client.fetch(`*[_type == "skills"]`);
  const educations = await client.fetch(`*[_type == "education"]`);
  const works = await client.fetch(`*[_type == "work"]`);
  const contacts = await client.fetch(`*[_type == "contact"]`);

  return {
    props: {
      courses,
      skill,
      educations,
      works,
      contacts,
    },
  };
}
const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}
// function myFunction() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
//   htmlEl.classList.toggle("bg-primaryA");
//   htmlEl.classList.toggle("bg-primaryB");
// }

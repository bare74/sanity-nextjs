import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { useEffect } from "react";

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

export default function IndexPage({
  works,
  educations,
  skill,
  courses,
  contacts,
}) {
  useEffect(() => {
    window.addEventListener("scroll", reveal);

    // const text = document.querySelector("h1");
    // window.addEventListener("scroll", () => {
    //   const current = window.scrollY;

    //   text.style.fontSize = `clamp(2rem, ${current}px, 20rem)`;
    // });

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  const formatYear = (dateString) => {
    const year = new Date(dateString).getFullYear();
    return !isNaN(year) ? year : "";
  };

  const formatDate = (dateString) => {
    const options = { month: "short", year: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "no-NO",
      options
    );
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  };
  return (
    <>
      <main>
        {/* <div className="heroSection">
          <div className="container">
            <h1>Bjørn Are Nielsen</h1>
          </div>
        </div> */}
        {/* {!works.length > 0 && <p>No pets to show</p>}
        {works.length > 0 && (
          <div>
            <pre>{JSON.stringify(works, null, 2)}</pre>
          </div>
        )} */}
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
        {/* <div className="toggle-switch">
          <label className="switch">
            <input type="checkbox" onClick={myFunction} />
            <div className="slider round">
              <p>
                DARK
                <br />
                MODE
              </p>
            </div>
          </label>
        </div> */}
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-primaryA fixed-top"
          id="sideNav"
        >
          <a className="navbar-brand js-scroll-trigger" href="/#page-top">
            <span className="d-block d-lg-none">Bjørn Are Nielsen</span>
            <span className="d-none d-lg-block">
              {contacts?.length > 0 &&
                contacts.map(
                  (contact) =>
                    contact.image && (
                      <div key={contact._id}>
                        <img
                          className="img-fluid img-profile rounded-circle mx-auto mb-2"
                          src={urlFor(contact.image.asset).width(200).url()}
                        />
                      </div>
                    )
                )}
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
        {/* <!-- Om meg--> */}
        <div className="container-fluid p-0">
          <section className="resume-section" id="about">
            <div className="resume-section-content">
              {contacts?.length > 0 &&
                contacts.map((contact) => (
                  <div key={contact._id}>
                    <h1 className="mb-0">
                      {contact?.firstname}{" "}
                      <span className="text-primary">{contact?.lastname}</span>
                    </h1>
                  </div>
                ))}
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
                  <a
                    className="test"
                    href="https://www.linkedin.com/in/bj%C3%B8rn-are-nielsen-39529147/"
                  >
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
              <div className="container-test reveal">
                {works.length > 0 && (
                  <ul className="container">
                    {works
                      .sort(
                        (a, b) => new Date(b.fromdate) - new Date(a.fromdate)
                      )
                      .map((work) => (
                        <li key={work._id}>
                          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="flex-grow-1">
                              <h3 className="mb-0">{work?.title}</h3>
                              <div className="subheading mb-3">
                                {work?.company}
                              </div>
                              <p>{work?.text}</p>
                            </div>
                            <div className="flex-shrink-0">
                              <span className="text-primary">
                                {formatDate(work?.fromdate)}
                              </span>{" "}
                              -{" "}
                              <span className="text-primary">
                                {work?.todate ? formatDate(work.todate) : "DD"}
                              </span>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </div>
          </section>

          <hr className="m-0" />
          {/* <!-- Utdanning--> */}

          <section className="resume-section" id="education">
            <div className="resume-section-content">
              <h2 className="mb-xl-5">Utdanning</h2>
              <div className="container-test reveal">
                {educations.length > 0 && (
                  <ul className="container">
                    {educations
                      .sort(
                        (a, b) => new Date(b.fromdate) - new Date(a.fromdate)
                      )
                      .map((education) => (
                        <li key={education._id}>
                          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="flex-grow-1">
                              <h3 className="mb-0">{education?.school}</h3>
                              <div className="subheading mb-3">
                                {education?.line}
                              </div>
                            </div>
                            <div className="flex-shrink-0">
                              <span className="text-primary">
                                {formatDate(education?.fromdate)}
                              </span>{" "}
                              -{" "}
                              <span className="text-primary">
                                {education?.todate
                                  ? formatDate(education.todate)
                                  : "DD"}
                              </span>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </div>
          </section>

          <hr className="m-0" />
          {/* <!-- Datakunnskaper--> */}
          <section className="resume-section" id="skills">
            <div className="resume-section-content">
              <h2 className="mb-5">Datakunnskaper</h2>
              <div className="container-test reveal">
                <div className="subheading mb-3">
                  Programmer språk og verktøy
                </div>
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
                {skill.length > 0 && (
                  <ul className="container">
                    {skill.map((skills) => (
                      <li key={skills._id}>
                        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                          <div className="flex-grow-1">
                            <div className="subheading mb-3">
                              {skills?.program}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
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
            </div>
          </section>

          <hr className="m-0" />
          {/* <!-- Kurs--> */}

          <section className="resume-section" id="awards">
            <div className="resume-section-content">
              <h2 className="mb-5">KURS</h2>
              <div className="container-test reveal">
                {courses.length > 0 && (
                  <ul className="fa-ul mb-0">
                    {courses
                      .sort((a, b) => new Date(b.year) - new Date(a.year))
                      .map((course) => (
                        <li key={course._id}>
                          <span className="fa-li"> </span>
                          {formatYear(course?.year)} - {course?.course}{" "}
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </div>
          </section>

          {/* <!-- Fritidsinteresser--> */}
          {/* <div className="container-test reveal"> */}
          <section className="resume-section" id="interests">
            <div className="resume-section-content">
              <h2 className="mb-5">Fritidsinteresser</h2>
              {contacts?.length > 0 &&
                contacts.map((contact) => (
                  <div key={contact._id}>
                    <p>{contact?.leisure}</p>
                  </div>
                ))}
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

import React, { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation/Navigation";
import ReactGa from "react-ga";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faMedium, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Bio } from "../components/Bio";

interface indexProps { }

const locomotiveScroll =
  typeof window !== `undefined` ? require("locomotive-scroll").default : null;

const hoverEffect =
  typeof window !== `undefined` ? require("hover-effect").default : null;

const transition: { duration: number; ease: number[] } = {
  duration: 1.4,
  ease: [0.6, 0.01, 0.05, 0.9],
};

const index: React.FC<indexProps> = ({ }) => {
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);

  const refScroll = React.useRef(null);
  let lscroll: any;

  React.useEffect(() => {
    ReactGa.initialize("UA-177100391-3");
    ReactGa.pageview(window.location.pathname + window.location.search);

    if (!refScroll.current) return;
    // @ts-ignore
    lscroll = new locomotiveScroll({
      el: refScroll.current,
      smooth: true,
      reloadOnContextChange: true,
      multiplier: 0.75,
      inertia: 0.5,
    });

    // update locomotive scroll
    window.addEventListener("load", () => {
      let image = document.querySelector("img");
      // @ts-ignore
      const isLoaded = image!.complete && image!.naturalHeight !== 0;
      lscroll.update();
    });

    // image hover effect
    Array.from(document.querySelectorAll(".project-card__middle")).forEach(
      (el: any) => {
        const imgs: any = Array.from(el.querySelectorAll("img"));
        new hoverEffect({
          parent: el,
          intensity: 0.2,
          speedIn: el.dataset.speedin || undefined,
          speedOut: el.dataset.speedout || undefined,
          easing: el.dataset.easing || undefined,
          hover: el.dataset.hover || undefined,
          image1: imgs[0].getAttribute("src"),
          image2: imgs[1].getAttribute("src"),
          displacementImage: el.dataset.displacement,
        });
      }
    );

    // header cursor
    const cursor = document.querySelector(".cursor");
    window.onmousemove = (e: any) => {
      cursor!.setAttribute("style", `top: ${e.pageY}px; left: ${e.pageX}px;`);
    };

    console.clear();
    console.log.apply(console, [
      "%c Designed and Developed by Ravi Valluri %c %c🚀 %c\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
      "color: #fff; background: #242424; padding:5px 0 5px 5px;",
      "background: #242424; padding:5px 0",
      "background: #242424; padding:5px 5px 5px 0",
    ]);
    console.log.apply(console, [
      "%c Thanks for stopping by, I’m currently looking to work with a new team.\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
    ]);
  }, []);

  function toggleBodyScroll(isToggleOpen: boolean) {
    if (isToggleOpen === false) {
      setIsToggleOpen(true);
    } else if (isToggleOpen === true) {
      setIsToggleOpen(false);
    }
  }
  const tagLines = [
    "engineering the future, one line of code at a time.",
    "turning coffee into code.",
    "solving tomorrow's problems today.",
    "bringing ideas to life with code.",
    "programming the future.",
    "innovation through code.",
    "building bridges in the digital world.",
    "where logic meets creativity.",
    "coding solutions, exceeding expectations.",
    "translating human needs into digital realities.",
    "marrying technology with ingenuity.",
    "the art of programming, the science of solutions.",
    "writing the digital language of success.",
    "where code meets craftsmanship.",
    "driven by passion, powered by code.",
  ];
  const [randomTagLine, setRandomTagLine] = useState("");
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * tagLines.length);
    setRandomTagLine(tagLines[randomIndex]);
  })

  return (
    <>
      <div id="menu-target" data-scroll-container ref={refScroll}>
        <Head>
          <link rel="icon" href="svg/logo-left.svg" />
          <link href="https://codebyravi.com/" rel="canonical" />
          <meta name="theme-color" content="#00004d" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#00004d"
          />
          <title>Ravi Valluri 🚀 &mdash; Software Engineer</title>
          <meta
            name="description"
            content="I'm a Software Engineer and engineering the future, one line of code at a time."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Ravi Valluri 🚀 &mdash; Software Engineer"
          />
          <meta property="og:url" content="https://codebyravi.com/" />
          <meta property="og:image" content="webp/preview-image.png" />
          <meta
            property="og:description"
            content="I'm a self-taught Software Engineer and engineering the future, one line of code at a time."
          />
          <meta
            name="twitter:title"
            content="Ravi Valluri 🚀 &mdash; Software Engineer"
          />
          <meta
            name="twitter:description"
            content="I'm a self-taught Software Engineer and engineering the future, one line of code at a time."
          />
          <meta name="twitter:image" content="webp/preview-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://codebyravi.com/" />
        </Head>
        <motion.div
          data-scroll
          data-scroll-sticky
          data-scroll-target="#menu-target"
          animate={{ top: "-100vh", transition: { ...transition, delay: 15 } }}
          className="preloader"
        >
          <div className="preloader__wrapper">
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { ...transition } }}
              className="preloader__left"
            >
              <img src="svg/logo-left.svg" alt="logo" width={100} height={100}/>
            </motion.div>
            <motion.div
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { ...transition } }}
              className="preloader__right"
            >
              <p className="preloader__text">JAVASCRIPT/TYPESCRIPT</p>
              <p className="preloader__text">IOS/SWIFT</p>
              <p className="preloader__text">REACT/ANGULAR</p>
              <p className="preloader__text">NODE JS/JAVA/KOTLIN/PYTHON</p>
              <p className="preloader__text">REACT NATIVE/FLUTTER/IONIC</p>
              <p className="preloader__text">MONGODB/POSTGRESQL</p>
              <p className="preloader__text">AWS/GOOGLE CLOUD</p>
            </motion.div>
          </div>
        </motion.div>
        <div className="cursor"></div>
        <Navigation
          isOpen={isToggleOpen}
          toggleOpen={() => toggleBodyScroll(isToggleOpen)}
        />
        <div className="header-wrapper">
          <header className="header">
            <div className="header__hero">
              <div className="header__hero--heading">
                <span>{randomTagLine}</span> <br />
                <br />
                <span>engineering </span>
                <span className="header__hero--heading-gradient">
                  solutions{" "}
                </span>
                <br />
                <span>for tomorrow's problems.</span>
              </div>
              <Bio />
              <div className="header__hero--cta-wrapper">
              <a
                data-scroll-to
                className="header__hero--cta" 
                href="#sectionProjects"
              >
                VIEW PROJECTS
              </a>
              </div>
            </div>
          </header>
          <div className="header__footer">
            <div className="header__footer--left">
            </div>
            <div className="header__footer--right">
              <a
                href="https://github.com/codebyravi"
                rel="noopener"
                target="_blank" role="button" title="github"
              >
                <FontAwesomeIcon icon={faGithub} style={{color: "#FFFFFF",}} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com/in/ravivalluri"
                rel="noopener"
                target="_blank" role="button" title="linkedin"
              >
                <FontAwesomeIcon icon={faLinkedin} style={{color: "#FFFFFF",}} size="2x" />
              </a>
              <a
                href="https://medium.com/codebyravi"
                rel="noopener"
                target="_blank" role="button" title="medium"
              >
                <FontAwesomeIcon icon={faMedium} style={{color: "#FFC0CB",}} size="2x" />
              </a>
              <a href="https://stackoverflow.com/users/10334272/ravi-valluri" rel="noopener" target="_blank" role="button" title="stackoverflow">
                <FontAwesomeIcon icon={faStackOverflow} style={{color: "#F47F24",}} size="2x" />
              </a>
              <a
                href="https://twitter.com/ravinous"
                rel="noopener"
                target="_blank" role="button" title="twitter"
              >
                <FontAwesomeIcon icon={faTwitter} style={{color: "#1DA1F2" }} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/_ravinous_"
                rel="noopener"
                target="_blank" role="button" title="instagram"
              >
                <FontAwesomeIcon icon={faInstagram} style={{color: "#FD1D1D",}} size="2x" />
              </a>
            </div>
          </div>
        </div>
        <main className="container">
          <p className="about-text">
            Greetings! 👋🏾 I go by the name of Ravi. I'm a software engineer with a burning passion for creating digital products. My aim? To transform mundane daily experiences into enjoyable ones for people everywhere.
          </p>
          <section id="sectionProjects" className="section-projects">
            <h1 className="heading-1">
              <span>Indeed, I give my all to every task. </span>
              <small>🏀</small>
            </h1>
            <p className="paragraph">
              Each project is special. Check out some of my unique works.
            </p>

            <div className="project-card">
              <div className="project-card__left">
                <h4 className="heading-4">
                  REACT NATIVE
                </h4>
              </div>
              <div
                className="project-card__middle"
                data-displacement="webp/myDistorsionImage.webp"
              >
                <img src="images/ios-image-crop-1.png" alt="image crop 1" />
                <img src="images/ios-image-crop-2.png" alt="image crop 2" />
              </div>
              <div className="project-card__right">
                <h2
                  data-scroll
                  data-scroll-offset="35%"
                  data-scroll-repeat={true}
                  data-scroll-class="imagecrop-anim"
                  className="heading-2"
                >
                  Image Crop
                  <br /> Picker App
                </h2>
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://github.com/codebyravi"
                  className="project-card__link"
                >
                  VISIT THE WEBSITE
                </a>
                <div className="project-card__socials">
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://github.com/codebyravi"
                    role="button" title="github"
                  >
                    <FontAwesomeIcon icon={faGithub} beat style={{color: "#FFFFFF",}} size="2x" />
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card__left">
                <h4 className="heading-4">IOS/SWIFT</h4>
              </div>
              <div
                className="project-card__middle"
                data-displacement="webp/myDistorsionImage.webp"
              >
                <img src="images/ss-1.png" alt="damus" />
                <img src="images/ss-2.png" alt="damus" />
              </div>
              <div className="project-card__right">
                <h2
                  data-scroll
                  data-scroll-offset="35%"
                  data-scroll-repeat={true}
                  data-scroll-class="damus-anim"
                  className="heading-2"
                >
                  Damus
                  <br /> Twitter Clone
                </h2>
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://github.com/codebyravi"
                  className="project-card__link"
                >
                  VISIT THE WEBSITE
                </a>
                <div className="project-card__socials">
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://github.com/codebyravi"
                    title="github"
                  >
                  </a>
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://github.com/codebyravi"
                    role="button" title="github"
                  >
                    <FontAwesomeIcon icon={faGithub} beat style={{color: "#FFFFFF",}} size="2x" />
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card__left">
                <h4 className="heading-4">
                  FLUTTER/DART
                </h4>
              </div>
              <div
                className="project-card__middle"
                data-displacement="webp/myDistorsionImage.webp"
              >
                <img src="images/2.png" alt="openleaf 1" />
                <img src="images/4.png" alt="openleaf 2" />
              </div>
              <div className="project-card__right">
                <h2
                  data-scroll
                  data-scroll-offset="35%"
                  data-scroll-repeat={true}
                  data-scroll-class="openleaf-anim"
                  className="heading-2"
                >
                  OpenLeaf
                  <br /> EBook App
                </h2>
                <a
                  href="https://github.com/codebyravi"
                  rel="noopener"
                  target="_blank"
                  className="project-card__link"
                >
                  VISIT THE WEBSITE
                </a>
                <div className="project-card__socials">
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://github.com/codebyravi"
                    role="button" title="github"
                  >
                    <FontAwesomeIcon icon={faGithub} beat style={{color: "#FFFFFF",}} size="2x" />
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card__left">
                <h4 className="heading-4">REACT</h4>
              </div>
              <div
                className="project-card__middle"
                data-displacement="webp/myDistorsionImage.webp"
              >
                <img src="images/shopping-cart-1.png" alt="shopping cart 1" />
                <img src="images/shopping-cart-2.png" alt="shopping cart 2" />
              </div>
              <div className="project-card__right">
                <h2
                  data-scroll
                  data-scroll-offset="35%"
                  data-scroll-repeat={true}
                  data-scroll-class="shopping-cart-anim"
                  className="heading-2"
                >
                  Shopping Cart
                  <br /> E-commerce App
                </h2>
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://github.com/codebyravi"
                  className="project-card__link"
                >
                  VIEW SOURCE CODE
                </a>
                <div className="project-card__socials">
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://react-shopping-cart-67954.firebaseapp.com/"
                    title="github"
                  >
                  </a>
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://github.com/codebyravi"
                    role="button" title="github"
                  >
                    <FontAwesomeIcon icon={faGithub} beat style={{color: "#FFFFFF",}} size="2x" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section
            data-scroll
            data-scroll-offset="35%"
            data-scroll-repeat={true}
            data-scroll-class="section-planets__bg"
            className="section-planets">
          </section>
          <section className="section-contact">
            <h1 className="heading-1">
              <span>Convinced yet? </span> <small>🤙🏾</small>
            </h1>
            <h2 className="section-contact__h2">
              Thanks for your visit. Currently, I'm on the lookout to be part of an innovative team. If you believe we could make a great team, don't hesitate to ring me up
              <a href="tel:+19403919013" role="button" title="phone"> 
               &nbsp;
               <FontAwesomeIcon icon={faPhone} beat style={{color: "#FFFFFF",}} />
               &nbsp;
              </a>
              or send me an
              <a
                href="mailto:info@codebyravi.com"
                rel="noopener"
                target="_blank" role="button" title="email"
              >
                &nbsp;
                <FontAwesomeIcon icon={faEnvelope} beat style={{color: "#FFFFFF",}} />
                &nbsp;
              </a>
            </h2>
          </section>
          <section className="section-socials">
            <h1 className="heading-1">
              <span>Feel free to stay in touch</span> <small>👋🏾</small>
            </h1>
            <p className="paragraph">Connect with me!</p>
            <div className="section-socials--links">
              <a
                href="https://github.com/codebyravi"
                rel="noopener"
                target="_blank"
                role="button" title="github"
              >
                <FontAwesomeIcon icon={faGithub} beat style={{color: "#FFFFFF",}} size="2x" />
              </a>
              <a
                href="https://medium.com/codebyravi"
                rel="noopener"
                target="_blank" role="button" title="medium"
              >
                <FontAwesomeIcon icon={faMedium} style={{color: "#FFFFFF",}} size="2x" />
              </a>
              <a href="https://stackoverflow.com/users/10334272/ravi-valluri" rel="noopener" target="_blank" role="button" title="stackoverflow">
                <FontAwesomeIcon icon={faStackOverflow} style={{color: "#FFFFFF",}} size="2x" />
              </a>
              <a
                href="https://twitter.com/rav1n9"
                rel="noopener"
                target="_blank" role="button" title="twitter"
              >
                <FontAwesomeIcon icon={faTwitter} beat style={{color: "#FFFFFF",}} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com/in/ravivalluri"
                rel="noopener"
                target="_blank"
                role="button" title="linkedin"
              >
                <FontAwesomeIcon icon={faLinkedin} beat style={{color: "#FFFFFF",}} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/rav1n9"
                rel="noopener"
                target="_blank" role="button" title="instagram"
              >
                <FontAwesomeIcon icon={faInstagram} beat style={{color: "#FFFFFF",}} size="2x" />
              </a>
            </div>
          </section>
        </main>
        <footer className="footer">
          <img
            src="svg/logo-left.svg"
            alt="design and developed by ravi valluri"
          />
          <div className="footer__socials">
            <a
              href="https://github.com/codebyravi/codebyravi-v2"
              target="_blank"
              rel="noopener" role="button" title="github"
            >
              <FontAwesomeIcon icon={faGithub} style={{color: "#FFFFFF",}} size="2x" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default index;

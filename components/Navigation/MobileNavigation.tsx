import * as React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faMedium, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';

const openTransition = {
  duration: 1.1,
  delay: 1.2,
  ease: [0.6, 0.01, 0.05, 0.9],
};

const openTopTransition = {
  duration: 1.1,
  delay: 1.3,
  ease: [0.6, 0.01, 0.05, 0.9],
};

const openBottomTransition = {
  duration: 1.1,
  delay: 1.7,
  ease: [0.6, 0.01, 0.05, 0.9],
};

const closedTansition = {
  duration: 1,
  ease: [0.6, 0.01, 0.05, 0.9],
};

export const MobileNavigation = ({ variants, isOpen }: any) => (
  <motion.div
    data-scroll
    data-scroll-sticky
    data-scroll-target="#menu-target"
    variants={variants}
    className="menu-wrapper"
  >
    <motion.div
      animate={
        isOpen
          ? { opacity: 1, transition: openTransition }
          : { opacity: 0, transition: closedTansition }
      }
    >
      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openTopTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-top"
      >
        <div className="navigation-top__left">
          <h4 className="navigation-h4">Feel free to stay in touch</h4>
          <div className="navigation-top__left--links">
          <a
            href="https://github.com/codebyravi"
            rel="noopener"
            target="_blank"
            role="button" title="github"
          >
            <FontAwesomeIcon icon={faGithub} beat style={{color: "#FFFFFF",}} size="2x" />
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
        </div>
        <div className="navigation-top__right">
          <h4 className="navigation-h4">HAVE AN IDEA?</h4>
          <a
            href="mailto:info@codebyravi.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Tell me about it
          </a>
        </div>
      </motion.div>

      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openBottomTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-bottom"
      >
        <h4 className="navigation-h4">FEATURED PROJECTS</h4>
        <div className="navigation-bottom__projects">
          <a
            target="_blank"
            rel="noopener"
            href="https://github.com/codebyravi"
            className="navigation-bottom__projects-card"
          >
            <img src="https://storage.googleapis.com/bucket-static-assets-codebyravi-v2/images/ss-1.png" alt="damus" />
            <h2>
              Damus
              <br />
              Twitter Clone
            </h2>
          </a>
          <a
            href="https://github.com/codebyravi"
            target="_blank"
            rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <img src="https://storage.googleapis.com/bucket-static-assets-codebyravi-v2/images/2.png" alt="openleaf 1" />
            <h2>OpenLeaf</h2>
          </a>
          <a
            href="https://github.com/codebyravi"
            target="_blank"
            rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <img src="https://storage.googleapis.com/bucket-static-assets-codebyravi-v2/images/shopping-cart-1.png" alt="shopping cart 1" />
            <h2>
               Shopping Cart
              <br />
              E-Commerce App
            </h2>
          </a>
        </div>
      </motion.div>
    </motion.div>
  </motion.div>
);

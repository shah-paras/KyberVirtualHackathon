import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import styles from './LandingPage.module.css';
import NavigationBar from '../NavigationBar';
import WhyUseDeFiZap from './WhyUseDeFiZap';
import AvailableZaps from './AvailableZapsView';
import Hero from './Hero';
import Footer from '../Footer';
import TwitterFeed from '../TwitterFeed';

const LandingPage = () => (
  <>
    <Navbar bg="primary" variant="dark" className={styles.bannerTop}>
      <Navbar.Brand className={styles.anchorTag}>
        <span role="img" aria-label="">🏆</span>
        <a
          href="https://blog.kyber.network/kyberdefi-hackathon-meet-the-winners-bea5bc9ec983"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white', textDecoration: 'underline' }}
          id="anchorTag"
          className="h6"
        >
          DeFiZap wins #KyberDeFi Hackathon
        </a>
        <span role="img" aria-label="">🏆</span>
      </Navbar.Brand>
    </Navbar>
    <Container>
      <NavigationBar isLandingPage />
      <Hero />
      <WhyUseDeFiZap />
      <AvailableZaps />
      <Footer />
      <Container>
        <h2 className="pt-1 pb-1 text-center">Fan Love</h2>
      </Container>
      <TwitterFeed />
      <div className="text-center py-1 mb-2">
        <h4 className="pt-1">DeFiZap</h4>
        <div className="text-muted">
          Please note that DeFiZap is not a licensed financial advisor under any
          law. Please consult your own independent investment advisor before
          making any investment decisions.
        </div>
      </div>
    </Container>
  </>
);

export default LandingPage;

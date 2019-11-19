import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import styles from './NavigationBar.module.css';

const NavigationBar = props => {
  return (
    <>
      <Navbar
        bg="primary"
        variant="dark"
        style={{ width: '200%', marginLeft: '-50%', justifyContent: 'center' }}
      >
        <Navbar.Brand>
          <a
            href="https://blog.kyber.network/kyberdefi-hackathon-meet-the-winners-bea5bc9ec983"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'black' }}
          >
            🏆DeFiZap wins #KyberDeFi Hackathon🏆
          </a>
        </Navbar.Brand>
      </Navbar>
      <div className="mt-1 mb-3">
        <Navbar expand="md">
          <Navbar.Brand href="/">
            DeFiZap
            <sup>Beta</sup>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Navbar.Text>
                <Button
                  className={styles.anchorSpacing}
                  variant="link"
                  href="/survey"
                >
                  Get Started
                </Button>
              </Navbar.Text>
              <Navbar.Text>
                <Button
                  className={styles.anchorSpacing}
                  variant="link"
                  href="/zaps"
                >
                  Explore Zaps
                </Button>
              </Navbar.Text>
              <Navbar.Text>
                <Button
                  variant="link"
                  href="/faq"
                  className={styles.anchorSpacing}
                >
                  FAQ
                </Button>
              </Navbar.Text>
              <Navbar.Text>
                <Button
                  href="https://devpost.com/software/defi-zap"
                  variant="link"
                  target="_blank"
                  className={styles.anchorSpacing}
                >
                  Devpost
                </Button>
              </Navbar.Text>
              <Navbar.Text>
                <Button
                  href="https://defitutorials.com/"
                  variant="link"
                  target="_blank"
                  className={styles.anchorSpacing}
                >
                  Tutorials
                </Button>
              </Navbar.Text>
              <Navbar.Text>
                <Button
                  href="https://t.me/defizap"
                  variant="link"
                  target="_blank"
                  className={styles.anchorSpacing}
                >
                  Telegram
                </Button>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavigationBar;

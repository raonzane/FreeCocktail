import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import pointingHand from '../../images/pointingHand.png';
import Main from '../../images/Main.png';
import {
  Container,
  Section,
  LadingModal,
  LandingNotice,
  LandingBtnSection,
  AgeCheckButton,
  PointingHand,
} from './Landing.style';

gsap.registerPlugin(ScrollTrigger);

const Landing = function Landing() {
  const [isAdult, setIsAdult] = useState(false);
  const checkAge = (e: any) => {
    return e.target.innerHTML === 'YES' ? setIsAdult(true) : setIsAdult(false);
  };

  const startPoint: any = useRef();

  return (
    <Container>
      {isAdult ? (
        ''
      ) : (
        <>
          <LadingModal>
            <LandingNotice>
              만 19세 이상만 이용할 수 있는 서비스입니다.
              <br />만 19세 이상입니까?
            </LandingNotice>
            <LandingBtnSection>
              <AgeCheckButton
                onClick={(e: any) => {
                  checkAge(e);
                }}
              >
                YES
              </AgeCheckButton>
              <AgeCheckButton
                onClick={(e: any) => {
                  checkAge(e);
                }}
              >
                NO
              </AgeCheckButton>
            </LandingBtnSection>
          </LadingModal>
          <PointingHand src={pointingHand} />
        </>
      )}

      {/* <img alt="pointingHand" src={Component1} /> */}
      <Section>
        <Section1 />
      </Section>

      <Section>
        <Section2 startPoint={startPoint} />
      </Section>

      <Section>
        <Section3 />
      </Section>
    </Container>
  );
};

export default Landing;

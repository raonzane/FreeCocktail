import React, { lazy, Suspense, useState } from 'react';
import Section1 from './Section1/Section1';
import Section3 from './Section3/Section3';
import pointingHand from '../../images/pointingHand.webp';
import {
  Container,
  Section,
  LadingModal,
  LandingNotice,
  LandingBtnSection,
  AgeCheckButton,
  PointingHand,
} from './Landing.style';

const Landing = function Landing() {
  const [isAdult, setIsAdult] = useState(false);
  const checkAge = (e: any) => {
    return e.target.innerHTML === 'YES' ? setIsAdult(true) : setIsAdult(false);
  };

  const LazySection2 = lazy(() => import('./Section2/Section2'));

  const errorFallback = () => {
    return <div> Loading </div>;
  };

  return (
    <Container>
      {isAdult ? (
        ''
      ) : (
        <>
          <LadingModal id="성인확인" aria-label="성인확인안내">
            <LandingNotice>
              만 19세 이상만 이용할 수 있는 서비스입니다.
              <br />만 19세 이상입니까?
            </LandingNotice>
            <LandingBtnSection aria-label="성인확인버튼">
              <AgeCheckButton
                type="button"
                aria-labelledby="성인확인 19세이상"
                onClick={(e: any) => {
                  checkAge(e);
                }}
              >
                YES
              </AgeCheckButton>
              <AgeCheckButton
                type="button"
                aria-labelledby="성인확인 19세미만"
                onClick={(e: any) => {
                  checkAge(e);
                }}
              >
                NO
              </AgeCheckButton>
            </LandingBtnSection>
          </LadingModal>
          <PointingHand
            src={pointingHand}
            alt="성인확인 안내를 가리키는 손가락 그림"
          />
        </>
      )}

      <Section>
        <Section1 />
      </Section>
      <Suspense fallback={<div> Loading </div>}>
        <LazySection2 />
      </Suspense>
      <Section>
        <Section3 />
      </Section>
    </Container>
  );
};

export default Landing;

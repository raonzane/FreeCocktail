import React from 'react';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';

import { Container, Section } from './Landing.style';

const Landing = function Landing() {
  return (
    <Container>
      <Section>
        <Section1 />
      </Section>

      <Section>
        <Section2 />
      </Section>

      <Section>
        <Section3 />
      </Section>
    </Container>
  );
};

export default Landing;

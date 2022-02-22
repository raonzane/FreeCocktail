import React, { useState } from 'react';
import { Container, Input, CenterArea, PMBtn } from './PMInput.style';

const PMInput = function PMInput() {
  const [inputs, setInputs] = useState<number[]>([0]);

  const controlInput = (e: any) => {
    if (e.target.value === '+') {
      setInputs([...inputs, inputs.length]);
    } else if (e.target.value === '-') {
      setInputs(inputs.slice(0, inputs.length - 1));
    }
    console.log(inputs);
  };

  return (
    <Container>
      {inputs && inputs.map((idx) => <Input key={idx} />)}
      <CenterArea>
        <PMBtn value="+" onClick={(e) => controlInput(e)}>
          +
        </PMBtn>
        {inputs.length > 1 && (
          <PMBtn value="-" onClick={(e) => controlInput(e)}>
            -
          </PMBtn>
        )}
      </CenterArea>
    </Container>
  );
};

export default PMInput;

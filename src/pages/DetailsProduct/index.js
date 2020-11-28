import React, {useEffect} from 'react';

import {Container, InputWithLabel, Label, Input} from './styles';

const DetailsProduct = ({route}) => {
  const item = route.params.item;

  console.log(item);

  return (
    <Container>
      <InputWithLabel>
        <Label>Nome</Label>
        <Input value={item.name} />
      </InputWithLabel>
      <InputWithLabel>
        <Label>Codigo</Label>
        <Input value={item.codigo} />
      </InputWithLabel>
    </Container>
  );
};

export default DetailsProduct;

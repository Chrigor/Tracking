import React from 'react';
import {Container, ContainerInput, Label, Input} from './styles';

const AddProduct = () => {
  return (
    <Container>
      <ContainerInput>
        <Label>Nome do Produto: </Label>
        <Input />
      </ContainerInput>
      <ContainerInput>
        <Label>Código de Rastreio:</Label>
        <Input />
      </ContainerInput>
    </Container>
  );
};

export default AddProduct;

import React from 'react';
import {
  Container,
  ContainerInput,
  ContainerGroupInput,
  Label,
  Input,
} from './styles';

const AddProduct = () => {
  return (
    <Container>
      <ContainerGroupInput>
        <Label>Nome do Objeto: </Label>
        <ContainerInput>
          <Input />
        </ContainerInput>
      </ContainerGroupInput>

      <ContainerGroupInput>
        <Label>Código de Rastreio:</Label>
        <ContainerInput>
          <Input />
        </ContainerInput>
      </ContainerGroupInput>
    </Container>
  );
};

export default AddProduct;

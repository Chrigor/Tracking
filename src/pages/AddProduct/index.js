import React, {useState, useEffect} from 'react';
import {
  ButtonEnviar,
  Container,
  ContainerInput,
  ContainerGroupInput,
  Label,
  Input,
  TextButton,
} from './styles';

import {View} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import Loading from '../../components/Loading';

import {loadRequest} from '../../store/ducks/registerProduct/actions';

const AddProduct = () => {
  const dispatch = useDispatch();

  const [code, setCode] = useState('');
  const [name, setName] = useState('');

  const loading = useSelector((state) => state.registerProduct.loading);

  return (
    <Container>
      {loading && <Loading />}

      <View>
        <ContainerGroupInput>
          <Label>Nome do Objeto: </Label>
          <ContainerInput>
            <Input onChangeText={(string) => setName(string)} value={name} />
          </ContainerInput>
        </ContainerGroupInput>

        <ContainerGroupInput>
          <Label>Código de Rastreio:</Label>
          <ContainerInput>
            <Input onChangeText={(string) => setCode(string)} value={code} />
          </ContainerInput>
        </ContainerGroupInput>
      </View>

      <ButtonEnviar
        onPress={() => {
          dispatch(loadRequest({code, name}));
        }}>
        <TextButton>Adicionar</TextButton>
      </ButtonEnviar>
    </Container>
  );
};

export default AddProduct;

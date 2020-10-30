import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  ContainerInfoItem,
  TitleItem,
  DescriptionItem,
  ImageItem,
} from './styles';

const ItemOrder = ({item}) => {
  const [active, setActive] = useState(false);

  return (
    <TouchableOpacity onPress={() => setActive(!active)}>
      <Container>
        <ImageItem />
        <ContainerInfoItem>
          <TitleItem>{item.codigo}</TitleItem>
          <DescriptionItem>{item.servico}</DescriptionItem>

          {active && <TitleItem>Ativo</TitleItem>}
        </ContainerInfoItem>

        <TouchableOpacity>
          <Icon name="arrow-forward-ios" size={20} color="black" />
        </TouchableOpacity>
      </Container>
    </TouchableOpacity>
  );
};

export default ItemOrder;

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

import {useNavigation} from '@react-navigation/native';
import convertDateToString from '../../utils/convertDateToString';

const ItemOrder = ({item}) => {
  const [active, setActive] = useState(false);
  const navigation = useNavigation();

  console.log('item');
  console.log(item);
  return (
    <TouchableOpacity onPress={() => setActive(!active)}>
      <Container>
        <ImageItem />
        <ContainerInfoItem>
          <TitleItem>
            {item.name} - {item.codigo}
          </TitleItem>
          <DescriptionItem>{item.servico}</DescriptionItem>

          {active && (
            <TitleItem>
              última atualização:{' '}
              {convertDateToString(new Date(item.ultimo).toLocaleDateString())}
            </TitleItem>
          )}
        </ContainerInfoItem>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('DetailsProduct', {
              item,
            })
          }>
          <Icon name="arrow-forward-ios" size={22} color="black" />
        </TouchableOpacity>
      </Container>
    </TouchableOpacity>
  );
};

export default ItemOrder;

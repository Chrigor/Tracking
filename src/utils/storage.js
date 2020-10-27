import {Alert, AsyncStorage} from 'react-native';

export async function setItemStorage(key = '', item = {}) {
  try {
    await AsyncStorage.setItem(key, item);
    console.log("Guardou");
  } catch (error) {
    console.log("Erro");
    Alert.alert('Erro', 'Houve um ao guardar dados no Local Storage');
  }
}

export async function getItemStorage(key = "") {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    Alert.alert('Erro', 'Houve um erro ao buscar seu paciente');
  }
};


import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons.js';

const Fertilizante = (props) => {

  const {
    cantidadManzana,
    cantidadSurco,
    plantasSurco,
    handleCantidadManzana,
    handleCantidadSurco,
    handlePlantasSurco,
    fertilizante,
    calcularFertilizante
  } = props;

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor='rgb(70, 160, 90)'/>
      <View style={styles.center}>
        <View style={styles.body}>
          <ScrollView>
            <View>
              <View >
                <Text style={styles.title}>Fertilizante</Text>
                <Text style={styles.text}>Calcular cantidad de fertilizante a usar por un área dada.</Text>
                <Text style={styles.textSubTitle}>{fertilizante}</Text>
              </View>
              <View style={styles.center}>
                <TextInput keyboardType={"numeric"} placeholderTextColor="white" style={styles.textInput} placeholder='Número de manzanas'
                  onChangeText={handleCantidadManzana}
                  value={cantidadManzana}
                />
                <TextInput keyboardType={"numeric"} placeholderTextColor="white" style={styles.textInput} placeholder='Surcos por manzana'
                  onChangeText={handleCantidadSurco}
                  value={cantidadSurco}
                />
                <TextInput keyboardType={"numeric"} placeholderTextColor="white" style={styles.textInput} placeholder='Plantas por surco'
                  onChangeText={handlePlantasSurco}
                  value={plantasSurco}
                />
              </View>
            </View>
            <View style={styles.button}>
              <TouchableHighlight 
                style={[styles.buttonContainer, styles.calcButton]}
                onPress={calcularFertilizante}
              >
                <Text style={styles.signUpText}>Calcular<Icon name='calculator' color="white" size={18}/></Text>
              </TouchableHighlight>
              <TouchableHighlight 
                style={[styles.buttonContainer, styles.calcButton, styles.marginButtonContainer]}
              >
                <Text style={styles.signUpText}>Registrar<Icon name='plus-circle' color="white" size={18}/></Text>
              </TouchableHighlight>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:300,
    borderRadius:20,
  },
  marginButtonContainer: {
    marginTop: 10
  },
  calcButton: {
    backgroundColor: 'rgba(70, 160, 90, .9)',
  },
  signUpText: {
    color: 'white',
    fontSize: 16,
  },
  textInput: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 10,
    marginTop: 40,
    color: 'white',
    width: 300,
    textAlign: 'left'
  },
  text: {
    fontSize: 16, 
    textAlign: 'center',
  },
  text2: {
    fontSize: 12, 
    color: '#9ed4a3',
    textAlign: 'center',
  },
  textContainer: {
    fontSize: 12, 
    color: '#eee',
    textAlign: 'center',
    marginTop: 20,
  },
  textSubTitle: {
    fontSize: 24,
    marginTop: 30,
    textAlign: 'justify', 
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '100%'
  },
  button: {
    marginTop: 50,
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10
  },
  body: {
    width: '100%',
    height: '100%',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 125,
    marginTop: 50
  }
});

export default Fertilizante;
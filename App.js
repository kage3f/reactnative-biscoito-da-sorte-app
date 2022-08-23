import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const App = () => {
  const [img, setImg] = useState(require('./assets/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  const frases = [
    'Tente ser a cada dia um pouco melhor do que o dia anterior',
    'Um herói age, só um tolo reage',
    'Nada ensina mais na vida do que um coração quebrado e bolso vazio',
    'Acredite em milagres, mas não dependa deles!',
    'Se preocupe com aquilo que você pode controlar',
    'Já busquei muitos amores enquanto aflito, hoje só busco paz'
  ];

  function quebraBiscoito(){
    let numAleatorio = Math.floor(Math.random() * frases.length);

    setTextoFrase(frases[numAleatorio]);
    setImg(require('./assets/biscoitoAberto.png'));
  }

  function reiniciarBiscoito(){
    setTextoFrase('');
    setImg(require('./assets/biscoito.png'))
  }

  return (
    <View style={styles.container}>
      <Image 
       source={img}
       style={styles.img}
      />

      <Text style={styles.textoFrase}>{textoFrase}</Text>

      <TouchableOpacity
       style={styles.botao}
       onPress={quebraBiscoito}
       >
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
      style={[styles.botao, { marginTop: 15, borderColor: '#121212' } ]}
      onPress={reiniciarBiscoito}
      >
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: '#121212' }]}>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 230,
    height: 230
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    fontStyle: 'italic',
    margin: 30,
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})

export default App;

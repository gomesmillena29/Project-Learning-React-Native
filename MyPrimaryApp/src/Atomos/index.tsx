import React, {
    Component,
} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      textoFrase: "Siga os bons e aprenda com eles.",
      img: require("./src/biscoito.png"),
    };
    this.quebraBiscoito = this.quebraBiscoito.bind(this);
  }
  frases = [
    "O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo.",
    "Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis.",
    "Determinação, coragem e autoconfiança são fatores decisivos para o sucesso.",
    "Se estamos possuídos por uma inabalável determinação, conseguiremos superá-los. Independentemente das circunstâncias, devemos ser sempre humildes, recatados e despidos de orgulho.",
    "Realize o impossível",
  ];
  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    this.setState({
      textoFrase: '"' + this.frases[numeroAleatorio] + '"',
      img: require("."),
    });
  }

  render() {
    const { img } = this.state;
    return (
      <View style={styles.container}>
        <Image source={img} style={styles.img} />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlig: "center",
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "dd7b22",
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnTexto: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#dd7b22",
  },
});
export default App;

import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

class lab1 extends Component {

  state = {
    mystate: 'so1'
  }
  updateTex = () => {

    if (this.state.mystate == 'so1') {
      this.setState({ mystate: 'so2' })
    } else if (this.state.mystate == 'so2') {
      this.setState({ mystate: 'so3' })
    } else {
      this.setState({ mystate: 'so1' })
    }

  }



  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#00FFCC" }}>
        <Text style={style.mau}>Hello World!</Text>
        <Text style={style.mau1}>Triệu Tiến Sáng</Text>
        <Text style={style.mau2}>Ph30270</Text>
        <Text style={style.mau3}>{this.state.mystate}</Text>

        <Button
          onPress={this.updateTex}
          title='Click'
          color='red'
        >
        </Button>
      </View>
    );
  }

}




const style = StyleSheet.create({
  mau: {
    color: 'red',
    fontSize: 30,
  },
  mau1: {
    color: 'blue',
  },
  mau2: {
    color: 'green',
  },
  mau3:{
    color: 'red',
    fontSize: 20,
  }
});
export default lab1;

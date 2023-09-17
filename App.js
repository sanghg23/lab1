import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import MyTextComp from './MyTexComp';  //import 




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
        {/* extprops gọi từ MyTexComp.js */}
        <MyTextComp textprops='Triệu tiến sáng' />



        <View style={style.horizontalView}>
          <View style={style.redbox}></View>
          <View style={style.black}></View>
          <View style={style.bluebox}></View>
        </View>




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
  mau3: {
    color: 'red',
    fontSize: 20,
  },
  redbox: {
    flex : 1,
    width: 150,
    height: 150,
    backgroundColor: 'red'
  },
  black: {
    flex : 1,
    width: 150,
    height: 150,
    backgroundColor: 'black'
  },
  bluebox: {
    flex : 1,
    width: 150,
    height: 150,
    backgroundColor: 'blue'
  },
  horizontalView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  }
});
export default lab1;

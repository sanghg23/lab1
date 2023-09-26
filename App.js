import React, { useState } from 'react';
import { Button, Image, FlatList, SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View, Math, ScrollView, TextInput } from 'react-native';


let i = 0
let email, pass

const FlatListBasics = () => {
  console.log('re-render ' + (++i))
  const [listNV, setListNV] = useState([
    { name: 'Devin', phone: 113 },
    { name: 'Dan', phone: 114 },
    { name: 'Dominic', phone: 113 },
    { name: 'Jackson', phone: 115 },
    { name: 'James', phone: 113 },
    { name: 'Joel', phone: 112 },
    { name: 'John', phone: 113 },
    { name: 'Jillian', phone: 115 },
    { name: 'Jimmy', phone: 113 },
    { name: 'Julie', phone: 911 },

  ]);

  return (
    <ScrollView >

      <FlatList style={styles.container}
        data={listNV}
        extraData={listNV}
        renderItem={({ item }) =>
          < TouchableOpacity onPress={() => {
            alert(`${item.name} - ${item.sdt}`);
          }}>

            <View style={{ flexDirection: 'row', backgroundColor: 'yellow' }}>
              <Text style={styles.item}>{item.name}</Text>
              <Text style={styles.item}>{item.phone}</Text>
            </View>
          </TouchableOpacity>
        }

      />

      <View style={{ flexDirection: 'row', height: '10%', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 50 }}>
        <Button title='Add' onPress={() => {
          listNV.push({ name: 'sang', phone: 444 })
          setListNV([...listNV]);
        }} />
        <Button title='Delete'
          onPress={() => {
            listNV.splice(0, 1);
            setListNV([...listNV])
          }} />
      </View >
      <View style={styles.login}>
        <Text style={styles.text}>Login</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder='nhap email'
        onChangeText={(value) => {
          email = value
        }}
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => {
          pass = value
        }}
        value={pass}
        placeholder='passWord'
        secureTextEntry={true}
      />
      <View style={{ marginHorizontal: 120, }}>
        <Button
          title='Đăng Nhập'
          onPress={() => {

            alert('Email: ' + email + '\nPass:' + pass)
            // onChangeEmail(''), onChangePass('')
          }} />
      </View>
      <Image
        style={styles.img}
        source={require('./img/anh1.jpg')}

      />


    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '50%',
    marginTop: 20,
    padding: 10,
  },
  item: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    paddingLeft: 2,

  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  img: {
    width: 390,
    height: 540,
    alignSelf: 'center',
  },
  login: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  }

});
export default FlatListBasics;
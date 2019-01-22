import React from 'react';
import {StyleSheet, Text, View  } from 'react-native';
import AppButton from './application/components/AppButton';
import Preloader  from './application/components/PreLoader';
import BackgroundImage  from './application/components/BackgroundImage';

export default class App extends React.Component {
  render() {    
      return (
          <BackgroundImage
            source={require('./assets/images/background1.png')}>
            <Text style={{color:'#fff', marginTop: 100, textAlign: 'center'}}>Hola</Text>
          </BackgroundImage>

        // <Preloader/>
        // <View style={styles.container}>
        //     {/* <AppButton
        //       bgColor="rgba(111, 38, 74, 0.7)"
        //       title="SIGN IN"
        //       action={() => console.log(1)}
        //       iconName="sign-in"
        //       iconSize={30}
        //       iconColor="#fff"
        //     /> */}
        // </View>
      );
    } 
  }

  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

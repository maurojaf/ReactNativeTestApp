import React, {Component} from 'react';
import {View} from 'react-native';
import BackgroundImage from "../components/BackgroundImage";
import AppButton from "../components/AppButton";
import t from 'tcomb-form-native';
import FormValidation from '../utils/validation';
import {Card} from "react-native-elements";
const Form = t.form.Form;
import * as firebase from 'firebase';
import Toast from 'react-native-simple-toast';

export default class Login extends Component {
    constructor(){
        super();

        this.user= t.struct({
            email: FormValidation.email,
            password: FormValidation.password
        });

        this.options = {
            fields: {
                email: {
                    help: 'Introduce tu Email',
                    error: 'Email incorrecto',
                    autoCapitalize: 'none',
                },
                password: {
                    help: 'Introduce tu Password',
                    error: 'Password incorrecta',
                    password: true,
                    secureTextEntry: true,
                }
            }
        };
    }

    Login (){
        const validate = this.refs.form.getValue();
        if(validate){
            firebase.auth().signInWithEmailAndPassword(validate.email, validate.password)
            .then(() => {
                Toast.showWithGravity("Bienvenido", Toast.LONG, Toast.BOTTOM);
            })
            .catch((error)=>{
                const errorCode = error.code;
                const errorMessage = error.message;

                    if (errorCode === 'auth/wrong-password'){
                        Toast.showWithGravity("Password Incorrecto", Toast.LONG, Toast.BOTTOM);
                    }
                    else{
                        Toast.showWithGravity(errorMessage, Toast.LONG, Toast.BOTTOM);
                    }
            });
            //console.log("success");
        }
    }


    render (){
        return (
            <BackgroundImage
              source={require('../../assets/images/login-bg.png')}>              
                <View>
                    <Card wrapperStyle={{paddingLeft: 10}} title="Iniciar Sesión">
                        <Form
                            ref="form"
                            type={this.user}
                            options={this.options}                            
                        />
                        <AppButton
                            bgColor="rgba(111, 38, 74, 0.7)"
                            title="Login"
                            action={this.Login.bind(this)}
                            iconName="sign-in"
                            iconSize={30}
                            iconColor="#fff"
                        />
                    </Card>
                </View>

          </BackgroundImage>
        )
    }
}

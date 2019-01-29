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

// export default class Login

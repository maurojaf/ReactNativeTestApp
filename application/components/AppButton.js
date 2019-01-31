import React, {Component} from 'react';
import { Button } from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
//import Icon from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Dimensions} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default class AppButton extends Component {
    render() {
        const {action, iconName, iconColor, title, bgColor} = this.props;
        const {width} = Dimensions.get('window');
        return (
            <Button
                onPress={action}
                buttonStyle={{
                    backgroundColor: bgColor,
                    height: 50,
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 5,
                    marginBottom: 5,
                    marginLeft: 0,
                    marginRight: 0,
                    //width: width
                }}
                title={title}
                icon={                    
                    
                    <Icon
                        name={iconName}
                        size={15}
                        color={iconColor}
                        // rightIcon={true}
                        //reverse
                    />
                    
                }
                text={title}
                
                >
                
                </Button>
                

                

        );

    }


}
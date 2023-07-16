import React from 'react';
import {View,Text, Image, StyleSheet, TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { MailBoxStyle } from "../../assets/styles/MailBox"
import { useNavigation } from '@react-navigation/native';


  export default function Header({screen}){
 const navigation = useNavigation();
  return(
<View style={headerStyles.container}>
  <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
    <Icon name="bars" size={24} color="black" />
  </TouchableOpacity>
  <View style={MailBoxStyle.header}>
    <View>
      <Image
       style={MailBoxStyle.logo}
       source={require('../../assets/images/logo.png')}
      />
    </View>
    <Text style={MailBoxStyle.title}>Mails</Text>
  </View>
</View>
  )
}

const headerStyles=StyleSheet.create({
   container:{
       position:'absolute',
       top:30,
       left:0,
       width:'100%',
       backgroundColor:'#fa7da7',
       elevation:5,
       height:50,
       display:'flex',
       flexDirection:'row',
       paddingHorizontal:20,
       alignItems:'center',
       justifyContent:'space-between'
   }
});
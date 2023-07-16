
import { StyleSheet } from 'react-native';

export const EmailItemStyles =  StyleSheet.create({

emailRow: {
  padding: 8,
  justifyContent: 'center',
  borderBottomWidth: 1,
  borderBottomColor: "#ccc"
},
emailRowIsRead: {
  padding: 8,
  justifyContent: 'center',
  borderBottomWidth: 1,
  borderBottomColor: "#ccc",
  backgroundColor: "#ddd",
},
fromText: {
  fontWeight:'bold',
  fontSize:16,
  paddingLeft:5
},
fromTextIsRead: {
  fontSize:16,
  paddingLeft:5
},
text: {
  fontWeight:'bold',
  fontSize:14,
},
textIsRead: {
  fontSize:14,
},
emailRowImportant:{
  flexDirection: 'row',
},
attachment:{
  position: 'absolute',
  right:5
}

})


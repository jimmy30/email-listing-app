import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import MailBox from './src/screens/MailBox';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'rgb(0, 0, 0)'}}>
      <MailBox />
    </SafeAreaView>
  );
}


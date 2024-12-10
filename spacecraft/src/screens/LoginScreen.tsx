import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import { Card } from 'react-native-paper';

export default function LoginScreen() {
  const [email, onChangeEmail] = React.useState('Email');
  const [password, onChangePassword] = React.useState('Password');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.border}>
        <View style={styles.background}>
          <Text style={styles.paragraph}>SpaceCraft</Text>
        </View>
        <View style={styles.whitePart}>
          <TextInput
            style={styles.firstJunt}
            onChangeText={onChangeEmail}
            value={email}
            clearTextOnFocus={true}
          />
          <TextInput
            style={styles.firstJunt}
            onChangeText={onChangePassword}
            value={password}
            secureTextEntry
            clearTextOnFocus={true}
          />
          <TouchableHighlight
            style={styles.third}
            onPress={() => {
              alert('Logged In');
            }}>
            <Text style={styles.text}>Login</Text>
          </TouchableHighlight>
          <Text style={styles.text2}>Read Terms and Conditions.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  background: {
    backgroundColor: '#6a5ae8',
    flex: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
  },
  whitePart: {
    backgroundColor: 'white',
    flex: 5,
    alignItems: 'center',
  },
  firstJunt: {
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 50,
    height: 40,
    width: 250,
  },
  border: {
    borderColor: 'black',
    borderWidth: 2,
    height: 600,
    width: 300,
    alignItems: 'center',
  },
  third: {
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: '#6a5ae8',
    borderWidth: 2,
    marginTop: 50,
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontStyle: 'italic',
  },
  text2: {
    marginTop: 40,
    color: 'grey',
  },
});

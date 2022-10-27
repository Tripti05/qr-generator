import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import QRCode from 'react-native-qrcode-svg';

export default function GenerateQrCode({navigation}) {
  // Generate QR Code
  const [inputText, setInputText] = useState();
  const [qrValue, setQrValue] = useState();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <QRCode
          value={qrValue ? qrValue : 'NA'}
          size={250}
          color="black"
          backgroundColor="white"
        />
        <Text style={styles.textStyle}>
          Please insert any value to generate QR code
        </Text>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={inputText => {
            setInputText(inputText);
          }}
          placeholder="Enter text"
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => setQrValue(inputText)}>
          <Text style={styles.buttonTextStyle}>Generate QR Code</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('qrCodeScanner')}>
          <Text style={styles.buttonTextStyle}>QR Scanner</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textStyle: {
    textAlign: 'center',
    margin: 10,
  },
  textInputStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#717171',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#51D8C7',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 30,
    padding: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});

import {View, Text, Linking, StyleSheet, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';

export default function ScanQrCode() {
  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true,
  });

  // Use Camera Device
  const devices = useCameraDevices();
  const device = devices.back;

  // Permission
  useEffect(() => {
    requestCameraPermission();
  }, []);

  // Handler
  const requestCameraPermission = React.useCallback(async () => {
    const permission = await Camera.requestCameraPermission();

    if (permission === 'denied') await Linking.openSettings();
  }, []);

  function renderCamera() {
    if (device == null) return <View style={{flex: 1}} />;
    else {
      return (
        <>
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            enableZoomGesture
            frameProcessor={frameProcessor}
            frameProcessorFps={5}
          />
          {barcodes.map((barcode, idx) => (
            <Text key={idx} style={styles.barcodeTextURL}>
              {barcode.displayValue}
            </Text>
          ))}
        </>
      );
    }
  }

  return (
    <>
      {/* Render Camera  */}
      {renderCamera()}
    </>
  );
}

const styles = StyleSheet.create({
  barcodeTextURL: {
    fontSize: 20,
    color: '#717171',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

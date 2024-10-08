/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import WebView from 'react-native-webview';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{padding: 20}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Text style={styles.sectionTitle}>
            If your app is using React Native, you can use the Linking library.
          </Text>

          <View style={{paddingBottom: 20}} />

          <Button
            title={'Staking Link'}
            onPress={() => {
              const url =
                'https://deeplink.keplr.app/staking?chainId=akashnet-2&userIdentifier=gECb4ZvZXeLjg4tjW4-4Sa3G9RjklxQSFdfgDjSikBi5uR53SF2ghwLV4y9y7_0Wlcspj3r3&activityName=akash_stake';
              Linking.canOpenURL(url).then(supported => {
                if (supported) {
                  Linking.openURL(url);
                } else {
                  console.log("Don't know how to open URI: " + url);
                }
              });
            }}
          />

          <View style={{paddingBottom: 20}} />

          <Button
            title={'Show address Link'}
            onPress={() => {
              const url =
                'https://deeplink.keplr.app/show-address?chainId=akashnet-2';
              Linking.canOpenURL(url).then(supported => {
                if (supported) {
                  Linking.openURL(url);
                } else {
                  console.log("Don't know how to open URI: " + url);
                }
              });
            }}
          />
        </View>
        {/*<WebView*/}
        {/*  source={{uri: 'https://universal-link-test-ecru.vercel.app/'}}*/}
        {/*  style={{ height: 500 }}*/}
        {/*  onShouldStartLoadWithRequest={event => {*/}
        {/*    if (event.url.startsWith('https://deeplink.keplr.app')) {*/}
        {/*      Linking.openURL(event.url);*/}
        {/*      return false;*/}
        {/*    }*/}
        {/*    return true;*/}
        {/*  }}*/}
        {/*/>*/}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

import React, {ReactElement} from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import {
  Colors,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

declare const global: {HermesInternal: null | {}};

const Main: React.FC = (): ReactElement => {
  return (
    <PaperProvider theme={DefaultTheme}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.helloText}>Hello, World~</Text>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

export interface IStyles {
  body: Object;
  helloText: Object;
  container: Object;
}

const styles: IStyles = StyleSheet.create({
  body: {},
  helloText: {
    color: Colors.black,
    fontSize: 24,
  },
  container: {
    display: 'flex',
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Main;

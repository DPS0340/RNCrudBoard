import React, {ReactElement} from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';
import {
  Colors,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {NativeRouter, Route, Switch} from 'react-router-native';
import LoginPage from './LoginPage';
import IndexPage from './IndexPage';

declare const global: {HermesInternal: null | {}};

const Main: React.FC = (): ReactElement => {
  return (
    <NativeRouter>
      <PaperProvider theme={DefaultTheme}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.body}>
            <View>
              <Switch>
                <Route exact path="/" component={IndexPage} />
                <Route exact path="/login" component={LoginPage} />
              </Switch>
            </View>
          </View>
        </SafeAreaView>
      </PaperProvider>
    </NativeRouter>
  );
};
interface IStyles {
  body: Object;
  helloText: Object;
  container: Object;
  link: Object;
  linkText: Object;
  nav: Object;
}

export const styles: IStyles = StyleSheet.create({
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
  link: {
    fontSize: 24,
    backgroundColor: Colors.lightBlue600,
    paddingVertical: 20,
  },
  linkText: {
    color: Colors.white,
  },
  nav: {},
});
export default Main;

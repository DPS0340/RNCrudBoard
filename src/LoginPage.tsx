import React, {ReactElement} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Colors} from 'react-native-paper';

const LoginPage: React.FC = ({match: Object}): ReactElement => {
  return (
    <>
      <Text style={styles.text}>Login Page</Text>
    </>
  );
};

interface IStyles {
  text: Object;
}

const styles: IStyles = StyleSheet.create({
  text: {
    color: Colors.amber400,
    fontSize: 18,
  },
});
export default LoginPage;

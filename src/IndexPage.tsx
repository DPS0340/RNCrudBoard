import React, {ReactElement} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Link} from 'react-router-native';
import {Button, Colors} from 'react-native-paper';
import {styles as mainStyles} from './Main';

const IndexPage: React.FC = (): ReactElement => {
  return (
    <>
      <Link to="/login" style={mainStyles.link}>
        <Button>
          <Text style={mainStyles.linkText}>Go to login page</Text>
        </Button>
      </Link>
      <Text style={styles.text}>Index Page</Text>
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
export default IndexPage;

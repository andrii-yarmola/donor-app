import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actionCreators from './../actions/actionCreators';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verifyCode: '',

      errors: false,
      isLoading: false,
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
      <TouchableOpacity
        onPress={
          () => {
            navigation.goBack();
          }
        }
        style={styles.backButton}
      >
        <Icon name="ios-arrow-back" size={25} color="#b1e460" />
        <Text style={styles.back}> Back </Text>
      </TouchableOpacity>
      ),
      headerStyle: { backgroundColor: 'white', shadowColor: 'transparent' },
      title: 'Settings'
    }
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> TERMS AND CONDITIONS </Text>
        <Text style={styles.title}> lorem imsum </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  back: {
    color: '#b1e460',
    fontSize: 17,
    lineHeight: 25,
    marginLeft: 5,
    marginBottom: 3
  },
  backButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15
  }
});

const mapStateToProps = state => ({
  //hotList: state.reddit.hotList
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Settings);
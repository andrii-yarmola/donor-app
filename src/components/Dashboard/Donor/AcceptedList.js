import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AcceptedList = ({ incomingData }) => {
  return (
    <View style={styles.container}>
      { incomingData.length > 0 ? 
        <FlatList
          data={incomingData}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item}>
              <View style={styles.textHolder}>
                <Text style={styles.title}>
                  { item.bloodType }
                </Text>
                <Text style={styles.text}>
                  { `${item.donationDate}, ${item.donationTime}` }
                </Text>
                <Text style={styles.text}>
                  { item.location }
                </Text>
                { item.description && 
                  <View style={styles.description}>
                    <Icon name="md-information-circle" size={14} color='#e5e5ea' style={styles.icon}/>
                    <Text style={styles.descriptionText}>
                    { item.description }
                    </Text>
                  </View>
                }
              </View>
              <Icon name="ios-arrow-forward" size={20} color='#8e8e93' style={styles.sideIcon}/>
              <Text style={styles.sideText}>
                { item.postedTime }
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
        :
        <Text> asd </Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    position: 'absolute',
    left: 1,
    top: 1
  },
  item: {
    borderBottomWidth: 0.5,
    borderColor: '#bcbdbe',
    paddingHorizontal: 15,
    paddingTop: 11,
    paddingBottom: 20
  },
  textHolder: {
    paddingRight: 60
  },
  title: {
    fontSize: 17,
    marginBottom: 7
  },
  description: {
    paddingLeft: 20,
    marginTop: 10,
  },
  text: {
    fontSize: 13,
    lineHeight: 18
  },
  descriptionText: {
    fontSize: 13,
    color: '#8e8e93'
  },
  sideText: {
    position: 'absolute',
    fontSize: 13,
    right: 15,
    top: 14,
    color: '#ff7600',
  },
  sideIcon: {
    position: 'absolute',
    right: 16,
    top: '50%',
    marginTop: 8
  }
});

export default AcceptedList;
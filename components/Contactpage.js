import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import * as Contacts from 'expo-contacts'; //expo install expo-contacts asennus
import { StatusBar } from 'expo-status-bar';

export default function Contactpage() {

  const [contacts, setContacts] = useState([]);

  
  const getContacts = async () => {
    console.log("pressed")
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync(
        { fields: [Contacts.Fields.PhoneNumbers] }
      );
      if (data.length > 0) {
        setContacts(data);
      }
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
          data={contacts}
          contentContainerStyle={{ marginTop: 50 }}
          ListEmptyComponent={<Text>Napsauta painiketta hakeaksesi kontaktit</Text>}
          keyExtractor={item => item.id.toString()} 
          renderItem={({item}) =>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize:20, fontWeight: "bold"}}> {item.name} {item.phoneNumbers ? item.phoneNumbers[0].number : ''} </Text>
          </View>}
        />
      <Button
        onPress={getContacts}
        title="Hae kontaktit"
      />
    </View>
  ); 

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
});
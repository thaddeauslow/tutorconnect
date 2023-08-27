import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import SearchBar from './SearchBar'; // Adjust the import path based on your project structure


const Catalogue = () => {
    const [services, setServices] = useState([]);
    const [filteredServices, setFilteredServices] = useState(services);
  
    useEffect(() => {
      fetch("https://tutor-connect-5542469f5e53.herokuapp.com/catalogue", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method: "POST",
        body: JSON.stringify()
    })
        .then(response=>response.json())
        .then(data => setServices(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    console.log(services)
  
    const renderItem = ({ item }) => (
      <View style={styles.serviceItem}>
        <Text>{item.name}</Text>
        <Text>{item.school}</Text>
        <Text>{item.level}</Text>
        <Text>{item.teaches}</Text>
        {/* Other service details */}
      </View>
    );

    const handleSearchChange = searchText => {
        const filtered = services.filter(service =>
          service.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredServices(filtered);
      };
  
    return (
      <View style={styles.container}>
        <SearchBar onChange={handleSearchChange} />
        <FlatList
          data={filteredServices}
          renderItem={renderItem}
        //   keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 30,
      paddingTop: 100
    },
    serviceItem: {
      marginBottom: 20,
      padding: 10,
      backgroundColor: '#f0f0f0',
      borderRadius: 8,
    },
  });
  
  export default Catalogue;

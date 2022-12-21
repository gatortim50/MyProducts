import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { 
  useGetAllProductsQuery,
  useGetProductQuery,
} from './features/apiSlice';

const App = () => {
  const { data: allProductsData, error, isError, isLoading, } = useGetAllProductsQuery();
  const { data: singleProductData } = useGetProductQuery("iPhone");
  

  const onPress = () => {
    console.log('!!', allProductsData, error, isError, isLoading);
    // console.log('!!', singleProductData);
  }
 
  const Card = ({ title, show }) => (
    <View>
      <Text style={styles.title}>{title}</Text>
      {show &&
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        >
        <Text>Press For Products</Text>
      </TouchableOpacity>
      }
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Card title="Products" show={false} />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  title: {
    fontSize: 20,
    alignItems: "center",
    padding: 10
  },
});

export default App;

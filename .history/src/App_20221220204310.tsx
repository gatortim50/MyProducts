import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { 
  useGetAllProductsQuery,
  useGetProductQuery,
} from './features/apiSlice';

const App = () => {
  const [count, setCount] = useState(0);
  const { data: allProductsData, error, isError, isLoading, } = useGetAllProductsQuery();
  const { data: singleProductData } = useGetProductQuery('iphone');
  console.log('!!',  error, isError, isLoading);

  const onPress = () => {
    console.log('update count:', count);
    setCount(prevCount => prevCount + 1);
  }
  // if (isLoading) {
  //   return <Text>Loading</Text>
  // } else {
  //   return <Text>Loaded</Text>
  // }

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Loading</Text>
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
  }
});

export default App;

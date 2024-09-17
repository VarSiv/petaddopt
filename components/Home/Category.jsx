import { View, Text, StyleSheet, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from './../../config/FirebaseConfig';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { FlatList } from 'react-native-gesture-handler';


const ITEM_DIM = 80;

export default function Category() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(()=>{
    getCategories();
  },[]);

  const getCategories= async ()=>{
    const snapshot = await getDocs(collection(db,'category'));
    setCategoryList([]);
    snapshot.forEach((doc)=>{
      console.log(doc.data())
      const newCategoryList = snapshot.docs.map(doc => doc.data());
      setCategoryList(newCategoryList);
    })
  }

  return (
    <View style={{
      marginTop: 25
  }}>
    <Text style={{
        fontFamily: 'outfit-regular',
        fontSize: 25,
        marginBottom: 15
    }}>Category</Text>
    <FlatList
      data={categoryList}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={{ uri: item?.imageUrl }} style={styles.categoryImage} />
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      numColumns={4}
      columnWrapperStyle={styles.row}
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
    />
  </View>

  )
}
const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
  container: {
      flex: 1,
      justifyContent: 'center', // Center the FlatList for better visibility
      backgroundColor: '#f5f5f5', // Add background color to ensure it's visible
  },
  itemContainer: {
      width:ITEM_DIM,
      marginHorizontal: 10,
      borderColor: 'red', // Add border to make sure item is rendered
      borderWidth: 1, // Debugging border to see if FlatList renders
  },
  categoryImage: {
      width:ITEM_DIM,
      height: ITEM_DIM,
      borderRadius: 100,
      backgroundColor: 'lightgray', 
      alignItems: 'center',
  },
});
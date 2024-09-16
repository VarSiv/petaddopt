import React, { useState, useEffect } from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions, Text } from 'react-native';
import { getDocs, collection } from 'firebase/firestore';
import { db } from './../../config/FirebaseConfig'; // Make sure this import is correct

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.9; // 80% of screen width

export default function Slider() {
    const [sliderList, setSliderList] = useState([]);

    useEffect(()=>{
        getSliders()
    },[])
    //gets all documents from sliders collection, iterates and adds each one's data to sliderList
    const getSliders=async()=>{
        const snapshot = await getDocs(collection(db, 'sliders'));
        setSliderList=([]);
        snapshot.forEach((doc)=>{
            console.log(doc.data())
            setSliderList(sliderList=>[...sliderList, doc.data()])
        })
    }
  return (
    <View style={{
        marginTop: 15
    }}>
      <FlatList 
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index})=>(
            <View >
                <Image source={{uri:item?.imageUrl}} style={styles?.sliderImage}/>
            </View>
        )}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Center the FlatList for better visibility
        backgroundColor: '#f5f5f5', // Add background color to ensure it's visible
    },
    itemContainer: {
        width: ITEM_WIDTH,
        marginHorizontal: 10,
        borderColor: 'red', // Add border to make sure item is rendered
        borderWidth: 1, // Debugging border to see if FlatList renders
    },
    sliderImage: {
        width: ITEM_WIDTH,
        height: 180,
        borderRadius: 20,
        backgroundColor: 'lightgray', // Set background color to see the image container clearly
    },
});

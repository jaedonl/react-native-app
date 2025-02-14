import { FlatList, Image, ScrollView, Text, TouchableOpacity, View, Dimensions, Platform, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from "expo-router";
import icons from "@/constants/icons";
import images from "@/constants/images";
import MapView, { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native-maps';

const INITIAL_REGION = {
  latitude: 40.748140, 
  longitude: -73.987874,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
}

const Booral = () => {
  return (
    <View style={styles.container}>
                <MapView 
                    style={styles.map}
                    provider={PROVIDER_DEFAULT}
                    initialRegion={INITIAL_REGION}
                />
            </View>
  )
}

export default Booral

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      flex: 1,
    },
});
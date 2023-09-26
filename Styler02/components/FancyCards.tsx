import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS_LFpBGoNcEp6KZ4DbVOvp42ttHD5hjTaAe5gD3sleDraPdMIGkogDP2wiS_DX65bbus',
          }}
          style={styles.cardImage}></Image>
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Forest</Text>
          <Text style={styles.cardLabel}>Nature</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut,
            illum?Explore the jungle.
          </Text>
          <Text style={styles.cardFooter}>20 Minutes Away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 8,
    width: 350,
    height: 360,
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 6,
  },
  cardElevated: {
    elevation: 5,
    border: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'black',
    backgroundColor: 'white',
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: 'black',
    fontSize: 14,
    marginBottom: 12,
  },
  cardDescription: {
    color: 'black',
    fontSize: 12,
    marginBottom: 12,
    flexShrink: 1,
  },
  cardFooter: {
    color: 'black',
  },
});

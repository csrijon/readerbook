import React from "react";
import { View,TextInput ,StyleSheet} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Search = ({placeholder}) => {
  return(
    <View style={styles.searchBar}>
            <MaterialIcons name="search" size={22} color="#9c73e8" />
            <TextInput
              placeholder= {placeholder}
              placeholderTextColor="#b58ef3"
              style={styles.searchInput}
            />
          </View>
  )
}

export default Search

const styles = StyleSheet.create({
    searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EADDFF',
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 45,
  },
  searchInput: {
    flex: 1,
    marginLeft: 5,
    fontSize: 16,
    color: '#9c73e8',
  },
})
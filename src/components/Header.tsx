import React from 'react'
import { 
  View, 
  Text,
  StatusBar,
  StyleSheet, 
  TouchableOpacity,
  Switch 
} from 'react-native'


interface Props {
  onTheme: ()=> void;
  darkMode: boolean;
}

export function Header({ onTheme, darkMode }: Props) {
  return (
    <View style={[styles.header, darkMode ? styles.hederDark : styles.headerLight]}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      <View style={{ marginLeft: 12}}>
        <Switch 
          trackColor={{ false: "#606060", true: "#606060" }}
          thumbColor={darkMode ? "#12A952" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={onTheme}
          value={darkMode}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44, 
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerLight: {
    backgroundColor: '#273FAD'
  },
  hederDark:{
    backgroundColor: '#3E3E3E'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  buttonTheme : {
    color: '#606060'
  }
});

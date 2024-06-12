import {
  Platform,
  StyleSheet,
  View,
} from 'react-native'
import MapView, {PROVIDER_DEFAULT, PROVIDER_GOOGLE} from 'react-native-maps'

export default function MainScreen() {
  return (
   <View style={styles.mapContainer}>
     <MapView style={styles.map} provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT} />
   </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
    border: 'solid red'
  },
});
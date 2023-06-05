import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'

export default function MainScreen() {
  return (
   <View style={styles.mapContainer}>
     <MapView style={styles.map} provider={PROVIDER_GOOGLE} />
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
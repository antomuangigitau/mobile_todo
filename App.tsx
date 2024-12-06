import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "./theme";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: theme.colorCelurian,
          paddingHorizontal: 8,
          paddingVertical: 16,
        }}
      >
        <Text style={styles.itemText}>Coffee</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
  itemText: {
    fontWeight: "200",
    fontSize: 18,
  },
});

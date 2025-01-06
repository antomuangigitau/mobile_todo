import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { theme } from "../theme";
import ShoppingListItem from "../components/ShoppingListItem";
import { useRouter } from "expo-router";

export default function App() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.navigate("/counter")}>
        <Text style={{ textAlign: "center", marginBottom: 20 }}>
          Go to Counter
        </Text>
      </TouchableOpacity>
      <ShoppingListItem name="Tea" />
      <ShoppingListItem name="Coffee" isCompleted />
      <ShoppingListItem name="Sugar" isCompleted />
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
});

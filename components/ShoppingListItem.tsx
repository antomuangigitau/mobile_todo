import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { theme } from "../theme";

type Props = {
  name: string;
  isCompleted?: boolean;
};
const ShoppingListItem = ({ name, isCompleted }: Props) => {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${name}?`,
      "It will be gone for good",
      [
        {
          text: "Yes",
          onPress: () => console.log("Okay, deleting"),
        },
      ],
    );
  };
  return (
    <View
      style={[
        styles.itemContainer,
        isCompleted && {
          backgroundColor: theme.colorLightGrey,
          borderBottomColor: theme.colorLightGrey,
        },
      ]}
    >
      <Text
        style={[
          styles.itemText,
          isCompleted && {
            textDecorationLine: "line-through",
            textDecorationColor: theme.colorGrey,
            color: theme.colorGrey,
          },
        ]}
      >
        {name}
      </Text>
      <TouchableOpacity
        style={[
          styles.button,
          isCompleted ? styles.completedButton : undefined,
        ]}
        onPress={handleDelete}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCelurian,
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    fontWeight: "200",
    fontSize: 18,
  },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  completedButton: {
    backgroundColor: theme.colorGrey,
  },
});

export default ShoppingListItem;

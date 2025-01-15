import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { theme } from "../theme";
import AntDesign from "@expo/vector-icons/AntDesign";

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
      <TouchableOpacity>
        <AntDesign
          name="closecircle"
          size={24}
          color={isCompleted ? theme.colorGrey : theme.colorRed}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCelurian,
    paddingHorizontal: 18,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    fontWeight: "200",
    fontSize: 18,
  },
});

export default ShoppingListItem;

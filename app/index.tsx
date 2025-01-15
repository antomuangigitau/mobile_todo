import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View } from "react-native";
import { theme } from "../theme";
import ShoppingListItem from "../components/ShoppingListItem";
import { useState } from "react";

type shoppingListItemType = {
  id: string;
  name: string;
};

const initialList: shoppingListItemType[] = [
  {
    id: "1",
    name: "Tea",
  },
  {
    id: "2",
    name: "Coffee",
  },
  {
    id: "3",
    name: "Sugar",
  },
];

export default function App() {
  const [value, setValue] = useState("");
  const [shoppingList, setShoppingList] =
    useState<shoppingListItemType[]>(initialList);

  const handleSubmit = () => {
    if (value) {
      setShoppingList([
        { id: Date.now().toString(), name: value },
        ...shoppingList,
      ]);
      setValue("");
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={value => setValue(value)}
        placeholder="E.g. Coffee"
        style={styles.textInput}
        keyboardType="visible-password"
        autoCapitalize="sentences"
        returnKeyType="google"
        onSubmitEditing={() => handleSubmit()}
      />
      {shoppingList.map(({ id, name }) => (
        <ShoppingListItem key={id} name={name} />
      ))}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: theme.colorLightGrey,
    borderRadius: 50,
    padding: 12,
    margin: 12,
    fontSize: 18,
  },
});

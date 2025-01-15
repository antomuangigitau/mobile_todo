import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, TextInput } from "react-native";
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
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
    >
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    padding: 12,
  },
  textInput: {
    borderWidth: 2,
    borderColor: theme.colorLightGrey,
    borderRadius: 50,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 18,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    paddingBottom: 24,
  },
});

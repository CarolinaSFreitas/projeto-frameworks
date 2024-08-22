import { HelloWave } from "@/components/HelloWave";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Projeto de Frameworks para Desenv. Web I</Text>
      <HelloWave />
    </View>
  );
}

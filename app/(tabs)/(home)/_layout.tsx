import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6a5acd',
        },
        headerTintColor: '#f1f1f1',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="(home)" />
      <Stack.Screen name="(contatosLista)" />
    </Stack>
  );
}

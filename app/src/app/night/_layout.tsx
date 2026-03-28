import { Stack } from 'expo-router';

export default function NightLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
      }}
    >
      <Stack.Screen name="create" />
      <Stack.Screen name="active" />
      <Stack.Screen name="summary" />
    </Stack>
  );
}

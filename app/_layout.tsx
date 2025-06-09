import { ThemeProvider } from "@react-navigation/native"
import { Stack } from "expo-router"
import { useState } from "react"
import { PaperProvider } from "react-native-paper"

import { CombinedDarkTheme, CombinedDefaultTheme } from "../styles/globalStyles"

export default function RootLayout() {
  const [isThemeDark, setIsThemeDark] = useState(false)

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme

  return (
    <ThemeProvider value={theme}>
      <PaperProvider theme={theme}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </PaperProvider>
    </ThemeProvider>
  )
}

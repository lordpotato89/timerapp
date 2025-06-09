import type { Theme as NavigationTheme } from "@react-navigation/native"
import { Dimensions, StyleSheet } from "react-native"
import type { Theme as PaperTheme } from "react-native-paper"

import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native"
import {
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
} from "react-native-paper"

type CombinedTheme = PaperTheme & NavigationTheme

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
})

const background = "#fffefd"
const greyBackground = "#E0E0E0"
const divider = "rgba(0, 0, 0, 0.25)"
const primary = "#031827" // "rgb(3, 24, 39)"
const onPrimary = "#fffefd"
const secondary = "#1e4136" // "rgb(30, 65, 54)"
const onSecondary = "#fffefd"
const tertiary = "#fea232"
const onTertiary = "#fffefd"

const surfaceVariant = "rgba(93, 187, 157, 0.15)"
const surfaceVariantLighter = "rgba(30, 65, 54, 0.05)"

export const CombinedDefaultTheme: CombinedTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  roundness: 3,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
    background: background as string,
    greyBackground: greyBackground as string,
    onBackground: "rgb(29, 27, 30)",
    surface: "rgb(255, 251, 255)",
    onSurface: "rgb(29, 27, 30)",
    surfaceVariant: surfaceVariant as string,
    surfaceVariantLighter: surfaceVariantLighter as string,
    onSurfaceVariant: "rgb(74, 69, 78)",
    inverseSurface: "rgb(50, 47, 51)",
    inverseOnSurface: "rgb(245, 239, 244)",
    inversePrimary: "rgb(220, 184, 255)",
    divider: divider,
    outline: "rgb(124, 117, 126)",
    outlineVariant: "rgb(204, 196, 206)",
    surfaceDisabled: "rgba(29, 27, 30, 0.12)",
    onSurfaceDisabled: "rgba(29, 27, 30, 0.38)",
    backdrop: "rgba(51, 47, 55, 0.4)",

    primary: primary,
    onPrimary: onPrimary,
    secondary: secondary,
    onSecondary: onSecondary,
    tertiary: tertiary,
    onTertiary: onTertiary,
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",

    primaryContainer: "rgb(240, 219, 255)",
    onPrimaryContainer: "rgb(44, 0, 81)",
    secondaryContainer: "rgb(237, 221, 246)",
    onSecondaryContainer: "rgb(33, 24, 42)",
    tertiaryContainer: "rgb(255, 217, 221)",
    onTertiaryContainer: "rgb(50, 16, 23)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
  },
  fonts: {
    ...MD3LightTheme.fonts,
    ...LightTheme.fonts,
    bodyLarge: {
      ...MD3LightTheme.fonts.bodyLarge,
      fontFamily: "IBMPlexSansRegular",
    },
    bodyMedium: {
      ...MD3LightTheme.fonts.bodyMedium,
      fontFamily: "IBMPlexSansRegular",
    },
    bodySmall: {
      ...MD3LightTheme.fonts.bodySmall,
      fontFamily: "IBMPlexSansRegular",
    },
    default: {
      ...MD3LightTheme.fonts.default,
      fontFamily: "IBMPlexSansRegular",
    },
    displayLarge: {
      ...MD3LightTheme.fonts.displayLarge,
      fontFamily: "IBMPlexSansRegular",
    },
    displayMedium: {
      ...MD3LightTheme.fonts.displayMedium,
      fontFamily: "IBMPlexSansRegular",
    },
    displaySmall: {
      ...MD3LightTheme.fonts.displaySmall,
      fontFamily: "IBMPlexSansRegular",
    },
    headlineLarge: {
      ...MD3LightTheme.fonts.headlineLarge,
      fontFamily: "IBMPlexSansRegular",
    },
    headlineMedium: {
      ...MD3LightTheme.fonts.headlineMedium,
      fontFamily: "IBMPlexSansRegular",
    },
    headlineSmall: {
      ...MD3LightTheme.fonts.headlineSmall,
      fontFamily: "IBMPlexSansRegular",
    },
    labelLarge: {
      ...MD3LightTheme.fonts.labelLarge,
      fontFamily: "IBMPlexSansMedium",
    },
    labelMedium: {
      ...MD3LightTheme.fonts.labelMedium,
      fontFamily: "IBMPlexSansMedium",
    },
    labelSmall: {
      ...MD3LightTheme.fonts.labelSmall,
      fontFamily: "IBMPlexSansMedium",
    },
    titleLarge: {
      ...MD3LightTheme.fonts.titleLarge,
      fontFamily: "IBMPlexSansMedium",
    },
    titleMedium: {
      ...MD3LightTheme.fonts.titleMedium,
      fontFamily: "IBMPlexSansMedium",
    },
    titleSmall: {
      ...MD3LightTheme.fonts.titleSmall,
      fontFamily: "IBMPlexSansMedium",
    },
  },
}

export const CombinedDarkTheme: CombinedTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
  },
}

export const screenWidth = Dimensions.get("window").width
export const screenHeight = Dimensions.get("window").height

const inputHeight = 50

const fontsizeStandard = 14
const fontsizeBig = 16
const fontsizeBigger = 24

export const appWidth = 1
export const appWidthAuth = 0.82
const inputWidth = 0.75

const globalStyles = StyleSheet.create({
  // TEXT
  text: {
    fontFamily: "IBMPlexSans",
    fontSize: fontsizeStandard,
  },

  //CONTAINERS
  bottomContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  screenContainerWithBottomButton: {
    flex: 1,
    justifyContent: "space-between",
  },
  centeredContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  // BUTTONS
  wideButton: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.05,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: primary,
    borderRadius: 8,
    alignSelf: "center",
  },
  wideButtonText: {
    color: onPrimary,
    fontSize: fontsizeBig,
    fontFamily: "IBMPlexSansMedium",
  },
})

export default globalStyles

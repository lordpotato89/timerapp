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
  textBig: {
    fontFamily: "IBMPlexSans",
    fontSize: fontsizeBig,
  },
  helperText: {
    fontFamily: "IBMPlexSans",
    fontSize: fontsizeBigger,
  },
  buttonText: {
    fontFamily: "IBMPlexSans",
    fontSize: fontsizeBig,
  },
  // CONTAINERS
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    zIndex: 0,
  },
  bikeContainer: {
    alignItems: "center",
    width: screenWidth * appWidth,
    zIndex: 0,
  },
  modalContainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    position: "absolute",
    paddingTop: screenHeight * 0.03,
    bottom: screenHeight * 0.08, // For example, 10% from the
    width: screenWidth * inputWidth, // 80% of screen width
    alignSelf: "center",
  },
  buttonContainerMinHeight: {
    position: "absolute",
    bottom: screenHeight * 0.04, // For example, 10% from the
    width: screenWidth * inputWidth, // 80% of screen width
    alignSelf: "center",
  },
  buttonContainerFlex: {
    width: screenWidth * inputWidth,
    paddingTop: screenHeight * 0.03,
    paddingBottom: screenHeight * 0.04,
    alignSelf: "center",
  },
  inputContainer: {
    width: screenWidth * appWidthAuth, // 80% of screen width
    alignSelf: "center",
    margin: 0,
  },
  registrationLinksContainer: {
    width: screenWidth * appWidth, // 80% of screen width
    //xpaddingBottom: screenHeight * 0.02,
    alignSelf: "center",
    margin: 0,
    //paddingTop: 20,
  },
  registrationIconsContainer: {
    flexDirection: "row", // Arrange children in a row
    justifyContent: "center", // Center the children horizontally
    alignItems: "center", // Center the children vertically
    paddingTop: screenHeight * 0.03,
  },
  loadingContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  //DIVIDER
  dividerLogin: {
    width: screenWidth * appWidthAuth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    paddingVertical: screenHeight * 0.03,
  },
  dividerRegister: {
    width: screenWidth * appWidthAuth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    paddingVertical: screenHeight * 0.03,
  },
  hrLine: {
    width: screenWidth * 0.24,
    height: 1,
  },
  dividerText: {
    textAlign: "center",
    width: screenWidth * 0.34,
  },
  //INPUTS
  bikeSearchBar: {
    width: screenWidth * appWidth,
    height: inputHeight,
  },
  //LIST COMPONENT
  bikeListComponent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: screenWidth * appWidth,
    borderBottomWidth: 1,
  },
  //SEARCH RESULTS
  searchList: {
    //position: "absolute",
    flex: 1,
    width: screenWidth * appWidth,
    zIndex: 1,
  },
  //LIST ITEMS
  searchListItem: {
    borderBottomWidth: 1,
    justifyContent: "center",
  },
  pressureInput: {
    textAlign: "center",
  },
  multilineInput: {
    minHeight: fontsizeStandard * 3,
    fontSize: fontsizeStandard,
  },
  multilineContent: {
    fontFamily: "IBMPlexSans",
    paddingTop: fontsizeStandard * 0.5,
    paddingBottom: fontsizeStandard * 0.5,
  },
})

export default globalStyles

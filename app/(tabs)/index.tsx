import React, { useEffect, useRef, useState } from "react"
import { FlatList, Text, View } from "react-native"
import { Button } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"
import globalStyles, {
  primary,
  screenHeight,
  screenWidth,
  surfaceVariantLighter,
} from "../../styles/globalStyles"

export default function Index() {
  const [items, setItems] = useState<string[]>([])
  const flatListRef = useRef<FlatList>(null)

  const addItem = () => {
    setItems((prev) => [...prev, `Item ${prev.length + 1}`])
  }

  useEffect(() => {
    if (items.length > 0) {
      flatListRef.current?.scrollToEnd({ animated: true })
    }
  }, [items])

  return (
    <SafeAreaView
      style={globalStyles.screenContainerWithBottomButton}
      edges={["top", "bottom"]}
    >
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          paddingHorizontal: screenWidth * 0.05,
          paddingBottom: screenHeight * 0.02,
        }}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: surfaceVariantLighter,
              padding: screenWidth * 0.035,
              marginBottom: screenHeight * 0.015,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: primary,
            }}
          >
            <Text style={{ color: primary }}>{item}</Text>
          </View>
        )}
        style={{ flex: 1 }}
      />

      <View style={{ alignItems: "center" }}>
        <Button
          mode="contained"
          style={{ width: screenWidth * 0.9, borderRadius: 8 }} // outer container width + border radius
          contentStyle={{
            height: screenHeight * 0.05,
            justifyContent: "center",
          }} // inner content style
          labelStyle={globalStyles.wideButtonText}
          onPress={addItem}
        >
          Add
        </Button>
      </View>
    </SafeAreaView>
  )
}

import React from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import { COLORS, NFTData } from "../../../constants";
import FocusedStatusBar from "../../components/FocusedStatusBar/FocusedStatusBar";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import NftCard from "../../components/NftCard/NftCard";
import { globalStyles } from "../../globalstyles/globalStyles";

const Home = () => {
  return (
    <SafeAreaView style={globalStyles.AndroidSafeArea}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 1 }}>
          <FlatList
            data={NFTData}
            keyExtractor={NFTData.id}
            renderItem={({ item }) => <NftCard data={item} />}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          zIndex: -1,
        }}
      >
        <View style={{ height: 300, backgroundColor: COLORS.primary }} />
        <View style={{ flex: 1, backgroundColor: COLORS.white }} />
      </View>
    </SafeAreaView>
  );
};

export default Home;

import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ActionRow } from "../components";
import { actionButtons } from "../constants";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100 relative">
      <ScrollView>
        {/* PRO/UPGRADE BUTTON */}
        <TouchableOpacity className="absolute right-10 top-5 z-50 items-center">
          <Ionicons name="person-circle" size={30} color="#E5962d" />
          <Text className="text-center text-[#e5962d]">UPGRADE</Text>
        </TouchableOpacity>

        {/* Hero Image */}
        <Image className="w-full h-64" source={{ uri: "https://i.imgur.com/e14NE49.png" }} />
        <View className="mx-5">
          <View className="flex-row justify-between space-x-2">
            <ActionRow title="Track Workout" screen="Demo" color="#E5962D" icon="fitness" vertical={true} requiresPro={false} />
            <ActionRow title="Browse Workouts" screen="Demo" color="#1982c4" icon="library" vertical={true} requiresPro={false} />
          </View>
          {/* Action Buttons */}
          {actionButtons.slice(2).map(({ title, screen, color, icon, vertical, requiresPro }, i) => (
            <ActionRow key={i} title={title} screen={screen} color={color} icon={icon} vertical={vertical} requiresPro={requiresPro} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

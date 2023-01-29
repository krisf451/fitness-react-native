import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  title: string;
  screen: any;
  color: string;
  icon?: any;
  vertical?: boolean;
  requiresPro?: boolean;
};

const ActionRow = ({ title, screen, color, icon, vertical, requiresPro }: Props) => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: color }}
      className={`m-2 flex flex-1 justify-center items-center py-6 rounded-lg space-x-2 ${vertical ? "flex-col" : "flex-row"}`}
    >
      <Ionicons name={icon} size={30} color="white" />
      <Text className="text-white font-bold text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionRow;

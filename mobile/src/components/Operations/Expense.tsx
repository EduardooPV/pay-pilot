import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Modal from "react-native-modal";

import ExpenseImage from "../../assets/expensebutton.svg";
import CloseImage from "../../assets/close.svg";

export default function Expense() {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        className="relative"
      >
        <View className="bg-white rounded p-10 justify-center items-center">
          <Text>Nova saída</Text>
          <TouchableOpacity
            className="absolute top-[16px] right-[16px]"
            onPress={() => setModalVisible(false)}
          >
            <CloseImage />
          </TouchableOpacity>
        </View>
      </Modal>

      <View className="flex-1 max-w-[100px] justify-center">
        <TouchableOpacity
          activeOpacity={0.7}
          className="w-full max-w-[100px] h-20 justify-center items-center p-[10px] space-y-2 bg-white rounded-lg"
          style={styles.shadow}
          onPress={() => setModalVisible(true)}
        >
          <ExpenseImage color="#4977FF" width={35} height={35} />
        </TouchableOpacity>
        <Text className="text-caption text-center mt-3">Saída</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  shadow: {
    elevation: 8,
    shadowColor: "#0f0f0f61",
  },
});

import { View, Pressable, Modal, Text } from "react-native";
import tw from "../../../lib/tailwind";

interface ConfirmationModalProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal = ({
  visible,
  onConfirm,
  onCancel,
}: ConfirmationModalProps) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
            elevation: 5,
          }}
        >
          <Text style={tw`mb-5`}>Are you sure you want to cancel?</Text>
          <Text style={tw`mb-5 mx-auto text-dark-gray`}>
            Your note would be erased
          </Text>
          <View style={tw`flex-row justify-between mt-5`}>
            <Pressable
              onPress={onCancel}
              style={tw`bg-gray rounded-2 px-4 py-2`}
            >
              <Text style={tw`text-white`}>Cancel</Text>
            </Pressable>
            <Pressable
              onPress={onConfirm}
              style={tw`bg-yellow rounded-2 px-4 py-2`}
            >
              <Text style={tw`text-dark-gray`}>Confirm</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationModal;

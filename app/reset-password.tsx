import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  ScrollView,
  ScrollViewBase,
  KeyboardAvoidingView,
  StyleSheet,
  Button,
  Image,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import tw from "twrnc";
import Logo from "../assets/images/logo.svg";
import { Link } from "expo-router";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const ResetPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
  });

  const [showPassword, setshowPassword] = useState<Boolean>(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <ScrollView style={tw`bg-white`}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "position" : undefined}
        style={tw`flex-1 mt-16`}
      >
        <View
          style={tw`flex-1 items-center justify-center px-6 max-w-lg w-full mx-auto`}
        >
          <Logo style={tw`mx-auto mb-4`} />

          <Text style={tw`text-xl text-center my-6 uppercase font-bold`}>
            Forgot your password?
          </Text>
          <Text style={tw`text-center text-gray-600 mt-10 mb-8`}>
            Enter your registered email below to receive password reset
            instruction
          </Text>
          <View style={tw`w-full mb-4`}>
            <Controller
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <TextInput
                    style={[
                      tw`bg-stone-50 px-4 py-2 pl-10 text-base rounded-md w-full placeholder:text-red-400 outline-none focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600`,
                      styles.input,
                      styles.inputFocus,
                    ]}
                    placeholder="Email"
                    keyboardType="email-address"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    accessibilityLabel="Email"
                    accessibilityHint="Enter your email address"
                  />
                </View>
              )}
              name="email"
              defaultValue=""
            />
            {errors.email && (
              <Text style={tw`text-red-500 mt-1 italics`}>
                {errors.email.message}
              </Text>
            )}
          </View>

          <View style={tw`w-full mb-4`}>
            <TouchableOpacity
              style={tw`bg-blue-600 px-4 py-2 rounded-md w-full max-w-md mt-8 mx-auto`}
              onPress={handleSubmit(onSubmit)}
              accessibilityRole="button"
              accessibilityLabel="Register"
            >
              <Text style={tw`text-white font-bold text-center text-lg`}>
                Send Reset Link
              </Text>
            </TouchableOpacity>
          </View>

          <View style={tw`flex-row items-start w-full mt-2`}>
            <Text style={tw`mr-1`}>Remember Password?</Text>
            <Link href="/login" style={tw`text-red-500 font-bold`}>
              Sign In
            </Link>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    caretColor: "#2563eb",
  },
  inputFocus: {
    borderColor: "blue",
    outline: "none",
  },
});
export default ResetPassword;

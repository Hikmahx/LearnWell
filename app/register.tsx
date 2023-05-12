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
import tw from "../lib/tailwind";
import Logo from "../assets/images/logo.svg";
import { Svg, Path, G, Mask } from "react-native-svg";
import Google from "../assets/images/google-icon.png";
import Fb from "../assets/images/fb-icon.png";
import { Link, useRouter } from "expo-router";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
  });

  const router = useRouter();
  const [showPassword, setshowPassword] = useState<Boolean>(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
    router.push("/login");
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

          <Text style={tw`text-xl text-center mb-6`}>Create An Account</Text>

          <View style={tw`w-full mb-4`}>
            <Controller
              control={control}
              rules={{
                required: "First name is required",
                minLength: {
                  value: 3,
                  message: "First name should be at least 3 characters",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <Svg
                    style={tw`absolute inset-y-0 h-full left-5`}
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    // xmlns="http://www.w3.org/2000/svg"
                  >
                    <Mask
                      id="mask0_237_24"
                      // style="mask-type:luminance"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="9"
                      width="14"
                      height="7"
                    >
                      <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.600098 9.87207H13.536V15.4026H0.600098V9.87207Z"
                        fill="white"
                      />
                    </Mask>
                    <G mask="url(#mask0_237_24)">
                      <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.06879 10.9971C3.58898 10.9971 1.82498 11.5461 1.82498 12.6298C1.82498 13.7233 3.58898 14.2776 7.06879 14.2776C10.5478 14.2776 12.311 13.7286 12.311 12.6448C12.311 11.5513 10.5478 10.9971 7.06879 10.9971M7.06879 15.4026C5.46894 15.4026 0.599976 15.4026 0.599976 12.6298C0.599976 10.1578 4.29213 9.87207 7.06879 9.87207C8.66864 9.87207 13.536 9.87207 13.536 12.6448C13.536 15.1168 9.84464 15.4026 7.06879 15.4026"
                        fill="#7B6F72"
                      />
                    </G>
                    <Mask
                      id="mask1_237_24"
                      // style="mask-type:luminance"
                      maskUnits="userSpaceOnUse"
                      x="2"
                      y="0"
                      width="10"
                      height="9"
                    >
                      <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.73145 0.500076H11.4045V8.46403H2.73145V0.500076Z"
                        fill="white"
                      />
                    </Mask>
                    <G mask="url(#mask1_237_24)">
                      <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.0688 1.57077C5.32031 1.57077 3.89768 2.87652 3.89768 4.48227C3.89196 6.08277 5.30398 7.38777 7.04511 7.39377L7.0688 7.92927V7.39377C8.81646 7.39377 10.2383 6.08727 10.2383 4.48227C10.2383 2.87652 8.81646 1.57077 7.0688 1.57077M7.06879 8.46402H7.04265C4.65635 8.45727 2.7233 6.67002 2.73147 4.48002C2.73147 2.28627 4.67677 0.499771 7.06879 0.499771C9.45999 0.499771 11.4045 2.28627 11.4045 4.48227C11.4045 6.67827 9.45999 8.46402 7.06879 8.46402"
                        fill="#7B6F72"
                      />
                    </G>
                  </Svg>
                  <TextInput
                    style={[
                      tw`bg-stone-50 px-4 py-2 pl-10 text-base rounded-md w-full placeholder:text-red-400 outline-none focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600`,
                      styles.input,
                      styles.inputFocus,
                    ]}
                    placeholder="First Name"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    accessibilityLabel="First Name"
                    accessibilityHint="Enter your first name"
                  />
                </View>
              )}
              name="firstName"
              defaultValue=""
            />
            {errors.firstName && (
              <Text style={tw`text-red-500 mt-1 italics`}>
                {errors.firstName.message}
              </Text>
            )}
          </View>
          <View style={tw`w-full mb-4`}>
            <Controller
              control={control}
              rules={{
                required: "Last name is required",
                minLength: {
                  value: 3,
                  message: "Last name should be at least 3 characters",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <Svg
                    style={tw`absolute inset-y-0 h-full left-5`}
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    // xmlns="http://www.w3.org/2000/svg"
                  >
                    <Mask
                      id="mask0_237_24"
                      // style="mask-type:luminance"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="9"
                      width="14"
                      height="7"
                    >
                      <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.600098 9.87207H13.536V15.4026H0.600098V9.87207Z"
                        fill="white"
                      />
                    </Mask>
                    <G mask="url(#mask0_237_24)">
                      <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.06879 10.9971C3.58898 10.9971 1.82498 11.5461 1.82498 12.6298C1.82498 13.7233 3.58898 14.2776 7.06879 14.2776C10.5478 14.2776 12.311 13.7286 12.311 12.6448C12.311 11.5513 10.5478 10.9971 7.06879 10.9971M7.06879 15.4026C5.46894 15.4026 0.599976 15.4026 0.599976 12.6298C0.599976 10.1578 4.29213 9.87207 7.06879 9.87207C8.66864 9.87207 13.536 9.87207 13.536 12.6448C13.536 15.1168 9.84464 15.4026 7.06879 15.4026"
                        fill="#7B6F72"
                      />
                    </G>
                    <Mask
                      id="mask1_237_24"
                      // style="mask-type:luminance"
                      maskUnits="userSpaceOnUse"
                      x="2"
                      y="0"
                      width="10"
                      height="9"
                    >
                      <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.73145 0.500076H11.4045V8.46403H2.73145V0.500076Z"
                        fill="white"
                      />
                    </Mask>
                    <G mask="url(#mask1_237_24)">
                      <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.0688 1.57077C5.32031 1.57077 3.89768 2.87652 3.89768 4.48227C3.89196 6.08277 5.30398 7.38777 7.04511 7.39377L7.0688 7.92927V7.39377C8.81646 7.39377 10.2383 6.08727 10.2383 4.48227C10.2383 2.87652 8.81646 1.57077 7.0688 1.57077M7.06879 8.46402H7.04265C4.65635 8.45727 2.7233 6.67002 2.73147 4.48002C2.73147 2.28627 4.67677 0.499771 7.06879 0.499771C9.45999 0.499771 11.4045 2.28627 11.4045 4.48227C11.4045 6.67827 9.45999 8.46402 7.06879 8.46402"
                        fill="#7B6F72"
                      />
                    </G>
                  </Svg>
                  <TextInput
                    style={[
                      tw`bg-stone-50 px-4 py-2 pl-10 text-base rounded-md w-full placeholder:text-red-400 outline-none focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600`,
                      styles.input,
                      styles.inputFocus,
                    ]}
                    placeholder="Last Name"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    accessibilityLabel="Last Name"
                    accessibilityHint="Enter your last name"
                  />
                </View>
              )}
              name="lastName"
              defaultValue=""
            />
            {errors.lastName && (
              <Text style={tw`text-red-500 mt-1 italics`}>
                {errors.lastName.message}
              </Text>
            )}
          </View>
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
                  <Svg
                    style={tw`absolute inset-y-0 h-full left-5 w-[14px]`}
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    // xmlns="http://www.w3.org/2000/svg"
                  >
                    <Path
                      d="M13.427 5.63836L10.0945 8.34814C9.46492 8.84764 8.57908 8.84764 7.94946 8.34814L4.58887 5.63836"
                      stroke="#7B6F72"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.6816 14.75C14.9627 14.7563 16.5 12.8822 16.5 10.5788V5.42751C16.5 3.12412 14.9627 1.25 12.6816 1.25H5.31835C3.03734 1.25 1.5 3.12412 1.5 5.42751V10.5788C1.5 12.8822 3.03734 14.7563 5.31835 14.75H12.6816Z"
                      stroke="#7B6F72"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>

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
            <Controller
              control={control}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password should be at least 8 characters",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <Svg
                    style={tw`absolute inset-y-0 h-full left-5`}
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    // xmlns="http://www.w3.org/2000/svg"
                  >
                    <Path
                      d="M10.3176 6.08585V4.4756C10.3176 2.59085 8.78906 1.06235 6.90431 1.06235C5.01956 1.0541 3.48506 2.5751 3.47681 4.4606V4.4756V6.08585"
                      stroke="#7B6F72"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.76237 14.9372H4.03162C2.46112 14.9372 1.18762 13.6645 1.18762 12.0932V8.87646C1.18762 7.30521 2.46112 6.03246 4.03162 6.03246H9.76237C11.3329 6.03246 12.6064 7.30521 12.6064 8.87646V12.0932C12.6064 13.6645 11.3329 14.9372 9.76237 14.9372Z"
                      stroke="#7B6F72"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      d="M6.89709 9.65202V11.3178"
                      stroke="#7B6F72"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>

                  <TextInput
                    style={[
                      tw`bg-stone-50 px-4 py-2 pl-10 text-base rounded-md w-full placeholder:text-red-400 outline-none focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600`,
                      styles.input,
                      styles.inputFocus,
                    ]}
                    placeholder="Password"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry={!showPassword}
                    accessibilityLabel="Password"
                    accessibilityHint="Enter your password"
                  />

                  <TouchableOpacity
                    onPress={() => setshowPassword(!showPassword)}
                    style={tw`absolute inset-y-0 h-full right-5 m-auto flex items-center justify-center`}
                  >
                    {!showPassword ? (
                      <>
                        <Svg
                          width="16"
                          height="14"
                          viewBox="0 0 16 14"
                          fill="none"
                          // xmlns="http://www.w3.org/2000/svg"
                        >
                          <Path
                            d="M6.32046 8.7751C5.88921 8.3446 5.62671 7.7596 5.62671 7.10335C5.62671 5.7886 6.68571 4.72885 7.99971 4.72885C8.64996 4.72885 9.24846 4.9921 9.67221 5.4226"
                            stroke="#ADA4A5"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <Path
                            d="M10.3287 7.52417C10.1547 8.49167 9.39265 9.25517 8.4259 9.43067"
                            stroke="#ADA4A5"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <Path
                            d="M3.99101 11.1042C2.80076 10.1697 1.79276 8.80473 1.06226 7.10298C1.80026 5.39373 2.81501 4.02123 4.01276 3.07923C5.20301 2.13723 6.57626 1.62573 7.99976 1.62573C9.43151 1.62573 10.804 2.14473 12.0018 3.09348"
                            stroke="#ADA4A5"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <Path
                            d="M13.5857 4.7431C14.1017 5.4286 14.5555 6.21985 14.9372 7.1026C13.462 10.5203 10.855 12.5791 7.99971 12.5791C7.35246 12.5791 6.71421 12.4741 6.10071 12.2693"
                            stroke="#ADA4A5"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <Path
                            d="M13.9153 1.1872L2.08484 13.0177"
                            stroke="#ADA4A5"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </Svg>
                      </>
                    ) : (
                      <>
                        <Svg
                          width="16"
                          height="13"
                          viewBox="0 0 16 13"
                          fill="none"
                          // xmlns="http://www.w3.org/2000/svg"
                        >
                          <Path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.3054 6.47468C10.3054 7.7837 9.24374 8.84457 7.93472 8.84457C6.62569 8.84457 5.56482 7.7837 5.56482 6.47468C5.56482 5.1649 6.62569 4.10403 7.93472 4.10403C9.24374 4.10403 10.3054 5.1649 10.3054 6.47468Z"
                            stroke="#ADA4A5"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <Path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.9335 11.9491C10.7885 11.9491 13.3998 9.89629 14.87 6.47453C13.3998 3.05276 10.7885 1 7.9335 1H7.9365C5.08153 1 2.47022 3.05276 1 6.47453C2.47022 9.89629 5.08153 11.9491 7.9365 11.9491H7.9335Z"
                            stroke="#ADA4A5"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </Svg>
                      </>
                    )}
                  </TouchableOpacity>
                </View>
              )}
              name="password"
              defaultValue=""
            />
            {errors.password && (
              <Text style={tw`text-red-500 mt-1 italics`}>
                {errors.password.message}
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
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={tw`items-center flex-row justify-between w-full mt-5 mb-4`}
          >
            <View style={tw`border-b flex-1 w-full border-[#B5B5B5]`} />
            <Text style={tw`mx-4 text-[#B5B5B5]`}>Or sign in with</Text>
            <View style={tw`border-b flex-1 w-full border-[#B5B5B5]`} />
          </View>

          <View style={tw`flex-row w-full gap-x-4`}>
            <View
              style={[
                tw`py-4 px-6 shadow-md rounded-xl flex-1 w-full flex-row bg-white items-center text-base`,
              ]}
            >
              <Image source={Google} style={tw``} />
              <Text style={tw`mx-3 font-bold`}>Google</Text>
            </View>
            <View
              style={[
                tw`py-4 px-6 shadow-md rounded-xl flex-1 w-full flex-row bg-white items-center text-base`,
              ]}
            >
              <Image source={Fb} style={tw``} />
              <Text style={tw`mx-3 font-bold`}>Facebook</Text>
            </View>
          </View>

          <View style={tw`flex-row items-start w-full mt-6`}>
            <Text style={tw`mr-1`}>Already have an account?</Text>
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
  // card: {
  //   boxShadow: "0px 4px 4px 0px #00000040";
  // }

  // shadow-[0px_4px_4px_0px_#00000040]
});

export default RegisterForm;

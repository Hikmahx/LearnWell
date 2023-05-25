import React from "react";
import {
  Text,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import tw from "../../lib/tailwind";
import Google from "../../assets/images/google-icon.png";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import firebase from "firebase/app";
import "firebase/auth";
import * as AuthSession from "expo-auth-session";
import { Link, useRouter } from "expo-router";

const GoogleButton = () => {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();

      // Set additional scopes if needed
      if (Platform.OS === "android") {
        provider.addScope("profile");
        provider.addScope("email");
      }

      // Handle the sign-in flow based on the platform
      if (Platform.OS === "web") {
        const result = await signInWithPopup(auth, provider);
        // Access the user information
        const user = result.user;
        const { displayName, email, photoURL } = user;
        console.log("User info:", { displayName, email, photoURL });
      } else {
        const redirectUrl = AuthSession.makeRedirectUri({ useProxy: true });
        const providerId = provider.providerId;
        const authUrl = `https://${
          auth.config.authDomain
        }/__/auth/handler?provider=${providerId}&redirect_uri=${encodeURIComponent(
          redirectUrl
        )}`;
        const result = await AuthSession.startAsync({ authUrl });
        if (result.type === "success") {
          // Complete the sign-in flow using the obtained accessToken
          const { accessToken } = result.params;
          await signInWithCredential(
            auth,
            GoogleAuthProvider.credential(null, accessToken)
          );
          // Sign-in successful, navigate to the desired page
        }
      }
      router.push("/home");
    } catch (error) {
      // Handle sign-in error
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <>
      <TouchableOpacity
        style={[
          tw`py-4 px-6 shadow-md rounded-xl flex-1 w-full flex-row bg-white items-center text-base`,
        ]}
        onPress={handleGoogleSignIn}
      >
        <Image source={Google} style={tw``} />
        <Text style={tw`mx-3 font-bold`}>Google</Text>
      </TouchableOpacity>
    </>
  );
};

export default GoogleButton;

import React, { useEffect } from "react";
import { View, Button, Image, Text } from "react-native";
import * as AuthSession from "expo-auth-session";
import firebase from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
  UserCredential,
  OAuthCredential,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as WebBrowser from "expo-web-browser";
import tw from "../../lib/tailwind";
import { TouchableOpacity } from "react-native-gesture-handler";
import Fb from "../../assets/images/fb-icon.png";

WebBrowser.maybeCompleteAuthSession();
export default function App() {
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: "807395433765355",
    extraParams: {
      auth_type: "rerequest",
      scope: "email",
    },
  });

  useEffect(() => {
    if (response && response.type === "success" && response.params) {
      (async () => {
        const { access_token: accessToken } = response.params;
        const userInfoResponse = await fetch(
          `https://graph.facebook.com/me?access_token=${accessToken}&fields=id,name,email,picture.type(large)`
        );
        const userInfo = await userInfoResponse.json();
        console.log(userInfo);
      })();
    }
  }, [response]);

  const handlePressAsync = async () => {
    const result = await promptAsync();
    if (response?.type === "success" && response.params) {
      const { access_token: accessToken } = response.params;

      const auth = getAuth(); // Get the Firebase Auth instance
      const provider = new FacebookAuthProvider();

      try {
        const credential = FacebookAuthProvider.credential(accessToken);
        if (credential) {
          const userCredential: UserCredential = await signInWithPopup(
            auth,
            provider,
            credential
          );
          const user = userCredential.user;
          console.log(user);
        }
      } catch (error) {
        console.log(error);
      }
    } else if (response?.type === "error") {
      console.log(response.error);
    }
  };

  return (
    <>
      <TouchableOpacity
        style={[
          tw`py-4 px-6 shadow-md rounded-xl flex-1 w-full flex-row bg-white items-center text-base`,
        ]}
        disabled={!request}
        onPress={handlePressAsync}
      >
        <Image source={Fb} style={tw``} />
        <Text style={tw`mx-3 font-bold`}>Facebook</Text>
      </TouchableOpacity>
    </>
  );
}

import React, { useEffect } from "react";
import { View, Button, Image, Text } from "react-native";
import * as AuthSession from "expo-auth-session";
import firebase from "firebase/app";
import {
  signInWithPopup,
  FacebookAuthProvider,
  signInWithRedirect,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as WebBrowser from "expo-web-browser";
import tw from "../../lib/tailwind";
import { TouchableOpacity } from "react-native-gesture-handler";
import Fb from "../../assets/images/fb-icon.png";

export default function App() {
  
  // initialize WebBrowser
  WebBrowser.maybeCompleteAuthSession();
  // This will set up something like a listener whenever the use is trying to signin with facebook
  // maybeCompleteAuthSession(): the will open the web browser inside the application

  // Facebook (from "expo-auth-session/providers/facebook") will return 3 things in an array
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: "807395433765355",
  });

  useEffect(() => {
    if (response && response.type === "success" && response.authentication) {
      // Fetch the data once we have the token of the user

      (async () => {
        const userInfoResponse = await fetch(
          `https://graph.facebook.com/me?access_token=${response.authentication?.accessToken}&fields=id,name,email,picture.type(large)`
        );
        const userInfo = await userInfoResponse.json();
        console.log(userInfo);
      })();
    }
  }, [response]);

  const handlePressAsync = async () => {
    const result = await promptAsync();
    // promptAsync will open the modal
    if (response?.type !== "success") {
      alert("Uh oh, something went wrong");
      return;
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

import { View, Text } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";
import ArrowRight from "../../assets/images/arrow-right.svg";

const Details = () => {
  return (
    <View style={tw`max-w-md w-full mx-auto mb-10`}>
      <View style={tw`border-t border-zinc-100 w-auto mx-6`}>
        <View
          style={tw`flex flex-row items-center justify-between border-b border-zinc-100 py-6`}
        >
          <Text style={tw`text-zinc-400`}>Full Name</Text>
          <Text style={tw`ml-auto text-neutral-500`}>Jane Doe</Text>
          <ArrowRight style={tw`ml-3 text-neutral-500`} />
        </View>
        <View
          style={tw`flex flex-row items-center justify-between border-b border-zinc-100 py-6`}
        >
          <Text style={tw`text-zinc-400`}>Email</Text>
          <Text style={tw`ml-auto text-neutral-500`}>janedoe@gmail.com</Text>
          <ArrowRight style={tw`ml-3 text-neutral-500`} />
        </View>
        <View
          style={tw`flex flex-row items-center justify-between border-b border-zinc-100 py-6`}
        >
          <Text style={tw`text-zinc-400`}>Mobile Number</Text>
          <Text style={tw`ml-auto text-neutral-500`}>+1 234 567 8900</Text>
          <ArrowRight style={tw`ml-3 text-neutral-500`} />
        </View>
        <View
          style={tw`flex flex-row items-center justify-between border-b border-zinc-100 py-6`}
        >
          <Text style={tw`text-zinc-400`}>Password</Text>
          <Text style={tw`ml-auto text-neutral-500`}>*********</Text>
          <ArrowRight style={tw`ml-3 text-neutral-500`} />
        </View>
      </View>
    </View>
  );
};

export default Details;

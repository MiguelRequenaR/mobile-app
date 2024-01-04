import { 
  Text, 
  View, 
  Image, 
  Pressable, 
  TextInput 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';

export default function TabOneScreen() {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 , backgroundColor: '#1e1c2a'}}>
      <View className='p-4 space-y-5 absolute'>
        <View className='relative bg-[#00b761] border mb-10 h-[55px] w-[50%] rounded-lg transform rotate-[-70deg]'></View>
        <View className='flex justify-center items-center border border-transparent w-[50px] h-[50px] rounded-full bg-[#00b761]'>
          <Image 
            source={{uri: "https://img.icons8.com/?size=64&id=hmZnke9jb8oq&format=png"}} 
            style={{width: 40, height: 40}}
          />
        </View>
        <Text className='text-white text-xl font-bold'>
          Let's log you in
        </Text>
        <Text className='text-[#777583]'>
          Welcome back you've been missed!
        </Text>
        <View className='flex flex-row pt-5 space-x-4 mx-auto'>
          <View className='bg-[#ec4235] py-5 w-[47%] rounded-xl'>
            <Pressable style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Image 
                source={{uri: "https://img.icons8.com/?size=48&id=17949&format=png"}} 
                style={{width: 20, height: 20}}
              />
              <Text className='text-white font-semibold pl-1'>Google</Text>
            </Pressable>
          </View>
          <View className='bg-[#1878f3] py-5 w-[47%] rounded-xl'>
            <Pressable style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Image 
                source={{uri: "https://img.icons8.com/?size=48&id=13912&format=png"}} 
                style={{width: 20, height: 20}}
              />
              <Text className='text-white font-semibold pl-1'>Facebook</Text>
            </Pressable>
          </View>
        </View>
        <View className='space-y-5 pt-5 pb-5'>
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
            placeholderTextColor="#777583"
            className='bg-[#25283b] rounded-lg py-2 px-3 text-white'
          />
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email Address"
            placeholderTextColor="#777583"
            className='bg-[#25283b] rounded-lg py-2 px-3 text-white'
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#777583"
            className='bg-[#25283b] rounded-lg py-2 px-3 text-white'
          />
        </View>
        <View className='bg-[#00b761] py-4 rounded-lg'>
          <Pressable onPress={() => console.log('Signup pressed')}>
            <Text className='text-white font-semibold text-center'>Signup</Text>
          </Pressable>
        </View>

        <View className='flex flex-row justify-center pt-5'>
          <Text className='text-[#777583]'>Don't have an account? </Text>
          <Pressable onPress={() => console.log('Signup pressed')}>
            <Text className='text-[#00b761]'>Sign in</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView> 
  );
}


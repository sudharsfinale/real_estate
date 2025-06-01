import { useGlobalContext } from '@/library/global-provider';
import { Redirect, Slot } from 'expo-router';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AppLayout = () => {
    const {refetch, isLoggedIn, loading} = useGlobalContext();
  if(loading) {
    return <SafeAreaView style={{flex:1, justifyContent:"center", alignItems:'center'}}><ActivityIndicator className='text-primary-300' size={"large"}/></SafeAreaView>
  }
  if(!isLoggedIn) return <Redirect href={"/sign_in"}/>

  return <Slot />
}

export default AppLayout
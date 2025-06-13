import React from 'react'
import HomeScreen from './HomeScreen';
import AuthScreen from './AuthScreen';
import { useAuthStore } from '../../store/authUser';

const HomePage = () => {
  const { user } = useAuthStore(); // This should be replaced with actual user authentication logic
  return <div>{user ? <HomeScreen /> : <AuthScreen />}</div>;
  // return <div className='hero-bg h-screen'>HomePage</div>
}

export default HomePage;


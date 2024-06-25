import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// প্রথমে আমার একটা স্টোর ক্রিয়েট করা লাগবে, তারপর এটাকে কানেক্ট করা লাগবে রিয়েক্ট এপ্লিকেশনের সাথে (main.tsx)।
// তারপর আমাকে একটা কাউন্টার বানানো লাগবে ফিচার নামে ফোল্ডারের ভিতর কাউন্টারস্লা্ইস নামে
// সেই স্লাইসটাকে কানেক্ট করতে হবে স্টোরের সাথে।

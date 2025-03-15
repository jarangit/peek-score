// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import fixturesProvider from "./features/fixtures/fixturesSlice";

export const store = configureStore({
  reducer: {
    fixtures: fixturesProvider, // ✅ รวม Reducer ใน Store
  },
});

// ✅ สร้าง Type สำหรับ Redux Store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

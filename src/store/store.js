import { configureStore } from "@reduxjs/toolkit";
import { CharacterSlice } from "./slice";

export const store = configureStore({
    reducer: {
        character: CharacterSlice.reducer
    }
})
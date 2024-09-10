import { createSlice } from "@reduxjs/toolkit";

export const CharacterSlice = createSlice ({
    name: "character",
    initialState: { 
        characters:[]
    },
    reducers: {
        filterByRace: (state, action) => {
            state.characters == action.payload.filter(characters => 
                characters.race
            )
        },
        addFavoriteCharacter : (state, action)=> {
            state.characters = [...state.characters, action.payload]
        },
        deleteFavoriteCharacter: (state, action)=> {
            const {name, ki, maxKi} = action.payload;
            state.characters = state.characters.filter(valor =>
                valor.name !== name &&
                valor.ki !== ki &&
                valor.maxKi !== maxKi
            )
        }
    }

})

// export const Planets =  createSlice ({

// })

// export const Favorites =  createSlice ({

// })

export const Transformations =  createSlice ({
    name: "transformation",
    initialState: {
        transformations: []
    },
    reducers: {
        addFavoriteTransformation: (state, action) => {
            state.transformations = [...state.transformations, action.payload]
        }
    }

})

export const {filterByRace} = CharacterSlice.actions;
export const {addFavoriteCharacter} = CharacterSlice.actions;
export const {deleteFavoriteCharacter} = CharacterSlice.actions;
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiPOST_Tokenless } from '../../../apis';

const initialState = {
    user: null,
    token: null,
    loading: false
}

export const registerUserAsync = createAsyncThunk(
    "register",
    async ({ email, password, name, }, thunkAPI) => {
        try {
            thunkAPI.dispatch(registerationStart());
            const response = await apiPOST_Tokenless("auth/register", {
                name, email, password
            });

            if (response.status_code == 200) {
                thunkAPI.dispatch(registerationSuccess(response));

            }
            console.log(response)
            return response;
        } catch (error) {
            thunkAPI.dispatch(registerationFail(error.message));
        }
    }
);

export const loginUserAsync = createAsyncThunk(
    "register",
    async ({ email, password }, thunkAPI) => {
        try {
            thunkAPI.dispatch(registerationStart());
            const response = await apiPOST_Tokenless("auth/login", {
                email, password
            });

            if (response.status_code == 200) {
                thunkAPI.dispatch(registerationSuccess(response));
                localStorage.setItem("user", JSON.stringify(response.user))
                localStorage.setItem("token", JSON.stringify(response.tokens))
            }
            console.log(response)
            return response;
        } catch (error) {
            thunkAPI.dispatch(registerationFail(error.message));
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        registerationStart: (state) => {
            state.loading = true;
        },
        registerationSuccess: (state) => {
            state.loading = true;
        },
        registerationFail: (state) => {
            state.loading = false;
        },

        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, payload) => {
            state.loading = true;
            state.user = payload.user;
            state.token = payload.tokens;
        },
        loginFail: (state) => {
            state.loading = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    // register
    registerationStart,
    registerationSuccess,
    registerationFail,

    // login
    loginStart,
    loginSuccess,
    loginFail,
} = authSlice.actions


export const selectIsUserLogin = (state) => state.auth.loading;

export default authSlice.reducer
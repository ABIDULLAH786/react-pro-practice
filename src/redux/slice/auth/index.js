import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiPOST_Tokenless } from '../../../apis';



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
    "login",
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

export const verifyEmailLink = createAsyncThunk(
    "verify-email",
    async ({ token }, thunkAPI) => {
        try {

            thunkAPI.dispatch(verificationStart());
            const response = await apiPOST_Tokenless("auth/verify-email", { token });

            if (response.status_code === 200) {
                thunkAPI.dispatch(verificationSuccess());
            }
            console.log("response ")
            return response;
        } catch (error) {
            console.log(error)
            thunkAPI.dispatch(actionFail(error.message));
        }
    }
);

const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null,
    verify: false,
}
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

        actionFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        verificationStart: (state) => {
            state.loading = true;

        },
        verificationSuccess: (state) => {
            state.loading = false;
            state.verify = false;

        },
    },
})

// Action creators are generated for each case reducer function
export const {
    // register
    registerationStart,
    registerationSuccess,
    registerationFail,

    // email verification
    verificationStart,
    verificationSuccess,

    // login
    loginStart,
    loginSuccess,
    loginFail,

    // when any action fails
    actionFail,
} = authSlice.actions


export const selectIsUserLogin = (state) => state.auth.user;
export const selectIsLoading = (state) => state.auth.loading;
export const selectIsVerify = (state) => state.auth.verify;
export const selectError = (state) => state.auth.error;

export default authSlice.reducer
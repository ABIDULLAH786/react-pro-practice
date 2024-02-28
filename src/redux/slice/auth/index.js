import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiPOST_Tokenless } from '../../../apis';



export const registerUserAsync = createAsyncThunk(
    "register",
    async ({ email, password, name, }, thunkAPI) => {
        try {
            thunkAPI.dispatch(actionStart());
            const response = await apiPOST_Tokenless("auth/register", {
                name, email, password
            });
            if (response.status == 200) {
                thunkAPI.dispatch(registerationSuccess(response));
            }
        } catch (error) {
            thunkAPI.dispatch(actionFail(error.message));
        }
    }
);

export const loginUserAsync = createAsyncThunk(
    "login",
    async ({ email, password }, thunkAPI) => {
        try {
            thunkAPI.dispatch(actionStart());
            const response = await apiPOST_Tokenless("auth/login", {
                email, password
            });
            const data = await response.json();
            if (response.status_code == 200) {
                thunkAPI.dispatch(loginSuccess(data));
                localStorage.setItem("user", JSON.stringify(data.user))
                localStorage.setItem("token", JSON.stringify(data.tokens))
            }
            console.log(response)
            return data;
        } catch (error) {
            thunkAPI.dispatch(actionFail(error.message));
        }
    }
);

export const verifyEmailLink = createAsyncThunk(
    "verify-email",
    async (token, thunkAPI) => {
        try {

            thunkAPI.dispatch(actionStart());
            const response = await apiPOST_Tokenless("auth/verify-email", { token });
            const data = await response.json();
            if (response.status === 200) {
                thunkAPI.dispatch(verificationSuccess());
            } else {
                thunkAPI.dispatch(actionFail(data?.message));
            }
            console.log("response of verify email api", response)
            return response.json();
        } catch (error) {
            console.log(error)
            thunkAPI.dispatch(actionFail(error.message));
        }
    }
);

export const requestForgetPasswordAsync = createAsyncThunk(
    "forgot-password",
    async ({ email }, thunkAPI) => {
        try {
            thunkAPI.dispatch(actionStart());
            const response = await apiPOST_Tokenless("auth/forgot-password", { email });
            const data = await response.json()
            if (response.status == 200) {
                thunkAPI.dispatch(requestForgetPasswordSuccess(data));
            } else {
                thunkAPI.dispatch(actionFail(data.message));
            }
            console.log("response of forget password", response)
            console.log(data)
            return data;
        } catch (error) {
            thunkAPI.dispatch(actionFail(error.message));
        }
    }
);

export const resetPasswordAsync = createAsyncThunk(
    "reset-password",
    async ({ password, token }, thunkAPI) => {
        try {
            thunkAPI.dispatch(actionStart());
            const response = await apiPOST_Tokenless("auth/reset-password", { password, token });
            const data = await response.json()
            if (response.status == 200) {
                thunkAPI.dispatch(resetPasswordSuccess(data));
            }
            console.log("response of reset password", response)
            console.log(data)
        } catch (error) {
            thunkAPI.dispatch(actionFail(error.message));
        }
    }
);


const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null,
    success: false,
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        actionStart: (state) => {
            state.loading = true;
            state.success = false;
            state.error = null
        },
        actionFail: (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload;
        },

        registerationSuccess: (state) => {
            state.loading = true;
            state.success = true;
        },


        loginSuccess: (state, payload) => {
            state.loading = false;
            state.user = payload.user;
            state.token = payload.tokens;
            state.success = true;
        },


        verificationSuccess: (state) => {
            state.loading = false;
            state.success = true;
        },

        requestForgetPasswordSuccess: (state) => {
            state.loading = false;
            state.success = true;
        },
        resetPasswordSuccess: (state) => {
            state.loading = false;
            state.success = true;
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    // when any action fails
    actionFail,
    actionStart,

    // register
    registerationSuccess,

    // email verification
    verificationSuccess,

    // login
    loginSuccess,

    requestForgetPasswordSuccess, // request forgot password
    resetPasswordSuccess, // reset new password
} = authSlice.actions


export const selectIsUserLogin = (state) => state.auth.user;
export const selectIsLoading = (state) => state.auth.loading;
export const selectError = (state) => state.auth.error;
export const selectIsSuccess = (state) => state.auth.success;

export default authSlice.reducer
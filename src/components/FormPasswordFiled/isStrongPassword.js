export const isStrongPassword = (password) => {
    if (password.length < 4) {
        return "Password must be minimum 4 characters include one UPPERCASE, lowercase, number and special character: @$! % * ? &";
    }
    else {
        let capsCount, smallCount, numberCount, symbolCount
        capsCount = (password.match(/[A-Z]/g) || []).length
        smallCount = (password.match(/[a-z]/g) || []).length
        numberCount = (password.match(/[0-9]/g) || []).length
        symbolCount = (password.match(/\W/g) || []).length
        if (capsCount < 1) {
            return "Must contain one UPPERCASE letter";
        }
        else if (smallCount < 1) {
            return "Must contain one lowercase letter";
        }
        else if (numberCount < 1) {
            return "Must contain one number";
        }
        else if (symbolCount < 1) {
            return "Must contain one special character: @$! % * ? &";
        } else return null;
    }
}
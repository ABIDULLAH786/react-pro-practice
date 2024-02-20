import React from 'react';
import { makeStyles } from '@mui/styles';

const PasswordStrengthMeter = (props) => {
    const classes = useStyles();
    const testedResult = props.password;
    const createPasswordLabel = () => {
        let score = 0
        let regexPositive = ["[A-Z]", "[a-z]", "[0-9]", "\\W",]
        regexPositive.forEach((regex, index) => {
            if (new RegExp(regex).test(testedResult)) {
                score += 1
            }
        })
        switch (score) {
            case 0:
                return ({
                    value: 0,
                    info: "None",
                });
            case 1:
                return ({
                    value: 1,
                    info: "Weak",
                });
            case 2:
                return ({
                    value: 2,
                    info: "Fair",
                });
            case 3:
                return ({
                    value: 3,
                    info: "Good",
                });
            case 4:
                return ({
                    value: 4,
                    info: "Strong",
                });
            default:
                return null
        }
    }

    return (props.password && <>
        <div>
            <progress className={`${classes.bar} ${classes[`progress_strength_${createPasswordLabel().info}`]}`} value={createPasswordLabel().value} max="4" />
            <br />
            <div className={classes.label}>
                <p className={`password__label strength-${createPasswordLabel().info}`}>Password strength: <span className={classes[createPasswordLabel().info]}>{createPasswordLabel().info} </span></p>
            </div>
        </div>
    </>
    )
}
export default PasswordStrengthMeter;


export const useStyles = makeStyles(() => ({
    bar: {
        width: '100%',
    },
    label: {
        color: '#344054',
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "500",
    },
    progress_strength_None: {
        backgroundColor: "transparent",
        height: "6px",
    },
    progress_strength_Weak: {
        backgroundColor: "red",
        height: "6px",
    },
    progress_strength_Fair: {
        backgroundColor: "gold",
        height: "6px",
    },
    progress_strength_Good: {
        backgroundColor: "deepskyblue",
        height: "6px",
    },
    progress_strength_Strong: {
        backgroundColor: "green",
        height: "6px",
    },
    Weak: {
        color: "red",
    },
    Fair: {
        color: "gold",
    },
    Good: {
        color: "deepskyblue",
    },
    Strong: {
        color: "green",

    }

}));
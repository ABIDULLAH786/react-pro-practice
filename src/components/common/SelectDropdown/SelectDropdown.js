import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { UserIcon } from '../../../assets/icons/user-icon';
import { ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { StarIcon } from '../../../assets/icons/star-icon';
import { TickIcon } from '../../../assets/icons/tick-icon';

export default function SelectDropdown({ options }) {
    const [value, setValue] = React.useState('admin');
    const classes = useStyles();
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 90 }}>
            <FormControl fullWidth size="small">
                <Select
                    className={classes.select}
                    labelId="select"
                    id="select"
                    value={value}
                    onChange={handleChange}
                    label={null}
                >
                    <MenuItem
                        value={'admin'}
                        style={{ display: 'flex', justifyContent: 'space-between' }}
                        startIcon={<StarIcon />}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <StarIcon />
                            Admin
                        </div>
                        {value === "admin" && <span className='displayNone'>
                            <TickIcon />
                        </span>
                        }
                    </MenuItem>
                    <MenuItem
                        value={'user'}
                        style={{ display: 'flex', justifyContent: 'space-between' }}
                        startIcon={<StarIcon />}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <UserIcon color={'#667085'} />
                            User
                        </div>
                        {value === "user" && <span className='displayNone'>
                            <TickIcon />
                        </span>
                        }
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export const useStyles = makeStyles(() => ({
    select: {
        width: "180px",

        "& .MuiOutlinedInput-input": {
            display: 'flex',
            flexDirection: 'row',
            gap: '15px',
            alignItems: 'flex-start',
            borderRadius: '8px',
            boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
            //  text
            color: 'var(--Gray-900, #101828)',
            // fontFamily: 'Inter',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '20px',
        },
        "& .displayNone": {
            display: 'none',
        }

    },

}));
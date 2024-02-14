import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { makeStyles } from '@mui/styles';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function MultiSelect({ listData }) {
    const classes = useStyles();
    let options = listData.map((item, index) => { return { title: item.name, label: item.id } })
    return (
        <Autocomplete
            size="small"

            multiple
            id="checkboxes-tags"
            options={options}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {option.title}
                </li>
            )}
            className={classes.select}
            style={{ minWidth: 150, maxWidth: 650, width: '100%' }}
            renderInput={(params) => (
                <TextField {...params} placeholder="Select team member"  />
            )}
            
            
        />
    );
}

export const useStyles = makeStyles(() => ({
    select: {

       

    },

}));
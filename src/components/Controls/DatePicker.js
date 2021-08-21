import React from "react";

import {TextField,makeStyles} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
 
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePicker(props) {
  const classes = useStyles();
  const { name, label, value, onChange,helperText } = props;


  return (
    <TextField
        id="date"
        label={label}
        name={name}
        value={value}
        helperText={helperText}
         type="date"
        onChange={onChange}
        defaultValue="04-05-21"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
  );
}

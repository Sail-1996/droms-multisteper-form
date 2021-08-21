import React from "react";
import { FormControl,FormHelperText,MenuItem, InputLabel,Select as MuiSelect } from "@material-ui/core";

export default function Select(props) {
  const { name, label, margin,value, onChange, options,error=null,...other } = props;
  return <FormControl variant="outlined"
     {...(error &&{error:true})} fullWidth
  >
      <InputLabel >
          {label}
      </InputLabel>
      <MuiSelect 
      label={label}
    
      name={name}
      value={value}
      onChange={onChange}

      {...other}
      >
<MenuItem value="">None</MenuItem>
{
    options.map(
        (item)=>(<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
    )
}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText> }
  </FormControl>;
}

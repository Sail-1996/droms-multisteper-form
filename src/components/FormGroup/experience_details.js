import React from "react";
import { useFieldArray, useFormContext, Controller } from "react-hook-form";
import { Paper,IconButton, TextField } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";
export default function Experience_details() {
  const {
   
    control
    
  } = useFormContext({});
  const { append, fields, remove } = useFieldArray({
    control,
    name: "experience",
  });
  return (
    <Paper>
      {fields.map((item, index) => (
        <div className="form-row form-group" key={item.id}>
          <div className="col">
            <Controller
              control={control}
              name={`experience.[${index}].experience`}
              rules={{ required: "experience required" }}
              render={({ field }) => (
                <TextField
                  label="Experience"
                  placehoder="Enter your Experience"
                  variant="outlined"
                  {...field}
                  defaultValue={item.experience}
                />
              )}
            />
          </div>
          <div className="col">
            <Controller
              control={control}
              name={`experience.[${index}].specialization`}
              rules={{ required: "specialization required" }}
              render={({ field }) => (
                <TextField
                  label="Specialization"
                  variant="outlined"
                  placehoder="your specialization"
                  {...field}
                  defaultValue={item.specialization}
                />
              )}
            />
          </div>
          <div className="col">
            <Controller
              control={control}
              name={`experience.[${index}].lastSalary`}
              rules={{ required: "Last Salary required" }}
              render={({ field }) => (
                <TextField
                  label="Last Salary"
                  variant="outlined"
                  placehoder="Enter your Last salary"
                  {...field}
                  defaultValue={item.lastSalary}
                />
              )}
            />
          </div>

          <div className="col">
          <IconButton onClick={() => remove(index)}>
              <DeleteOutline color="secondary" />
            </IconButton>
          
          </div>
        </div>
      ))}
      <button
        className="btn btn-primary"
        type="button"
        onClick={() =>
          append({ experience: "", specialization: "", lastSalary: "" })
        }
      >
        Add More
      </button>
    </Paper>
  );
}

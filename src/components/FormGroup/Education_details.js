import React from "react";
import { useFieldArray, useFormContext, Controller } from "react-hook-form";
import { Paper, IconButton,TextField } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";
export default function Education_details() {
  const {  control } = useFormContext({});
  const { append, fields, remove } = useFieldArray({
    control,
    name: "education",
  });
  return (
    <Paper>
      {fields.map((item, index) => (
        <div className="form-row form-group" key={item.id}>
          <div className="col">
            <Controller
              control={control}
              name={`education.[${index}].degree`}
              rules={{ required: "Degree required" }}
              render={({ field }) => (
                <TextField
                  label="Qualification"
                  placehoder="Enter your Qualification"
                  variant="outlined"
                  {...field}
                  defaultValue={item.degree}
                />
              )}
            />
          </div>
          <div className="col">
          <Controller
              control={control}
              name={`education.[${index}].passingYear`}
              rules={{ required: "Grade required" }}
              render={({ field }) => (
                <TextField
                label="Passing Year"
              variant="outlined"
              placehoder="Passing Year"
                  {...field}
                  defaultValue={item.passingYear}
                />
              )}
            />
          
          </div>
          <div className="col">
          <Controller
              control={control}
              name={`education.[${index}].grade`}
              rules={{ required: "Grade required" }}
              render={({ field }) => (
                <TextField
                label="Grade/Percentage"
              variant="outlined"
              placehoder="Grade or Percentage"
                  {...field}
                  defaultValue={item.grade}
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
        onClick={() => append({ degree: "", passingYear: "", grade: "" })}
      >
        Add More
      </button>
    </Paper>
  );
}

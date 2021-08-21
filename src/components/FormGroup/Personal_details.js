import React from 'react'
import {
  
    Grid,
  
  } from "@material-ui/core";

  import { Controller, useFormContext} from "react-hook-form";
  import Controls from "../Controls/control";
  const genderItems = [
    { id: "male", title: "Male" },
    { id: "female", title: "Female" },
  ];
  
  const maritalItem = [
    { id: "unmarried", title: "Unmarried" },
    { id: "maried", title: "Married" },
  ];
export default function Personal_details() {
    const {
        control,
        formState: { errors },
      } = useFormContext();
    return (
        <Grid container spacing={3}>
      <Grid item xs={4}>
        <Controller
          control={control}
          name="employeeID"
          rules={{
            required: "Employee ID is Required",
          }}
          render={({ field }) => (
            <Controls.Input
              id="employeeID"
              label="Employee ID"
              variant="outlined"
              placeholder="Enter Employee  ID"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors.employeeID)}
              helperText={errors.employeeID?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="idProof"
          rules={{
            required: " Identity Required",
          }}
          render={({ field }) => (
            <Controls.Input
              id="idProof"
              label="ID Proof"
              variant="outlined"
              placeholder="Enter ID"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors.idProof)}
              helperText={errors.idProof?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="dateOfBirth"
          rules={{
            required: "Date of birth is Required!",
          }}
          render={({ field }) => (
            <Controls.DatePicker
              // id="dateOfBirth"
              label="Date Of Birth"
              variant="contained"
              // placeholder="Enter Birth date"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors.dateOfBirth)}
              helperText={errors.dateOfBirth?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Controller
          control={control}
          name="firstName"
          rules={{
            required: "First name is Required",
          }}
          render={({ field }) => (
            <Controls.Input
              id="firstName"
              label="First Name"
              variant="outlined"
              placeholder="Enter First  Name"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors.firstName)}
              helperText={errors.firstName?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="middleName"
          // rules={{
          //     required:"Father's  Name is Required",
          // }}
          render={({ field }) => (
            <Controls.Input
              id="middleName"
              label="Middle Name"
              variant="outlined"
              placeholder="Middle Name"
              fullWidth
              margin="normal"
              {...field}
              // error={Boolean(errors.middleName)}
              // helperText={errors.middleName?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="lastName"
          rules={{
            required: "Last  Name is Required",
          }}
          render={({ field }) => (
            <Controls.Input
              id="lastName"
              label="Last Name"
              variant="outlined"
              placeholder="Last Name"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors.lastName)}
              helperText={errors.lastName?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Controller
          control={control}
          name="gender"
          // rules={{
          //     required:"Gender is Required",
          // }}
          render={({ field }) => (
            <Controls.RadioGroup
              id="gender"
              name="gender"
              label="Gender"
              items={genderItems}
              {...field}
              // error={Boolean(errors.gender)}
              // helperText={errors.gender?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="maritalStatus"
          render={({ field }) => (
            <Controls.RadioGroup
              id="maritalStatus"
              name="maritalStatus"
              label="Marital Status"
              items={maritalItem}
              {...field}
            />
          )}
        />
      </Grid>
    </Grid>

    )
}

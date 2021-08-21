import React from 'react'

  import { Controller, useFormContext } from "react-hook-form";
  import Controls from "../Controls/control";
export default function Contact_details() {
    const {
        control,
        formState: { errors },
      } = useFormContext();
    return (
        <>
      <Controller
        control={control}
        name="contact.phoneNo"
        rules={{
          required: "Phone is Required",
        }}
        render={({ field }) => (
          <Controls.Input
            id="phoneNo"
            label="Phone No"
            variant="outlined"
            placeholder="Phone No"
            fullWidth
            type="phoneNo"
            margin="normal"
            {...field}
            error={Boolean(errors.phoneNo)}
            helperText={errors.phoneNo?.message}
          />
        )}
      />
        <Controller
        control={control}
        name="contact.landLineNo"
        // rules={{
        //     required:"Phone No. Required",
        // }}
        render={({ field }) => (
          <Controls.Input
            id="landLineNo"
            label="Land Line No"
            variant="outlined"
            placeholder="Enter Your  Land Line No"
            fullWidth
            type="number"
            margin="normal"
            {...field}
            // error={Boolean(errors.phone)}
            // helperText={errors.pnone?.message}
          />
        )}
      />
        <Controller
        control={control}
        name="contact.email"
        rules={{
          required: "Email  is Required",
        }}
        render={({ field }) => (
          <Controls.Input
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            fullWidth
            type="email"
            margin="normal"
            {...field}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="contact.permanentAddress"
        rules={{
          required: "Permanent Address is Required!",
        }}
        render={({ field }) => (
          <Controls.Input
            id="permanentAddress"
            label="Enter Your local  Address"
            variant="outlined"
            placeholder="Enter Your Permanent  Address"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.permanentAddress)}
            helperText={errors.permanentAddress?.message}
          />
        )}
      />
        <Controller
        control={control}
        name="contact.localAddress"
        rules={{
          required: "Local Address is Required!",
        }}
        render={({ field }) => (
          <Controls.Input
            id="localAddress"
            label="Enter Local Address"
            variant="outlined"
            placeholder="Enter Your Local  Address "
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.localAddress)}
            helperText={errors.localAddress?.message}
          />
        )}
      />
    </>

    )
}

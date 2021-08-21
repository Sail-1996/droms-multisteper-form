import React, { useState, useEffect } from "react";
import Form from "./Form";
import { deleteUser, getUsers } from "../api";

import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
  Button,
  TableHead,
  Table,
  IconButton,
} from "@material-ui/core";
import { Search, Add, DeleteOutline,Visibility } from "@material-ui/icons";

import { Link } from "react-router-dom";
import Controls from "./Controls/control";

import PopUp from "./Controls/PopUp";
import Notificatin from "./Controls/Notificatin";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  serchInput: {
    width: "75%",
  },
  newButton: {
    position: "absolute",
    right: "5px",
  },

  tabButton: {
    position: "absolute",
    right: "150px",
  },
}));

export default function Employees() {
  const classes = useStyles();

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const [openPopup, setOpenPopup] = useState(false);

  //   const addOrEdit = (employee, resetForm) => {
  //     resetForm();
  //     setRecordForEdit(null);
  //     setOpenPopup(false);

  //     setNotify({
  //       isOpen: true,
  //       message: "Submitted Successfully",
  //       type: "success",
  //     });
  //   };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response);
    setUsers(response.data.reverse());
  };

  const deleteUserData = async (_id) => {
    await deleteUser(_id);
    getAllUsers();

    setNotify({
      isOpen: true,
      message: "Deleted Successfully",
      type: "error",
    });
  };

  return (
    <div>
      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.Input
            label="Search Employees"
            className={classes.serchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            // onChange={handleSearch}
          />
          <Controls.Button
            text="Add New"
            variant="outlined"
            className={classes.newButton}
            startIcon={<Add />}
            onClick={() => {
              setOpenPopup(true);
            }}
          />
        </Toolbar>
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.thead}>
              <TableCell>Employee ID</TableCell>
              <TableCell>Full Name</TableCell>

              <TableCell>Date of Birth</TableCell>
              <TableCell>email</TableCell>
              <TableCell>ID Proof</TableCell>
              <TableCell>Contact</TableCell>

              <TableCell>Education</TableCell>
              <TableCell>Experience</TableCell>
              <TableCell>Reference</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow className={classes.row}>
                <TableCell>{user.employeeID}</TableCell>
                <TableCell>{`${user.firstName} ${user.middleName} ${user.lastName} `}</TableCell>

                <TableCell>{user.dateOfBirth}</TableCell>
                <TableCell>{user.maritalStatus}</TableCell>
                <TableCell>{user.idProof}</TableCell>
                <TableCell><IconButton onClick={()=>alert("this is cntact view")}><Visibility color="primary"/></IconButton></TableCell>

                
                <TableCell><IconButton onClick={()=>alert("this is education view")}><Visibility color="primary"/></IconButton></TableCell>
                <TableCell><IconButton onClick={()=>alert("this is experience view")}><Visibility color="primary"/></IconButton></TableCell>
                <TableCell><IconButton onClick={()=>alert("this is Reference view")}><Visibility color="primary"/></IconButton></TableCell>
                <TableCell>
                  <Button
                    style={{ marginBottom: "10px" }}
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={`/edit/${user._id}`}
                  >
                    Update
                  </Button>
                  <Button
                    style={{ marginBottom: "10px" }}
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteUserData(user._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <PopUp
        title="Employee Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <Form />
      </PopUp>

      <Notificatin notify={notify} setNotify={setNotify} />
    </div>
  );
}

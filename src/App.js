import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PeopleOutlineTwoTone } from "@material-ui/icons";
import PageHeader from "./components/PageHeader";
import EditUser from "./components/UpdateUser"

import Table from "./components/Table";
import CardReferenceView from "./components/ViewGroup/CardReferenceView"

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <PageHeader
        title="New Employee"
        subtitle="Form design with validation"
        icon={<PeopleOutlineTwoTone fontSize="large" />}
      />
      <Switch>
        <Route exact path="/" component={Table} />
        <Route exact path='/edit/:_id' component={EditUser}/>
      </Switch>
  {/* <CardReferenceView/> */}
    </BrowserRouter>
  );
}

export default App;

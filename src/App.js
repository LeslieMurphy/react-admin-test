import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser  } from 'react-admin';

import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/Group';

import TimerIcon from '@material-ui/icons/Timer';

// import { Dashboard } from './dashboard';
import DashboardTest from './DashboardTest';


// const dataProvider = jsonServerProvider('http://localhost:8000');
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

// list={ClockList}  edit={EditGuesser}

const App = () => <Admin 
        title="TEST Dashboard CSV Upload"
        dashboard={DashboardTest}
        dataProvider={dataProvider}
        > 
    <Resource name="users" list={ListGuesser} icon={TimerIcon} />
</Admin>;

export default App;

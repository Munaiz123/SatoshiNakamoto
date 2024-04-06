import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const headerClassName = 'super-app-theme--header'

const columns = [
  { headerClassName, field: 'id', headerName: 'ID', width: 70,  },
  { headerClassName, field: 'firstName', headerName: 'First name', width: 130 },
  { headerClassName, field: 'lastName', headerName: 'Last name', width: 130 },
  {
    headerClassName, field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 100,
    color:'black'
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


export default function CollectionTable() {
  return (
    <div style={{ height: '%100', width: '100%'}}>
            <DataGrid rows={rows} columns={columns} sx={{bgcolor:'black', color:'white'}} />
    </div>
  );
}

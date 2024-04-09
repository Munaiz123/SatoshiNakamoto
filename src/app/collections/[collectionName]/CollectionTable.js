import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import {headerClassName,convertTimestamp} from '../../../untils/utils'




const columns = [
  { headerClassName, field: 'image_url', headerName: '', width: 120, renderCell:(params)=> <Avatar src={params.value} />},
  // { headerClassName, field: 'image_url', headerName: 'Token Preview', width: 125, renderCell:(params)=> <Avatar src="https://ord-mirror.magiceden.dev/content/136529d283fcaf1f5fae231bc0182ea2ee88ac4d8106295226a1544727e49f75i0" />},
  { headerClassName, field: 'inscription_number', headerName: 'Inscription Id', width: 150},
  { headerClassName, field: 'token_name', headerName: 'Token Name', width: 175 },
  { headerClassName, field: 'btc_price', headerName: 'Listing Price (btc)', width: 150 },
  { headerClassName, field: 'satoshi_price', headerName: 'Satoshi Price', width: 150 },
  { headerClassName, field: 'collection_name', headerName: 'Collection Name', width: 175},
  { headerClassName, field: 'timestamp', headerName: 'Time Stamp', width: 175, valueGetter:(value) => convertTimestamp(value)}
];


export default function CollectionTable({rows}) {
  return (
    <div style={{ height: '%100', width: '100%'}}>
            <DataGrid rows={rows} columns={columns} sx={{bgcolor:'black', color:'white'}} />
    </div>
  );
}

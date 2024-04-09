import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import {convertTimestamp} from '../../../untils/utils'
export default function MediaCard({row}) {
  return (

    <Card>
      <CardMedia sx={{ height: 140 }} image={row.image_url} />
      <CardContent>
        <Typography gutterBottom variant="h5"> {row.token_name} </Typography>
        <Typography variant="body2" color="text.secondary"> {`${row.btc_price} BTC`} </Typography>
        <Typography variant="body2" color="text.secondary"> {`Inscription#: ${row.inscription_number}`}</Typography>
        <Typography variant="body2" color="text.secondary"> {convertTimestamp(row.timestamp)}</Typography>
      </CardContent>
    </Card>
  );
}
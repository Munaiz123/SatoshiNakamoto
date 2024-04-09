import * as React from 'react';

import Grid from '@mui/material/Grid';
import MediaCard from './MediaCard';

export default function CollectionGrid({rows}) {
    return (
    
      <div style={{ height: '%100', width: '100%'}}>
        <Grid container spacing={3}>
            {rows.map( row =>{
                 
                 return (<Grid item xs={3}>
                 < MediaCard row={row} />
                </Grid>)
            })}
        </Grid>
      </div>
    );
  }
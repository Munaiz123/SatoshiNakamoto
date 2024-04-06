'use client'
import styles from "../../page.module.css";
import Grid from '@mui/material/Grid';
import React, { useEffect, useState} from 'react'

export default function CollectionPage({params}) {
    const [header, setHeader] = useState('')

    useEffect(() => {
        setHeader(params.collectionName === 'omb' ? "Ordinal Maxi Biz (OMB)" : "Quantum Cats")
    })


  return (
    <div className={styles.main}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
                <h2 className={styles.title}>{header}</h2>
            </Grid>
          </Grid>
    </div>
  );
}

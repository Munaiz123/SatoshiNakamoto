"use client"
import React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const navItems = [
  {page:"Munaiz Ahmed", route:'/'},
  {page:"Ordinal Maxi Biz", route:'/collections/omb'},
  {page:"Quantum Cats", route:'/collections/quantum_cats'},
  // {page:"Pizza Ninjas", route:'/collections/pizza-ninjas'},
  // {page:"Tiny Vikings", route:'/collections/tiny_vikings'},
  {page:"Ordinal Geese", route:'/collections/ordinal_geese'},
]

export default function NavBar() {


  return (
      <AppBar sx={{bgcolor: 'inherit'}} position="fixed">
        <Toolbar >
            {navItems.map((item,i) =>(
            <Button key={i} color="inherit" sx={{fontFamily:'monospace', letterSpacing: '.1rem'}}>
                <Link href={item.route}>{item.page}</Link>
            </Button>
            ))}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1}}></Typography>
            
        </Toolbar>
      </AppBar>
  );
}

import React from 'react'
import { Stack } from '@mui/material'
import {Link} from 'react-router-dom'
import {logo} from '../utils/constants'
import SearchBar from './SearchBar'
const Navbar = () => (

    <Stack  direction="row" p={2} sx={{position:'sticky', background:'#000', top:0, justifyContent:'space-between' }}  spacing={2}>
    <Link to='/' style={{display:'flex', alignItems:'center'}}>
<img src={logo} alt='logo' height={45}/>
    </Link>
    <SearchBar/>
  </Stack>
    
      
  
)

export default Navbar

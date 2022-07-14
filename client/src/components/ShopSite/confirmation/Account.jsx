import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button'
import { useHistory } from 'react-router-dom';
import DateRangeIcon from '@mui/icons-material/DateRange';

export default function Account() {
  let history=useHistory()
  let Connect=()=>{
    
  }
  return (
    <React.Fragment>
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <Typography variant="h6" gutterBottom>
        Nouveau Client
      </Typography>  
      <Button variant="contained" onClick={()=>history.push('/Login')}>Connexion</Button>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nom"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Prénom"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="Email"
            name="Email"
            label="Email"
            fullWidth
            autoComplete="shipping Email"
            variant="standard"
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Password"
            name="Password"
            label="mot de passe"
            type="password"
            fullWidth
            autoComplete="shipping mot de passe"
            variant="standard"
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Password"
            name="Password"
            type="password"
            label="Confirmez votre mot de passe"
            fullWidth
            autoComplete="shipping mot de passe"
            variant="standard"
          />
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}
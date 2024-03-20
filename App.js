import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';


function BasicCard(){
  return (
    <Card sx={{ minWidth: 100 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          gfgfhgfh
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}


export default function App() {
  return (
    <View style={styles.container}>
      <Box 
        component="section" 
        height={1280}
        width={720}
      >
      <Grid container spacing={2}>
        <Grid xs={3}>
          <BasicCard/>
        </Grid>
        <Grid xs={3}>
          <BasicCard/>
        </Grid>
        <Grid xs={3}>
          <BasicCard/>
        </Grid>
        <Grid xs={3}>
          <BasicCard/>
        </Grid>
        <Grid xs={3}>
          <BasicCard/>
        </Grid>
        <Grid xs={3}>
          <BasicCard/>
        </Grid>
        <Grid xs={3}>
          <BasicCard/>
        </Grid>
        <Grid xs={3}>
          <BasicCard/>
        </Grid>
      </Grid>
      </Box>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

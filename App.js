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
import Avatar from '@mui/material/Avatar';
import { deepOrange, yellow } from '@mui/material/colors';


function BasicCard(){
  return (
    <Card sx={{ minWidth: 100, minHeight: 120}}>
      <CardContent style={{paddingBottom: 5, paddingRight: 5, backgroundColor: yellow[100]}}>
          <Text style={{fontSize: 64}}>B</Text>
          <View>
            <Avatar style={{alignSelf: 'flex-end'}} sx={{ bgcolor: yellow[50], color: 'black' }}>+1</Avatar>
          </View>
      </CardContent>
    </Card>
  )
}
const PointCard = ({ value }) => {
  return (
    <Card sx={{ minWidth: 100, minHeight: 60}} >
      <CardContent style={{paddingBottom: 5, paddingRight: 5, backgroundColor: yellow[200]}}>
          <Text style={{fontSize: 64}}>{value}</Text>
      </CardContent>
    </Card>
  )
}


export default function App() {
  return (
    <View style={styles.container}>
      <Box 
      maxWidth={500} // Set a maximum width of 500px
      maxHeight={800}
      >
      <Grid container spacing={2}>
        <Grid xs={3}>
          <PointCard value={2} />
        </Grid>
        <Grid xs={3}>
         <PointCard value={3} />
        </Grid>
        <Grid xs={3}>
          <PointCard value={4} />
        </Grid>
        <Grid xs={3}>
          <PointCard value={5} />
        </Grid>
      </Grid>

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

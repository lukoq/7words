import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import Avatar from '@mui/material/Avatar';
import { yellow } from '@mui/material/colors';
import { Box, TextField, Button, List, ListItem, ListItemText, Typography, Divider } from '@mui/material';

const ariaLabel = { 'aria-label': 'description' };


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

  const [inputText, setInputText] = React.useState('');
  const [items, setItems] = React.useState([]);

  const handleChange = (event) => {
    setInputText(event.target.value.toUpperCase());
  };

  const handleAddItem = () => {
    if (inputText.trim()) { // Check if input is not empty
      setItems([...items, inputText]);
      setInputText(''); 
    }
  };





  return (
    <View style={styles.container}>
      <View style={styles.left}></View>
      <View style={styles.center}>
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

          <View style={{paddingTop: 32, flexDirection: 'row', gap: 32}}> 
            <TextField
              label="Enter Item"
              variant="standard"
              value={inputText}
              onChange={handleChange}
              sx={{ width: '80%'}}
            />
            <Button
             variant="contained"
             sx={{ width: '20%',  borderRadius: 8}}
             onClick={handleAddItem} 
             disabled={!inputText.trim()}>
              Enter
            </Button>
          </View>
        </Box>
      </View>
      <View style={styles.right}>
        
      <Card 
        variant="outlined"
        sx={{bgcolor: yellow[50], width: '60%', minHeight: 420}}
        >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            You have found {items.length} words
          </Typography>
          <List sx={{ width: '100%'}}>
            {items.map((item) => (
              <React.Fragment key={item}>
                <ListItem 
                  key={item}
                  secondaryAction={
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        42
                    </Typography>
                  }
                >
                    <ListItemText primary={item} />
                </ListItem>
                {<Divider />}
              </React.Fragment>
            ))}
          </List>
        </CardContent>
        </Card>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  left: {
    flex: 1, // Takes 1/3 of the screen
    margin: 32,
  },
  center: {
    paddingTop: 64,
  },
  right: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 64,
    alignItems: 'center'
  },
});

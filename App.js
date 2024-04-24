import React,  { useRef, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import Avatar from '@mui/material/Avatar';
import { yellow, blue } from '@mui/material/colors';
import { Box, TextField, Button, List, ListItem, ListItemText, Typography, Divider, IconButton , DeleteIcon  } from '@mui/material';
import config from "./config";

const ariaLabel = { 'aria-label': 'description' };


const BasicCard = ({ value }) => {
  return (
    <Card sx={{ minWidth: 100, minHeight: 120}}>
      <CardContent style={{paddingBottom: 5, paddingRight: 5, backgroundColor: yellow[100]}}>
          <Text style={{fontSize: 64}}>{value}</Text>
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

  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);
  const [letters, setLetters] = useState(['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'])

  useEffect(() => {
    // This code runs when the component mounts
    getLetters();
  }, []); // empty dependency array means it only runs once


  const handleChange = (event) => {
    setInputText(event.target.value.toUpperCase());
  };

  const handleAddItem = () => {
    getLetters();
    if (inputText.trim()) { // Check if input is not empty
      setItems([...items, inputText]);
      setInputText(''); 
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddItem();
    }
  };

  const getLetters = async () => {
    try {
      const response = await fetch(`${config.apiURL}/pick_letters`, {
        method: 'GET',
      });
      const data = await response.json();
      setLetters(data.letters)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      
        <View style={{alignSelf: 'center', marginBottom: 8}}>
          <Typography sx={{ fontSize: 32, fontWeight: 'bold' }}>
                7WORDS
          </Typography>
        </View>
        {<Divider />}
      </View>
      <View style={styles.content}>
        <View style={styles.left}>
        <Card 
          variant="outlined"
          sx={{bgcolor: yellow[50], width: '60%', minHeight: 420}}
          >
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                How to play?
              </Typography>
            </CardContent>
          </Card>
        </View>
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
               <BasicCard value={letters[0]} />
              </Grid>
              <Grid xs={3}>
                <BasicCard value={letters[1]} />
              </Grid>
              <Grid xs={3}>
                <BasicCard value={letters[2]} />
              </Grid>
              <Grid xs={3}>
                <BasicCard value={letters[3]} />
              </Grid>
              <Grid xs={3}>
                <BasicCard value={letters[4]} />
              </Grid>
              <Grid xs={3}>
                <BasicCard value={letters[5]} />
              </Grid>
              <Grid xs={3}>
                <BasicCard value={letters[6]} />
              </Grid>
              <Grid xs={3}>
                <BasicCard value={letters[7]} />
              </Grid>
            </Grid>

            <View style={{paddingTop: 32, flexDirection: 'row', gap: 32}}> 
              <TextField 
                variant="standard"
                value={inputText}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                sx={{
                  width: '80%', 
                  '& .MuiInputBase-input': { fontWeight: 'bold', fontSize: '32px' }
                  }}
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  content: {
    flex: 1,
    flexDirection: 'row'
  },
  header: {
    height: '10%',
    justifyContent: 'flex-end'
  },
  left: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 32,
    alignItems: 'center'
  },
  center: {
    paddingTop: 32,
  },
  right: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 32,
    alignItems: 'center'
  },
});

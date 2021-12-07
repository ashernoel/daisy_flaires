import React from 'react';
import im1 from './im1.jpeg';
import im2 from './im2.jpeg';
import im3 from './im3.jpeg';

import share from './icons8-people-96.png';
import retry from './icons8-synchronize-96.png';

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import Link from "@material-ui/core/Link";

//import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ReplayIcon from '@mui/icons-material/Replay';
import PeopleIcon from '@mui/icons-material/People';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendIcon from '@mui/icons-material/Send';
import TwitterIcon from '@mui/icons-material/Twitter';
import CameraIcon from '@mui/icons-material/Camera';
import BrushIcon from '@mui/icons-material/Brush';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';


// import * as firebase from "firebase";
// import 'firebase/analytics';

// firebase.initializeApp(firebaseConfig);

// var db = firebase.firestore();
// firebase.analytics();




class Test extends React.Component {
    
  state = {
    score: 0,
    start: true,
    end: false,
  }

  

  handleEnd = () => {
    this.setState({
        start: false,
        end: true
    })
    // Add a new document in collection "scores"
    
    //var newScoreRef = db.collection("scores").doc();
    // newScoreRef.set({
    //     "score": this.state.score,
    // })
    // .then(function() {
    //     console.log("Document successfully written!");
    // })
    // .catch(function(error) {
    //     console.error("Error writing document: ", error);
    // });

  };

  handleStart = () => {
    this.setState({
        start: true,
        end: false,
        score: 0
    })
  };



  adjustScore = event => {
      const { score } = this.state

      if (event.target.checked) {
          this.setState({
              score: score + 2
          })
      } else {
        this.setState({
            score: score + 1 
        })
      }

      console.log('I was triggered during render')      
  }

  render() {
    const {start, end} = this.state;

    if (start) {
      return (

        <div className='intro'>
        <Container>
          <Box m={1}>
            
            <Paper style={{ padding: 14, width: "100%", maxWidth: 600, margin: "12px auto" }}>
            
            <br>
            </br>

            <table width="100%" border="0">
                <tr>    
                <td><img src={im1} alt="" className="title-img" align="right"/> </td>
                <td><img src={im2} alt="" className="title-img" align="center"/></td>
                <td><img src={im3} alt="" className="title-img" align="left"/></td>
                </tr>
            </table>
    
            <br></br>

            <Typography variant="h5" align="center">
              <div class="htext">
                Welcome to the life of Daisy Flaires! 
              </div>
            </Typography>

            <Typography variant="body1" gutterBottom>
                <div class="btext">
                <br></br>
                  The more attention you give her, the more you'll get wire transfered! <br></br>

        
                  Enjoy! 
                  <br></br>
                </div>
              </Typography>
            
            <Typography variant="body1" gutterBottom>
              <div class="btext">
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="1. Upload interactions through the form linked below"
                labelPlacement="end"/></ListItem>

            


                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="2. Chat with Daisy and upload a screenshot to the form"

                labelPlacement="end"/></ListItem>

                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="3. Write a reply to one of Daisy's tweets linked below"
                labelPlacement="end"/></ListItem>
                
                <ListItem dense button><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="4. Find Daisy's friend Mark using the Lens below"
                labelPlacement="end"/></ListItem>
                <ListItem dense button component={Link} href="www.google.com"><FormControlLabel value="end" control={<Checkbox onChange={this.adjustScore} color="primary"/>}
                    label="5. Create art on app.wombo.art and upload a screenshot to the form"
        
                labelPlacement="end"/></ListItem>
    
                
              </div>

            </Typography>

            <Button variant="text" color="primary" component={Link} href="https://docs.google.com/spreadsheets/d/1dDcZNvQD8stEwp7ZTm1ddn7092Z9A-gEAoPoYx97NTw/edit?usp=sharing" 
             endIcon={<SaveAltIcon />}>
                Upload
            </Button>

            <Button variant="text" color="primary" component={Link} href="https://docs.google.com/spreadsheets/d/1dDcZNvQD8stEwp7ZTm1ddn7092Z9A-gEAoPoYx97NTw/edit?usp=sharing" 
             endIcon={<SendIcon />}>
                Chat
            </Button>

            <Button variant="text" color="primary" component={Link} href="hhttps://twitter.com/eclepai" 
             endIcon={<TwitterIcon />}>
                Twitter
            </Button>

            <Button variant="text" color="primary" component={Link} href="https://tinyurl.com/daisylens" 
             endIcon={<CameraIcon />}>
                Lens
            </Button>

            <Button variant="text" color="primary" component={Link} href="app.wombo.art" 
             endIcon={<BrushIcon/>}>
                AI Art
            </Button>

            <br>
            </br>

            <Button variant="contained" color="primary" onClick={this.handleEnd}>
               Submit
            </Button>

            </Paper>
          </Box>
        </Container>
        </div>
     
     )

        
    }

    if (end) {
      return (
        <div className='intro'>
        <Container>
          <Box m={1}>
            
            <Paper style={{ padding: 14, width: "100%", maxWidth: 600, margin: "12px auto" }}>

            <br>
            </br>
            <table width="100%" border="0">
                <tr>    
                <td><img src={im1} alt="" className="title-img" align="right"/> </td>
                <td><img src={im2} alt="" className="title-img" align="center"/></td>
                <td><img src={im3} alt="" className="title-img" align="left"/></td>
                </tr>
            </table>
            <br>
            </br>
            <Typography variant="h4" align="center">
              <div class="htext">
                Daisy Flaires
              </div>
            </Typography>
        
            <Typography variant="h6" align="center">
              <div class="htext">
                  <br></br>
              In exchange for any sense of wonder and excitement, <br></br> for every completed item, you have: <br></br><br></br>
                - Lost 10 units of life force, energy, and time  <br></br>
                - Helped DaisyFlaires.com get paid $4 by advertisers <br></br>
                - Gotten paid $2 of the $4 <br></br>
                  </div>
                  </Typography>

            <Typography variant="h5" align="center">
              <div class="htext">
                  <br></br>
                Your bank account:
              </div>
            </Typography>
            <br></br>
            <Typography variant="h3" align="center">
              <div class="htext" class="finalscore">
                +${this.state.score}
                <br></br>
              </div>
            </Typography>
            <br></br>

            <br></br>
            <Typography variant="h6" align="center">
              <div class="htext">
                
                Come again soon! 
                <br></br>
                
              </div>
            </Typography>
            <br></br>


        

            <Button variant="contained" color="primary" onClick={this.handleStart}
            endIcon={<ReplayIcon />}>
               Play Again 
            </Button>

            <br></br>
            <br></br>
            <Button variant="contained" color="primary" component={Link} href="https://docs.google.com/spreadsheets/d/1dDcZNvQD8stEwp7ZTm1ddn7092Z9A-gEAoPoYx97NTw/edit?usp=sharing" 
            endIcon={<PeopleIcon />}>
               Other Entries 
            </Button>

            <br></br>
            <br></br>
            
    

            <Button variant="contained" color="primary" onClick={this.handleStart}
            endIcon={<FavoriteIcon />}>
               Share with friends! 
            </Button>

           
            </Paper>

            <Typography variant="body1" gutterBottom>
                <div class="btext">
        
                By Asher Noel for AFVS 161L, Fall 2021
       
                </div>
              </Typography>

            
            
          </Box>
        </Container>
        </div>
      )
    }

  }
}

export default Test;
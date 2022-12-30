import logo from './logo.svg';
import './App.css';
import TextField, { textFieldClasses } from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InfoIcon from '@mui/icons-material/Info';
import { Visibility } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';


function App() {
  // const [flashing, setFlashing] = useState(false);
  var i = 0;



  window.onscroll = function () {
    scrollDrop();
  };

  function scrollDrop() {
      let image = document.getElementById("marspic");
      // image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
      image.style.transform = "translateY(-" + window.pageYOffset/3.5 + "px)";
  }

  

  function convertToMorse(message) {
      // Create a dictionary of Morse code characters
      const morseCodes = {
        'A': '.-',
        'B': '-...',
        'C': '-.-.',
        'D': '-..',
        'E': '.',
        'F': '..-.',
        'G': '--.',
        'H': '....',
        'I': '..',
        'J': '.---',
        'K': '-.-',
        'L': '.-..',
        'M': '--',
        'N': '-.',
        'O': '---',
        'P': '.--.',
        'Q': '--.-',
        'R': '.-.',
        'S': '...',
        'T': '-',
        'U': '..-',
        'V': '...-',
        'W': '.--',
        'X': '-..-',
        'Y': '-.--',
        'Z': '--..',
        '1': '.----',
        '2': '..---',
        '3': '...--',
        '4': '....-',
        '5': '.....',
        '6': '-....',
        '7': '--...',
        '8': '---..',
        '9': '----.',
        '0': '-----',
        ' ': '/'
      };
    
      // Initialize an empty result string
      let result = '';
    
      // Loop through each character in the input string
      for (const char of message) {
        // Convert the character to uppercase
        const upperChar = char.toUpperCase();
    
        // If the character is not a letter or number, ignore it
        if (!morseCodes[upperChar]) {
          continue;
        }
    
        // Append the Morse code representation of the character to the result string, followed by a space
        result += `${morseCodes[upperChar]} `;
      }
    
      // Return the result string, with the final space removed
      return result.trim();
    }

    function decodeMessage(message) {
      // Create a dictionary of Morse code characters
      const morse_code = {
        '.-': 'A',
        '-...': 'B',
        '-.-.': 'C',
        '-..': 'D',
        '.': 'E',
        '..-.': 'F',
        '--.': 'G',
        '....': 'H',
        '..': 'I',
        '.---': 'J',
        '-.-': 'K',
        '.-..': 'L',
        '--': 'M',
        '-.': 'N',
        '---': 'O',
        '.--.': 'P',
        '--.-': 'Q',
        '.-.': 'R',
        '...': 'S',
        '-': 'T',
        '..-': 'U',
        '...-': 'V',
        '.--': 'W',
        '-..-': 'X',
        '-.--': 'Y',
        '--..': 'Z',
        '-----': '0',
        '.----': '1',
        '..---': '2',
        '...--': '3',
        '....-': '4',
        '.....': '5',
        '-....': '6',
        '--...': '7',
        '---..': '8',
        '----.': '9',
        '/': ''
      };
    

        
      const words = message.split('/');
      console.log('words', words)
      const decodedWords = words.map((word) => {
        
        const letters = word.split(' ');
        console.log('letters', letters)
        
        const decodedLetters = letters.map((letter) => morse_code[letter]).join('')
        console.log('decodedletters', decodedLetters)
        console.log('morsecode[...]', decodedLetters)
        return decodedLetters;
      });
      return decodedWords.join(' ');

    }
    
  function sendDot() {
    document.getElementById("title").animate(flashBlackCol, timingFast);
    document.getElementById("sendbutton").animate(flashWhiteCol, timingFast);
    document.getElementById("sendbutton").animate(flashBlackBack, timingFast);
    console.log('alignment', alignment)
   
    if (alignment =="receive"){
      document.getElementById("sendtime").animate(flashWhiteBack,  timingFast);
      document.getElementById("sendtime").animate(flashBlackCol,   timingFast);
      document.getElementById("sendtime").animate(flashBlackBorder,   timingFast);
      document.getElementById("receivetime").animate(flashWhiteCol,   timingFast);
      document.getElementById("receivetime").animate(flashBlackBack,  timingFast);
      // document.getElementById("receivetime").animate(flashWhiteBorder,  timingFast);


    }
   else{
    document.getElementById("sendtime").animate(flashBlackBack, timingFast);
    document.getElementById("sendtime").animate(flashWhiteCol, timingFast);
    document.getElementById("receivetime").animate(flashBlackCol, timingFast);
    document.getElementById("receivetime").animate(flashWhiteBack, timingFast);
    document.getElementById("receivetime").animate(flashBlackBorder, timingFast);
     
    }
     
    document.getElementById("decodebutton").animate(flashWhiteCol, timingFast);
    document.getElementById("decodebutton").animate(flashBlackBack, timingFast);
    document.getElementById("outlined-multiline-flexible").animate(flashBlackBack, timingFast);
    document.getElementById("outlined-multiline-flexible").animate(flashWhiteCol, timingFast);
    document.getElementById("receive box").animate(flashBlackBack, timingFast);
    document.getElementById("receive box").animate(flashWhiteCol, timingFast);
    for (let i =0; i < document.querySelectorAll('p').length; i++){
      document.querySelectorAll('p')[i].animate(flashBlackCol, timingFast);
    }
  

    document.getElementById("app-background").animate(flashWhiteBack, timingFast);
    document.getElementById("marspic").animate([{filter:' invert(1)'},{filter: 'invert(0)'}], timingFast);
    
   
  }
  function sendDash() {
    document.getElementById("title").animate(flashBlackCol, timingSlow);
    document.getElementById("sendbutton").animate(flashBlackBack, timingSlow);
    document.getElementById("sendbutton").animate(flashWhiteCol, timingSlow);
    console.log('alignment', alignment)
    if (alignment =="receive"){
      document.getElementById("sendtime").animate(flashWhiteBack, timingSlow);
      document.getElementById("sendtime").animate(flashBlackCol,  timingSlow);
      document.getElementById("sendtime").animate(flashBlackBorder,  timingSlow);
      document.getElementById("receivetime").animate(flashWhiteCol,  timingSlow);
      document.getElementById("receivetime").animate(flashBlackBack,  timingSlow);
      
    }
    else{
      document.getElementById("sendtime").animate(flashBlackBack,  timingSlow);
      document.getElementById("sendtime").animate(flashWhiteCol,  timingSlow);
      document.getElementById("receivetime").animate(flashBlackCol,  timingSlow);
      document.getElementById("receivetime").animate(flashWhiteBack,  timingSlow);
      document.getElementById("receivetime").animate(flashBlackBorder,  timingSlow);
    }

    document.getElementById("decodebutton").animate(flashBlackBack, timingSlow);
    document.getElementById("decodebutton").animate(flashWhiteCol, timingSlow);
    document.getElementById("outlined-multiline-flexible").animate(flashBlackBack, timingSlow);
    document.getElementById("outlined-multiline-flexible").animate(flashWhiteCol, timingSlow);
    document.getElementById("receive box").animate(flashBlackBack, timingSlow);
    document.getElementById("receive box").animate(flashWhiteCol, timingSlow);
    for (let i =0; i < document.querySelectorAll('p').length; i++){
      document.querySelectorAll('p')[i].animate(flashBlackCol, timingSlow);
    }

    document.getElementById("app-background").animate(flashWhiteBack, timingSlow);
    document.getElementById("marspic").animate([{filter: 'invert(1)'},{filter: 'invert(0)'}], timingSlow);

  }

  function pause(){
    document.getElementById("app-background").animate([{ backgroundColor: 'black' }], timingSlow);
  }

  const flashWhiteBorder = [
    { borderColor: '#141417', },
    { borderColor: 'white' },
    { borderColor: '#141417' }
  ]
  const flashBlackBorder = [

    { borderColor: 'white' },
    { borderColor: '#141417' },
    { borderColor: 'white' },
  ]
    

  const flashWhiteBack= [
    { backgroundColor: '#141417', },
    { backgroundColor: 'white' },
    { backgroundColor: '#141417' }
  ];

  const flashWhiteCol = [
    { color: '#141417' },
    { color: 'white' },
    { color: '#141417' }
  ];


  const flashBlackBack= [
    
    { backgroundColor: 'white' , borderRadius:'4px'  },
    { backgroundColor: '#141417', borderRadius:'4px'  },
    { backgroundColor: 'white' , borderRadius:'4px' }
    
  ];

  const flashBlackCol = [
    { color: 'white' },
    { color: '#282c34' },
    { color: 'white' }
    
  ];
  
  const timingSlow = {
    duration: 2500,
    iterations: 1,
    // easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
    easing: 'cubic-bezier(.06,.89,.42,.99)'
  }
  const timingFast = {
    duration: 500,
    iterations: 1,
    // easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
    easing: 'cubic-bezier(.06,.89,.42,.99)'

  }

  if( document.getElementById("outlined-multiline-flexible")){
    document.getElementById("outlined-multiline-flexible").onkeydown = function(e){
      if(e.keyCode == 13){
        sendMessage(convertToMorse(document.getElementById("outlined-multiline-flexible").value))
      }
    }
  }

  const wait = (ms) => new Promise(res => setTimeout(res, ms));

  const sendMessage = async message =>  {

    console.log('sending message', message)
    for (let i = 0; i < message.length; i++){
      // console.log('letter', message[i])
      
      if (message[i] == "-") {
        sendDash()
        await wait(2500);
      }
      if (message[i] == ".") {
        sendDot()
        await wait(500);
      }
      if(message[i] == ' '){
        await wait(2500);
      }
      if(message[i] == '/'){
        await wait(4000);
      }
      
    }
  }
  const [myInterface, setMyInterface] = useState(() => 'send');

  function updateInterface (
  
    // event, newInterface
  ) {
    console.log(myInterface)
    // setMyInterface(newInterface);

    if(myInterface == 'send') {
      if (document.getElementById('sendinterface')){
        document.getElementById('sendinterface').scrollIntoView();
      }
  
    }
    else if(myInterface == 'receive') {
      if (document.getElementById('receiveinterface')){
        document.getElementById('receiveinterface').scrollIntoView();
      }
    }


  };


    

  // function ScrollRight() {
  //   console.log('1', document.getElementById('receiveinterface'))
  //   // document.getElementById('maincontentscrollwrap').focus();
  //   if (document.getElementById('receiveinterface')){
  //     document.getElementById('receiveinterface').scrollIntoView();
  //   }

  //   console.log('2', document.getElementById('receiveinterface'))
    
  // }

  // function ScrollLeft() {
  //   console.log('1', document.getElementById('receiveinterface'))
  //   // document.getElementById('maincontentscrollwrap').focus();
  //   if (document.getElementById('sendinterface')){
  //     document.getElementById('sendinterface').scrollIntoView();
  //   }

  //   console.log('2', document.getElementById('receiveinterface'))
   
  // }

  function showCodePopup() {
    console.log(document.getElementById('codepopup'))
    if ( document.getElementById('codepopup')){
      // document.getElementById('codepopup').toggleAttribute('visibility')
      if(document.getElementById('codepopup').style.visibility == "visible"){
        document.getElementById('codepopup').style.setProperty('visibility', 'hidden')
      }
      else{
        document.getElementById('codepopup').style.setProperty('visibility', 'visible')
      }
      
    }
    
  }


  function scrollDown() {
    window.focus();

    if (document.getElementById('sendinterface')){
      setAlignment('send')
      document.getElementById('sendinterface').scrollIntoView({behavior: "smooth"});
    }
  }

  const [alignment, setAlignment] = useState('send');

  const handleAlignment = (event, newAlignment) => {
    console.log(newAlignment)
    if (newAlignment !== null) {
      console.log('notnull' , newAlignment)
      setAlignment(newAlignment)
        if (newAlignment == "receive"){
          
          if (document.getElementById('receiveinterface')){
            document.getElementById('receiveinterface').scrollIntoView()
           
          }
          console.log('rt', document.getElementById('receivetime'))
          document.getElementById('receivetime').style.setProperty('border', "0px solid white")
          document.getElementById('receivetime').style.setProperty('background-color', "white")
          document.getElementById('receivetime').style.setProperty('color', "#15141f")
          document.getElementById('sendtime').style.setProperty('border', "1px solid white")
          document.getElementById('sendtime').style.setProperty('background-color', "#15141f")
          document.getElementById('sendtime').style.setProperty('color', "white")
        }
        else if(newAlignment == "send"){
          console.log('saysreceive' , newAlignment)
          console.log(alignment)
          if (document.getElementById('sendinterface')){
            document.getElementById('sendinterface').scrollIntoView()
          }
          document.getElementById('sendtime').style.setProperty('border', "0px solid white")
          document.getElementById('sendtime').style.setProperty('background-color', "white")
          document.getElementById('sendtime').style.setProperty('color', "#15141f")
          document.getElementById('receivetime').style.setProperty('border', "1px solid white")
          document.getElementById('receivetime').style.setProperty('background-color', "#15141f")
          document.getElementById('receivetime').style.setProperty('color', "white")
          
      }
    }
   
  };
  
  return (
    <div className="App">
 
      <div id="app-background" className ="App-middle">
        <div id="title"  style={{width: "70%", textAlign: "left", fontWeight: '650', margin: '12vmax'}}>
        <img id="marspic" style={{position: 'fixed', zIndex: '2', width: '15vmax', top: '-25vmax', right:'15%'}} src="marsonstring.png"></img>
          <div style={{fontSize: '7vmax', zIndex: '3', width: '70%', position: 'relative', left:0}}> 
          Welcome to Mars 
          </div>
          <div  style={{fontWeight: '300',  marginTop: '20px', width: '70%', position: 'relative', left:0}}>
          Designed by students for students, Mars is the subtlest way to communicate to those sitting behind you in lecture. We use strobe flash technology to send and receive messages descretely in morse code. 
          </div>
          <div style={{'marginTop':'10%','display':'flex', 'justifyContent':'center'}}>
            <IconButton size="large" style={{'color':'#FFFFFF'}} onClick={()=>scrollDown()}>
              <KeyboardArrowDownIcon style={{'width':'2.2em', 'height':'2.2em'}}/>
            </IconButton>
            </div>
        </div>

        
    
    {/* <div class="App-bottom">     */}
        <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent:'space-evenly'}}>


        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton id="sendtime" value="send" style={{borderColor:"#FFFFFF", borderRadius: '4px', border: "0px solid white", color:"#15141f", backgroundColor: "white",  margin: "15px ", padding: '10px 50px 10px 50px',  textTransform: 'none',  fontSize: '20px'}}>Send a Message</ToggleButton>
          <ToggleButton id="receivetime" value="receive"  style={{borderColor:"#FFFFFF", borderRadius: '4px',color:"#FFFFFF",  margin: "15px ", padding: '10px 50px 10px 50px',  textTransform: 'none',  fontSize: '20px'}} >Decode a Message</ToggleButton>
          
        </ToggleButtonGroup>

        
          </div>

        <div id="maincontentscrollwrap" style={{ overflowX:'scroll', width: '70%', scrollbarWidth: 'none', scrollBehavior: 'smooth', scrollSnapType: 'x mandatory',  margin: '2em'}}>
          {/* <div id="maincontentscroll" style={{display: 'flex', flexDirection: 'row', alignItems: 'stretch', height: 'max-content', overflow:'hidden',width: '2009px'}}>  */}
         
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'stretch', justifyContent:'space-between',width: "max-content"}}> 
        
            <div id='sendinterface' class="bottompage"> 
         

            <p style={{textAlign: 'left', fontSize: '14pt', width: '80%', margin:"5% 10%"}}>Compose your message in the box below and press the arrow to encode and deliver it</p>
            
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', height: 'max-content', justifyContent: 'center'}}> 
                  <Box>
                    <div style ={{width: '30vmax'}}>
                      <TextField 
                        fullWidth
                       
                        id="outlined-multiline-flexible"
                        placeholder="Your message"
                        style={{ backgroundColor: "#FFFFFF", borderRadius: "4px", border: '0px'}}
                    />
                    </div>
                  </Box>
                  <Button id='sendbutton' style={{width: '40px', backgroundColor: "white", color:"#282c34",  margin: "15px ", padding: '10px 50px 10px 50px',  textTransform: 'none',  fontSize: '16px'}}onClick={() => {
                        sendMessage(convertToMorse(document.getElementById("outlined-multiline-flexible").value))
                        // alert(convertToMorse(document.getElementById("outlined-multiline-flexible").value));
                      }}>
                        
                <SendIcon /></Button>
                {/* <div style={{position: 'relative', right: '10px', marginLeft: '6em'}}>  */}
                  {/* <IconButton title="decode a message" size="large" style={{'color':'#FFFFFF'}} onClick={() => ScrollRight()} >
                    
                        <KeyboardArrowRightIcon style={{'width':'2.2em', 'height':'2.2em'}} />
                      </IconButton> */}
                  {/* </div> */}
                </div>
               
              </div>


              <div>
              </div>
              

              <div id='receiveinterface' class="bottompage">
                {/* <p>Receive a message</p> */}
               
                <p style={{textAlign: 'left', fontSize: '14pt', width: '80%', margin: "5% 10%"}}>Transcribe the flashes to morse code and press the arrow to translate back to english</p>

                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', height: 'max-content', justifyContent: 'center'}}> 
                 
                    <InfoIcon style={{cursor:'pointer', margin: '15px'}} onClick = {() => showCodePopup()}></InfoIcon>
                  <Box>
                    <div style={{width: '30vmax'}}>
                      <TextField 
                        fullWidth
                        // onUpdate = {document.getElementById('decodedmessage').innerHTML = decodeMessage(this.value)}
                        id="receive box"
                        placeholder="Their message"
                        style={{backgroundColor: "#FFFFFF", borderRadius: "4px", border: '0px'}}

                    />

                  </div>
                  </Box>
                  
                  <Button id='decodebutton' style={{width: '40px', backgroundColor: "white", color:"#141417",  margin: "auto", margin: '15px', padding: '10px 50px 10px 50px',  textTransform: 'none',  fontSize: '16px'}}onClick={() => {
                        document.getElementById('decodedmessage').innerHTML = decodeMessage(document.getElementById('receive box').value)
                      }}>
                    <SendIcon /></Button>

                  

                    
                </div>
                <p id='decodedmessage'> 
                    
                    </p>

                <div id="codepopup" style={{visibility: 'hidden', display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                  <div style={{textAlign: 'left', fontSize: "12pt", fontWeight: "300"}}> 
                
                   
                   <p>short flash: '.'</p> 
                   <p>long flash: ' - '</p> 
                   <p>pause: ' '</p> 
                   <p>long pause: '/'</p> 
                </div>
                </div>


             
                    <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent:'space-around'}}>
                  {/* <Button variant="outlined" style={{borderColor:"#FFFFFF",  color:"#FFFFFF",  margin: "15px ", padding: '10px 50px 10px 50px',  textTransform: 'none',  fontSize: '16px'}} onClick={() => ScrollLeft()}>Send a Message</Button> */}
                    {/* <Button disabled  variant="outlined" style={{borderColor:"#FFFFFF", color:"#FFFFFF",  margin: "15px ", padding: '10px 50px 10px 50px',  textTransform: 'none',  fontSize: '16px'}} onClick={() => ScrollRight()}>Receive a Message</Button> */}
                  
                </div>
                </div> 
               
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default App;

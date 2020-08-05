import React from 'react';
import './App.css';
import Typography from "@material-ui/core/Typography";
import {GroupedButtons} from "./GroupedButtons";
import {GroupedButtonsOne} from "./GroupedButtons";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


export const PaddingTopAndBottomThreeEm = styled.div`
  padding: 3em 0;
`;

export const PaddingSurroundTopAndBottomOneEm = styled.div`
  padding: 7px 0;
`;

export const PaddingSurroundTopAndBottomTwoEm = styled.div`
  padding: 2em 0;
`;


function App() {

  const [value, setValue] = React.useState("OA");
  const [duckType, setDuckType] = React.useState("1");
  const [hour, setHour] = React.useState();
  const [minute, setMinute] = React.useState();


  const handleBranchChange = (event) => {
    setValue(event.target.value);
  };

  const handleDuckExchange = (event) => {
    setDuckType(event.target.value);
  };

  const handleHourExchange = (event) => {
    setHour(event.target.value);
  };

  const handleMinuteExchange = (event) => {
    setMinute(event.target.value);
  };
  const handleSubmit = (event) => {
    alert("预定成功/Order Submitted")
  };

  return (
    <div>


      <div id={"header"}>
        <Typography variant={"h6"}>大统华片皮鸭预定/取货系统</Typography>
        <Typography>T&T Supermarket Peiking Duck Ordering and Pickup System</Typography>
      </div>

      <Container maxWidth={"md"} id={"twoEm"}>

        <div>
          <FormControl component="fieldset" id={"branch"}>
            <FormLabel component="branch">选择取货分店/Select pick up location</FormLabel>
            <RadioGroup aria-label="branchRadio" name="gender1" value={value} onChange={handleBranchChange}
                        id={"radioGroup"}>
              <FormControlLabel value="OA" control={<Radio/>}
                                label="OSAKA - Yaohan Center 1000, 3700 Number 3 Rd, Richmond"/>
              <FormControlLabel value="disabled" disabled control={<Radio/>} label="Other stores coming soon"/>
            </RadioGroup>
          </FormControl>
        </div>


        <FormControl component="fieldset" id={"duckType"}>
          <FormLabel component="branch">选择大小/Select size</FormLabel>
          <RadioGroup aria-label="branchRadio" name="gender1" value={duckType} onChange={handleDuckExchange}
                      id={"radioGroup"}>
            <FormControlLabel value="1" control={<Radio/>} label="整只/Full duck - $29.88"/>
            <FormControlLabel value="2" control={<Radio/>} label="半只/Half duck - $15.88"/>
          </RadioGroup>
        </FormControl>

        <div>
          <GroupedButtonsOne/>
        </div>

        <div>
          <Typography id={"subHeader"}>配料/Sides</Typography>
        </div>

        <div id={"radioGroup"}>
          <Typography>配料拼盘/Side Combo - $9.99</Typography>
        </div>

        <div>
          <GroupedButtons/>
        </div>

        <div id={"radioGroup"}>
          <Typography>鸭饼皮/Wrap - $2.50</Typography>
        </div>

        <div>
          <GroupedButtons/>
        </div>

        <div id={"radioGroup"}>
          <Typography>鸭酱/Source - $0.75</Typography>
        </div>

        <div>
          <GroupedButtons/>
        </div>


        <div id={"twoEm"}>
          <TextField id="outlined-basic" label="Name" variant="outlined"/>
          <TextField id="outlined-basic" label="Phone" variant="outlined"/>
        </div>

        <div id={"twoEm"}>
          <Grid container spacing={4}>
            <Grid item sm={6}>
              <FormControl component="fieldset" id={"hour"}>
                <FormLabel component="branch">选择时间/Select Time</FormLabel>
                <RadioGroup aria-label="branchRadio" name="gender1" value={hour} onChange={handleHourExchange}
                            id={"radioGroup"}>
                  <FormControlLabel value="12" control={<Radio/>} label="12AM"/>
                  <FormControlLabel value="13" control={<Radio/>} label="1PM"/>
                  <FormControlLabel value="14" control={<Radio/>} label="2PM"/>
                  <FormControlLabel value="15" control={<Radio/>} label="3PM"/>
                  <FormControlLabel value="16" control={<Radio/>} label="4PM"/>
                  <FormControlLabel value="17" control={<Radio/>} label="5PM"/>
                  <FormControlLabel value="18" control={<Radio/>} label="6PM"/>
                  <FormControlLabel value="19" control={<Radio/>} label="7PM"/>


                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item sm={6}>
              <FormControl component="fieldset" id={"minute"}>
                <FormLabel component="branch"> 半点/Minute</FormLabel>
                <RadioGroup aria-label="branchRadio" name="gender1" value={minute} onChange={handleMinuteExchange}
                            id={"radioGroup"}>
                  <FormControlLabel value="1" control={<Radio/>} label=":00"/>
                  <FormControlLabel value="2" control={<Radio/>} label=":30"/>
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </div>

        <div>
          <Button variant="contained"
          onClick={handleSubmit}>Submit</Button>
        </div>

      </Container>
    </div>
  );
}

export default App;

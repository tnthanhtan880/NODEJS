import React, { Component } from 'react';
import Constants from "./constants.js";
import {
  Form,
  Input,
  CheckBox,
  TextArea,
  Select,
  Option,
  ValidationTypes
} from "super-easy-react-forms";
import './App.css';

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

function submit(data) {
  console.log(data);
}

/*const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var routes = require('./routes');
app.use('/',routes);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));*/

/*SinhVien.getAllSinhVien(function(err,rows){
            if(err){
                console.log(err);
            } else {
                console.log(rows);
            }

        });*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form onSubmit={submit}>
          <Input
            name="firstName"
            legend="Signup Form"
            label="First Name"
            missingMessage="This field is required."
            isRequired
          />
          <Input
            name="lastName"
            label="Last Name"
            missingMessage="This field is required."
            isRequired
          />

          <Input
            name="address"
            label="Address"
            missingMessage="This field is required."
            isRequired
          />

          <Input name="address2" label="Unit/Apt" />

          <div className="withCols">
            <Input
              name="city"
              label="City"
              validation={ValidationTypes.TEXT}
              errorMessage="That's not a city name."
              isRequired
            />

            <Select name="state" label="State" placeholder="State" isRequired>
              {Constants.stateAbbreviations.map(state => (
                <Option key={state} value={state}>
                  {state}
                </Option>
              ))}
            </Select>

            <Input
              name="zip"
              label="Zip Code"
              shouldPreventInvalid={true}
              validation={ValidationTypes.NUMBER}
              isRequired
            />
          </div>
          <TextArea name="message" label="Message (Optional)" />
          <CheckBox
            name="terms"
            label="Accept Terms of Use"
            missingMessage="You must accept the terms."
            isRequired
          />
        </Form>
      </div>
    );
  }
}

/*module.export = app;*/
export default App;

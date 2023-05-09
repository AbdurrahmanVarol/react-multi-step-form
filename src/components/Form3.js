import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
const Form3 = () => {
  return (
    <div>
      <h1>Form3</h1>
      <Form>
        <FormGroup>
          <Input placeholder="Input 1"></Input>
        </FormGroup>
        <FormGroup>
          <Input placeholder="Input 2"></Input>
        </FormGroup>
      </Form>
    </div>
  );
};

export default Form3;

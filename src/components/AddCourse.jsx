import React from "react";
import "antd/dist/antd.css";
import "../App.css";
import { Form, Button, Input, Row, Col, Card } from "antd";
import { useState } from "react";
const onFinish = (values) => {};
const onFinishFailed = (errorInfo) => {};

function AddCourse() {
  const [Addcourse, setAddcourse] = useState({

    CourseName:"",CourseDuration:"", Price:""
  })

  const onTextChange = (e) => {
    e.preventDefault();
    setAddcourse({ ...Addcourse, CourseName: e.target.value })
    console.log(Addcourse,"PYTHON");
  
  }
  const  CourseDuration = (e) => {
    setAddcourse({ ...Addcourse, CourseDuration: e.target.value })
  
  }
  const price = (e) => {
    
    setAddcourse({ ...Addcourse, Price: e.target.value })
 console.log(Addcourse.Price,"eeeeeeeeee")
  }
  const onsubmit = () => {
    setAddcourse("")
  }
  console.log(Addcourse,"JAVA");


  return (
    <div className="Addcourse">
      <Card
        title="Add Course">

        <Row>
          <Col>
            <Form
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off">
              <Row>
                <Col>
   <select>
        <option value="HTML">Select a Course</option>
        <option value="HTML">JAVASCRIPT</option>
        <option value="CSS">REACT</option>
        <option value="JavaScript">JAVA</option>
        <option value="React">PYTHON</option> 
  </select>
            </Col>
              </Row>
               <Row>
                <Col>
                  <Form.Item
                    label="Course Duration"
                    name="Course Duration">
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Input name="CourseDuration" value={Addcourse.CourseDuration}  onChange={CourseDuration}/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Item
                    label="Price"
                    name="Price">
                 </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Input  name="Price" value={Addcourse.Price}  onChange={Price} />
                </Col>
              </Row>
              <Row>
                <Col>
                    <Button onClick={onsubmit} className='button'>
                      Submit
                    </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default AddCourse;

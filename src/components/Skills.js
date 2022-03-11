import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { BiPlus, BiMinus } from "react-icons/bi";
// import { Button } from 'react-scroll/modules';


function Skills({ formData, setFormData }) {

  // console.log(formData)

  // UseState For Storing skill
  const [skillFields, setSkillField] = useState(formData.skill);

  // Function to store skill data and store it on form.js using the props of setFormData
  const handleChangeInput = (index, event) => {
    const values = [...skillFields];
    console.log(values)
    values[index][event.target.name] = event.target.value;
    setSkillField(values);
    const newObj = { ...formData, [event.target.name]: skillFields };
    setFormData(newObj)
    // console.log(newObj)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  // const data = (index) => (

  //   formData.skill.map((i, key) => {
  //     console.log(formData.skill)
  //     console.log(index.i.formData.skill)

  //     return (i.skill)
  //   })
  // )

  const handleAddFields = () => {
    setSkillField([...skillFields, { skill: '' }])
  }

  const handleRemoveFields = (index) => {
    const values = [...skillFields];
    // At postion index(1) remove 1
    values.splice(index, index - 1);
    setSkillField(values);
  }
  // console.log(skillFields);
  return (
    <>
      <Container>

        <form onSubmit={handleSubmit}>
          {skillFields.map((inputField, index) => (
            <div key={index}>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <label className="form-label" htmlFor="form3Example1m">Skills</label>
                  <Form.Control type="text" placeholder="Skill" name="skill" value={inputField.skill} onChange={event => handleChangeInput(index, event)} />
                </div>
                <div className="col-md-6 mb-4">
                  <BiPlus onClick={() => handleAddFields()} style={{ "color": "black" }} />
                  <BiMinus onClick={() => handleRemoveFields(index)} style={{ "color": "black" }} />
                </div>
              </div>
            </div>
          ))}
        </form>


      </Container>
    </>
  );
}

export default Skills;
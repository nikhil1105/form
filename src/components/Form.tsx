import React, { FormEvent, useEffect, useState } from 'react'
import '../css/Form.css';
import { TextField, RadioGroup, Radio, FormControlLabel, Select, MenuItem, InputLabel, OutlinedInput } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Update } from '../redux/Data';
import { v4 as uuid } from "uuid";



function Form() {

  const dispatch = useDispatch()
  let Tasks = useSelector((state: any) => state.Data)

  interface datainterface {
    id: String,
    name: String,
    email: String,
    age: Number,
    skills: String[],
    gender: String,
    dob: String,
    hobby: String,
  }

  const [name, setname] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [age, setage] = useState<number>(10);
  const [skillvar, setSkills] = useState<string[]>([]);
  const [gender, setGender] = useState<string>('female');
  const [dob, setDOB] = useState<string>('');
  const [hobby, sethobby] = useState<string>('')
  const [data, setdata] = useState<datainterface>()

  useEffect(() => {
    const unique_id = uuid();
    const obj: datainterface = {
      id: unique_id,
      name: name,
      email: email,
      age: age,
      skills: skillvar,
      gender: gender,
      dob: dob,
      hobby: hobby,
    }
    setdata(obj)
  }, [name, email, age, skillvar, gender, dob, hobby])


  const skills = [
    'react',
    'node js',
    'express js',
    'mongo db'
  ]


  const handleName = (e: any) => {
    setname(e.target.value)
  }


  const handleEmail = (e: any) => {
    setEmail(e.target.value)
  }

  const handleAge = (e: any) => {
    setage(e.target.value)
  }

  const handleSkills = (e: any) => {
    const value = e.target.value

    setSkills(
      typeof value === 'string' ? value.split(',') : value,
    );

  }

  const handleGender = (e: any) => {
    setGender(e.target.value)
  }


  const handleDOB = (e: any) => {
    setDOB(e.target.value)
  }


  const handlehobby = (e: any) => {
    sethobby(e.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('tasks', Tasks.tasks);


    const alldata = [
      ...Tasks.tasks,
      data
    ]

    console.log(alldata);


    dispatch(Update(alldata))

  }


  return (
    <div className='Form' >
      <form onSubmit={handleSubmit} >

        <div>
          Name
        </div>

        <div>

          <TextField required value={name} onChange={handleName} id="outlined-basic" color='secondary' variant="outlined" />

        </div>

        <div>
          Email
        </div>

        <div>

          <TextField required value={email} onChange={handleEmail} type='email' id="outlined-basic" color='secondary' variant="outlined" />

        </div>

        <div>
          Age
        </div>

        <div>

          <Select required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleAge}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>

        </div>


        <div>
          Skills
        </div>

        <div>
          <Select required
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={skillvar}
            onChange={handleSkills}
            input={<OutlinedInput label="Name" />}
          >
            {skills.map((skill) => (
              <MenuItem
                key={skill}
                value={skill}
              >
                {skill}
              </MenuItem>
            ))}
          </Select>

        </div>

        <div>
          Gender
        </div>

        <div>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            value={gender}
            onChange={handleGender}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>

        </div>

        <div>
          Date Of Birth
        </div>

        <div style={{margin:'12px'}} >

          <input type="date" required value={dob} onChange={handleDOB} name="" id="" />

        </div>

        <div>
          Hobby
        </div>

        <div>
          <TextField required value={hobby} onChange={handlehobby} id="standard-basic" variant="standard" />
        </div>

        <div>
          <button type='submit' >submit</button>
        </div>

      </form>


    </div>
  )
}

export default Form
import React from 'react'
import "../css/FormPage.css";
import Form from '../components/Form';
import Table from '../components/Table';

function FormPage() {
  return (
    <div className='FormPage' >

      <div>
          <Form/>
      </div>

      <div>
          <Table/>
      </div>

    </div>
  )
}

export default FormPage
import React, { useState } from 'react'
import '../css/Table.css';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { Update } from '../redux/Data';

function Table() {

  const [selected,setselected] = useState<string[]>([])
  const dispatch = useDispatch()  

  let Tasks = useSelector((state: any) => state)
  const rows=Tasks.Data.tasks
  console.log(Tasks);


  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'skills',
      headerName: 'Skills',
      width: 160,
    },
    {
      field: 'gender',
      headerName: 'Gender',
      width: 90,
    },
    {
      field: 'dob',
      headerName: 'Date of Birth',
      width: 90,
    },
    {
      field: 'hobby',
      headerName: 'Hobby',
      width: 90,
    },

  ];

  const handelselect = (e:string[])  => {
    console.log(e);
    const ids = e
    setselected(ids)
  }
  
  

  const handelDelete = () =>{
    const filteredData = rows.filter((doc:any) => !selected.includes(doc.id));
    dispatch(Update(filteredData))
  }
  


  return (
    <div className='Table' >
      <div>
        Table
      </div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection 
          onRowSelectionModelChange={(e:any)=>handelselect(e)}
        />
      </div>
      <button onClick={handelDelete} > Delete</button>
    </div>
  )
}

export default Table
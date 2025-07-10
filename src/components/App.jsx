import NavBar from './NavBar'
import Table from './Table'
import AddModal from './AddModal'
import { useState } from 'react'
import employees from '../employees'

function App() {

  const numberOfEmployees = employees.length;
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [allEmployees, setAllEmployees] = useState(employees)

  function handleAddModalOpen () {
    setAddModalOpen(!isAddModalOpen);
    console.log(isAddModalOpen);
  }

  function addEmployee(employee){
    setAllEmployees(prevValue => {
      return [...prevValue, employee];
    });
  }

  return (
    <>
      <NavBar openAddModal={handleAddModalOpen}/>
      <AddModal isOpen={isAddModalOpen} openAddModal={handleAddModalOpen} addEmployee={addEmployee}/>
      <Table number={numberOfEmployees} employees={allEmployees} setEmployees={setAllEmployees}/>
    </>
  )
}

export default App

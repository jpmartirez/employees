import React from 'react'

const Table = ({employees, setEmployees}) => {

    function deleteEmployee(id) {
        setEmployees(employees.filter((employee, index) => index !== id));
    }

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
            
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Department</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee, index) => {
                      return  <tr key={index}>
                                <td>{index+1}</td>
                                <td>{employee.name}</td>
                                <td>{employee.position}</td>
                                <td>{employee.department}</td>
                                <td><button className="btn btn-error font-bold" onClick={() => deleteEmployee(index)}>Delete</button></td>
                        </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Table
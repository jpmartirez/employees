import React, { useState } from 'react'

const AddModal = ({isOpen, openAddModal, addEmployee}) => {

  const [employee, setEmployee] = useState({
    name: "",
    position: "",
    department: ""
  });

  function handleSetEmployee (event) {
    const {name, value} = event.target;
    setEmployee(prevValues => {
      return {...prevValues, [name]: value}
    });
  }

  function submitEmployee(){
    if(employee.name === "" || employee.position === "" || employee.department === ""){
      document.querySelector(".alert").classList.remove("hidden");
    } else {
      addEmployee(employee);
      openAddModal();
      setEmployee({name: "", position: "", department: ""});
    }
  }

  return (
    <div>
        {isOpen && 
        (<dialog id="my_modal_1" className="modal modal-open">
            <div className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={openAddModal}>✕</button>
                <h3 className="font-bold text-lg mb-3 text-center">Add Employee</h3>
                
                <div className='flex flex-col gap-2'>
                    <label className="label">Name</label>
                    <input type="text" name='name' value={employee.name} className="input w-full" placeholder="Enter the name" onChange={handleSetEmployee}/>

                    <label className="label">Position</label>
                    <input type="text" name='position' value={employee.position} className="input w-full" placeholder="Enter the position" onChange={handleSetEmployee}/>

                    <label className="label">Department</label>
                    <input type="text" name='department' value={employee.department} className="input w-full" placeholder="Enter the department" onChange={handleSetEmployee}/>

                    <button className="btn btn-neutral mt-4" onClick={submitEmployee}>Add</button>
                    <div role="alert" className="alert alert-error hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Error! Please fill all the requirements.</span>
                    </div>
                </div>
            </div>
        </dialog>)}
    </div>
  )
}

export default AddModal
import React, { useState } from 'react'

const NavBar = ({openAddModal}) => {

    const [theme, setTheme] = useState("");

    function handleTheme(){
       const newTheme = theme === "" ? "forest" : "";
       setTheme(newTheme);
       document.querySelector("html").setAttribute("data-theme", newTheme);
    }

  return (
    <div className="navbar bg-base-100 shadow-sm mb-10">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">Employees</a>
        </div>
        <div className="flex">
            <div className="">
                <div className="btn-circle avatar flex items-center gap-2 md:gap-6">
                    <input type="checkbox" className="toggle toggle-primary" onClick={handleTheme}/>
                    <button className="btn max-md:btn-sm btn-primary rounded-2xl" onClick={openAddModal}>ADD EMPLOYEE</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar
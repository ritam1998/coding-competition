import React, { Component } from 'react'

export default class AddEmployee extends Component {

    addEmp = () =>{
        const array = []

        const name = document.getElementById("name").value
        const gender = document.getElementById("gender").value
        const age = document.getElementById("age").value
        const designation = document.getElementById("designation").value
        const department = document.getElementById("department").value
        const joindate = document.getElementById("joindate").value

        const object = {
            name : name,
            gender : gender,
            age : age,
            designation : designation,
            department : department,
            joindate : joindate
        }

        //let data = window.localStorage.setItem("key",JSON.stringify(obj));

        //localStorage.arr += JSON.stringify(obj);
        array.push(JSON.stringify(object));
        console.log(array);
        window.alert('hello');
        localStorage.setItem(`${object.name}`,array);
        // localStorage.setItem("name",name)
        // 
        // 
        // 
        // 
        // 
        window.location.replace("/");
    }


    render() {
        return (
            <div className="modal fade" id="addEmployeeModal" tabindex="-1" role="dialog" aria-labelledby="addEmployeeModal"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header pt-3 pb-2">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Add Employee</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-row ">
                                    <div className="form-group col-md-6">
                                        <label for="" className="mb-1">Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Enter" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="" className="mb-1">Gender</label>
                                        <select className="form-control" id="gender">
                                            <option>Select</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="" className="mb-1">Age</label>
                                        <input type="number" className="form-control" id="age" placeholder="Enter" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="" className="mb-1">Designation</label>
                                        <input type="text" className="form-control" id="designation" placeholder="Enter" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="" className="mb-1">Department</label>
                                        <input type="text" className="form-control" id="department" placeholder="Enter" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="" className="mb-1">Joining Date</label>
                                        <input type="date" className="form-control" id="joindate" placeholder="" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-danger btn-sm" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-success btn-sm" onClick={this.addEmp}>Save</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

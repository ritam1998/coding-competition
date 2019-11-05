import React, { Component } from 'react'

export default class TotalEmployee extends Component {

    componentDidMount = () => {

        document.getElementById("total").innerHTML = `<h5 className="text-secondary mb-2">Available: <span
                                        className="font-weight-bold ml-1 text-dark">01</span></h5>
                                    <h5 className="text-secondary">Total: <span className="font-weight-bold ml-1 text-dark">${localStorage.length}</span>
                                    </h5>

                                    <button className="btn btn-primary mt-4" data-toggle="modal" data-target="#addEmployeeModal">
                                        <i className="fa fa-plus"></i>&nbsp; Add Employee</button>`;
        Object.keys(localStorage).forEach(function(key){

                const array = [];

                var data = JSON.parse(localStorage.getItem(key));

                array.push(data);
                // console.log(array.name);

                for(let i=0;i<array.length;i++){
                    console.log(array[i].name);

                    document.getElementById("view").innerHTML += `
        
                                        <tr>
                                            <td>${array[i].name}</td>
                                            <td>${array[i].department}</td>
                                            <td>
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck1"
                                                        checked="checked" />
                                                    <label class="custom-control-label" for="customCheck1"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-outline-info btn-sm" data-toggle="modal" data-target="#addEmployeeModal">
                                                    <i class="fa fa-edit"></i>&nbsp; Edit
                                                </button>
                                                <button type="button" class="btn btn-outline-danger btn-sm" onClick={this.delete}>
                                                    <i class="fa fa-trash"></i>&nbsp; Delete
										        </button>
                                            </td>
                                        </tr>
        `
                }
            // console.log(localStorage.arr[1].name);
         });
    }
    render() {
        return (

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="question-dashboard">
                            <div className="card mt-4 mb-3 mb-md-4">
                                <div className="card-body p-3" id="total">

                                </div>
                            </div>

                            <div className="table-responsive mt-3 mt-md-4 mb-2">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Department</th>
                                            <th>Available</th>
                                            <th>View Details</th>
                                        </tr>
                                    </thead>
                                    <tbody id="view">
                                        {/* <tr>
                                            <td>John Doe</td>
                                            <td>Testing</td>
                                            <td>
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck1"
                                                        checked="checked" />
                                                    <label class="custom-control-label" for="customCheck1"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-outline-info btn-sm" data-toggle="modal" data-target="#addEmployeeModal">
                                                    <i class="fa fa-edit"></i>&nbsp; Edit
                    </button>
                                                <button type="button" class="btn btn-outline-danger btn-sm">
                                                    <i class="fa fa-trash"></i>&nbsp; Delete
										</button>
                                            </td>
                                        </tr> */}
                                        {/* <tr>
                                            <td>Peter Doe</td>
                                            <td>Deployment</td>
                                            <td>
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                                    <label class="custom-control-label" for="customCheck2"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-outline-info btn-sm" data-toggle="modal" data-target="#addEmployeeModal">
                                                    <i class="fa fa-edit"></i>&nbsp; Edit
                    </button>
                                                <button type="button" class="btn btn-outline-danger btn-sm">
                                                    <i class="fa fa-trash"></i>&nbsp; Delete
										</button>
                                            </td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

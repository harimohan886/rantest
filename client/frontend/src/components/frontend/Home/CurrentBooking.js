import React from 'react'

export default function CurrentBooking() {
  return (
    <div className="modal fade in" id="myModal" style={{paddingLeft: "0px"}}>
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <span className="modal-title">Current Booking Form:</span>
                <button className="close" data-dismiss="modal" id="CloseButton" type="button">×</button>
            </div>
            <div className="modal-body">
                <div className="form-div">
                <form noValidate="" className="ng-untouched ng-pristine ng-invalid">
                    <div className="form-group">
                    <label className="control-label">Full Name:</label>
                    <input className="form-control ng-untouched ng-pristine ng-invalid" id="name" name="name" placeholder="Enter your name" required="" type="text"/>
                    </div>
                    <div className="form-group">
                    <label className="control-label">Mobile Number:</label>
                    <input className="form-control ng-untouched ng-pristine ng-invalid" id="mobile" name="mobile" placeholder="Enter mobile No." required="" type="text"/>
                    </div>
                    <div className="form-group">
                    <label className="control-label">Email id:</label>
                    <input className="form-control ng-untouched ng-pristine ng-invalid" id="email" name="email" placeholder="Enter Email" required="" type="email"/>
                    </div>
                    <div className="form-group">
                    <label className="control-label">Safari Date:</label>
                    <input className="form-control ng-untouched ng-pristine ng-valid hasDatepicker" data-date-format="dd/mm/yyyy" id="date" name="date"/>
                    </div>
                    <div className="form-group">
                    <label className="control-label">Safari Time:</label>
                    <br/>
                    <label>
                        <input name="time" required="" type="radio" value="Morning" className="ng-untouched ng-pristine ng-invalid"/>&nbsp;&nbsp;Morning </label>&nbsp;&nbsp;&nbsp;&nbsp; <label>
                        <input name="time" required="" type="radio" value="Evening" className="ng-untouched ng-pristine ng-invalid"/>&nbsp;&nbsp;Evening </label>
                    </div>
                    <div className="form-group">
                    <label className="control-label">Safari Zone:</label>
                    <br/>
                    <label>
                        <input name="zone" required="" type="radio" value="1/2/3/4/5/6" className="ng-untouched ng-pristine ng-invalid"/>&nbsp;&nbsp;1/2/3/4/5/6/7 </label>&nbsp;&nbsp;&nbsp;&nbsp; <label>
                        <input name="zone" required="" type="radio" value="7/8/9/10" className="ng-untouched ng-pristine ng-invalid"/>&nbsp;&nbsp;8/9/10 </label>
                    </div>
                    <div className="form-group">
                    <label className="control-label">Safari Vehicle:</label>
                    <br/>
                    <label>
                        <input name="vehicle" required="" type="radio" value="Jeep" className="ng-untouched ng-pristine ng-invalid"/>&nbsp;&nbsp;Jeep </label>&nbsp;&nbsp;&nbsp;&nbsp; <label>
                        <input name="vehicle" required="" type="radio" value="Canter" className="ng-untouched ng-pristine ng-invalid"/>&nbsp;&nbsp;Canter </label>
                    </div>
                    <div className="form-group">
                    <label className="control-label">Number of Person:</label>
                    <input className="form-control ng-untouched ng-pristine ng-invalid" id="no_of_person" name="no_of_person" placeholder="Enter Number of Person" required="" type="text"/>
                    </div>
                    <div className="form-group text-center">
                    <input className="btn btn-primary" type="submit" value="Submit"/>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

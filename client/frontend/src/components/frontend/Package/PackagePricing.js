import React from 'react'

export default function PackagePricing() {
  return (
    <div className='package-pricing'>
        <div className="table-responsive">
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col" className='font-bold text-center'>Select</th>
                    <th scope="col" className='font-bold text-center'>Adults</th>
                    <th scope="col" className='font-bold text-center'>No of Rooms </th>
                    <th scope="col" className='font-bold text-center'>Price (RS) </th>
                    <th scope="col" className='font-bold text-center'>Kids </th>
                    <th scope="col" className='font-bold text-center'>Total Price </th>
                </tr>
                </thead>
                <tbody>
                <tr className="package-group">
                    <td className='text-center'>
                    <input className="check" type="radio" name="option" value="635" id="inlineRadio1" checked/>
                    </td>
                    <td className='text-center'>2</td>
                    <td className='text-center'>1 Room </td>
                    <td className="package-price text-center">9850</td>
                    <td className='text-center'>
                    <select name="no_of_kids[indian][635]" className="form-control no_of_kids" data-price="900">
                        <option>0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    </td>
                    <td className="final-price text-center" >9850</td>
                </tr>
                <tr className="package-group">
                    <td className='text-center'>
                    <input className="check" type="radio" name="option" value="636" id="inlineRadio1"/>
                    </td>
                    <td className='text-center'>3</td>
                    <td className='text-center'>1 Room + 1 E Bed </td>
                    <td className="package-price text-center">11130</td>
                    <td className='text-center'>
                    <select name="no_of_kids[indian][636]" className="form-control no_of_kids" data-price="900">
                        <option>0</option>
                        <option value="1">1</option>
                    </select>
                    </td>
                    <td className="final-price text-center" >11130</td>
                </tr>
                <tr className="package-group">
                    <td className='text-center'>
                    <input className="check" type="radio" name="option" value="637" id="inlineRadio1"/>
                    </td>
                    <td className='text-center'>4</td>
                    <td className='text-center'>2 Rooms </td>
                    <td className="package-price text-center">13550</td>
                    <td className='text-center'>
                    <select name="no_of_kids[indian][637]" className="form-control no_of_kids" data-price="900">
                        <option>0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    </td>
                    <td className="final-price text-center" >13550</td>
                </tr>
                <tr className="package-group">
                    <td className='text-center'>
                    <input className="check" type="radio" name="option" value="638" id="inlineRadio1"/>
                    </td>
                    <td className='text-center'>5</td>
                    <td className='text-center'>2 Rooms + 1 E Bed </td>
                    <td className="package-price text-center">14850</td>
                    <td className='text-center'>
                    <select name="no_of_kids[indian][638]" className="form-control no_of_kids" data-price="900">
                        <option>0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    </td>
                    <td className="final-price text-center" >14850</td>
                </tr>
                <tr className="package-group">
                    <td className='text-center'>
                    <input className="check" type="radio" name="option" value="639" id="inlineRadio1"/>
                    </td>
                    <td className='text-center'>6</td>
                    <td className='text-center'>3 Rooms </td>
                    <td className="package-price text-center">17450</td>
                    <td className='text-center'>
                    <select name="no_of_kids[indian][639]" className="form-control no_of_kids" data-price="900">
                        <option>0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    </td>
                    <td className="final-price text-center" >17450</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div className="user-detail">
            <div className="row">
                <div className="form-group col-md-3">
                    <input type="text" className="form-control" name="name" placeholder="Your Name" value="" required="" id="name-standard"/>
                </div>
                <div className="form-group col-md-3">
                    <input type="number" className="form-control" name="phone" placeholder="Phone No" required="" value="" id="phone-standard"/>
                </div>
                <div className="form-group col-md-3">
                    <input type="text" className="form-control" name="email" placeholder="Email" value="" id="email-standard"/>
                </div>
                <div className="form-group col-md-3">
                    <input type="text" className="form-control" name="country" placeholder="Country" required />
                </div>
            </div>
            <div className="text-center">
                <button type="submit" href="https://jimcorbett.in/corbett-package-booking?1" form="packageBookingFormStandard" className="btn btn-warning btn-lg">Proceed</button>
            </div>
        </div>
    </div>
  )
}

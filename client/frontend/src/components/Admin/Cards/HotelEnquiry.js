import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';


export default function HotelEnquiry({ enquiries }) {


    const handleDelete = (id) => {
        console.log("id", id);
        axios.delete(`${process.env.REACT_APP_BASE_URL}/admin/enquiries/${id}`, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ` + localStorage.getItem('accessToken')
            },
        }).then(result => {
            swal("Data is deleted");

        })
    }



    return (
        <div className='latestUsers'>
            <h2 className="text-3xl font-bold mt-8 mb-3">Recent Hotel Enquiries</h2>
            <table className="table bg-white">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Booking Date</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {enquiries && enquiries.map((item, index) => (
                        <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>{item.booking_date}</td>
                            <td>{item.traveller_name}</td>
                            <td>{item.phone}</td>
                            <td>Package</td>
                            <td><button type="button" onClick={(e) => handleDelete(item._id)} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><i className="fas fa-trash"></i></button></td>
                        </tr>

                    ))}
                    {(!enquiries || enquiries.length === 0) &&
                        <tr>
                            <td className='text-center' colSpan="6">No data Found</td>


                        </tr>

                    }

                </tbody>
            </table>
        </div>
    )
}

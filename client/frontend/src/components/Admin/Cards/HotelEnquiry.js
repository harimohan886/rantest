import React from 'react'

export default function HotelEnquiry() {
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
                    <th>Email</th>
                    <th>Type</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>2022-10-06</td>
                    <td>Rajat Goyal</td>
                    <td>9910446443</td>
                    <td>test123@gmail.com</td>
                    <td>Package</td>
                    <td><button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><i className="fas fa-trash"></i></button></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2022-10-06</td>
                    <td>Rajat Goyal</td>
                    <td>9910446443</td>
                    <td>test123@gmail.com</td>
                    <td>Package</td>
                    <td><button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><i className="fas fa-trash"></i></button></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>2022-10-06</td>
                    <td>Rajat Goyal</td>
                    <td>9910446443</td>
                    <td>test123@gmail.com</td>
                    <td>Package</td>
                    <td><button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><i className="fas fa-trash"></i></button></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>2022-10-06</td>
                    <td>Rajat Goyal</td>
                    <td>9910446443</td>
                    <td>test123@gmail.com</td>
                    <td>Package</td>
                    <td><button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><i className="fas fa-trash"></i></button></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>2022-10-06</td>
                    <td>Rajat Goyal</td>
                    <td>9910446443</td>
                    <td>test123@gmail.com</td>
                    <td>Package</td>
                    <td><button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><i className="fas fa-trash"></i></button></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>2022-10-06</td>
                    <td>Rajat Goyal</td>
                    <td>9910446443</td>
                    <td>test123@gmail.com</td>
                    <td>Package</td>
                    <td><button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><i className="fas fa-trash"></i></button></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

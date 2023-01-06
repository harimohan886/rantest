import React from 'react'
import ContentImage from './ContentImage';
import PackagePricing from './PackagePricing'


export default function RoomType({ packages, type }) {
    
    return (
        <>
            <ul className="nav nav-tabs" id="roomTab" role="tablist">


                {packages?.categories?.map((list, lindex) => (
                    <li key={lindex.toString()} className="nav-item">
                        <a className={`nav-link ${lindex === 0 ? 'active' : ''}`} data-toggle="tab" href={`#tab-cat${type}${lindex}`} role="tab" aria-controls={`tab-cat${type}${lindex}`} >{list.category}</a>
                    </li>

                ))}
            </ul>
            <div className="tab-content" id="roomTabContent">

                {packages?.categories?.map((list, lindex) => (
                    <>
                        <div key={lindex.toString()} className={`tab-pane ${lindex === 0 ? 'active' : ''}`} id={`tab-cat${type}${lindex}`}>
                            <ContentImage hotels={list.hotels} counterkey={type + lindex} />

                            {type === 'indian' ? <PackagePricing optionData={list?.indianOptions} packageName={packages?.package?.name} /> : <PackagePricing optionData={list?.foreignerOptions} packageName={packages?.package?.name} />}

                        </div>

                    </>


                ))}
                    <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title font-bold text-black" id="exampleModalLongTitle">Booking Details</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                         <div className="modal-body">
                            <div className='table-responsive'>
                            <table class="table table-bordered">
                                <tbody>
                                    <tr>
                                    <th className='text-black italic'>Date of Visit</th>
                                    <td colSpan={3} className='text-black italic' id='mdate'></td>
                                    </tr>
                                    <tr>
                                    <th className='text-black italic'>Package Name:</th>
                                    <td className='text-black italic' id='pcat'></td>
                                    </tr>
                                    <tr>
                                    <th className='text-black italic'>No of Adults:</th>
                                    <td className='text-black italic' id='acount'> </td>
                                    <th className='text-black italic'>No of Children:</th>
                                    <td className='text-black italic' id='ccount'></td>
                                    </tr>
                                    <tr>
                                    <th className='text-black italic'>Total Amount:</th>
                                    <td colSpan={3} className='text-black italic' id='amount'></td>
                                    </tr>
                                    <tr>
                                    <th colSpan={4} className='text-black italic'>Important Notes</th>
                                    </tr>
                                    <tr>
                                    <td colSpan={4}>
                                        <p className='text-black italic mb-3'>Do not refresh your browser or click the back button during the payment process.</p>
                                        <p className='text-black italic mb-3'>Click on Make Payment button if you are agree to the term & condition.</p>
                                        <p className='text-black italic mb-3'>Once you click on button, you will be redirected to payment page.</p>
                                        <p className='text-black italic mb-3'>Please choose your payment mode (Netbanking, Credit Cards, Debit Cards etc.) and proceed for payment.</p>
                                        <p className='text-black italic mb-3'>Once you successfully complete the transaction your Transaction ID is generated which you can use for further query if any related to transaction.</p>
                                        <p className='text-black italic mb-3'>Once you click the payment button, you are agreed to mentioned terms and conditions to make payment with <div className='font-bold'>DTNT</div></p>
                                        <p className='text-black italic mb-3'>Call the driver one day before Safari for confirming the reporting point. Contact details of the driver is mentioned at your booking voucher.</p>
                                        <p className='text-black italic mb-3'>Slight changes in visit time may be done by authority due to Weather/Seasonal changes.</p>
                                    </td>

                                    </tr>
                                </tbody>
                                </table>
                            </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 sm:text-base font-medium rounded text-sm py-2 px-3 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" data-dismiss="modal">Cancel</button>
                        
                        <button type="button" onClick={() => ('Submit define here')} className="primary-btn bg-lemon py-2 text-center px-3 shadow-lg rounded sm:text-base font-semibold text-kenpozome hover:text-kenpozome">Make Payment</button>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

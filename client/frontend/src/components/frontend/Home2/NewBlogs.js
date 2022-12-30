import React from 'react'

export default function NewBlogs() {
  return (
    <div className='container'>
        <div className='new-blogs'>
            <h4 className='common-title'>Latest News & Blog - Ranthambore Jungle Safari</h4>
            <div className='row'>
                <div className='col-sm-4'>
                    <div className='bBox'>
                        <a target='_blank' href='https://blog.ranthamboretigerreserve.in/some-important-questions-of-ranthambhore-national-park/'>
                            <img src='../image/blog/blog1.jpeg' className='img-fluid' alt='Blog' />
                            <h5>Some Important Questions of Ranthambore National Park</h5>
                            <div className='bottom'>
                                <i className='fa fa-angle-right'></i><i className='fa fa-angle-right'></i> 
                                <span>Read Article</span>
                            </div> 
                        </a>
                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='bBox'>
                        <a target='_blank' href='https://blog.ranthamboretigerreserve.in/trip-to-ranthambhore-national-park/'>
                            <img src='../image/blog/blog2.jpeg' className='img-fluid' alt='Blog' />
                            <h5>Trip to Ranthambore National Park</h5> 
                            <div className='bottom'>
                                <i className='fa fa-angle-right'></i><i className='fa fa-angle-right'></i> 
                                <span>Read Article</span>
                            </div> 
                        </a>
                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='bBox'>
                        <a target='_blank' href='https://blog.ranthamboretigerreserve.in/ways-to-ranthambhore-national-park/'>
                            <img src='../image/blog/blog3.jpeg' className='img-fluid' alt='Blog' />
                            <h5>Ways to Ranthambore National Park</h5>
                            <div className='bottom'>
                                <i className='fa fa-angle-right'></i><i className='fa fa-angle-right'></i> 
                                <span>Read Article</span>
                            </div> 
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

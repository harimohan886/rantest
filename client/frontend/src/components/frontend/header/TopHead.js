import React from 'react'

export default function TopHead() {
  return (
    <div className="top-header">
        <div className="container">
            <div className="row">
                <div className="col-sm-8 col-xs-12">
                    <ul className="list-inline">
                        <li><a href="tel:7838498645"><img alt="Call" src="../image/icons/callicon.png" /> +91 7838 4986 45</a>|</li>
                        <li><a href="tel:7289842772">+91 7289 8427 72</a>|</li>
                        <li><a href="tel:9718717119">+91 9718 7171 19</a></li>
                    </ul>
                </div>
                <div className="col-sm-4 col-xs-12">
                    <div className="email-sec"><a href="mailto:ranthambore360@gmail.com"><img alt="Email" src="../image/icons/mailicon.png" /> ranthambore360@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

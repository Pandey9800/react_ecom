import { React, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import "../components/Modal.css"

const CheckOutPage = () => {
    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState("visa")

    // handle Tab Change
    const handleTabChange = (tabId) => {
        setActiveTab(tabId)
    }

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  return (
    <div className="modalCard">
        <Button variant="primary" className='py-2' onClick={handleShow}>Proceed to Checkout</Button>

        <Modal show={show} onHide={handleClose} animation={false} className="modal fade" centered>
            <div className="modal-dialog">
                <h5 className='px-3 mb-3'>Select Your Payment Method</h5>
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="tabs mt-3">
                            <ul className="nav nav-tabs" id='myTab' role='tablist'>
                                <li className="nav-item" role='presentation'>
                                    <a href="#visa" className={`nav-link ${activeTab === "visa" ? "active" : ""}`} id="visa-tab" data-toggle="tab" role='tab' aria-controls='visa' aria-selected={activeTab === "visa"} onClick={() => handleTabChange("visa")} >
                                    <img src="https://i.imgur.com/sB4jftM.png" alt="" width="80" />
                                    </a>
                                </li>
                                <li className="nav-item" role='presentation'>
                                    <a href="#paypal" className={`nav-link ${activeTab === "paypal" ? "active" : ""}`} id="paypal-tab" data-toggle="tab" role='tab' aria-controls='paypal' aria-selected={activeTab === "paypal"} onClick={() => handleTabChange("paypal")} >
                                    <img src="https://i.imgur.com/yK7EDD1.png" alt="" width="80" />
                                    </a>
                                </li>
                            </ul>
                            {/* contents */}

                            <div className="tab-content" id="myTabContent">
    {/* Visa Content */}
    <div className={`tab-pane fade ${activeTab === "visa" ? "show active" : ""}`} id='visa' role='tabpanel' aria-labelledby='visa-tab'>
        <div className="mt-4 mx-4">
            <div className="text-center">
                <h5>Credit / Debit Card</h5>
            </div>
            <div className="form mt-3">
                <div className="inputbox">
                    <input type="text" name='name' id='name' className='form-control' required />
                    <span>Cardholder's Name</span>
                </div>
                <div className="inputbox">
                    <input type="text" name='number' id='number' max='999' min='1' className='form-control' required />
                    <span>Card Number</span> <i className="fa fa-eye"></i>
                </div>
                <div className="d-flex flex-row">
                    <div className="inputbox">
                        <input type="text" min='1' max='999' name='expiry' id='expiry' className='form-control' required />
                        <span>Expiration Date</span>
                    </div>
                    <div className="inputbox">
                        <input type="text" name='cvv' id='cvv' className='form-control' required />
                        <span>CVV</span>
                    </div>
                </div>
                <div className="px-5">
                    <button className='btn btn-success btn-block'>Add Card</button>
                </div>
            </div>
        </div>
    </div>
    {/* Paypal Content */}
    <div className={`tab-pane fade ${activeTab === "paypal" ? "show active" : ""}`} id='paypal' role='tabpanel' aria-labelledby='paypal-tab'>
        <div className="mt-4 mx-4">
            <div className="text-center">
                <h5>Paypal Account Information</h5>
            </div>
            <div className="form mt-3">
                <div className="inputbox">
                    <input type="email" name='email' id='email' className='form-control' required />
                    <span>Enter Your email</span>
                </div>
                <div className="inputbox">
                    <input type="text" name='name' id='name' className='form-control' required />
                    <span>Your Name</span>
                </div>
                <div className="d-flex flex-row">
                    <div className="inputbox">
                        <input type="text" name='expiry' id='expiry' className='form-control' required />
                        <span>Extra Info</span>
                    </div>
                    <div className="inputbox">
                        <input type="text" name='cvv' id='cvv' className='form-control' required />
                        <span>CVV</span>
                    </div>
                </div>
                <div className="px-5">
                    <button className='btn btn-success btn-block'>Add Paypal</button>
                </div>
            </div>
        </div>
    </div>
</div>

                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    </div>
  )
}

export default CheckOutPage
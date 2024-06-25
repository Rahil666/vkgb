import React, { useRef, useState } from "react";
import { Modal } from "react-bootstrap";

export default function PopForm() {
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef(null);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div>
      <div onClick={openPopup}>
        <button className="btn">Apply Now</button>
      </div>

      <Modal show={isOpen}>
        <div className="container ">
          <div className="col  boderstylepop ">
            <div className=" innersectionsty ">
              <div className="classy">
                <h3 className="head">Please fill in details to proceed</h3>
                <img
                  src="/public/images/circleclose.png"
                  width="40"
                  height="50"
                  alt=""
                />
              </div>
              <div className="col-12   ">
                <form>
                  <div className="row">
                    <div className="col-6 mb-3 ">
                      <input
                        type="text"
                        class="form-control custom-selecfirst"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-6 mb-3 classn">
                      <input
                        type="text"
                        class="form-control custom-selecfirst"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-6  mb-3">
                      <input
                        type="text"
                        class="form-control custom-selecee"
                        placeholder="email id"
                      />
                    </div>
                    <div class="col-6  mb-3">
                      <input
                        type="text"
                        class="form-control custom-selecpp"
                        placeholder="contact no."
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12  mb-3">
                      <input
                        type="text"
                        class="form-control custom-selecdd"
                        placeholder="Select Country"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6  mb-3">
                      <input
                        type="text"
                        class="form-control custom-selecbuild"
                        placeholder="city"
                      />
                    </div>
                    <div class="col-6  mb-3">
                      <input
                        type="text"
                        class="form-control custom-selecsign "
                        placeholder="Pin code"
                      />
                    </div>

                    <div class="col-12 mb-3">
                      <input
                        type="text"
                        class="form-control custom-selecaddress"
                        placeholder="Address"
                      />
                    </div>

                    <div class="col-12 mb-3">
                      <input
                        type="files"
                        class="form-control custom-selecdd"
                        placeholder="Choose desired position"
                      />
                    </div>

                    <div class="col-8 mb-3">
                      <button className="Browse" onClick={handleBrowseClick}>
                        Add your CV
                        <button
                          className="Browsebtn"
                          onClick={handleBrowseClick}
                        >
                          <input
                            type="file"
                            ref={fileInputRef}
                            accept=".doc, .docx, .pdf, .xls, .xlsx"
                            style={{ display: "none" }}
                            onChange={(e) => {
                              // Handle file selection if needed
                            }}
                          />
                          Browse Now
                        </button>
                      </button>

                      <p className="format">
                        Only: doc/docx/PDF/Xls/Xlsx less than 1MB
                      </p>
                    </div>
                  </div>
                </form>
                <div className="d-flex">
                  <div>
                    <button onClick={closePopup} className="btn">
                      Apply Now
                    </button>
                  </div>

                  <div>
                    <button onClick={closePopup} className="btnre">
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

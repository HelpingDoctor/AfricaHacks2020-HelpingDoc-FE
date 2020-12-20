import React from "react";
import "./Footer.css";
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: 30px !important;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  color: #ffffff;
`;

function Footer() {
  return (
    <div className="footer mt-5" id="footer">
      <div className="container">
        <div className="row footer-wrap">
          <div className="col-md-4">
            <StyledTitle>helpingDoctor</StyledTitle>
            <p className="moto">
              Lorem ipsum dolor sit amet consectetur. Lorem, ipsum dolor.
            </p>
          </div>
          <div className="col-md-8">
            <div className="row d-flex justify-content-between">
              <div className="col-md-8">
                <div className="row qlinksandcontact">
                  <div className="col-5">
                    <p className="quicklinks">Quick links</p>
                    <ul className="footer-list">
                      <li className="list-item">Home</li>
                      <li className="list-item">About</li>
                      <li className="list-item">Contact</li>
                    </ul>
                  </div>
                  <div className="col-7">
                    <p className="contact-us">Contact Us</p>
                    <ul className="footer-list">
                      <li className="list-item">
                        Office Address: <br /> 24 Lekki Street Lagos, Nigeria
                      </li>
                      <li className="list-item">Call: 090 - 000 - 0000</li>
                      <li className="list-item">
                        Email: hello@helpingDoctor.com
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <p className="follow-us">Follow Us</p>
                <ul className="footer-list">
                  <li className="list-item">Twitter</li>
                  <li className="list-item">Instagram</li>
                  <li className="list-item">Facebook</li>
                  <li className="list-item">LinkedIn</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p className="text-left">
              © helpingDoctor 2020 - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

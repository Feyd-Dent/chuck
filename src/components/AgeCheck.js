import React from "react";
import './AgeCheck.css';

const AgeCheck = ({ ageStatus }) => {
  return (
    <div className="age-check-card">
      <h2>Are you under 18?</h2>
      <h5>Or don't want to see the terrible nsfw jokes?</h5>
      <h6>My advice, just click yes, they're really bad!</h6>
      <div className="flex items-center justify-center pa4">
        <a
          href="#0"
          className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4"
        onClick={() => ageStatus(false)}
        >
          <span class="pl1">Yes</span>
        </a>
        <a
          href="#0"
          className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box"
          onClick={() => ageStatus(true)}
        >
          <span className="pr1">No</span>
        </a>
      </div>
      <p className="f6">Please note, these jokes are aggregated from a third party api and I have no control of the content, you have been warned!</p>
    </div>
  );
};

export default AgeCheck;

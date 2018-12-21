import React, { Fragment } from "react";

const InputPage = (props) => {
  return (
    <Fragment>
      <div className="form-group">
        <label htmlFor="example1">{props.firstInput}</label>
        <input type="text" id="example1" className="form-control form-control-md" />
      </div>
      <div className="form-group">
        <label htmlFor="example2">{props.secondInput}</label>
        <input type="text" id="example2" className="form-control form-control-md" />
      </div>
      <div className="form-group">
        <label htmlFor="example3">{props.thirdInput}</label>
        <input type="text" id="example3" className="form-control form-control-md" />
      </div>
      <div className="form-group">
        <label htmlFor="example3">{props.fourthInput}</label>
        <input type="text" id="example3" className="form-control form-control-md" />
      </div>
      <div className="form-group">
        <label htmlFor="example3">{props.fifthInput}</label>
        <input type="text" id="example3" className="form-control form-control-md" />
      </div>
      <div className="form-group">
        <label htmlFor="example3">{props.sixthInput}</label>
        <input type="text" id="example3" className="form-control form-control-md" />
      </div>
    </Fragment>

  );
}

export default InputPage;
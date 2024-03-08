import React from "react";
import "./modal.scss";

const Modals = ({
  id,
  title,
  buttonName,
  color,
  children,
  onClick,
  closeBtn,
}) => {
  return (
    <>
      <div className="modal fade" id={id} tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                id={closeBtn}
              >
                Close
              </button>
              <button
                type="button"
                className={`btn btn-${color}`}
                onClick={onClick}
              >
                {buttonName}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modals;

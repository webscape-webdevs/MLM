import React, { useState } from "react";
import "./courses.css";
import { coursesCard } from "../../dummydata";
import { Box, Modal } from "@mui/material";
import EnroleRegister from "../home/EnroleRegister";
import { useSelector } from "react-redux";

const CoursesCard = () => {
  const { sessionUser, isAuthenticated } = useSelector((state) => state.sessionSlice);
  const [open, setOpen] = useState(false);

  const handleEnrole = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "white",
    border: "none",
    boxShadow: 24,
    borderRadius: "8px",
    p: 4,
  };

  return (
    <>
      <section className="coursesCard">
        <div className="container grid2">
          {coursesCard.map((val) => (
            <div className="items">
              <div className="content flex">
                <div className="left">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                </div>
                <div className="text">
                  <h1>{val.coursesName}</h1>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <label htmlFor="">(5.0)</label>
                  </div>
                  <div className="details">
                    {val.courTeacher.map((details) => (
                      <>
                        <div className="box">
                          <div className="dimg">
                            <img src={details.dcover} alt="" />
                          </div>
                          <div className="para">
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className="price">
                <h3>{val.priceAll}</h3>
              </div>
              <button className="outline-btn" onClick={handleEnrole}>
                ENROLL NOW !
              </button>
            </div>
          ))}
        </div>
      </section>
      <Modal open={open} onClose={handleClose} aria-labelledby="parent-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          {isAuthenticated ? (
            <p id="parent-modal-description" style={{ textAlign: "center" }}>
              You Have Already Enrolled for this Course !!!
            </p>
          ) : (
            <>
              <h2 id="parent-modal-title">Register to Enroll !!!</h2>
              <p id="parent-modal-description">Create an account in order to enroll in course.</p>
              <EnroleRegister setOpen={setOpen} />
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default CoursesCard;

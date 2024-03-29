import React, { useState, useEffect } from "react";
import { db } from "../../firebaseconfig";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Avatar from "@material-ui/core/Avatar";
import addIcon from "../../img/plus-solid.svg";
import addIconB from "../../img/plus-solid-b.svg";
import chartPie from "../../img/chart-pie-solid.svg";
import chartPieB from "../../img/chart-pie-solid-b.svg";
import cardIcon from "../../img/credit-card-regular.svg";
import starIcon from "../../img/star-solid.svg";
import usersIcon from "../../img/users-solid.svg";
import Hidden from "@material-ui/core/Hidden";

import "./Schools.css";

export default function Schools() {
  const [allSchools, setAllSchools] = useState([]);

  useEffect(() => {
    const getSchools = async () => {
      const { docs } = await db.collection("schools").get();
      const schoolsArray = docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));
      console.log(schoolsArray);
      setAllSchools(schoolsArray);
    };
    getSchools();
  }, []);

  const deleteUsers = async (id) => {
    try {
      await db.collection("schools").doc(id).delete();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Header />

      <Hidden only={["md", "lg", "xl"]}>
        <nav className="container nav-container">
          <Link to="/schools/insights">
            <img src={`${chartPie}`} alt=" " />
          </Link>
          <h2>Schools' list</h2>
          <Link to="/schools/form">
            <img src={`${addIcon}`} alt=" " />
          </Link>
        </nav>

        <main className="container white-container">
          {allSchools.length !== 0 ? (
            allSchools.map((item) => (
              <Link to={`schools/detail/${item.id}`}>
                <div className="schoolName-container">
                  <Avatar
                    key={`${item.id}`}
                    alt={`${item.school}`}
                    src={`${item.imgSchool}`}
                    className="avatar-img"
                  />
                  <p>{item.school}</p>
                </div>
              </Link>
            ))
          ) : (
            <div className="error-container">
              No hay ninguna escuela agregada
            </div>
          )}
        </main>
      </Hidden>

      <Hidden only={["sm", "xs"]}>
        <main className="container white-container">
          <nav className="nav-container nav-web">
            {/*            
            <Link to="/schools/insights">
              <div className="web-icons">
                <img src={`${chartPieB}`} alt=" "/>
                <p>Insights</p>
              </div>
            </Link> 
*/}
            <h2>Schools' list</h2>
            <Link to="/schools/form">
              <div className="web-icons">
                <img src={`${addIconB}`} alt=" " />
                <p>Add school</p>
              </div>
            </Link>
          </nav>

          <div className="school-info">
            <div className="list-of-schools">
              {allSchools.length !== 0 ? (
                allSchools.map((item) => (
                  <div className="schoolName-container">
                    <div className="schoolAvatarContainer">
                      <Avatar
                        key={`${item.id}`}
                        alt={`${item.school}`}
                        src={`${item.imgSchool}`}
                        className="avatar-img"
                      />
                      <div className="detail-info-text">
                        <h3>{item.school}</h3>
                        <p>Member since: 10/22/2020</p>
                      </div>
                    </div>

                    <div className="white-container">
                      <div className="card-container line">
                        <img src={`${cardIcon}`} alt=" " />
                        <div className="card-container-text">
                          <p className="card-label-detail">{item.creditCard}</p>
                          <p className="card-label">CARD NUMBER</p>
                        </div>
                      </div>

                      <div className="plan-details">
                        <div className="card-container">
                          <img src={`${starIcon}`} alt=" " />
                          <div className="card-container-text">
                            <p className="card-label-detail">{item.tier}</p>
                            <p className="card-label">TIER</p>
                          </div>
                        </div>
                        <div className="card-container">
                          <img src={`${usersIcon}`} alt=" " />
                          <div className="card-container-text">
                            <p className="card-label-detail">{item.numUsers}</p>
                            <p className="card-label">USERS</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="btn-container">
                      <Link to={`/schools/edit/${item.id}`}>
                        <input
                          type="text"
                          value="Edit"
                          className="btn btn-primary"
                        />
                      </Link>
                      <Link to="schools">
                        <input
                          onClick={(id) => {
                            deleteUsers(item.id);
                          }}
                          type="text"
                          value="Delete"
                          className="btn btn-secondary"
                        />
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="error-container">
                  No hay ninguna escuela agregada
                </div>
              )}
            </div>
          </div>
        </main>
      </Hidden>
    </div>
  );
}

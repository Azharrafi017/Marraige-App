import React from "react";
import AdministrativeTools from "../Photos/Administrative Tools.png";
import TimelineWeek from "../Photos/Timeline Week.png";
import ColorDropper from "../Photos/Color Dropper.png";
import PaintPalette from "../Photos/Paint Palette.png";
import ProjectManagement from "../Photos/Project Management.png";
import AvailableUpdates from "../Photos/Available Updates.png";
import "../css/Home4.css";
const Home4 = () => {
  return (
    <div className="home4">
      <div className="high">
        <div className="home4-I">
          <div className="home4-box1">
            <div className="home4-text">
              <h3 className="heading2">Comprehensive Planning Tools</h3>
              <p className="font-style font-4">
                From budgeting to guest lists, we've got everything you need to
                plan the perfect event.
              </p>
            </div>
            <div className="image">
              <img src={AdministrativeTools} alt="not found" />
              <img src={TimelineWeek} alt="not found" />
            </div>
          </div>
          <div className="home4-box2">
            <div className="home4-text">
              <h3 className="heading2">Customizable Themes</h3>
              <p className="font-style font-4">
                Personalize your event with a variety of themes and decorations.
              </p>
            </div>
            <div className="image">
              <img src={ColorDropper} alt="not found" />
              <img src={PaintPalette} alt="not found" />
            </div>
          </div>
        </div>
        <div className="home4-I">
          <div className="home4-box1 BORDER">
            <div className="home4-text">
              <h3 className="heading2">Vendor Management</h3>
              <p className="font-style font-4">
                Easily find and manage vendors for all your event needs.
              </p>
            </div>
            <div className="image">
              <img
                className="image-project"
                src={ProjectManagement}
                alt="not found"
              />
            </div>
          </div>
          <div className="home4-box2 BORDER">
            <div className="home4-text">
              <h3 className="heading2">Real-time Updates</h3>
              <p className="font-style font-4">
                Stay updated with real-time notifications and reminders.
              </p>
            </div>
            <div className="image">
              <img
                className="home4-img"
                src={AvailableUpdates}
                alt="not found"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="low">
        <div className="">
          <div className="box1">
            <div className="home4-text">
              <h3 className="">Comprehensive Planning Tools</h3>
              <p className="">
                From budgeting to guest lists, we've got everything you need to
                plan the perfect event.
              </p>
            </div>
            <div className="home4-image">
              <img
                className="img-1"
                src={AdministrativeTools}
                alt="not found"
              />
              <img className="img-1" src={TimelineWeek} alt="not found" />
            </div>
          </div>
          <div className="box2">
            <div className="home4-text">
              <h3 className="">Vendor Management</h3>
              <p className="">
                Easily find and manage vendors for all your event needs.
              </p>
            </div>
            <div className="home4-image">
              <img className="img-2" src={ProjectManagement} alt="not found" />
            </div>
          </div>
        </div>
        <div className="">
          <div className="box3">
            <div className="home4-text">
              <h3 className="">Customizable Themes</h3>
              <p className="">
                Personalize your event with a variety of themes and decorations.
              </p>
            </div>
            <div className="home4-image" id="image4">
              <img className="img-3" src={ColorDropper} alt="not found" />
              <img className="img-3" src={PaintPalette} alt="not found" />
            </div>
          </div>
          <div className="box4">
            <div className="home4-text">
              <h3 className="">React-time Updatess</h3>
              <p className="">
                Stay updated with real-time notifications and reminders.
              </p>
            </div>
            <div className="home4-image">
              <img className="img-4" src={AvailableUpdates} alt="not found" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home4;

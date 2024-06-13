import "../Communities/Communities.css";
import running from "../../../landing-page/images/outdoor-shot-active-dark-skinned-man-running-morning-has-regular-trainings-dressed-tracksuit-comfortable-sneakers-concentrated-into-distance-sees-finish-far-away.jpg";
import communityIcon from "../../../landing-page/images/communityIcon.svg";
import clockIcon from "../../../landing-page/images/clock.svg";
import StarIcon from "../../../landing-page/images/193-1934674_star-symbol-text-star-icon-transparent-background.webp";
import addCommunityIcon from "../../../landing-page/images/addCom.svg";
import { Link, Outlet } from "react-router-dom";

export default function Communities() {
  return (
    <div className="communities">
      <Outlet />
      <p className="title">My communities</p>
      <div className="main">
        <div className="first-frame">
          <div className="pic">
            <img src={running} alt="" />
          </div>
          <div className="stats">
            <h2>FITNESS</h2>
            <div className="row-comm">
              <div className="col-comm">
                <h1>Jarul Fitness</h1>
              </div>
              <div className="col-comm">
                <Link to="community">
                  <button>OPEN</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="second-row">
            <div className="second-col">
              <div className="communityIcon">
                <img src={communityIcon} alt="" />
              </div>
              <div className="members">
                <p>47</p>
                <p>Members</p>
              </div>
            </div>
            <div className=" duration">
              <img src={clockIcon} alt="" />
              <p>1 years old</p>
            </div>
          </div>
          <div className="rating">
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
          </div>
          <div className="upcoming-event">
            <h1>UPCOMING EVENT</h1>
          </div>
          <div className="last-row">
            <div className="date">
              <p>2024.05.27</p>
            </div>
            <div className="sessions">
              <p>Physio</p>
              <p>Session</p>
              <p>Lamba Court</p>
              <p>Spintex</p>
            </div>
          </div>
          <div className="bar-wrapper">
            <div className="bar"></div>
          </div>
        </div>
        <div className="first-frame">
          <div className="pic">
            <img src={running} alt="" />
          </div>
          <div className="stats">
            <h2>FITNESS</h2>
            <div className="row-comm">
              <div className="col-comm">
                <h1>Jarul Fitness</h1>
              </div>
              <div className="col-comm">
                <button>OPEN</button>
              </div>
            </div>
          </div>
          <div className="second-row">
            <div className="second-col">
              <div className="communityIcon">
                <img src={communityIcon} alt="" />
              </div>
              <div className="members">
                <p>47</p>
                <p>Members</p>
              </div>
            </div>
            <div className=" duration">
              <img src={clockIcon} alt="" />
              <p>1 years old</p>
            </div>
          </div>
          <div className="rating">
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
          </div>
          <div className="upcoming-event">
            <h1>UPCOMING EVENT</h1>
          </div>
          <div className="last-row">
            <div className="date">
              <p>2024.05.27</p>
            </div>
            <div className="sessions">
              <p>Physio</p>
              <p>Session</p>
              <p>Lamba Court</p>
              <p>Spintex</p>
            </div>
          </div>
          <div className="bar-wrapper">
            <div className="bar"></div>
          </div>
        </div>
        <div className="first-frame">
          <div className="pic">
            <img src={running} alt="" />
          </div>
          <div className="stats">
            <h2>FITNESS</h2>
            <div className="row-comm">
              <div className="col-comm">
                <h1>Jarul Fitness</h1>
              </div>
              <div className="col-comm">
                <button>OPEN</button>
              </div>
            </div>
          </div>
          <div className="second-row">
            <div className="second-col">
              <div className="communityIcon">
                <img src={communityIcon} alt="" />
              </div>
              <div className="members">
                <p>47</p>
                <p>Members</p>
              </div>
            </div>
            <div className=" duration">
              <img src={clockIcon} alt="" />
              <p>
                <span>1</span> years old
              </p>
            </div>
          </div>
          <div className="rating">
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
          </div>
          <div className="upcoming-event">
            <h1>UPCOMING EVENT</h1>
          </div>
          <div className="last-row">
            <div className="date">
              <p>2024.05.27</p>
            </div>
            <div className="sessions">
              <p>Physio</p>
              <p>Session</p>
              <p>Lamba Court</p>
              <p>Spintex</p>
            </div>
          </div>
          <div className="bar-wrapper">
            <div className="bar"></div>
          </div>
        </div>
        <div className="first-frame">
          <div className="pic">
            <img src={running} alt="" />
          </div>
          <div className="stats">
            <h2>FITNESS</h2>
            <div className="row-comm">
              <div className="col-comm">
                <h1>Jarul Fitness</h1>
              </div>
              <div className="col-comm">
                <button>OPEN</button>
              </div>
            </div>
          </div>
          <div className="second-row">
            <div className="second-col">
              <div className="communityIcon">
                <img src={communityIcon} alt="" />
              </div>
              <div className="members">
                <p>47</p>
                <p>Members</p>
              </div>
            </div>
            <div className=" duration">
              <img src={clockIcon} alt="" />
              <p>1 years old</p>
            </div>
          </div>
          <div className="rating">
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
          </div>
          <div className="upcoming-event">
            <h1>UPCOMING EVENT</h1>
          </div>
          <div className="last-row">
            <div className="date">
              <p>2024.05.27</p>
            </div>
            <div className="sessions">
              <p>Physio</p>
              <p>Session</p>
              <p>Lamba Court</p>
              <p>Spintex</p>
            </div>
          </div>
          <div className="bar-wrapper">
            <div className="bar"></div>
          </div>
        </div>
        <div className="first-frame">
          <div className="pic">
            <img src={addCommunityIcon} alt="" />
          </div>
          <div className="stats">
            <h2>FITNESS</h2>
            <div className="row-comm">
              <div className="col-comm">
                <h1>Jarul Fitness</h1>
              </div>
              <div className="col-comm">
                <button>OPEN</button>
              </div>
            </div>
          </div>
          <div className="second-row">
            <div className="second-col">
              <div className="communityIcon">
                <img src={communityIcon} alt="" />
              </div>
              <div className="members">
                <p>47</p>
                <p>Members</p>
              </div>
            </div>
            <div className=" duration">
              <img src={clockIcon} alt="" />
              <p>1 years old</p>
            </div>
          </div>
          <div className="rating">
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
            <img src={StarIcon} alt="" />
          </div>
          <div className="upcoming-event">
            <h1>UPCOMING EVENT</h1>
          </div>
          <div className="last-row">
            <div className="date">
              <p>2024.05.27</p>
            </div>
            <div className="sessions">
              <p>Physio</p>
              <p>Session</p>
              <p>Lamba Court</p>
              <p>Spintex</p>
            </div>
          </div>
          <div className="bar-wrapper">
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

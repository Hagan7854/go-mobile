import "../Community/Community.css";
import imageOnTry from "../../../landing-page/images/full-shot-woman-stretching-outdoors.jpg";
import icon from "../../../landing-page/images/communityIcon.svg";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Community() {
  return (
    <div className="community">
      <div className="categories flex">
        <div className="category">Arts</div>
        <div className="category">Games</div>
        <div className="category">Fitness</div>
        <div className="category">Singing</div>
        <div className="category">Dance</div>
      </div>
      <div className="community-div">
        <p className="heading-communties">Communities</p>
      </div>
      <div className="community-container">
        <div className="community-widget">
          <div className="community-image">
            <img src={imageOnTry} alt="" />
          </div>
          <div className="community-text">
            <div className="title-wrapper">
              <div className="community-title">
                <p>ART</p>
              </div>
              <div className="first-text">
                <img src={icon} alt="" />
                <p>47 Members</p>
              </div>
            </div>
            <div className="green-text">
              <h3>The Creative Canvas</h3>
              <div className="star-rating">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
            <div className="read-more">
              <p>
                Creative Canvas is a vibrant community of artists dedicated to
                exploring and expanding the boundaries of contemporary art.
                Founded in 2015, this group brings together painters, sculptors,
                digital artists, and mixed-media creators who are passionate
                about collaboration and innovation.
              </p>
              <button className="join">join +</button>
            </div>
          </div>
        </div>
        <div className="community-widget">
          <div className="community-image">
            <img src={imageOnTry} alt="" />
          </div>
          <div className="community-text">
            <div className="title-wrapper">
              <div className="community-title">
                <p>ART</p>
              </div>
              <div className="first-text">
                <img src={icon} alt="" />
                <p>47 Members</p>
              </div>
            </div>
            <div className="green-text">
              <h3>The Creative Canvas</h3>
              <div className="star-rating">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                {/* <p>Rating</p> */}
              </div>
            </div>
            <div className="read-more">
              <p>
                Creative Canvas is a vibrant community of artists dedicated to
                exploring and expanding the boundaries of contemporary art.
                Founded in 2015, this group brings together painters, sculptors,
                digital artists, and mixed-media creators who are passionate
                about collaboration and innovation.
              </p>
              <button className="join">join +</button>
            </div>
          </div>
        </div>
        <div className="community-widget">
          <div className="community-image">
            <img src={imageOnTry} alt="" />
          </div>
          <div className="community-text">
            <div className="title-wrapper">
              <div className="community-title">
                <p>ART</p>
              </div>
              <div className="first-text">
                <img src={icon} alt="" />
                <p>47 Members</p>
              </div>
            </div>
            <div className="green-text">
              <h3>The Creative Canvas</h3>
              <div className="star-rating">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
            <div className="read-more">
              <p>
                Creative Canvas is a vibrant community of artists dedicated to
                exploring and expanding the boundaries of contemporary art.
                Founded in 2015, this group brings together painters, sculptors,
                digital artists, and mixed-media creators who are passionate
                about collaboration and innovation.
              </p>
              <button className="join">join +</button>
            </div>
          </div>
        </div>
        <div className="community-widget">
          <div className="community-image">
            <img src={imageOnTry} alt="" />
          </div>
          <div className="community-text">
            <div className="title-wrapper">
              <div className="community-title">
                <p>ART</p>
              </div>
              <div className="first-text">
                <img src={icon} alt="" />
                <p>47 Members</p>
              </div>
            </div>
            <div className="green-text">
              <h3>The Creative Canvas</h3>
              <div className="star-rating">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
            <div className="read-more">
              <p>
                Creative Canvas is a vibrant community of artists dedicated to
                exploring and expanding the boundaries of contemporary art.
                Founded in 2015, this group brings together painters, sculptors,
                digital artists, and mixed-media creators who are passionate
                about collaboration and innovation.
              </p>
              <button className="join">join +</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

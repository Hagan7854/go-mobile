import "../Community/Community.css";
import imageOnTry from "../../../landing-page/images/full-shot-woman-stretching-outdoors.jpg";
import icon from "../../../landing-page/images/communityIcon.svg";
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
      <div>
        <p className="heading-communties">Communities</p>
      </div>
      <div className="community-container">
        <div className="community-widget">
          <div className="community-image">
            <img src={imageOnTry} alt="" />
          </div>
          <div className="community-text">
            <div className="community-title">
              <p>ART</p>
            </div>
            <div className="first-text">
              <img src={icon} alt="" />
              <p>47 Members</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

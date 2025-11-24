import blueGuy from "../images/blue_guy.png";
// import bronzeBadge from "../images/Bronze_badge.png";
// import goldBadge from "../images/Gold_badge.png";
// import joystick from "../images/joystick.png";
// import newbieBadge from "../images/Newbie_badge.png";
// import silverBadge from "../images/Sliver_badge.png";

export const PortfolioHeader = () => {
  return (
    <div>
      <div>
        <img src={blueGuy} alt="Logo" className="w-5 h-5" />
      </div>
      <div>
        <h1>PortfolioHome Page!</h1>
        <p>Welcome to my first page!</p>
      </div>
    </div>
  );
};

export default PortfolioHeader;

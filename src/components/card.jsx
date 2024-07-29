import profilePic from "./assets/zid.jpg";

export function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Logo"></img>
            <h2 className="card-title">SigmaFPS</h2>
            <p className="card-description">Hi! I'm your friendly gamer Sigma.</p>
        </div>
    )
}
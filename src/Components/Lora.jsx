import "./Lora.css";

export default function Lora() {
  return (
    <div className="container">

      {/* Card 1 */}
      <div className="card">
        <img src="https://i.pravatar.cc/150?img=3" className="profile-img" />
        <h2 className="title">Nico</h2>
        <p className="role">Frontend Developer</p>
        <button className="btn">Follow</button>
      </div>

      {/* Card 2 */}
      <div className="card">
        <img src="https://i.pravatar.cc/150?img=5" className="profile-img" />
        <h2 className="title">Alex</h2>
        <p className="role">UI Designer</p>
        <button className="btn">Follow</button>
      </div>

    
  {/* Card 3*/}
      <div className="card">
        <img src="https://i.pravatar.cc/150?img=5" className="profile-img" />
        <h2 className="title">Alex</h2>
        <p className="role">UI Designer</p>
        <button className="btn">Follow</button>
      </div>


    </div>
  );
}
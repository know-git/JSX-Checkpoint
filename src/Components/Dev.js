import myimg from "../imageInSrc.jpg";
import "./style.css";

function Dev() {
  return (
    <div className="container">
      <div
        style={{
          border: "solid 1px black",
          maxWidth: "100vw",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <h1 className="title red">Ahmed El Ajmi</h1>
        <br />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <img src={myimg} width="400" />
          <img src="/imageInPublic.jpg" width="400" />
        </div>
      </div>
      <video width="320" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
export default Dev;

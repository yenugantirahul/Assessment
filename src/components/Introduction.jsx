// src/components/Introduction.js

import pexels from "../assets/pexels.png";
import "../styles/introduction.css";

function Introduction() {
  return (
    <section className="introduction">
      <div className="pexel">
        <img src={pexels} alt="pexels" />
      </div>
      <div className="content">
        <h2 className="">Explore Your Path</h2>
        <div className="para">
          Whether youre passionate about Engineering, eager to lead in
          Management, driven by Commerce, or inspired by the Arts, choose the
          study goal that aligns with your future aspirations and start your
          journey today.
        </div>
        <button className="btn">Explore</button>
      </div>
    </section>
  );
}

export default Introduction;

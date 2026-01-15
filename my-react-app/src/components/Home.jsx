import myphoto from "../assets/myphoto.jpeg"
function Home() {
  return (
    <section id="home" className="home">
      <div className="home-container">

        <div className="home-text">
          <h1>Lekhya</h1>
          <h2>I'm a Web Developer</h2>

          <p>
            I am a B.Tech Computer Science student passionate about building
            modern, responsive, and user-friendly web applications. I enjoy
            working with HTML, CSS, JavaScript, and React, and I’m continuously
            learning new technologies to grow as a full-stack developer.
          </p>
        </div>
        <div className="home-image">
          <img src={myphoto} alt="Lekhya" />
        </div>

      </div>
    </section>
  );
}
export default Home;



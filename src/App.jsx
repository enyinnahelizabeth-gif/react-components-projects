import AboutSection from "./components/About";
import ProjectsSection from "./components/Projects";
import SkillsSection from "./components/Skills";

function App() {
  return (
    <div
      className="container text-white-500
     mx-auto shadow border-4 items-center   hover:bg-cyan-500 justify-center text-sm md:text-lg lg:text-xl m-4 mt-10 mr-8 m8-8 ml-8 w-1/2 p-10 cursor-pointer hover:bg-white-500 "
    >
      <h1 className="justify-center text-white-500 p-10 rounded-lg uppercase top-0 text-center bg-blue pt-10 :">
        Elizabeth Enyinnah
      </h1>

      <section className=" justify-center rounded-lg  hover:bg-cyan-500  about-section">
        <p>
          I'm an aspiring full-stack developer,with a strong interest in
          software development, she is building skills to create innovative
          digital solutions. I'm also creative, enjoying content creation, image
          design, and exploring 3D animation technologies. <br />
          Driven, curious, and goal-oriented, I continuously seek opportunities
          for personal growth and professional excellence.
        </p>
      </section>

      <section className="hover:bg-project-section rounded-full ">
        <h2 className="justify-center p-7 uppercase text-center text-white-500 mt-auto">
          Projects I've worked on
        </h2>
        <li>Gigsta Recreate</li>
        <li>Tictactoe game</li>
        <li>Javascript quiz</li>
        <li>Doggo fetch</li>
      </section>

      <section className=" justify-center bg-cover  skills-section">
        <h2 className="text-center uppercase hover:bg-red-500 border-white-500 ">
          My Skills
        </h2>
        <li>Html</li>
        <li>Css</li>
        <li>Javascript</li>
        <li>Git/Github</li>
        <li>Figma</li>
        <li></li>
      </section>
    </div>
  );
}

export default App;

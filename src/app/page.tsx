import ProfilePic from "@/app/images/profile-pic.jpeg"

const Home = () => {

  return (

   <div className="flex flex-col">
     <div style={{ marginTop: "200px" }} className="flex flex-row justify-around items-center">
      <div>
        <h1 className="text-stone-300 text-8xl">Hey there, <br /> I'm <span className="text-violet-500">Bryce Berczik</span>.</h1>
        <h3 className="text-stone-300 text-lg mt-7">Full stack developer making creative and efficient <br /> applications in Austin, Texas.</h3>
        <button className="bg-stone-300 mix-blend-lighten text-3xl p-3 rounded-md mt-5 font-medium">Projects</button>
      </div>
      <div>
        <img src={ProfilePic.src} alt="Bryce Berczik's profile picture" style={{ height: "400px", width: "400px" }} className="rounded-full object-cover object-top" />
      </div>
    </div>
    <div className="flex flex-col" style={{ marginTop: "400px" }}>
      <h1 className="text-stone-300 text-center text-6xl font-light">ABOUT ME</h1>
      <div className="flex flex-row">
        <div>
          <h3>Get to know me!</h3>
          <p></p>
        </div>
        <div></div>
      </div>
    </div>
   </div>
  )
};

export default Home; 
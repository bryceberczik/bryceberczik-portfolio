import ProfilePic from "@/app/images/profile-pic.jpeg"

const Home = () => {

  return (

   <div className="flex flex-col">
     <div style={{ marginTop: "200px" }} className="flex flex-row justify-around items-center">
      <div>
        <h1 className="text-stone-300 text-8xl">Hey there, <br /> I'm <span className="text-violet-500">Bryce Berczik</span>.</h1>
        <h3 className="text-stone-300 text-lg mt-7">Full stack developer making creative and efficient <br /> applications in Austin, Texas.</h3>
        <button className="bg-stone-300 mix-blend-lighten text-3xl p-3 rounded-md mt-5 font-medium shadow-custom">Projects</button>
      </div>
      <div>
        <img src={ProfilePic.src} alt="Bryce Berczik's profile picture" style={{ height: "400px", width: "400px" }} className="rounded-full object-cover object-top shadow-custom" />
      </div>
    </div>
    <div className="flex flex-col mx-40" style={{ marginTop: "400px" }}>
      <h1 className="text-stone-300 text-center text-6xl font-light">ABOUT ME</h1>
      <h2 className="text-stone-300 text-center text-2xl mt-10">Here, you can learn more about me, what I do, and the programming and <br /> technology skills I currently possess.</h2>
      <div className="flex flex-row justify-around mt-20">
        <div className="w-1/2 mr-20 p-5 rounded-lg bg-neutral-800 bg-opacity-50 backdrop-blur-lg shadow-custom">
          <h3 className="text-stone-300 text-3xl mb-10 font-semibold">Get to know me!</h3>
          <p className="text-stone-300 text-xl mb-5">I’m a Full-Stack Developer with a strong passion for Front-End development, focused on building dynamic, responsive web applications that ensure a seamless user experience. My expertise includes using React, Next.js, and Tailwind to create polished, modern interfaces. I also work with both NoSQL and SQL databases like PostgreSQL and MongoDB, providing solid back-end support for my projects.</p>
          <p className="text-stone-300 text-xl mb-5">In addition to my development work, I enjoy sharing my knowledge with the developer community. Over the years, I’ve gathered valuable insights and tips that I publish on platforms like LinkedIn and Instagram, where I post content that can help other developers grow and improve their skills.</p>
          <p className="text-stone-300 text-xl mb-5">I’m open to new job opportunities where I can bring my skills to a collaborative team, while also continuing to learn and evolve as a developer. If you have a role that aligns with my background and experience, feel free to reach out!</p>
        </div>

        <div className="w-1/2 ml-20">
          <h3 className="text-stone-300 text-3xl mb-10 font-semibold">Tools</h3>

          <div></div>
        </div>

      </div>
    </div>
   </div>
  )
};

export default Home; 
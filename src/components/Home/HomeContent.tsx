import { METADATA } from "@/common/constant/metadata";
import { motion, LazyMotion, domAnimation, m, animate } from "framer-motion";
import SkillList from "./Skills/SkillList";

const HomeContent = () => {
  const navbarVariants = {
    hidden: {
      opacity: 0.1,
      filter: "blur(3px)",
      y: 70,
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        ease: "anticipate",
        duration: 0.7,
      },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial="hidden"
        variants={navbarVariants}
        animate="visible"
        className="max-w-3xl overflow-x-hidden space-y-12 md:space-y-20 px-6"
      >
        <m.div
          className="flex flex-col-reverse md:grid grid-cols-3 gap-3"
          layout
        >
          <m.div className="col-span-2 order-2 md:order-1">
            <h2 className="font-bold md:text-2xl text-xl mb-1.5">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b52ff] to-pink-500">
                Hello
              </span>
              {" "}
              <span className="text-primary">
              it's me <div className="text-3xl ml-1.5 animate-wave">👋</div>
              </span>
            </h2>
            <h1 className="text-4xl font-extrabold mb-1.5">
              {METADATA.authors.name}.
            </h1>
            {/* <p className="mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p> */}
            <p className="">
              Welcome to my corner of the web, a digital space where I share my
              thoughts, experiences, and insights on software engineering and
              technology. In my free time, I build coding tutorials and
              experiment with new web app technologies. Also, your comments,
              questions, and shared experiences are always welcome here.
            </p>
          </m.div>
          <m.div className="order-2 md:order-1" layout>
            <img
              src="https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg"
              className="md:ml-auto shadow rounded-full w-36 md:w-48"
              alt="profileImage"
            />
          </m.div>
        </m.div>

        <m.div className="overflow-hidden">
          <h1 className="text-2xl font-bold mb-2">Favorite Things</h1>
          <p className="mb-4">
            I love exploring new libraries, frameworks and programing languages.
            Here is a list of technologies that I have worked with.
          </p>
          <m.div
          className="mb-4"
          >
            <SkillList />
          </m.div>
        </m.div>
      </m.div>
    </LazyMotion>
  );
};

export default HomeContent;

import UserClass from "./UserClass"

const About = () => {
  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 p-6 gap-6 auto-rows-auto">
      <UserClass name={"Aman Jain"} role={"Software Developer"} location={"Delhi"} />
      <UserClass name={"Aman Jain"} role={"Software Developer"} location={"Delhi"} />
      <UserClass name={"Aman Jain"} role={"Software Developer"} location={"Delhi"} />
      <UserClass name={"Aman Jain"} role={"Software Developer"} location={"Delhi"} />
    </div>
  );
};

export default About;

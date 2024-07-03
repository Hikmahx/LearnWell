import React from "react";
import Card from "../components/Card/Card";
import SubjectsIcon from "../assets/subjects.svg";
import NotesIcon from "../assets/notes.svg";
import UsersIcon from "../assets/users.svg";
import QuizIcon from "../assets/quiz.svg";
const Home = () => {
  return (
    <div className="mx-10 my-8">
      <h1 className="mb-9 font-semibold text-2xl">Dashboard</h1>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card total={"57"} item={"Subjects"} icon={SubjectsIcon} />
        <Card total={"44"} item={"Users"} icon={UsersIcon} />
        <Card total={"103"} item={"Quiz"} icon={QuizIcon} />
        <Card total={"79"} item={"Notes"} icon={NotesIcon} />
      </section>
    </div>
  );
};

export default Home;

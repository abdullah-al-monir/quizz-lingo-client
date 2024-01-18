import { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MaxWidth from "../../../components/MaxWidth";
import QuizzCard from "./QuizzCard";
import { UserAuth } from "../../../providers/AuthProvider";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const { user } = useContext(UserAuth);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic
      .get("/quizzes")
      .then((res) => setQuizzes(res.data))
      .catch((error) => console.log(error));
  }, [axiosPublic]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setTotalScore((prevScore) => prevScore + 1);
    }
  };
  const handleAddScore = () => {
    if (user.length === 0) {
      enqueueSnackbar("Please login first", {
        variant: "error",
        autoHideDuration: 1000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      navigate("/signIn");
    }
  };

  return (
    <div>
      <MaxWidth>
        <div>{totalScore}</div>
        <Tabs>
          <TabList>
            <Tab>Beginner</Tab>
            <Tab>Intermediate</Tab>
            <Tab>Advanced</Tab>
          </TabList>

          <TabPanel>
            <div>
              {quizzes
                .filter((q) => q.difficulty === "Beginner")
                .map((quiz, idx) => (
                  <QuizzCard
                    key={quiz.id}
                    quiz={quiz}
                    idx={idx}
                    onAnswer={handleAnswer}
                  />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              {quizzes
                .filter((q) => q.difficulty === "Intermediate")
                .map((quiz, idx) => (
                  <QuizzCard
                    key={quiz.id}
                    quiz={quiz}
                    idx={idx}
                    onAnswer={handleAnswer}
                  />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              {quizzes
                .filter((q) => q.difficulty === "Advanced")
                .map((quiz, idx) => (
                  <QuizzCard
                    key={quiz.id}
                    quiz={quiz}
                    idx={idx}
                    onAnswer={handleAnswer}
                  />
                ))}
            </div>
          </TabPanel>
        </Tabs>
        <div className="text-center my-5">
          <button
            onClick={handleAddScore}
            className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-800"
          >
            Submit
          </button>
        </div>
      </MaxWidth>
    </div>
  );
};

export default Quizzes;

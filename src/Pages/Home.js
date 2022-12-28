import React from "react";
import { useState, useEffect } from "react";
import { getAllDatasMocked, getAllDatas } from "../Api/DataApi";

import User from "../Models/User";
import Perf from "../Models/Perf";
import Session from "../Models/Session";
import Average from "../Models/Average";

import Nutrition from "../Components/Nutrition";
import Activity from "../Components/Activity";
import Score from "../Components/Score";
import Performance from "../Components/Performance";
import Sessions from "../Components/Sessions";

import Erreur404 from "../Pages/Erreur_404";
import "../Style/Page/Home.scss";
import fire from "../assets/fire.png";
import chicken from "../assets/chicken.png";
import apple from "../assets/apple.png";
import hamburger from "../assets/hamburger.png";

import { useParams } from "react-router-dom";

function Home() {
  const [isData, setIsData] = useState(false);
  const [getUserDatas, setGetUserDatas] = useState(null);
  const [getActivityDatas, setGetActivityDatas] = useState(null);
  const [getAverageDatas, setGetAverageDatas] = useState(null);
  const [getPerfDatas, setGetPerfDatas] = useState(null);

  let data2;

  let { userId } = useParams();

  /**
   *  redirection user
   * @userId => id
   */


  let dataBackend = false ;

  async function getUserData() {
    try {
      dataBackend = true
      const userDatas = await getAllDatas(userId);

      const user = new User(userDatas.user.data);
      const perf = new Perf(userDatas.perf.data);
      const average = new Average(userDatas.average.data);
      // console.log(userDatas.activity.data.data.sessions)
      const session = new Session(userDatas.activity.data.data.sessions);

      console.log(session);

      // Placement of data in the useState
      setGetUserDatas(user.data);
      setGetActivityDatas(session.props);
      setGetPerfDatas(perf.data);
      setGetAverageDatas(average.data);

      setIsData(true);
    } catch (error) {
      setIsData(false);
    }
  }


  async function switchDataUser () {

    if(dataBackend === false) {
      try {

        /**
         * local == Data Moked
         */
        const userDatas = await getAllDatasMocked();

        const user = new User(userDatas.user);
        const perf = new Perf(userDatas.perf);
        const average = new Average(userDatas.average);
        const session = new Session(userDatas.session);


        setGetUserDatas(user.props);
        setGetPerfDatas(perf.props);
        setGetAverageDatas(average.props);
        setGetActivityDatas(session.props.sessions);
        setIsData(true);

      } catch (error) {

        setIsData(false);
      }
    } else {
      return getUserData()
    }


  }


  switchDataUser ()


  if (isData !== undefined) {
    data2 = "1";
  }

  return isData ? (
      <div className="div-home">
        <div className="nameUser">
          <h1 style={{ color: "red" }}>
            Bonjour {getUserDatas.userInfos.firstName}{" "}
          </h1>
          <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
        </div>

        <div className="div-activity-home">
          <Activity dataAc={getActivityDatas} />
        </div>

        <div className="tree-blocks">
          <div className="div-perf-home">
            <Performance dataPerf={getPerfDatas.data} />
          </div>

          <div className="div-score-home">
            <Score
                dataSc={getUserDatas.todayScore}
                dataSc2={getUserDatas.score}
            />
          </div>

          <div className="div-perf-sessions">
            <Sessions dataAv={getAverageDatas.sessions} />
          </div>
        </div>

        <div className="div-home-right">
          <div className="blocks-energy">
            <Nutrition
                image={fire}
                data={getUserDatas.keyData.calorieCount + "KCal"}
                text="Calories"
            />
            <Nutrition
                image={chicken}
                data={getUserDatas.keyData.proteinCount + "g"}
                text="Protines"
            />
            <Nutrition
                image={apple}
                data={getUserDatas.keyData.carbohydrateCount + "g"}
                text="Glucides"
            />
            <Nutrition
                image={hamburger}
                data={getUserDatas.keyData.lipidCount + "g"}
                text="Lipides"
            />
          </div>
        </div>
      </div>
  ) : (
      data2 === "1" && <Erreur404 />
  );
}
export default Home;

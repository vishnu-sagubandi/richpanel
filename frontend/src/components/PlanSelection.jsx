import React, { useContext, useState, useEffect } from "react";
import styles from "../styles/planselectionPage.module.css";
import AuthContext from "../context/AuthContext";

function PlanSelection() {
  const [data, setData] = useState([]);
  let { handlePlan } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/subscriptions/list")
      .then((res) => {
        return res.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        console.log(jsonData[0].metadata.quality);
      });
  }, []);

  const [selectedPlan, setSelectedPlan] = useState(1);

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <h1 className={styles.title}>Choose the right plan for you</h1>

        <div className={styles.body}>
          <div className={styles.rowheader}>
            <div className={styles.tglBtn}></div>
            <div className={styles.plan}>
              <div
                className={selectedPlan === 1 ? styles.active : ""}
                onClick={() => setSelectedPlan(1)}
              >
                Mobile
              </div>
            </div>
            <div className={styles.plan}>
              <div
                className={selectedPlan === 2 ? styles.active : ""}
                onClick={() => setSelectedPlan(2)}
              >
                Basic
              </div>
            </div>
            <div className={styles.plan}>
              <div
                className={selectedPlan === 3 ? styles.active : ""}
                onClick={() => setSelectedPlan(3)}
              >
                Standard
              </div>
            </div>
            <div className={styles.plan}>
              <div
                className={selectedPlan === 4 ? styles.active : ""}
                onClick={() => setSelectedPlan(4)}
              >
                Premium
              </div>
            </div>
          </div>
          <div className={styles.rows}>
            <div className={styles.row}>
              <div className={styles.key}>Monthly Price</div>
              <div className={styles.val}></div>
              <div className={styles.val}></div>
              <div className={styles.val}></div>
              <div className={styles.val}></div>
            </div>
            <div className={styles.row}>
              <div className={styles.key}>Video Quality</div>
              <div className={styles.val}>Good</div>
              <div className={styles.val}>Good</div>
              <div className={styles.val}>Better</div>
              <div className={styles.val}>4K+HDR</div>
            </div>
            <div className={styles.row}>
              <div className={styles.key}>Resolution</div>
              <div className={styles.val}>480p</div>
              <div className={styles.val}>480p</div>
              <div className={styles.val}>1080p</div>
              <div className={styles.val}>4K+HDR</div>
            </div>
            <div className={styles.row}>
              <div className={styles.key}>Devices you can use to watch</div>
              <div className={styles.val}>
                <div>Phone</div>
                <div>TABLET</div>
              </div>
              <div className={styles.val}>
                <div>Phone</div>
                <div>TABLET</div>
                <div>Computer</div>
                <div>TV</div>
              </div>
              <div className={styles.val}>
                <div>Phone</div>
                <div>TABLET</div>
                <div>Computer</div>
                <div>TV</div>
              </div>
              <div className={styles.val}>
                <div>Phone</div>
                <div>TABLET</div>
                <div>Computer</div>
                <div>TV</div>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.nxtBtn} onClick={handlePlan}>
          Next
        </button>
      </div>
    </div>
  );
}

export default PlanSelection;

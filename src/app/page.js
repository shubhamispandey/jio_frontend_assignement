import Image from "next/image";
import staticData from "@/utils/staticData";
import styles from "./page.module.css";

export default function Home() {
  const {
    form: { images },
  } = staticData;
  return (
    <main className={styles.main}>
      <div className={styles.survey}>
        <div className={styles.survey__lightening}>
          <i className="fas fa-bolt"></i>
          <h2 className={styles.heading__secondary}>Survey</h2>
        </div>
        <div className={styles.survey__wrapper}>
          <p className={styles.text}>See your Growth and get Support</p>
          <div className={styles.break} />
          <form className={styles.form}>
            <div className={styles.form_group}>
              <input type="text" id="surveyname" placeholder="Name" />
              <label htmlFor="surveyname">Name</label>
              <div className={styles.input__icon}>
                <Image src={images.formName} />
              </div>
            </div>
            <div className={styles.form_group}>
              <input type="email" id="surveyemail" placeholder="E-mail" />
              <label htmlFor="surveyemail">E-mail</label>
              <div className={styles.input__icon}>
                <Image src={images.formEmail} />
              </div>
            </div>
            <div className={styles.form_group}>
              <input type="number" id="surveynumber" placeholder="Age" />
              <label htmlFor="surveynumber">Age</label>
              <div className={styles.input__icon}>
                <Image src={images.formAge} />
              </div>
            </div>
            <div className={styles.form_group}>
              <textarea id="surveyComments" placeholder="Comments" />
              <label htmlFor="surveyComments">Comments</label>
              <div className={styles.input__icon}>
                <Image src={images.formComment} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

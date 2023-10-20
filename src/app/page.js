"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import PageSpinner from "@/components/PageSpinner/PageSpinner";
import staticData from "@/utils/staticData";
import styles from "./page.module.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const {
    form: { images },
  } = staticData;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer); // Clear the timer on unmount
  }, []);

  if (isLoading) {
    return <PageSpinner />;
  }

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
            {renderFormInput("Name", "surveyname", images.formName)}
            {renderFormInput("E-mail", "surveyemail", images.formEmail)}
            {renderFormInput("Age", "surveynumber", images.formAge)}
            {renderFormTextarea(
              "Comments",
              "surveyComments",
              images.formComment
            )}
          </form>
        </div>
      </div>
    </main>
  );
}

function renderFormInput(label, id, src) {
  return (
    <div className={styles.form_group}>
      <input type="text" id={id} placeholder={label} />
      <label htmlFor={id}>{label}</label>
      <div className={styles.input__icon}>
        <Image alt="formIcon" width={20} height={20} src={src} />
      </div>
    </div>
  );
}

function renderFormTextarea(label, id, src) {
  return (
    <div className={styles.form_group}>
      <textarea id={id} placeholder={label} />
      <label htmlFor={id}>{label}</label>
      <div className={styles.input__icon}>
        <Image alt="formIcon" width={20} height={20} src={src} />
      </div>
    </div>
  );
}

import React from "react";
import { useHistory } from "react-router";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Страница информации</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit obcaecati
        assumenda, cum quos repellendus quas recusandae tempora odio deserunt
        totam ratione laudantium saepe soluta! Quas deserunt distinctio atque
        praesentium magni.
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Обратно к списку дел
      </button>
    </>
  );
};

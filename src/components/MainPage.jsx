import React, { useState } from "react";
import PopupPage from "./MainPage/PopupPage";
import RecommendPage from "./MainPage/RecommendPage";
import ReviewPage from "./MainPage/ReviewPage";
import SearchPage from "./MainPage/SearchPage";
import YoutubePage from "./MainPage/YoutubePage";

const MainPage = () => {
  const [popup, setPopup] = useState(true);
  return (
    <div>
      <h1>Main Page</h1>
      {popup ? <PopupPage onClose={setPopup} /> : null}
      <SearchPage />
      <RecommendPage />
      <ReviewPage />
      <YoutubePage />
    </div>
  );
};

export default MainPage;

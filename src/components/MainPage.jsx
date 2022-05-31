import React from "react";
import PopupPage from "./MainPage/PopupPage";
import RecommendPage from "./MainPage/RecommendPage";
import ReviewPage from "./MainPage/ReviewPage";
import SearchPage from "./MainPage/SearchPage";
import YoutubePage from "./MainPage/YoutubePage";

const MainPage = () => {
    return (
        <div>
            <h1>Main Page</h1>
            <PopupPage />
            <SearchPage />
            <RecommendPage />
            <ReviewPage />
            <YoutubePage />
        </div>
    );
};

export default MainPage;

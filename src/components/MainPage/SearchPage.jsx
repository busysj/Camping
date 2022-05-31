import React from "react";
import SearchIcon from '@mui/icons-material/Search';

const SeachPage = () => {
  return (
    <div className="search__section">
      <div className="search__backgroundimg">
        <div style={{"padding":"1px"}}></div>
        <div className="search__input">
          <input type="text" placeholder="검색어를 입력 해 주세요" />
          <button><SearchIcon></SearchIcon></button>
          
        </div>
        <ul className="search__filter">
          <li>#필터</li>
          <li>#부산</li>
          <li>#바다</li>
          <li>#노지</li>
          <li>#사상</li>
        </ul>
      </div>
    </div>
  );
};

export default SeachPage;

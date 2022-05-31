import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const SeachPage = () => {
    return (
        <div className="search__section">
            <div className="search__backgroundimg">
                <div style={{ padding: "1px" }}></div>
                <form action="">
                    <div className="search__input">
                        <span>
                            <input
                                type="text"
                                placeholder="검색어를 입력 해 주세요"
                            />
                            <button>
                                <SearchIcon
                                    viewBox="3 3 15 15"
                                    className="btn_icon"
                                />
                            </button>
                        </span>
                    </div>
                </form>
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

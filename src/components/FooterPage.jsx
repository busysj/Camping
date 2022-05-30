import React from "react";

const FooterPage = () => {
  return (
    <div className="footer__section">
      <div className="footer__img">
        <a href="/">
          <img src="" alt="camping 로고" />
        </a>
      </div>
      <div className="footer__center">
        <div className="footer__bottommenu">
          <a href="/">개인정보 취급방침</a>
          <span>|</span>
          <a href="/">홈페이지 이용약관</a>
          <span>|</span>
          <a href="/">광고 및 제휴문의</a>
          <span>|</span>
          <a href="/">고객센터</a>
          <span>|</span>
          <a href="/">회원가입</a>
          <span>|</span>
          <a href="/">로그인</a>
        </div>
        <div className="footer__copyright">
          <span>Copyright © 2022 </span>
          <span style={{"fontWeight": "bold"}}>www.camping.com</span>
          <span>. All rights reserved.</span>
          <br />
          <div>
            <span><i>전화아이콘</i>010-9990-7471 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span><i>메일아이콘</i><a href="mailto:seren0120@naver.com">seren0120@naver.com</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;

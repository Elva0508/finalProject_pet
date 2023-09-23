import React, { useState } from "react";
import Filter from "./filter";
import LatestMission from "./latest-mission";
import RoleSelection from "./role-selection";
import Search from "./search";

const FamousHelperCard = () => {
  const [isFavorite, setIsFavorite] = useState(false); // 初始狀態為未收藏

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite); // 切換收藏狀態
  };
  return (
    <>
      <div className="famous-helper-card d-flex align-items-center">
        <img className="famous-helper-card-img" src="/kitten.jpg" alt="任務" />
        <div className="helper-content ms-2">
          <div className="title size-6">Pet House</div>
          <div className="ranking">
            <img src="/star.svg" alt="星星" />
            <img src="/star.svg" alt="星星" />
            <img src="/star.svg" alt="星星" />
            <img src="/star.svg" alt="星星" />
            <img src="/star.svg" alt="星星" />
          </div>
          <div className="helper-content-info d-flex justify-content-between">
            <div>
              <p>台中市大甲區</p>
              <p>
                服務項目：<span>安親寄宿</span>
              </p>
              <p>服務時間：周一至周日</p>
            </div>
            <img
              src={isFavorite ? "/heart-clicked.svg" : "/heart.svg"}
              alt={isFavorite ? "已收藏" : "未收藏"}
              onClick={toggleFavorite}
            />
          </div>
          <div className="d-flex justify-content-between align-items-end price">
            <div>
              單次<span className="size-6"> NT$140</span>
            </div>
            <button className="size-6 btn-confirm">洽詢</button>
          </div>
        </div>
      </div>
    </>
  );
};

const SingleHelperCard = () => {
  const [isFavorite, setIsFavorite] = useState(false); // 初始狀態為未收藏
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite); // 切換收藏狀態
  };
  return (
    <>
      <div className="single-card d-flex flex-column align-items-center">
        <img className="single-card-img" src="/kitten.jpg" alt="任務" />
        <div className="helper-content">
          <div className="single-card-title size-6">Pet House</div>
          <div className="ranking d-flex align-items-center mb-1">
            <img src="/star.svg" alt="星星" />
            <img src="/star.svg" alt="星星" />
            <img src="/star.svg" alt="星星" />
            <img src="/star.svg" alt="星星" />
            <img src="/star.svg" alt="星星" />
          </div>
          <div className="single-card-info d-flex justify-content-between">
            <div>
              <p>台中市大甲區</p>
              <p>
                服務項目：<span>安親寄宿</span>
              </p>
              <p>服務時間：周一至周日</p>
            </div>
            <img
              src={isFavorite ? "/heart-clicked.svg" : "/heart.svg"}
              alt={isFavorite ? "已收藏" : "未收藏"}
              onClick={toggleFavorite}
            />
          </div>

          <div className="d-flex justify-content-between align-items-end price">
            <div>
              單次<span className="size-6"> NT$140</span>
            </div>
            <button className="size-6 btn-confirm">洽詢</button>
          </div>
        </div>
      </div>
    </>
  );
};
const MissionHelperList = () => {
  return (
    <div className="mission-helper-list container">
      <div className="search d-flex justify-content-between align-items-center">
        <RoleSelection />
        <Search />
      </div>
      <div className="filters">
        <Filter
          items={["測試1", "測試2"]}
          title="服務類型"
          src={"/job-icon/plus-service.svg"}
        />
        <Filter
          items={["測試1", "測試2"]}
          title="服務費用"
          src={"/job-icon/Heart-price.svg"}
        />
        <Filter
          items={["測試1", "測試2"]}
          title="服務地區"
          src={"/job-icon/Discovery-date.svg"}
        />
        <Filter
          items={["測試1", "測試2"]}
          title="服務次數"
          src={"/job-icon/Discovery-date.svg"}
        />
      </div>
      <div className="d-flex">
        <section className="famous-helper justify-content-between">
          <p className="famous-helper-title size-5">最熱門小幫手</p>
          <FamousHelperCard />
          <FamousHelperCard />
          <FamousHelperCard />
        </section>
        <section className="helper-list">
          <SingleHelperCard />
        </section>
      </div>
    </div>
  );
};

export default MissionHelperList;
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MdHomeRepairService } from "react-icons/md";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import { Empty } from "@douyinfe/semi-ui";
import {
  IllustrationNoContent,
  IllustrationNoContentDark,
} from "@douyinfe/semi-illustrations";
export const RecordTemplate = ({
  icon,
  title,
  item1,
  info,
  setInfo,
  status,
  setStatus,
}) => {
  const router = useRouter();
  const handleStatus = (e) => {
    console.log(e.target.id);
    console.log(e.currentTarget);
    if (status == e.target.id) {
      return;
    }
    switch (e.target.id) {
      case 1:
        setStatus(1);
        break;
      case 2:
        setStatus(2);
        break;
      case 3:
        setStatus(3);
        break;
      case 4:
        setStatus(4);
        break;
    }
  };
  useEffect(() => {
    for (let i = 1; i <= 4; i++) {
      const focusBtn = document.querySelector(`#btn${i}`);
      focusBtn.classList.remove("btn-focus");
    }
    const focusBtn = document.querySelector(`#btn${status}`);
    focusBtn.classList.add("btn-focus");
  }, [status]);
  return (
    <>
      <h5 className="size-5 d-flex align-items-start fw-bold">
        {icon || <MdHomeRepairService className="icon me-1" />}
        {title || "銷售紀錄"}
      </h5>
      <nav className="tab-nav mt-4" onClick={handleStatus}>
        <button
          id="btn1"
          className="size-7"
          onClick={() => {
            setStatus(1);
          }}
        >
          {item1 || "待處理"}
        </button>
        <button
          autoFocus
          id="btn2"
          className="size-7"
          onClick={() => {
            setStatus(2);
          }}
        >
          進行中
        </button>
        <button
          id="btn3"
          className="size-7"
          onClick={() => {
            setStatus(3);
          }}
        >
          已完成
        </button>
        <button
          id="btn4"
          className="size-7"
          onClick={() => {
            setStatus(4);
          }}
        >
          已取消
        </button>
      </nav>
      <div className="record-info-pc d-none d-sm-block">
        <div className="info-title d-flex align-items-center justify-content-around">
          <p>成立日期</p>
          <p>預約編號</p>
          <p>預約日期</p>
          <p>服務總價</p>
        </div>
        {info.length === 0 ? (
          <Empty
            image={
              <IllustrationNoContent style={{ width: 300, height: 300 }} />
            }
            title="尚未有銷售紀錄"
          ></Empty>
        ) : (
          <>
            {info &&
              info.map((item) => (
                <div className="info-content d-flex align-items-center justify-content-around">
                  <p>{item.created_at}</p>
                  <p>{item.oid}</p>
                  <p>
                    {item.start_day} ~<br className="d-md-none d-block" />
                    {item.end_day}
                  </p>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <p className="mb-1 size-6 price">NT$ {item.total_price}</p>
                    <button
                      className="btn-outline-confirm"
                      onClick={() => {
                        if (title === "銷售紀錄") {
                          router.push(`/member/selling/${item.oid}`);
                        }
                        if (title === "預約紀錄") {
                          router.push(`/member/reserve/${item.oid}`);
                        }
                      }}
                    >
                      查看明細
                    </button>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>

      {info.length === 0 ? (
        <Empty
          image={<IllustrationNoContent style={{ width: 300, height: 300 }} />}
          title="尚未有銷售紀錄"
          className="d-flex d-sm-none"
        ></Empty>
      ) : (
        <>
          {info &&
            info.map((item) => (
              <div className="record-info-mobile d-flex d-sm-none flex-column my-3">
                <div>
                  <p>成立日期</p>
                  <p>{item.created_at}</p>
                </div>
                <div>
                  <p>預約編號</p>
                  <p>{item.oid}</p>
                </div>
                <div>
                  <p>預約日期</p>
                  <p>
                    {item.start_day} ~ {item.end_day}
                  </p>
                </div>
                <div>
                  <p>服務總價</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <p className="size-6 me-2 price">NT$ {item.total_price}</p>
                    <button
                      className="btn-outline-confirm"
                      onClick={() => {
                        if (title === "銷售紀錄") {
                          router.push(`/member/selling/${item.oid}`);
                        }
                        if (title === "預約紀錄") {
                          router.push(`/member/reserve/${item.oid}`);
                        }
                      }}
                    >
                      查看明細
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </>
      )}
    </>
  );
};
// icon={reactIcon} 要在使用的icon上加入className <BsCalendarDateFill className="icon me-1" />
// title={大標題名稱}
// item1={第一個button}

export const RecordDetailTemplate = ({ icon, title, detail, setDetail }) => {
  const [days, setDays] = useState(0);
  const year = new Date().getFullYear();
  useEffect(() => {
    console.log(detail);
    const start = dayjs(detail.start_day);
    const end = dayjs(detail.end_day);
    setDays(end.diff(start, "day") + 1);
  }, [detail]);

  return (
    <>
      <h5 className="size-5 d-flex align-items-start fw-bold">
        {icon || <MdHomeRepairService className="icon me-1" />}

        {title || "銷售服務"}
      </h5>
      <p className="date my-4 size-7 p-1">{detail?.created_at}</p>
      <span className="status size-6">狀態 :</span>
      <span className="ms-2 size-6">{detail.status}</span>
      <p className="size-7">
        服務編號 :<span className="ms-2">{detail.oid}</span>
      </p>
      <p className="info-title size-6">預約資訊 :</p>
      <div className=" d-flex">
        <div className="title me-3">
          <p>開始日期</p>
          <p>結束日期</p>
          <p>服務時間</p>
          <p>每天次數</p>
          <p>地點</p>
          <p>備註</p>
        </div>
        <div className="content ">
          <p>{detail.start_day}</p>
          <p>{detail.end_day}</p>
          <p>{30 * detail.service_time} 分鐘/次</p>
          <p>{detail.frequency} 次</p>
          <p>{detail.location}</p>
          <p>{detail.note}</p>
        </div>
      </div>

      <p className="info-title size-6">寵物資訊 :</p>
      <div className="pet d-flex">
        <img className="pet-img" src={detail.image}></img>
        <div className="pet-info ms-3">
          <p>
            <span>{detail.name}</span>
            <span>{year - detail.birthday_year} 歲</span>
            <span>{detail.gender}</span>
            <span>4.5公斤</span>
          </p>
          <p></p>
          <p>
            {detail.ligation ? "已結紮" : "尚未結紮"},
            {detail.vaccine ? "有定期施打疫苗" : "無定期施打疫苗"}
          </p>
          <p>{detail.description}</p>
        </div>
      </div>
      <div className="divider my-2"></div>
      <div className="col-md-6 col-8 offset-md-6 offset-4 settlement-amount ">
        <div className="d-flex justify-content-between">
          <p className="">小計</p>
          <p>
            NT$<span>{detail.subtotal_price}</span>
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <p>天數</p>
          <p>x{days}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>服務時間(每30分鐘)</p>
          <p>x{detail.service_time}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>每天次數</p>
          <p>x{detail.frequency}</p>
        </div>
        <div className="divider"></div>
        <div className="d-flex justify-content-between">
          <p>總金額</p>
          <p className="price">
            NT$<span>{detail.total_price}</span>
          </p>
        </div>
      </div>
    </>

    //   {/* <div className="">
    //           <h5 className="size-6 mt-3">商品評論</h5>
    //           <textarea className="col-12 textareasize"></textarea>
    //         </div> */}
  );
};
// icon={reactIcon} 要在使用的icon上加入className <BsCalendarDateFill className="icon me-1" />
// title={大標題名稱}

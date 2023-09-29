import React from "react";
import Link from "next/link";

export default function Chatroom() {
  return (
    <>
      <div className="chatroom">
        <div className="container shadow bg-body-tertiary rounded p-0">
          <div className="size-3 sticky-top size-3 m-size-5 p-3">
            <div className="target-user">
              <div className="d-flex align-items-center">
                <div className="avatar rounded-circle mr-3 overflow-hidden rounded-circle">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b1/VAN_CAT.png"
                    className="img-fluid object-fit-cover"
                  />
                </div>
                <div className="mx-3 size-5 m-size-5">
                  <span>客服小幫手</span>
                </div>
              </div>
            </div>
          </div>
          <div className="chat-content">
            {/* 聊天對象 */}
            <div className="chat-content-target-user p-3">
              <div className="d-flex align-items-center">
                <div className="avatar rounded-circle mr-3 overflow-hidden rounded-circle">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b1/VAN_CAT.png"
                    className="img-fluid object-fit-cover"
                  />
                </div>
                <div className="mx-3 size-6 m-size-6">
                  <span>客服小幫手</span>
                </div>
                <div className="size-7 m-size-7 rounded-pill content py-1 px-2">
                  我跟你說你不要跟別人說
                </div>
              </div>
            </div>
            {/* 自己 */}
            <div className="user p-3">
              <div className="d-flex align-items-center justify-content-end">
                <div className="size-7 m-size-7 rounded-pill content py-1 px-2">
                  我跟你說你不要跟別人說
                </div>
                <div className="avatar rounded-circle mr-3 overflow-hidden rounded-circle ms-2">
                  <img
                    src="https://cdn.theatlantic.com/thumbor/vDZCdxF7pRXmZIc5vpB4pFrWHKs=/559x0:2259x1700/1080x1080/media/img/mt/2017/06/shutterstock_319985324/original.jpg"
                    className="img-fluid object-fit-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="請輸入訊息內容"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button class="btn-second mx-1" type="button" id="button-addon2">
              送出
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

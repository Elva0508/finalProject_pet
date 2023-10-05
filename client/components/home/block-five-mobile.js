import React from "react";

export default function BlockFiveMobile() {
  return (
    <>
      <div className="mb-5">
        <div className="text-center">
          <div className="row">
            <div className="col-12 photo-block">
              <div className="position-relative">
                <img
                  src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80"
                  className="img-fluid photo position-absolute top-0 start-0"
                />
                <div className="position-absolute top-0 end-0">
                  <div className="mt-5 ms-5 z-3">
                    <div className="title z-3">
                      <span className="size-1 m-size-3 d-flex justify-content-end pe-2">
                        小貓上工囉！<br></br>貓咪互助平台
                      </span>
                    </div>

                    <div className="d-flex justify-content-end pe-2 z-3">
                      <span>
                        你的貓貓需要幫助嗎？<br></br>讓其他人來幫助你！
                      </span>
                    </div>
                  </div>
                  <div className="d-flex my-2 justify-content-end pe-2 z-3">
                    <button type="reset" className="btn-brown mx-1">
                      立即前往
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="bg-light col-10">
              <div className="text-center">
                <div className="row align-items-start">
                  <div className="col price m-size-6">
                    100+
                    <div className="m-size-7 content">超多小幫手</div>
                  </div>
                  <div className="col price m-size-6">
                    890+
                    <div className="m-size-7 content">多種刊登需求</div>
                  </div>
                  <div className="col price m-size-6">
                    300+
                    <div className="m-size-7 content">真實用戶回饋</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
    </>
  );
}
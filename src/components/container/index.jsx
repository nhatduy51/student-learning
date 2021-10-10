import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";

import Image from "./Assets/Learning.png";

const Homestyle = styled.div`
  .home-screen {
    margin: 0 auto;
    margin-top: 130px;
  }
`;
export default function Home() {

  const history = useHistory();

  const RedirectsClassRoom = () => {
    history.push('/classroom');
  }
  return (
    <Homestyle>
      <div className="home-screen">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="mb-3" style={{fontSize: 40}}>Cuộc họp video chất lượng. Giờ đây miễn phí cho tất cả mọi người.</h2>
                  <p style={{fontSize: 18}}>Chúng tôi đã thiết kế ra ứng dụng — dịch vụ tổ chức cuộc họp kinh doanh với độ bảo mật cao — để cung cấp miễn phí cho mọi người.</p>
                </div> 
              </div>
              <div className="row mt-5">
                <div className="col-md-12 d-flex">
                  <button type="button" class="btn btn-primary" onClick={RedirectsClassRoom}>
                    Tạo cuộc Họp mới
                  </button>
                  <input style={{marginLeft: 20}} type="text" class="form-control" placeholder="Nhập mã hoặc link để tham gia cuộc họp" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img style={{width: '100%'}} src={Image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Homestyle>
  );
}

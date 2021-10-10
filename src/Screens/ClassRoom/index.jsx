import React from "react";
import styled from "styled-components";
import student from "./Assets/student.jpg";

const ClassStyle = styled.div`
  margin-top: 80px;
  .app__container {
    border: 1px solid;
    .app__videoFeed {
      margin-left: 110px;
    }
  }
  .app__input {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
`;
export default function ClassRoom() {
  const HEIGHT = 500;
  const WIDTH = 500;

  const [playing, setPlaying] = React.useState(false);

  const startVideo = () => {
    setPlaying(true);
    navigator.getUserMedia(
      {
        video: true,
      },
      (stream) => {
        let video = document.getElementsByClassName("app__videoFeed")[0];
        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.error(err)
    );
  };

  const stopVideo = () => {
    setPlaying(false);
    let video = document.getElementsByClassName("app__videoFeed")[0];
    video.srcObject.getTracks()[0].stop();
  };
  const renderClassRoom = () => {
    return (
      <ClassStyle>
        <div className="class-room">
          <div className="container">
            <div className="class-box">
              <div className="row">
                <div className="col-md-8">
                  <div className="app__container">
                    <video
                      height={HEIGHT}
                      width={WIDTH}
                      muted
                      autoPlay
                      className="app__videoFeed"
                    ></video>
                  </div>
                  <div className="app__input">
                    {playing ? (
                      <button
                        type="button"
                        class="btn btn-success"
                        onClick={stopVideo}
                      >
                        Tắt Camera
                      </button>
                    ) : (
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={startVideo}
                      >
                        Bật camera
                      </button>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-6">
                      <div class="card" style={{ width: "14rem" }}>
                        <img src={student} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p class="card-text">Hoc sinh 1</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="card" style={{ width: "14rem" }}>
                        <img src={student} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p class="card-text">Hoc sinh 2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <div class="card" style={{ width: "14rem" }}>
                        <img src={student} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p class="card-text">Hoc sinh 3</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="card" style={{ width: "14rem" }}>
                        <img src={student} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p class="card-text">Hoc sinh 4</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <div class="card" style={{ width: "14rem" }}>
                        <img src={student} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p class="card-text">Hoc sinh 5</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="card" style={{ width: "14rem" }}>
                        <img src={student} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p class="card-text">Hoc sinh 6</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ClassStyle>
    );
  };
  return <React.Fragment>{renderClassRoom()}</React.Fragment>;
}

import React from 'react';
import { DashBoard, TestBump } from './components/Charts.js';


export default function App () {

  const dashBoardSize = 160;

  return (
    <main>
      <nav className="navbar top-bar" aria-label="main navigation">
        <div className="navbar-brand">
          <h4 className="mb-0 title has-text-white is-4 px-2 py-3">
            HD 恒达交通
          </h4>
        </div>

        <div id="navbar" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item has-text-white-ter top-bar">
              ？？？
            </a>
            <a className="navbar-item has-text-white-ter top-bar">
              用户管理
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>登录</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="container is-fluid">
        <p className="mt-5 title is-4">
          系统数据监控
          <span className="subtitle is-6">
            &nbsp; 2020年 09月 30日
          </span>
        </p>
        <hr />
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content px-3 py-3">
                <p className="title mb-0 is-5">T001</p>
                <p className="title is-4 has-text-success">执行中</p>
                    xxx作业(xxx车间 or 班组)
                  </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content px-3 py-3">
                <p className="title mb-0 is-5">T001</p>
                <p className="title is-4 has-text-success">执行中</p>
                    xxx作业(xxx车间 or 班组)
                  </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content px-3 py-3">
                <p className="title mb-0 is-5">T001</p>
                <p className="title is-4 has-text-success">执行中</p>
                    xxx作业(xxx车间 or 班组)
                  </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content px-3 py-3">
                <p className="title mb-0 is-5">T001</p>
                <p className="title is-4 has-text-success">执行中</p>
                    xxx作业(xxx车间 or 班组)
                  </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content px-3 py-3">
                <p className="title mb-0 is-5">T001</p>
                <p className="title is-4 has-text-success">执行中</p>
                    xxx作业(xxx车间 or 班组)
                  </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content px-3 py-3">
                <p className="title mb-0 is-5">T001</p>
                <p className="title is-4 has-text-success">执行中</p>
                    xxx作业(xxx车间 or 班组)
                  </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content px-3 py-3">
                <p className="title mb-0 is-5">T001</p>
                <p className="title is-4 has-text-success">执行中</p>
                    xxx作业(xxx车间 or 班组)
                  </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content px-3 py-3">
                <p className="title mb-0 is-5">T001</p>
                <p className="title is-4 has-text-success">执行中</p>
                    xxx作业(xxx车间 or 班组)
                  </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content px-3 py-3">
                <p className="title mb-0 is-5">T001</p>
                <p className="title is-4 has-text-success">执行中</p>
                    xxx作业(xxx车间 or 班组)
                  </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content px-3 py-3">
                <p className="title mb-0 is-5">T001</p>
                <p className="title is-4 has-text-success">执行中</p>
                    xxx作业(xxx车间 or 班组)
                  </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content px-3 py-3">
                <p className="title mb-0 is-5">T001</p>
                <p className="title is-4 has-text-success">执行中</p>
                    xxx作业(xxx车间 or 班组)
                  </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content px-3 py-3">
                <p className="title mb-0 is-5">T001</p>
                <p className="title is-4 has-text-success">执行中</p>
                    xxx作业(xxx车间 or 班组)
                  </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-three-quarters">
            <div className="card">
              <div className="card-content px-3 py-3">
                <p className="title mb-0 is-5">nivo-demo</p>
                <div style={{ height: 400 }}>
                  <TestBump data={[
                    {
                      id: 'T001',
                      data: [
                        // missing data at the beginning
                        { x: 0, y: null },
                        { x: 1, y: 1 },
                        { x: 2, y: 1 },
                        { x: 3, y: null },
                        //{ x: 4, y: 2 },
                      ],
                    },
                    {
                      id: 'T002',
                      data: [
                        { x: 0, y: 1 },
                        { x: 1, y: 2 },
                        // missing data in the middle
                        { x: 2, y: null },
                        { x: 3, y: 3 },
                        { x: 4, y: 3 },
                      ],
                    },
                    {
                      id: 'T003',
                      data: [
                        { x: 0, y: 3 },
                        { x: 1, y: 3 },
                        { x: 2, y: 3 },
                        { x: 3, y: 1 },
                        // missing data at the end
                        { x: 4, y: null },
                      ],
                    },
                  ]} />
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content px-3 py-3">
                <p className="title mb-0 is-5">数据填写情况</p>
                <div className="columns is-multiline is-mobile">
                  <div className="column">
                    Board1：
                    <DashBoard
                      id={'bar1'}
                      size={dashBoardSize}
                      barColor={'has-background-info'}
                      {...{ total: "10", number: "9" }}
                    />
                  </div>
                  <div className="column is-narrow">
                    Board2：
                    <DashBoard
                      id={'bar2'}
                      size={dashBoardSize}
                      barColor={'has-background-success'}
                      {...{ total: "10", number: "9" }}
                    />
                  </div>
                </div>
                <div className="columns is-multiline is-mobile">
                  <div className="column">
                    Board1：
                    <DashBoard
                      id={'bar3'}
                      size={dashBoardSize}
                      barColor={'has-background-warning'}
                      {...{ total: "10", number: "9" }}
                    />
                  </div>
                  <div className="column is-narrow">
                    Board2：
                    <DashBoard
                      id={'bar4'}
                      size={dashBoardSize}
                      barColor={'has-background-danger'}
                      {...{ total: "10", number: "9" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}

import React from "react";
import "./referredMembers.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Visibility from "@mui/icons-material/Visibility";
import ReportChart from "../../components/chart/ReportChart";
import { useSelector } from "react-redux";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import HeaderDashboard from "../../components/common/header/HeaderDashboard";
import moment from "moment";
import { DataGrid } from "@mui/x-data-grid";

export default function ReferredMembers() {
  const { membersData, membersAnalytics } = useSelector((state) => state.userSlice);

  const columns = [
    {
      field: "_id",
      headerName: "Member Id",
      width: 400,
    },
    { field: "memberName", headerName: "Member Name", width: 200 },
    {
      field: "createdAt",
      headerName: "Date of Joining",
      width: 200,
      valueFormatter: (params) => moment(params?.value).format("DD/MM/YYYY hh:mm A"),
    },
  ];

  return (
    <>
      <HeaderDashboard />

      <div className="topbar-div">
        <Topbar />
        <div className="dashboard-container ">
          <Sidebar />
          <div className="referredMembers">
            <FeaturedInfo />
            {/* <ReportChart data={membersAnalytics} title="Members Joined Analytics" grid dataKey="count" /> */}
            {/* <div className="referredMembers-widget">
              <div className="widgetLg">
                <h3 className="widgetLgTitle">Referred Members</h3>
                <table className="widgetLgTable">
                  <tr className="widgetLgTr">
                    <th className="widgetLgTh">Member Id</th>
                    <th className="widgetLgTh">Member Name</th>
                    <th className="widgetLgTh">Date of Joining</th>
                    <th className="widgetLgTh">Action</th>
                  </tr>
                  {membersData.length
                    ? membersData.map((e) => {
                        return (
                          <tr className="widgetLgTr">
                            <td className="widgetLgIdr">
                              <span className="widgetLgId">{e._id}</span>
                            </td>
                            <td className="widgetLgUser">
                              <span className="widgetLgName">{e.memberName}</span>
                            </td>
                            <td className="widgetLgDate">{e.createdAt}</td>
                            <td className="widgetLgStatus">
                              <button className="widgetSmButton">
                                <Visibility className="widgetSmIcon" />
                                Display
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    : null}
                </table>
              </div>
            </div> */}

            <div style={{ display: "flex", width: "95%", marginTop: "30px", marginLeft: "20px", justifyContent: "center" }}>
              <div className="memberList">
                <h2>Referred Members</h2>
                <DataGrid rows={membersData} getRowId={(row) => row._id} disableSelectionOnClick columns={columns} pageSize={10} checkboxSelection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

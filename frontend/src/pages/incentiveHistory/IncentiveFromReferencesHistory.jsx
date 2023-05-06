import React from "react";
import "./incentiveHistory.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { useSelector } from "react-redux";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import HeaderDashboard from "../../components/common/header/HeaderDashboard";
import moment from "moment";
import { DataGrid } from "@mui/x-data-grid";

export default function IncentiveFromReferencesHistory() {
  const { referencesIncentiveData } = useSelector((state) => state.userSlice);

  const columns = [
    {
      field: "earnedFromMemberId",
      headerName: "Earned From Member Id",
      width: 400,
    },
    { field: "incentiveEarned", headerName: "Incentive Earned", width: 200 },
    {
      field: "createdAt",
      headerName: "Date",
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
          <div className="incentiveHistory">
            <FeaturedInfo />
            {/* <ReportChart data={referenceIncentiveAnalytics} title="Incentive Earned Analytics" grid dataKey="count" /> */}
            {/* <div className="homeWidgets">
              <ReferencesIncentiveTable props={referencesIncentiveData} title="Incentive From References History" />
            </div> */}

            <div style={{ display: "flex", width: "95%", marginTop: "30px", marginLeft: "20px", justifyContent: "center" }}>
              <div className="memberList">
                <h2>Working Plan Incentive History</h2>
                <DataGrid
                  rows={referencesIncentiveData}
                  getRowId={(row) => row._id}
                  disableSelectionOnClick
                  columns={columns}
                  pageSize={10}
                  checkboxSelection
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

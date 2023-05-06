import React from "react";
import "./incentiveHistory.css";
import ReferencesIncentiveTable from "../../components/incentiveTables/ReferencesIncentiveTable";
import ReportChart from "../../components/chart/ReportChart";
import { useSelector } from "react-redux";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import HeaderDashboard from "../../components/common/header/HeaderDashboard";
import FeaturedInfoAdmin from "../../components/featuredInfoAdmin/FeaturedInfoAdmin";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";

export default function IncentiveHistoryAdmin() {
  const { referencesIncentiveDataAdmin } = useSelector((state) => state.adminSlice);

  const columns = [
    { field: "memberId", headerName: "Member Id", width: 400 },
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
            {/* <FeaturedInfoAdmin /> */}
            {/* <ReportChart data={referenceIncentiveAnalytics} title="Incentive Earned Analytics" grid dataKey="count" /> */}
            {/* <div className="homeWidgets">
              <ReferencesIncentiveTable props={referencesIncentiveData} title="Incentive From References History" />
            </div> */}
            <div style={{ display: "flex", width: "95%", justifyContent: "center" }}>
              <div className="memberList">
                <h2>Incentive Reports</h2>
                <DataGrid
                  rows={referencesIncentiveDataAdmin}
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

import React, { useEffect, useState } from "react";
import "./incentiveHistory.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import ReferencesIncentiveTable from "../../components/incentiveTables/ReferencesIncentiveTable";
import ReportChart from "../../components/chart/ReportChart";
import { useSelector } from "react-redux";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import HeaderDashboard from "../../components/common/header/HeaderDashboard";
import moment from "moment";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

export default function LeadershipRewards() {
  const { sessionUser } = useSelector((state) => state.sessionSlice);
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    const getRewards = async () => {
      await axios
        .get(`/api/rewards/getLeadershipRewards`)
        .then((res) => {
          console.log(res);
          setRewards(res.data.LeadershipRewards);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getRewards();
  }, [sessionUser]);

  const columns = [
    {
      field: "rewards",
      headerName: "Rewards Earned",
      width: 400,
    },
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
                <h2>Leadership Rewards Earned</h2>
                <DataGrid rows={rewards} getRowId={(row) => row._id} disableSelectionOnClick columns={columns} pageSize={10} checkboxSelection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

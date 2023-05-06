import "./memberList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import { userRows } from "../../../dummydata";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import Topbar from "../../../components/topbar/Topbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import HeaderDashboard from "../../../components/common/header/HeaderDashboard";
import moment from "moment";

export default function MemberList() {
  const { membersDataAdmin } = useSelector((state) => state.adminSlice);
  const [data, setData] = useState(membersDataAdmin);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 300 },
    {
      field: "memberName",
      headerName: "Member Name",
      width: 200,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.memberName}</div>;
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "contactNumber",
      headerName: "Contact Number",
      width: 200,
    },
    {
      field: "level",
      headerName: "level",
      width: 100,
    },
    {
      field: "incentiveEarned",
      headerName: "Incentive Earned",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Date Of Joining",
      width: 250,
      valueFormatter: (params) => moment(params?.value).format("DD/MM/YYYY hh:mm A"),
    },
    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 150,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <Link to={"/member/" + params.row.id}>
    //           <button className="userListEdit">Edit</button>
    //         </Link>
    //         <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
    //       </>
    //     );
    //   },
    // },
  ];

  return (
    <>
      <HeaderDashboard />

      <div className="topbar-div">
        <Topbar />
        <div className="dashboard-container ">
          <Sidebar />
          <div className="memberList">
            <h2>Members Data</h2>
            <DataGrid rows={membersDataAdmin} getRowId={(row) => row._id} disableSelectionOnClick columns={columns} pageSize={10} checkboxSelection />
          </div>
        </div>
      </div>
    </>
  );
}

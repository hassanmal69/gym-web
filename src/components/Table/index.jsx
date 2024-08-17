import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import PlaceIcon from "@mui/icons-material/Place";
import ClearIcon from "@mui/icons-material/Clear";
import DoneIcon from "../../assets/icons/done-icon.png";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import Person4Icon from "@mui/icons-material/Person4";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
function createData(name, price, time, availibity, location) {
  return { name, price, time, availibity, location };
}
const RowTitle = ({ icon, title }) => {
  return (
    <>
      <div className="row-data">
        {icon}
        {title}
      </div>
    </>
  );
};
const rows = [
  createData(
    <RowTitle icon={<MonetizationOnIcon />} title="Price" />,
    "Rs",
    "Rs",
    "Rs",
    "Rs"
  ),
  createData(
    <RowTitle icon={<AccessTimeIcon />} title="Access" />,
    "Unlimited",
    "Limited",
    "Unlimited",
    "Unlimited"
  ),
  createData(
    <RowTitle icon={<MyLocationIcon />} title="Coverage & Location" />,
    <PlaceIcon className="icons" />,
    <PlaceIcon className="icons" />,
    <PlaceIcon className="icons" />,
    <PlaceIcon className="icons" />
  ),
  createData(
    <RowTitle icon={<Person4Icon />} title="IN-Person Experience" />,

    "Full Service and trainers",
    "Fitness Centers only",
    "Full Service and Trainers",
    "Fitness Centers only"
  ),
  createData(
    <RowTitle icon={<StayCurrentPortraitIcon />} title="Digital Solution" />,
    <img src={DoneIcon} className="done-img" />,
    <ClearIcon className="icons" />,
    <ClearIcon className="icons" />,
    <ClearIcon className="icons" />
  ),
  createData(
    <RowTitle icon={<MonitorHeartIcon />} title="Other Wellness" />,
    <img src={DoneIcon} className="done-img" />,
    <ClearIcon className="icons" />,
    <ClearIcon className="icons" />,
    <ClearIcon className="icons" />
  ),
  createData(
    <RowTitle icon={<FitnessCenterIcon />} title="Refer a trainer" />,
    <img src={DoneIcon} className="done-img" />,
    <ClearIcon className="icons" />,
    <ClearIcon className="icons" />,
    <ClearIcon className="icons" />
  )
];

const DataTable = () => {
  return (
    <TableContainer component={Paper} className="table-container">
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className="table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center" className="head-content col">
              Health Tech Sport
            </TableCell>
            <TableCell align="center" className="head-content">
              On-Site Trainer
            </TableCell>
            <TableCell align="center" className="head-content">
              Reimbursements
            </TableCell>
            <TableCell align="center" className="head-content">
              Local Fitness Center Access
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center" className="table-typography col">
                {row.price}
              </TableCell>
              <TableCell align="center" className="table-typography">
                {row.time}
              </TableCell>
              <TableCell align="center" className="table-typography">
                {row.availibity}
              </TableCell>
              <TableCell align="center" className="table-typography">
                {row.location}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default DataTable;

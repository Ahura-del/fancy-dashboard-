import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { Header } from "../components";
import React, { useState } from "react";
import { employeesData, employeesGrid } from "../data/dummy";
const Employees = () => {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const userPerPage = 10;
  const lastUserIndex = currentPage * userPerPage;
  const firstUserIndex = lastUserIndex - userPerPage;
  const currentUsers = employeesData.slice(firstUserIndex, lastUserIndex);
  return (
    <div className="bg-white rounded-3xl mb-8 p-5 dark:bg-secondary-dark-bg md:p-10 ">
      <Header category="Page" title="Employees" />
      <div className="w-full">
        <input
          id="search"
          autoComplete="off"
          autoFocus
          className="w-full bg-transparent outline-none border-b-1 dark:text-slate-50 dark:placeholder:text-slate-300 "
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search Employee name"
          variant="standard"
        />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow component="tr">
                {employeesGrid.map((eGrid, index) => (
                  <TableCell
                    component="th"
                    key={index}
                    sx={{ whiteSpace: "nowrap", paddingRight: "15px" }}
                    className="dark:text-slate-100"
                  >
                    {eGrid.headerText}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {currentUsers
                .filter((item) => {
                  return searchValue.toLowerCase() === ""
                    ? item
                    : item.Name.toLowerCase().includes(searchValue);
                })
                .map((eData, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="flex dark:text-slate-200 items-center gap-2 mr-10 md:mr-0">
                        <img
                          src={eData.EmployeeImage}
                          alt="employee"
                          className="w-12 h-12 rounded-full"
                        />
                        {eData.Name}
                      </div>
                    </TableCell>
                    <TableCell className="dark:text-slate-200">
                      {eData.Title}
                    </TableCell>
                    <TableCell className=" dark:text-slate-200">
                      {eData.Country}
                    </TableCell>
                    <TableCell className="dark:text-slate-200">
                      {eData.HireDate}
                    </TableCell>
                    <TableCell className="dark:text-slate-200">
                      {eData.ReportsTo}
                    </TableCell>
                    <TableCell className="dark:text-slate-200">
                      {eData.EmployeeID}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          onChange={(e, p) => {
            setCurrentPage(p);
          }}
          count={Math.ceil(employeesData.length / userPerPage)}
          color="primary"
          defaultPage={1}
          siblingCount={0}
          boundaryCount={1}
          className="pt-8"
        />
      </div>
    </div>
  );
};

export default Employees;

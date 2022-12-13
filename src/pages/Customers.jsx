import {
  Checkbox,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import React, { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { Header } from "../components";
import { customersData, customersGrid } from "../data/dummy";

const Customers = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const userPerPage = 10;
  const lastUserIndex = currentPage * userPerPage;
  const firstUserIndex = lastUserIndex - userPerPage;
  const currentUsers = customersData.slice(firstUserIndex, lastUserIndex);

  return (
    <div className="bg-white rounded-3xl mb-8 p-2 md:p-10 ">
      <Header category="Page" title="Customers" />
      <div className="w-full">
        <button
          type="button"
          className="inline-flex p-2 rounded-xl items-center gap-2 bg-gray-50 hover:drop-shadow-lg "
        >
          <BiTrash className="text-red-500 text-2xl" />
          <span className="text-sm text-red-500 font-semibold">Delete</span>
        </button>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow component="tr">
                {customersGrid.map((eGrid, index) => (
                  <TableCell
                    component="th"
                    key={index}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    {eGrid.headerText}
                    {eGrid.type === "checkbox" && <Checkbox/>}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {currentUsers.map((eData, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Checkbox  />
                  </TableCell>
                  <TableCell>
                    <div className="image flex gap-4">
                      <img
                        className="rounded-full w-10 h-10"
                        src={eData.CustomerImage}
                        alt="employee"
                      />
                      <div>
                        <p>{eData.CustomerName}</p>
                        <p>{eData.CustomerEmail}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{eData.ProjectName}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: eData.StatusBg }}
                      />
                      {eData.Status}
                    </div>
                  </TableCell>
                  <TableCell>{eData.Weeks}</TableCell>
                  <TableCell>{eData.Budget}</TableCell>
                  <TableCell>{eData.Location}</TableCell>
                  <TableCell>{eData.CustomerID}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          onChange={(e, p) => {
            setCurrentPage(p);
          }}
          count={Math.ceil(customersData.length / userPerPage)}
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

export default Customers;

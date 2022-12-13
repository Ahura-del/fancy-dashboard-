import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { Header } from "../components";
import { ordersData, ordersGrid } from "../data/dummy";
const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10;
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = ordersData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="bg-white rounded-3xl mb-8 p-2 md:p-10 ">
      <Header category="Page" title="Orders" />
      <TableContainer >
        <Table stickyHeader aria-label="sticky table">
          <TableHead className="w-full">
            <TableRow className="w-full" component="tr">
              {ordersGrid.map((order, index) => (
                <TableCell
                  key={index}
                  sx={{ whiteSpace: "nowrap" }}
                  align={order.headerText !== "Image" ? "center" : "left"}
                  component="th"
                >
                  {order.headerText}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPosts.map((d, index) => (
              <TableRow key={index} scope="row">
                <TableCell align="left">
                  <img
                    src={d.ProductImage}
                    alt="product"
                    width={60}
                    height={60}
                    className="rounded-xl"
                  />
                </TableCell>
                <TableCell align="center">{d.OrderItems}</TableCell>
                <TableCell align="center">{d.CustomerName}</TableCell>
                <TableCell align="center">$ {d.TotalAmount}</TableCell>
                <TableCell align="center">
                  <p
                    className="text-white px-2 py-3 rounded-full"
                    style={{ background: d.StatusBg }}
                  >
                    {d.Status}
                  </p>
                </TableCell>
                <TableCell align="center">{d.OrderID}</TableCell>
                <TableCell align="center">{d.Location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <Pagination
          onChange={(e, p) => {
            setCurrentPage(p);
          }}
          count={Math.ceil(ordersData.length / postPerPage)}
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

export default Orders;

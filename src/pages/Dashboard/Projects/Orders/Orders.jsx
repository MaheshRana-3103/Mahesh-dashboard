import React, { useState, lazy, Suspense } from "react"; // Import lazy and Suspense
import "./css/orderTable.css";
import { orderData } from "../../../../utils/helper";
import Loading from "../../../../components/Loading";
import ErrorBoundary from "../../../../components/ErrorBoundary";

// Lazy load components
const FilterNavBar = lazy(() => import("./components/FilterNavBar"));
const FilterDropdown = lazy(() => import("./components/FilterDropdown"));
const OrderTable = lazy(() => import("./components/OrderTable"));
const Pagination = lazy(() => import("./components/Pagination"));

const ProjectOrders = () => {
  const [data, setData] = useState(orderData);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState({ column: null, order: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [checkedItems, setCheckedItems] = useState({}); // Track checked checkboxes

  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredData = orderData.filter(
      (item) =>
        item.user.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.project.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setData(filteredData);
  };

  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    const newCheckedItems = {};
    currentItems.forEach((item) => {
      newCheckedItems[item.orderId] = isChecked; // Set checked state for each item
    });
    setCheckedItems(newCheckedItems);
  };

  // Handle sort
  const handleSort = (column) => {
    const newOrder = sortOrder.order === "asc" ? "desc" : "asc";
    setSortOrder({ column, order: newOrder });

    const sortedData = [...data].sort((a, b) => {
      if (newOrder === "asc") {
        return a[column] > b[column] ? 1 : -1;
      }
      return a[column] < b[column] ? 1 : -1;
    });

    setData(sortedData);
  };

  // Handle checkbox change
  const handleCheckboxChange = (e, orderId) => {
    setCheckedItems((prev) => ({
      ...prev,
      [orderId]: e.target.checked,
    }));
  };

  // Handle pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Toggle filter dropdown
  const toggleFilterDropdown = () => {
    setShowFilterDropdown(!showFilterDropdown);
  };

  return (
    <Suspense fallback={<Loading />}>
      {" "}
      {/* Loading state for the entire component */}
      <ErrorBoundary>
        {" "}
        {/* Wrap the entire ProjectOrders in ErrorBoundary */}
        <div className="tableContainer">
          <h2 className="semibold-14">Order List</h2>
          <div className="tableOverflow">
            <Suspense fallback={<Loading />}>
              {" "}
              {/* Loading state for FilterNavBar */}
              <FilterNavBar
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                toggleFilterDropdown={toggleFilterDropdown}
              />
            </Suspense>

            {showFilterDropdown && (
              <Suspense fallback={<Loading />}>
                {" "}
                {/* Loading state for FilterDropdown */}
                <FilterDropdown setData={setData} orderData={orderData} />
              </Suspense>
            )}

            <Suspense fallback={<Loading />}>
              {/* Loading state for OrderTable */}
              <OrderTable
                currentItems={currentItems}
                handleCheckboxChange={handleCheckboxChange}
                checkedItems={checkedItems}
                handleSelectAll={handleSelectAll}
                handleSort={handleSort}
              />
            </Suspense>
          </div>
          {/* Pagination */}
          {data?.length > 0 ? (
            <Suspense fallback={<Loading />}>
              {" "}
              {/* Loading state for Pagination */}
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={data.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </Suspense>
          ) : (
            <div
              className="semibold-14 w-400"
              style={{
                color: "var(--black-100)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                padding: "1rem",
              }}
            >
              No Result found
            </div>
          )}
        </div>
      </ErrorBoundary>
    </Suspense>
  );
};

export default ProjectOrders;

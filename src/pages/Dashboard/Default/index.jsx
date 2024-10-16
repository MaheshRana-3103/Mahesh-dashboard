import React, { lazy, Suspense } from "react"; // Import lazy and Suspense
import {
  BarData,
  LineData,
  revenueLocations,
  SalesChartData,
  statusCard,
  tableData,
} from "../../../utils/helper";
import "./css/MainContent.css";
import Loading from "../../../components/Loading";

// Lazy load the components
const StatCards = lazy(() => import("./Components/StatCard"));
const BarProjectionChart = lazy(() =>
  import("./Components/Chart").then((module) => ({
    default: module.BarProjectionChart,
  }))
);
const RevenueChart = lazy(() =>
  import("./Components/Chart").then((module) => ({
    default: module.RevenueChart,
  }))
);
const RevenueMap = lazy(() => import("./Components/RevenueMap"));
const Table = lazy(() => import("./Components/Table"));
const SalesChart = lazy(() =>
  import("./Components/Chart").then((module) => ({
    default: module.SalesChart,
  }))
);

// const ErrorBoundary = lazy(() =>
//   import("../../../components/ErrorBoundary/ErrorBoundary")
// ); 
// Lazy load ErrorBoundary

export default function Dashboard() {
  return (
    <Suspense fallback={<Loading />}>
      {/* Loading state for the entire Dashboard */}
      {/* <ErrorBoundary> */}
        {/* Wrap the entire Dashboard in ErrorBoundary */}
        <div className="mainContent">
          <div className="row1">
            <div className="flexItem">
              <Suspense fallback={<Loading />}>
                {/* Loading state for StatCards */}
                <StatCards statusCard={statusCard} />
              </Suspense>
            </div>
            <div className="flexItem">
              <Suspense fallback={<Loading />}>
                {/* Loading state for BarProjectionChart */}
                <BarProjectionChart BarData={BarData} />
              </Suspense>
            </div>
          </div>
          <div className="row2">
            <div className="flexItem">
              <Suspense fallback={<Loading />}>
                {/* Loading state for RevenueChart */}
                <RevenueChart LineData={LineData} />
              </Suspense>
            </div>
            <div className="flexItem">
              <Suspense fallback={<Loading />}>
                {/* Loading state for RevenueMap */}
                <RevenueMap locations={revenueLocations} />
              </Suspense>
            </div>
          </div>
          <div className="row3">
            <div className="flexItem">
              <Suspense fallback={<Loading />}>
                {/* Loading state for Table */}
                <Table data={tableData} />
              </Suspense>
            </div>
            <div className="flexItem">
              <Suspense fallback={<Loading />}>
                {/* Loading state for SalesChart */}
                <SalesChart data={SalesChartData} />
              </Suspense>
            </div>
          </div>
        </div>
      {/* </ErrorBoundary> */}
    </Suspense>
  );
}

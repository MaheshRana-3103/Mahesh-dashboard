import React, { useContext, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { flattenSideNavData, SideNavData } from "../utils/helper";
import Loading from "../components/Loading";
import ProjectOrders from "./Dashboard/Projects/Orders/Orders";
import NotFound from "../components/NotFound";
import ErrorBoundary from "../components/ErrorBoundary";

// Lazy load dashboard components
const Dashboard = lazy(() => import("./Dashboard/Default"));

const MainContent = () => {
  const location = useLocation();
  const { handleBreadCrumb } = useContext(AppContext);

  useEffect(() => {
    // Get the flattened side nav data
    const flatSideNavData = flattenSideNavData(SideNavData);

    // Split the current pathname into segments
    const pathnames = location.pathname.split("/").filter((x) => x);

    // Build breadcrumb based on matching slugs from flatSideNavData
    const breadcrumbData = pathnames.map((value, index) => {
      const path = `/${pathnames.slice(0, index + 1).join("/")}`;
      const matchedItem = flatSideNavData.find((item) => item.slug === path);
      return {
        label: matchedItem
          ? matchedItem.label
          : value.charAt(0).toUpperCase() + value.slice(1), // Use path if not found in data
        path,
        level: index,
      };
    });

    handleBreadCrumb(breadcrumbData);
  }, [location, handleBreadCrumb]);

  return (
    <Suspense fallback={<Loading />}>
      {" "}
      {/* Loading state for the entire component */}
      <ErrorBoundary>
        {" "}
        {/* Wrap the entire MainContent in ErrorBoundary */}
        <Routes>
          {/* Flat route structure without nesting */}
          <Route
            path="/dashboard"
            element={<Navigate to={"/dashboard/default"} />}
          />
          <Route path="/dashboard/default" element={<Dashboard />} />
          {/* Projects Dashboard Routes */}
          <Route
            path="/dashboard/projects/orders"
            element={<ProjectOrders />}
          />
          {/* Default Redirect */}
          <Route path="/" element={<Navigate to="/dashboard/default" />} />

          {/* Catch-all route for when no content exists */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </Suspense>
  );
};

export default MainContent;

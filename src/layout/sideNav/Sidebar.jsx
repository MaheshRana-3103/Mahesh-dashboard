import React, { useContext, useState, Suspense, lazy } from "react";
import "./style.css";
import { SideNavData } from "../../utils/helper";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/Loading";
import ErrorBoundary from "../../components/ErrorBoundary";

// Lazy load the MenuDropper and SideList components
const MenuDropper = lazy(() => import("./components/MenuDropper"));
const SideList = lazy(() => import("./components/SideList"));
const NavProfile = lazy(() => import("./components/NavProfile")); // Lazy load NavProfile

const Sidebar = () => {
  const { sideNav } = useContext(AppContext);
  const { activities, dashboard, pages, profile } = SideNavData || {};
  const [sideData, setSideData] = useState(activities ? activities[0] : {});

  return (
    // <ErrorBoundary>
    //   {" "}
    <ErrorBoundary>
      {/* Wrap the entire sidebar in ErrorBoundary */}
      <aside className={`sidebar ${!sideNav ? "close" : ""}`}>
        <Suspense fallback={<Loading />}>
          {" "}
          {/* Loading state for NavProfile */}
          <NavProfile profile={profile} />
        </Suspense>
        <div className="activitiesContainer">
          <div className="activitiesListContainer">
            {activities?.map((e, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setSideData(e)}
                  className={`activitiesList ${
                    sideData.type === e.type ? "active" : ""
                  }`}
                >
                  {e?.type}
                </div>
              );
            })}
          </div>
          <Suspense fallback={<Loading />}>
            {" "}
            {/* Loading state for SideList */}
            <SideList data={sideData} />
          </Suspense>
        </div>
        {dashboard && (
          <Suspense fallback={<Loading />}>
            {/* Loading state for MenuDropper */}
            <MenuDropper data={dashboard.data} label={dashboard.label} />
          </Suspense>
        )}
        {pages && (
          <Suspense fallback={<Loading />}>
            {" "}
            {/* Loading state for MenuDropper */}
            <MenuDropper
              data={pages.data}
              label={pages.label}
              setSideData={setSideData}
            />
          </Suspense>
        )}
      </aside>
    </ErrorBoundary>
  );
};

export default Sidebar;

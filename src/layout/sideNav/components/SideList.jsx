import { useContext } from "react";
import { Link } from "react-router-dom";
// import NoData from "../../../components/NoData";
import "../style.css";
import { AppContext } from "../../../context/AppContext";

const SideList = ({ data }) => {
  const { list, type } = data || {};
  const { breadCrumb } = useContext(AppContext);

//   if (!data || !list) return <NoData data={`no available ${type}`} />;

  return (
    <ul className="sideListContainer">
      {list?.length>0 && list.map((e, index) => {
        const { label = "label", slug = "/" } = e || {};
        const isActive = breadCrumb?.some((bc) => bc.path === slug); // Check if breadcrumb matches slug
        return (
          <li key={index}>
            <Link
              className={`sideListLink regular-14 w-400 ${
                isActive ? "active" : ""
              }`}
              to={slug}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SideList;
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { AppContext } from "../../context/AppContext";
import { motion } from "framer-motion";

const Header = () => {
  // Destructuring values from the AppContext using useContext hook
  const {
    breadCrumb, // Breadcrumb array for navigation
    toggleTheme, // Function to toggle between light and dark themes
    handleSideNav, // Function to handle the SideNav state
    handleNotificationNav, // Function to handle the Notification nav state
    theme, // Current theme (light or dark)
  } = useContext(AppContext);

  return (
    <header className="header">
      {/* Left side of the header */}
      <div className="headerLeft">
        {/* Animated div containing an icon (assuming svg) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }} // Initial state (hidden and shifted left)
          animate={{ opacity: 1, x: 0 }} // Animate to visible and position reset
          transition={{ duration: 0.8 }} // Duration of the animation
          className="icons"
        >
          <svg
            onClick={() => handleSideNav()}
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.875 7.75V20.25H7.125C6.95924 20.25 6.80027 20.1842 6.68306 20.0669C6.56585 19.9497 6.5 19.7908 6.5 19.625V8.375C6.5 8.20924 6.56585 8.05027 6.68306 7.93306C6.80027 7.81585 6.95924 7.75 7.125 7.75H10.875Z"
              fill="#1C1C1C"
              fillOpacity="0.1"
            />
            <path
              d="M20.875 7.125H7.125C6.79348 7.125 6.47554 7.2567 6.24112 7.49112C6.0067 7.72554 5.875 8.04348 5.875 8.375V19.625C5.875 19.9565 6.0067 20.2745 6.24112 20.5089C6.47554 20.7433 6.79348 20.875 7.125 20.875H20.875C21.2065 20.875 21.5245 20.7433 21.7589 20.5089C21.9933 20.2745 22.125 19.9565 22.125 19.625V8.375C22.125 8.04348 21.9933 7.72554 21.7589 7.49112C21.5245 7.2567 21.2065 7.125 20.875 7.125ZM7.125 15.875H8.375C8.54076 15.875 8.69973 15.8092 8.81694 15.6919C8.93415 15.5747 9 15.4158 9 15.25C9 15.0842 8.93415 14.9253 8.81694 14.8081C8.69973 14.6908 8.54076 14.625 8.375 14.625H7.125V13.375H8.375C8.54076 13.375 8.69973 13.3092 8.81694 13.1919C8.93415 13.0747 9 12.9158 9 12.75C9 12.5842 8.93415 12.4253 8.81694 12.3081C8.69973 12.1908 8.54076 12.125 8.375 12.125H7.125V10.875H8.375C8.54076 10.875 8.69973 10.8092 8.81694 10.6919C8.93415 10.5747 9 10.4158 9 10.25C9 10.0842 8.93415 9.92527 8.81694 9.80806C8.69973 9.69085 8.54076 9.625 8.375 9.625H7.125V8.375H10.25V19.625H7.125V15.875ZM20.875 19.625H11.5V8.375H20.875V19.625Z"
              fill="#1C1C1C"
            />
          </svg>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3851 15.539C18.2995 15.6143 18.2358 15.7113 18.2009 15.8198C18.1659 15.9284 18.161 16.0443 18.1867 16.1554L19.2429 20.7289C19.2709 20.8483 19.263 20.9733 19.2204 21.0883C19.1777 21.2034 19.1022 21.3033 19.0031 21.3757C18.9041 21.4481 18.786 21.4897 18.6634 21.4954C18.5409 21.5011 18.4194 21.4706 18.314 21.4078L14.3218 18.9859C14.2248 18.9269 14.1135 18.8957 14 18.8957C13.8864 18.8957 13.7751 18.9269 13.6781 18.9859L9.68591 21.4078C9.58058 21.4706 9.45907 21.5011 9.33654 21.4954C9.214 21.4897 9.09585 21.4481 8.99682 21.3757C8.89778 21.3033 8.82223 21.2034 8.77959 21.0883C8.73695 20.9733 8.72909 20.8483 8.75701 20.7289L9.81326 16.1554C9.83893 16.0443 9.83404 15.9284 9.7991 15.8198C9.76416 15.7113 9.70048 15.6143 9.61482 15.539L6.0906 12.4648C5.99638 12.3847 5.92803 12.2785 5.8942 12.1596C5.86038 12.0406 5.86259 11.9143 5.90056 11.7966C5.93853 11.679 6.01056 11.5752 6.10752 11.4985C6.20449 11.4217 6.32203 11.3755 6.44529 11.3656L11.0906 10.964C11.2039 10.9539 11.3124 10.9131 11.4042 10.8459C11.496 10.7787 11.5678 10.6877 11.6117 10.5828L13.4265 6.25776C13.475 6.14594 13.5551 6.05074 13.657 5.98386C13.7589 5.91698 13.8781 5.88135 14 5.88135C14.1218 5.88135 14.2411 5.91698 14.3429 5.98386C14.4448 6.05074 14.5249 6.14594 14.5734 6.25776L16.3883 10.5828C16.4322 10.6877 16.5039 10.7787 16.5958 10.8459C16.6876 10.9131 16.796 10.9539 16.9094 10.964L21.5547 11.3656C21.6779 11.3755 21.7955 11.4217 21.8924 11.4985C21.9894 11.5752 22.0614 11.679 22.0994 11.7966C22.1374 11.9143 22.1396 12.0406 22.1057 12.1596C22.0719 12.2785 22.0036 12.3847 21.9094 12.4648L18.3851 15.539Z"
              fill="#1C1C1C"
              fillOpacity="0.1"
            />
            <path
              d="M22.6875 11.6007C22.6118 11.3675 22.4692 11.1616 22.2773 11.0088C22.0855 10.856 21.8529 10.763 21.6086 10.7414L16.9688 10.3414L15.15 6.01637C15.0553 5.78943 14.8956 5.59558 14.691 5.45923C14.4863 5.32288 14.2459 5.25012 14 5.25012C13.7541 5.25012 13.5137 5.32288 13.3091 5.45923C13.1044 5.59558 12.9447 5.78943 12.85 6.01637L11.0367 10.3414L6.39142 10.7437C6.14614 10.7643 5.9124 10.8569 5.71952 11.0098C5.52663 11.1627 5.38319 11.3692 5.30718 11.6033C5.23117 11.8375 5.22598 12.0888 5.29225 12.3259C5.35852 12.5629 5.49331 12.7751 5.6797 12.9359L9.20392 16.0156L8.14767 20.589C8.09182 20.8284 8.10776 21.0788 8.19349 21.3092C8.27923 21.5395 8.43095 21.7394 8.6297 21.884C8.82845 22.0285 9.0654 22.1113 9.31093 22.1219C9.55647 22.1326 9.79968 22.0706 10.0102 21.9437L13.9945 19.5218L17.9875 21.9437C18.198 22.0706 18.4412 22.1326 18.6868 22.1219C18.9323 22.1113 19.1692 22.0285 19.368 21.884C19.5667 21.7394 19.7185 21.5395 19.8042 21.3092C19.8899 21.0788 19.9059 20.8284 19.85 20.589L18.7945 16.0109L22.318 12.9359C22.5044 12.7746 22.6389 12.5618 22.7046 12.3242C22.7704 12.0866 22.7644 11.8349 22.6875 11.6007ZM21.4985 11.9914L17.975 15.0664C17.8035 15.2155 17.676 15.4086 17.606 15.6249C17.5361 15.8412 17.5265 16.0724 17.5781 16.2937L18.6367 20.875L14.6469 18.4531C14.4522 18.3345 14.2287 18.2718 14.0008 18.2718C13.7729 18.2718 13.5494 18.3345 13.3547 18.4531L9.37033 20.875L10.4219 16.2968C10.4736 16.0755 10.4639 15.8443 10.394 15.628C10.3241 15.4118 10.1965 15.2187 10.025 15.0695L6.50002 11.9961C6.49973 11.9937 6.49973 11.9914 6.50002 11.989L11.1438 11.5875C11.3705 11.5675 11.5874 11.486 11.7712 11.3517C11.955 11.2175 12.0987 11.0356 12.1867 10.8257L14 6.50622L15.8125 10.8257C15.9005 11.0356 16.0442 11.2175 16.228 11.3517C16.4118 11.486 16.6288 11.5675 16.8555 11.5875L21.5 11.989C21.5 11.989 21.5 11.9937 21.5 11.9945L21.4985 11.9914Z"
              fill="#1C1C1C"
            />
          </svg>
        </motion.div>

        {/* Breadcrumb navigation */}
        <div className="breadCrumbDiv">
          {breadCrumb.length > 0 ? (
            // Loop through breadcrumbs and render each item
            breadCrumb.map((crumb, index) => (
              <span key={index}>
                <Link to={crumb.path}>{crumb.label}</Link>
                {/* Add a separator ("/") between breadcrumbs except for the last one */}
                {index < breadCrumb.length - 1 && <span> / </span>}
              </span>
            ))
          ) : (
            // Default breadcrumb (Dashboard) when no crumbs are present
            <Link to={"/dashboard"}>Dashboard</Link>
          )}
        </div>
      </div>

      {/* Right side of the header */}
      <div className="headerRight">
        {/* Search bar */}
        <div className="searchBarContainer">
          <svg
            className="searchIcon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.35 14.3562C14.2566 14.4481 14.131 14.4998 14 14.5C13.8672 14.4994 13.7397 14.448 13.6437 14.3562L10.9437 11.65C9.80659 12.6051 8.34462 13.0844 6.86273 12.9878C5.38083 12.8912 3.99343 12.2263 2.98988 11.1316C1.98633 10.037 1.44412 8.59717 1.47633 7.11248C1.50855 5.62779 2.11269 4.21286 3.16277 3.16277C4.21286 2.11269 5.62779 1.50855 7.11248 1.47633C8.59717 1.44412 10.037 1.98633 11.1316 2.98988C12.2263 3.99343 12.8912 5.38083 12.9878 6.86273C13.0844 8.34462 12.6051 9.80659 11.65 10.9437L14.35 13.6437C14.3972 13.6903 14.4347 13.7457 14.4603 13.8069C14.486 13.868 14.4991 13.9337 14.4991 14C14.4991 14.0663 14.486 14.1319 14.4603 14.1931C14.4347 14.2542 14.3972 14.3097 14.35 14.3562ZM7.24997 12C8.18944 12 9.1078 11.7214 9.88893 11.1995C10.6701 10.6775 11.2789 9.93567 11.6384 9.06772C11.9979 8.19977 12.092 7.24471 11.9087 6.3233C11.7254 5.40189 11.273 4.55552 10.6087 3.89122C9.94443 3.22692 9.09806 2.77452 8.17665 2.59124C7.25524 2.40797 6.30018 2.50203 5.43223 2.86155C4.56428 3.22106 3.82243 3.82988 3.30049 4.61102C2.77856 5.39215 2.49997 6.31051 2.49997 7.24998C2.50163 8.50925 3.0026 9.71647 3.89304 10.6069C4.78348 11.4973 5.9907 11.9983 7.24997 12Z" />
          </svg>
          {/* Input field for search */}
          <input className="searchInput" type="text" placeholder="Search" />
          {/* Display keyboard shortcut for search */}
          <span className="commandShortcut">⌘ /</span>
        </div>

        {/* Animated div containing another icon  */}
        <motion.div
          initial={{ opacity: 0, x: 20 }} // Initial state (hidden and shifted right)
          animate={{ opacity: 1, x: 0 }} // Animate to visible and position reset
          transition={{ duration: 0.8 }} // Duration of the animation
          className="icons"
        >
          <svg
            className={`themeIcon ${theme === "dark" ? "themeDarkIcon" : ""}`}
            onClick={() => toggleTheme()}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.375 10C14.375 10.8653 14.1184 11.7112 13.6377 12.4306C13.157 13.1501 12.4737 13.7108 11.6742 14.042C10.8748 14.3731 9.99515 14.4597 9.14648 14.2909C8.29781 14.1221 7.51826 13.7054 6.90641 13.0936C6.29456 12.4817 5.87788 11.7022 5.70907 10.8535C5.54026 10.0049 5.6269 9.12519 5.95803 8.32576C6.28916 7.52633 6.84992 6.84305 7.56938 6.36232C8.28885 5.88159 9.13471 5.625 10 5.625C11.1603 5.625 12.2731 6.08594 13.0936 6.90641C13.9141 7.72688 14.375 8.83968 14.375 10Z"
              fill="#1C1C1C"
              fillOpacity="0.1"
            />
            <path
              d="M9.375 3.125V1.25C9.375 1.08424 9.44085 0.925268 9.55806 0.808058C9.67527 0.690848 9.83424 0.625 10 0.625C10.1658 0.625 10.3247 0.690848 10.4419 0.808058C10.5592 0.925268 10.625 1.08424 10.625 1.25V3.125C10.625 3.29076 10.5592 3.44973 10.4419 3.56694C10.3247 3.68415 10.1658 3.75 10 3.75C9.83424 3.75 9.67527 3.68415 9.55806 3.56694C9.44085 3.44973 9.375 3.29076 9.375 3.125ZM15 10C15 10.9889 14.7068 11.9556 14.1573 12.7779C13.6079 13.6001 12.827 14.241 11.9134 14.6194C10.9998 14.9978 9.99445 15.0969 9.02455 14.9039C8.05464 14.711 7.16373 14.2348 6.46447 13.5355C5.7652 12.8363 5.289 11.9454 5.09607 10.9755C4.90315 10.0055 5.00216 9.00021 5.3806 8.08658C5.75904 7.17295 6.3999 6.39206 7.22215 5.84265C8.04439 5.29324 9.01109 5 10 5C11.3256 5.00145 12.5966 5.5287 13.5339 6.46606C14.4713 7.40343 14.9986 8.67436 15 10ZM13.75 10C13.75 9.25832 13.5301 8.5333 13.118 7.91661C12.706 7.29993 12.1203 6.81928 11.4351 6.53545C10.7498 6.25162 9.99584 6.17736 9.26841 6.32206C8.54098 6.46675 7.8728 6.8239 7.34835 7.34835C6.8239 7.8728 6.46675 8.54098 6.32206 9.26841C6.17736 9.99584 6.25162 10.7498 6.53545 11.4351C6.81928 12.1203 7.29993 12.706 7.91661 13.118C8.5333 13.5301 9.25832 13.75 10 13.75C10.9942 13.749 11.9475 13.3535 12.6505 12.6505C13.3535 11.9475 13.749 10.9942 13.75 10ZM4.55781 5.44219C4.67509 5.55946 4.83415 5.62535 5 5.62535C5.16585 5.62535 5.32491 5.55946 5.44219 5.44219C5.55946 5.32491 5.62535 5.16585 5.62535 5C5.62535 4.83415 5.55946 4.67509 5.44219 4.55781L4.19219 3.30781C4.07491 3.19054 3.91585 3.12465 3.75 3.12465C3.58415 3.12465 3.42509 3.19054 3.30781 3.30781C3.19054 3.42509 3.12465 3.58415 3.12465 3.75C3.12465 3.91585 3.19054 4.07491 3.30781 4.19219L4.55781 5.44219ZM4.55781 14.5578L3.30781 15.8078C3.19054 15.9251 3.12465 16.0841 3.12465 16.25C3.12465 16.4159 3.19054 16.5749 3.30781 16.6922C3.42509 16.8095 3.58415 16.8753 3.75 16.8753C3.91585 16.8753 4.07491 16.8095 4.19219 16.6922L5.44219 15.4422C5.50026 15.3841 5.54632 15.3152 5.57775 15.2393C5.60917 15.1634 5.62535 15.0821 5.62535 15C5.62535 14.9179 5.60917 14.8366 5.57775 14.7607C5.54632 14.6848 5.50026 14.6159 5.44219 14.5578C5.38412 14.4997 5.31518 14.4537 5.23931 14.4223C5.16344 14.3908 5.08212 14.3747 5 14.3747C4.91788 14.3747 4.83656 14.3908 4.76069 14.4223C4.68482 14.4537 4.61588 14.4997 4.55781 14.5578ZM15 5.625C15.0821 5.62506 15.1634 5.60895 15.2393 5.57759C15.3152 5.54622 15.3841 5.50021 15.4422 5.44219L16.6922 4.19219C16.8095 4.07491 16.8753 3.91585 16.8753 3.75C16.8753 3.58415 16.8095 3.42509 16.6922 3.30781C16.5749 3.19054 16.4159 3.12465 16.25 3.12465C16.0841 3.12465 15.9251 3.19054 15.8078 3.30781L14.5578 4.55781C14.4703 4.64522 14.4107 4.75663 14.3865 4.87793C14.3624 4.99924 14.3748 5.12498 14.4221 5.23924C14.4695 5.35351 14.5496 5.45116 14.6525 5.51982C14.7554 5.58849 14.8763 5.6251 15 5.625ZM15.4422 14.5578C15.3249 14.4405 15.1659 14.3747 15 14.3747C14.8341 14.3747 14.6751 14.4405 14.5578 14.5578C14.4405 14.6751 14.3747 14.8341 14.3747 15C14.3747 15.1659 14.4405 15.3249 14.5578 15.4422L15.8078 16.6922C15.8659 16.7503 15.9348 16.7963 16.0107 16.8277C16.0866 16.8592 16.1679 16.8753 16.25 16.8753C16.3321 16.8753 16.4134 16.8592 16.4893 16.8277C16.5652 16.7963 16.6341 16.7503 16.6922 16.6922C16.7503 16.6341 16.7963 16.5652 16.8277 16.4893C16.8592 16.4134 16.8753 16.3321 16.8753 16.25C16.8753 16.1679 16.8592 16.0866 16.8277 16.0107C16.7963 15.9348 16.7503 15.8659 16.6922 15.8078L15.4422 14.5578ZM3.75 10C3.75 9.83424 3.68415 9.67527 3.56694 9.55806C3.44973 9.44085 3.29076 9.375 3.125 9.375H1.25C1.08424 9.375 0.925268 9.44085 0.808058 9.55806C0.690848 9.67527 0.625 9.83424 0.625 10C0.625 10.1658 0.690848 10.3247 0.808058 10.4419C0.925268 10.5592 1.08424 10.625 1.25 10.625H3.125C3.29076 10.625 3.44973 10.5592 3.56694 10.4419C3.68415 10.3247 3.75 10.1658 3.75 10ZM10 16.25C9.83424 16.25 9.67527 16.3158 9.55806 16.4331C9.44085 16.5503 9.375 16.7092 9.375 16.875V18.75C9.375 18.9158 9.44085 19.0747 9.55806 19.1919C9.67527 19.3092 9.83424 19.375 10 19.375C10.1658 19.375 10.3247 19.3092 10.4419 19.1919C10.5592 19.0747 10.625 18.9158 10.625 18.75V16.875C10.625 16.7092 10.5592 16.5503 10.4419 16.4331C10.3247 16.3158 10.1658 16.25 10 16.25ZM18.75 9.375H16.875C16.7092 9.375 16.5503 9.44085 16.4331 9.55806C16.3158 9.67527 16.25 9.83424 16.25 10C16.25 10.1658 16.3158 10.3247 16.4331 10.4419C16.5503 10.5592 16.7092 10.625 16.875 10.625H18.75C18.9158 10.625 19.0747 10.5592 19.1919 10.4419C19.3092 10.3247 19.375 10.1658 19.375 10C19.375 9.83424 19.3092 9.67527 19.1919 9.55806C19.0747 9.44085 18.9158 9.375 18.75 9.375Z"
              fill="#1C1C1C"
            />
          </svg>
          <svg
            onClick={() => handleNotificationNav()}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.875 10C16.875 11.3597 16.4718 12.689 15.7164 13.8195C14.9609 14.9501 13.8872 15.8313 12.631 16.3517C11.3747 16.872 9.99238 17.0082 8.65876 16.7429C7.32514 16.4776 6.10013 15.8228 5.13864 14.8614C4.17716 13.8999 3.52238 12.6749 3.2571 11.3412C2.99183 10.0076 3.12798 8.62529 3.64833 7.36905C4.16868 6.11281 5.04987 5.03908 6.18046 4.28365C7.31105 3.52821 8.64026 3.125 10 3.125C11.8234 3.125 13.5721 3.84933 14.8614 5.13864C16.1507 6.42795 16.875 8.17664 16.875 10Z"
              fill="#1C1C1C"
              fillOpacity="0.1"
            />
            <path
              d="M10.625 6.25002V9.64612L13.4469 11.3391C13.589 11.4245 13.6914 11.5628 13.7316 11.7237C13.7717 11.8845 13.7463 12.0548 13.6609 12.1969C13.5756 12.339 13.4372 12.4414 13.2764 12.4816C13.1155 12.5217 12.9453 12.4963 12.8031 12.411L9.67812 10.536C9.58563 10.4804 9.50911 10.4018 9.45599 10.3079C9.40287 10.214 9.37497 10.1079 9.375 10V6.25002C9.375 6.08426 9.44085 5.92529 9.55806 5.80808C9.67527 5.69087 9.83424 5.62502 10 5.62502C10.1658 5.62502 10.3247 5.69087 10.4419 5.80808C10.5592 5.92529 10.625 6.08426 10.625 6.25002ZM10 2.50002C9.01406 2.49757 8.03742 2.69067 7.12661 3.06817C6.21579 3.44566 5.38889 4.00005 4.69375 4.69924C4.12578 5.27424 3.62109 5.82737 3.125 6.40627V5.00002C3.125 4.83426 3.05915 4.67529 2.94194 4.55808C2.82473 4.44087 2.66576 4.37502 2.5 4.37502C2.33424 4.37502 2.17527 4.44087 2.05806 4.55808C1.94085 4.67529 1.875 4.83426 1.875 5.00002V8.12502C1.875 8.29078 1.94085 8.44975 2.05806 8.56697C2.17527 8.68418 2.33424 8.75002 2.5 8.75002H5.625C5.79076 8.75002 5.94973 8.68418 6.06694 8.56697C6.18415 8.44975 6.25 8.29078 6.25 8.12502C6.25 7.95926 6.18415 7.80029 6.06694 7.68308C5.94973 7.56587 5.79076 7.50002 5.625 7.50002H3.82812C4.38672 6.84221 4.94297 6.22268 5.57734 5.58049C6.44598 4.71186 7.55133 4.11847 8.75529 3.87446C9.95924 3.63045 11.2084 3.74665 12.3467 4.20853C13.485 4.67041 14.4619 5.45749 15.1555 6.47144C15.849 7.48538 16.2283 8.68121 16.2461 9.90952C16.2639 11.1378 15.9193 12.3441 15.2554 13.3777C14.5915 14.4113 13.6377 15.2263 12.5132 15.7209C11.3888 16.2155 10.1435 16.3678 8.93299 16.1587C7.72249 15.9496 6.60043 15.3885 5.70703 14.5453C5.64732 14.4889 5.57708 14.4448 5.50032 14.4155C5.42356 14.3862 5.34179 14.3724 5.25967 14.3747C5.17754 14.377 5.09668 14.3955 5.0217 14.429C4.94672 14.4626 4.87908 14.5106 4.82266 14.5703C4.76623 14.63 4.72212 14.7003 4.69283 14.777C4.66355 14.8538 4.64967 14.9356 4.652 15.0177C4.65432 15.0998 4.67279 15.1807 4.70636 15.2557C4.73993 15.3306 4.78795 15.3983 4.84766 15.4547C5.73785 16.2948 6.82012 16.9042 8 17.2298C9.17989 17.5554 10.4215 17.5873 11.6166 17.3226C12.8116 17.058 13.9237 16.505 14.8559 15.7117C15.788 14.9184 16.5118 13.9091 16.9642 12.7718C17.4165 11.6344 17.5836 10.4037 17.4509 9.18689C17.3182 7.97011 16.8897 6.80431 16.2029 5.79122C15.516 4.77813 14.5916 3.94854 13.5104 3.37485C12.4292 2.80117 11.224 2.50082 10 2.50002Z"
              fill="#1C1C1C"
            />
          </svg>
          <svg
            onClick={() => handleNotificationNav()}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.25 15H3.75002C3.64063 14.9993 3.53333 14.97 3.43884 14.9149C3.34435 14.8597 3.26599 14.7808 3.21158 14.6859C3.15717 14.591 3.12862 14.4835 3.12878 14.3741C3.12895 14.2647 3.15783 14.1572 3.21252 14.0625C3.72737 13.1719 4.37502 10.9227 4.37502 8.125C4.37502 6.63316 4.96766 5.20242 6.02255 4.14752C7.07744 3.09263 8.50818 2.5 10 2.5C11.4919 2.5 12.9226 3.09263 13.9775 4.14752C15.0324 5.20242 15.625 6.63316 15.625 8.125C15.625 10.9234 16.2735 13.1719 16.7891 14.0625C16.8438 14.1574 16.8727 14.2649 16.8728 14.3745C16.8729 14.484 16.8442 14.5916 16.7896 14.6865C16.735 14.7815 16.6565 14.8604 16.5618 14.9154C16.467 14.9705 16.3595 14.9996 16.25 15Z"
              fill="#1C1C1C"
              fillOpacity="0.1"
            />
            <path
              d="M17.3281 13.7453C16.8945 12.9984 16.25 10.8852 16.25 8.125C16.25 6.4674 15.5915 4.87769 14.4194 3.70558C13.2473 2.53348 11.6576 1.875 10 1.875C8.34241 1.875 6.7527 2.53348 5.58059 3.70558C4.40849 4.87769 3.75001 6.4674 3.75001 8.125C3.75001 10.8859 3.1047 12.9984 2.6711 13.7453C2.56038 13.9352 2.50168 14.1509 2.50092 14.3707C2.50017 14.5905 2.55739 14.8066 2.66681 14.9973C2.77623 15.1879 2.93398 15.3463 3.12415 15.4565C3.31433 15.5667 3.53021 15.6248 3.75001 15.625H6.93829C7.08249 16.3306 7.46597 16.9647 8.02386 17.4201C8.58176 17.8756 9.27983 18.1243 10 18.1243C10.7202 18.1243 11.4183 17.8756 11.9762 17.4201C12.5341 16.9647 12.9175 16.3306 13.0617 15.625H16.25C16.4697 15.6247 16.6855 15.5665 16.8756 15.4562C17.0657 15.346 17.2233 15.1875 17.3326 14.9969C17.442 14.8063 17.4991 14.5903 17.4983 14.3705C17.4975 14.1508 17.4388 13.9351 17.3281 13.7453ZM10 16.875C9.61237 16.8749 9.23429 16.7546 8.91782 16.5308C8.60135 16.3069 8.36204 15.9905 8.23282 15.625H11.7672C11.638 15.9905 11.3987 16.3069 11.0822 16.5308C10.7657 16.7546 10.3877 16.8749 10 16.875ZM3.75001 14.375C4.35157 13.3406 5.00001 10.9438 5.00001 8.125C5.00001 6.79892 5.52679 5.52715 6.46448 4.58947C7.40216 3.65178 8.67393 3.125 10 3.125C11.3261 3.125 12.5979 3.65178 13.5355 4.58947C14.4732 5.52715 15 6.79892 15 8.125C15 10.9414 15.6469 13.3383 16.25 14.375H3.75001Z"
              fill="#1C1C1C"
            />
          </svg>
          <svg
            onClick={() => handleNotificationNav()}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.875 3.75V16.25H3.125C2.95924 16.25 2.80027 16.1842 2.68306 16.0669C2.56585 15.9497 2.5 15.7908 2.5 15.625V4.375C2.5 4.20924 2.56585 4.05027 2.68306 3.93306C2.80027 3.81585 2.95924 3.75 3.125 3.75H6.875Z"
              fill="#1C1C1C"
              fillOpacity="0.1"
            />
            <path
              d="M16.875 3.125H3.125C2.79348 3.125 2.47554 3.2567 2.24112 3.49112C2.0067 3.72554 1.875 4.04348 1.875 4.375V15.625C1.875 15.9565 2.0067 16.2745 2.24112 16.5089C2.47554 16.7433 2.79348 16.875 3.125 16.875H16.875C17.2065 16.875 17.5245 16.7433 17.7589 16.5089C17.9933 16.2745 18.125 15.9565 18.125 15.625V4.375C18.125 4.04348 17.9933 3.72554 17.7589 3.49112C17.5245 3.2567 17.2065 3.125 16.875 3.125ZM3.125 11.875H4.375C4.54076 11.875 4.69973 11.8092 4.81694 11.6919C4.93415 11.5747 5 11.4158 5 11.25C5 11.0842 4.93415 10.9253 4.81694 10.8081C4.69973 10.6908 4.54076 10.625 4.375 10.625H3.125V9.375H4.375C4.54076 9.375 4.69973 9.30915 4.81694 9.19194C4.93415 9.07473 5 8.91576 5 8.75C5 8.58424 4.93415 8.42527 4.81694 8.30806C4.69973 8.19085 4.54076 8.125 4.375 8.125H3.125V6.875H4.375C4.54076 6.875 4.69973 6.80915 4.81694 6.69194C4.93415 6.57473 5 6.41576 5 6.25C5 6.08424 4.93415 5.92527 4.81694 5.80806C4.69973 5.69085 4.54076 5.625 4.375 5.625H3.125V4.375H6.25V15.625H3.125V11.875ZM16.875 15.625H7.5V4.375H16.875V15.625Z"
              fill="#1C1C1C"
            />
          </svg>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;

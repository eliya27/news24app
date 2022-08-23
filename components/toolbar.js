import react, { useState } from "react";
import { useRouter } from "next/router";
import ToolbarStyles from "../styles/Toolbar.module.css";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Toolbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className={ToolbarStyles.main}>
        <div onClick={() => router.push("/")}>Home</div>
        <div onClick={() => router.push("/feed/1")}>Feed</div>
        <div onClick={() => router.push("/author")}>Author</div>
      </div>
      <div className={ToolbarStyles.mobile}>
        <div className={ToolbarStyles.mobileNav}>
          <h2>
            News<span className={ToolbarStyles.mobileNav_logo}>360&deg;</span>
          </h2>
          <h2
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </h2>
        </div>
        {toggleMenu && (
          <div className={ToolbarStyles.mobileMenu}>
            <div onClick={() => router.push("/")}>
              <h2>Home</h2>
            </div>
            <div onClick={() => router.push("/feed/1")}>
              <h2>Feed</h2>
            </div>
            <div onClick={() => router.push("/author")}>
              <h2>Author</h2>
            </div>
            <div className={ToolbarStyles.mobileMenu__close}>
              <p
                onClick={() => {
                  setToggleMenu(!toggleMenu);
                }}
              >
                close
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Toolbar;

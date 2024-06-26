import { useState, useEffect, useCallback } from "react";
import DarkModeButton from "./DarkModeButton";
import CalendarButton from "./CalendarButton";
import NotificationButton from "./NotificationButton";
import HamburgerButton from "./HamburgerButton";
import LoginButton from "./LoginButton";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import PropTypes from "prop-types";
import LoginModal from "../Modal/LoginModal";
import RegisterModal from "../Modal/RegisterModal";

const NavBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleOpenLoginModal = () => setIsLoginModalOpen(true);
  const handleOpenRegisterModal = () => setIsRegisterModalOpen(true);

  const handleCloseModal = useCallback(() => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
  }, []);

  const handleRedirect = () => {
    if (isLoginModalOpen) {
      handleCloseModal();
      handleOpenRegisterModal();
    } else if (isRegisterModalOpen) {
      handleCloseModal();
      handleOpenLoginModal();
    }
  };

  const toggleSideBar = useCallback(() => {
    setIsSideBarOpen((isSideBarOpen) => !isSideBarOpen);
  }, []);

  useEffect(() => {
    if (!isSideBarOpen && !isLoginModalOpen && !isRegisterModalOpen) return;
    const handleEscClose = (evt) => {
      if (isSideBarOpen && evt.key === "Escape") toggleSideBar();
      else if (
        (isLoginModalOpen || isRegisterModalOpen) &&
        evt.key === "Escape"
      )
        handleCloseModal();
      else if (isRegisterModalOpen && evt.key === "Escape") h;
    };
    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [
    isSideBarOpen,
    isLoginModalOpen,
    isRegisterModalOpen,
    toggleSideBar,
    handleCloseModal,
  ]);

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center justify-start">
        <HamburgerButton toggleSideBar={toggleSideBar} />
      </div>
      <div className="flex items-center gap-4 justify-end">
        <SearchBar />
        <DarkModeButton />
        <CalendarButton />
        <NotificationButton />
        <LoginButton handleOpenLoginModal={handleOpenLoginModal} />
        <SideBar isSideBarOpen={isSideBarOpen} toggleSideBar={toggleSideBar} />
        <LoginModal
          isLoginModalOpen={isLoginModalOpen}
          handleCloseModal={handleCloseModal}
          handleRedirect={handleRedirect}
        />
        <RegisterModal
          isRegisterModalOpen={isRegisterModalOpen}
          handleCloseModal={handleCloseModal}
          handleRedirect={handleRedirect}
        />
      </div>
    </div>
  );
};

SideBar.propTypes = {
  isSideBarOpen: PropTypes.bool.isRequired,
  toggleSideBar: PropTypes.func.isRequired,
};

export default NavBar;

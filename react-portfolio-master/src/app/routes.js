import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import ContactUs from "../pages/contact";
import About from "../pages/about";
import ExperiencePage from "../pages/experience";
import EducationPage from "../pages/education";
import SkillsPage from "../pages/skills";
import Blogs from "../pages/blogs";
import Socialicons from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import withRouter from "../hooks/withRouter";

const AnimatedRoutes = ({ router }) => {
  const { location } = router;

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={{
          enter: 400,
          exit: 400,
        }}
        classNames="page"
        unmountOnExit
      >
        <Routes location={location}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

const AnimatedRoutesWithRouter = withRouter(AnimatedRoutes);

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutesWithRouter />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;

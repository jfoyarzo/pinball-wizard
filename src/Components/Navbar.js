import { React, useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { IconContext } from 'react-icons';
import { MdArrowBackIosNew, MdOutlineMic, MdSettings } from 'react-icons/md';

const MainNav = () => {
  const [title, setTitle] = useState('Most Machines');
  const location = useLocation();
  let backButton = (
    <div className="d-flex align-items-center">
      <MdArrowBackIosNew />
      <span className="fw-bold" style={{ fontSize: '1.4em' }}>2015</span>
    </div>
  );

  if (location.pathname !== '/') {
    backButton = (
      <NavLink to="/">
        <MdArrowBackIosNew />
      </NavLink>
    );
  }

  useEffect(() => {
    if (location.pathname === '/') {
      setTitle('most pinball machines');
    } else {
      setTitle('city view');
    }
  }, [location, setTitle]);

  return (
    <IconContext.Provider value={{ size: '1.6em' }}>
      <Navbar style={{ height: '5vh' }}>
        <Container className="align-middle justify-content-between">
          {backButton}
          <p className="fw-light" style={{ fontSize: '1.2em' }}>{title}</p>
          <div>
            <MdOutlineMic className="me-3" />
            <MdSettings />
          </div>
        </Container>
      </Navbar>
    </IconContext.Provider>
  );
};

export default MainNav;

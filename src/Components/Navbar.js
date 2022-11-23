import { React, useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { MdArrowBackIosNew, MdOutlineMic, MdSettings } from 'react-icons/md';

const MainNav = () => {
  const [title, setTitle] = useState('Most Machines');
  const location = useLocation();
  let backButton = <MdArrowBackIosNew />;

  if (location.pathname !== '/') {
    backButton = (
      <NavLink to="/">
        <MdArrowBackIosNew />
      </NavLink>
    );
  }

  useEffect(() => {
    if (location.pathname === '/') {
      setTitle('Most Machines');
    } else {
      setTitle('City view');
    }
  }, [location, setTitle]);

  return (
    <Navbar style={{ height: '4vh', backgroundColor: 'blue' }}>
      <Container className="align-middle justify-content-between">
        {backButton}
        <p>{title}</p>
        <div>
          <MdOutlineMic />
          <MdSettings />
        </div>
      </Container>
    </Navbar>
  );
};

export default MainNav;

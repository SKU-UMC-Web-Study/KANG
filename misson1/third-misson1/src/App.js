import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import MainPage from './components/MainPage';
import PopularPage from './components/PopularPage';
import NowPlayingPage from './components/NowPlayingPage';
import TopRatedPage from './components/TopRatedPage';
import UpComingPage from './components/UpComing';
import Details from './components/Details';
import NotFound from './components/NotFound';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Navbar = styled.nav`
  background-color: black;
  color: white;
  width: 100%;
  padding: 0;
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  }
  li {
    margin: 0 10px;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px;

  &:hover {
    color: yellow;
    font-size: 17px;
  }
`;

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginToggle = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <Router>
      <AppContainer>
        <Navbar>
          <ul>
            <li><StyledLink to="/">UMC Movie</StyledLink></li>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <li>
                <StyledLink onClick={handleLoginToggle}>
                  {isLoggedIn ? '로그아웃' : '로그인'}
                </StyledLink>
              </li>
              <li><StyledLink to="/popular">Popular</StyledLink></li>
              <li><StyledLink to="/now-playing">Now Playing</StyledLink></li>
              <li><StyledLink to="/top-rated">Top Rated</StyledLink></li>
              <li><StyledLink to="/upcoming">Upcoming</StyledLink></li>
            </div>
          </ul>
        </Navbar>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/now-playing" element={<NowPlayingPage />} />
          <Route path="/top-rated" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpComingPage />} />
          <Route path="/details/:movieId" element={<Details />} />
          
          {/* 잘못된 경로로 이동했을 때 NotFound 페이지를 보여주는 라우팅 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
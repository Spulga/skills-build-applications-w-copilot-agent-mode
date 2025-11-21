
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 shadow">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src="/octofitapp-small.png" alt="OctoFit Logo" width="40" height="40" className="me-2 rounded-circle border border-light bg-white" style={{objectFit: 'cover'}} />
            <span className="fw-bold fs-4 text-white">OctoFit Tracker</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/activities">Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/workouts">Workouts</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="text-center my-5">
              <h1 className="display-4 mb-3 text-primary">Welcome to OctoFit Tracker!</h1>
              <p className="lead">Track your fitness, join teams, and compete on the leaderboard.</p>
              <Link className="btn btn-lg btn-success mt-3" to="/activities">Get Started</Link>
            </div>
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;

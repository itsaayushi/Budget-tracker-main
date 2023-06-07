import { NavLink } from 'react-router-dom';

export default function NavSlider(props) {
  return (
    <div className="nav-slider" onMouseLeave={(e) => props.HideSlider(e)}>
      <nav className="navbarbox">
        <NavLink to="/" onClick={() => props.HideSlider()}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span
              style={{
                paddingTop: '8px',
                marginBottom: 0,
              }}
            >
              {' '}
              Expense Tracker
            </span>
          </div>
        </NavLink>

        {/* overview */}
        <NavLink
          style={{ textDecoration: 'none' }}
          to="/"
          onClick={() => props.HideSlider()}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span
              style={{
                paddingTop: '8px',
                marginBottom: 0,
              }}
            >
              Overview
            </span>
          </div>
        </NavLink>

        {/* income  */}
        <NavLink to="/Income" onClick={() => props.HideSlider()}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span
              style={{
                paddingTop: '9px',
                marginBottom: 0,
              }}
            >
              Income
            </span>
          </div>
        </NavLink>

        {/* expense */}
        <NavLink to="/expenses" onClick={() => props.HideSlider()}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span
              style={{
                paddingTop: '9px',
                marginBottom: 0,
              }}
            >
              Expense
            </span>
          </div>
        </NavLink>
      </nav>
    </div>
  );
}

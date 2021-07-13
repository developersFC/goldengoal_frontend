import { useState, useEffect } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import axios from 'axios';
import './Form.css';

const FormSignup = ({ setProducts }) => {
  const [countryCode, setCountryCode] = useState('');
  const [leagueId, setLeagueId] = useState('');
  const [leagues, setLeagues] = useState([]);
  const [leagueStandings, setLeagueStandings] = useState([]);

  const getStandings = (e) => {
    handleLeagueId(e);
    console.log(leagueId);
    const config = {
      method: 'get',
      params: {
        league: leagueId,
      },
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: `/rank`,
    };

    axios(config)
      .then((axiosResults) => {
        handleLeagueStandings(axiosResults.data);
        console.log(axiosResults.data);
        setProducts(
          leagueStandings.map((team) => {
            let x = { rank: team.rank, name: team.name, points: team.points };
            return x;
          })
        );
      })
      .catch((err) => console.error(err));
  };

  const getLeagues = () => {
    const config = {
      method: 'get',
      params: {
        code: countryCode,
      },
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: `/leagues`,
    };

    axios(config)
      .then((axiosResults) => {
        handleLeagues(axiosResults.data);
      })
      .catch((err) => console.error(err));
  };

  const handleChangeCountryCode = (e) => {
    setCountryCode(e.target.value);
  };

  const handleLeagues = (data) => {
    setLeagues(data);
  };

  const handleLeagueId = (e) => {
    setLeagueId(e);
  };

  const handleLeagueStandings = (data) => {
    setLeagueStandings(data);
  };

  const handleSubmit = (e) => {
    getLeagues();
    e.preventDefault();
  };

  const renderLeagues = () => {
    if (leagues === []) return '';
    return leagues.map((league) => {
      return <Dropdown.Item eventKey={league.id}>{league.name}</Dropdown.Item>;
    });
  };

  useEffect(() => {
    
  }, [leagues]);

  return (
    <div className="form-content-right">
      <div className="descForm"></div>
      <form onSubmit={handleSubmit} className="form" noValidate>
        <div className="form-inputs">
          <label className="form-label">Enter Country Code</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter the country code "
            value={countryCode}
            onChange={handleChangeCountryCode}
          />
        </div>

        <button className="form-input-btn" type="submit">
          submit
        </button>
        <DropdownButton
          onSelect={getStandings}
          alignRight
          title="League Name"
          id="dropdown-menu-align-right"
          style={{
            width: '125px',
            textAlign: 'center',
            fontSize: '20px',
            width: '348px',
            height: '40px',
          }}
        >
          {renderLeagues()}
        </DropdownButton>
      </form>
    </div>
  );
};

export default FormSignup;

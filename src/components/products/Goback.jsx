import { useNavigate } from 'react-router-dom';

function Goback(props) {
  let navigate = useNavigate();

  window.onpopstate = function (e) {
    navigate('/');
  };
  return null;
}

export default Goback;

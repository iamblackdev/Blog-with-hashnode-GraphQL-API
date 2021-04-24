import './styles.css'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-text">
        404
      </div>
      <div className="return-text">
        Please return to <Link to="/">Home</Link> page 
      </div>
    </div>
   );
}
 
export default NotFound;
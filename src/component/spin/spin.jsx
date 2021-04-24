
import './styles.css'

const Spin = ({height = '20px', width = '20px'}) => {
  return (
    <div className="spin" style={{height: `${height}`, width: `${width}`}}></div>
   );
}
 
export default Spin;
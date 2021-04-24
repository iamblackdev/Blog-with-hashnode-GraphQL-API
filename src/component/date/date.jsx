
const monthNames = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const PostDate = ({dateAdded, color}) => {
  return (
      <span style={{color: `${color}`}}> {monthNames[`${parseInt(dateAdded.slice(5,7))}`]}, {dateAdded.slice(8,10)}  {dateAdded.slice(0,4)}</span>
   );
}
 
export default PostDate;
import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <>
        <h2>Page Not Found</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minima cumque et numquam, amet qui commodi dolore magnam optio quam?</p>
        <p>Go back to <Link to="/">Homepage</Link>.</p>
        </>
        
    );
}

export default NotFound;

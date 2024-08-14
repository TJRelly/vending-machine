import { Link } from "react-router-dom";

const Candy = () => {
    return (
        <>
            <h2>Here is your candy.</h2>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </>
    );
};

export default Candy;

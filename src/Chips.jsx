import { Link } from "react-router-dom";

const Chips = () => {
    return (
        <>
            <h2>Here are your chips.</h2>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </>
    );
};

export default Chips;

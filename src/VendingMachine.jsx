import { Link } from "react-router-dom";
// Shows list of snacks
const VendingMachine = () => {
    return (
        <>
            <h1 className="pb-4">Vending Machine</h1>
            <h2 className="text-2xl pb-2">What would you like?</h2>
            <ul className="text-xl text-left">
                <li className="ps-[5.5rem]">
                    <Link to="/chips">Chips</Link>
                </li>
                <li className="ps-[5.5rem]">
                    <Link to="/candy">Candy</Link>
                </li>
                <li className="ps-[5.5rem]">
                    <Link to="/water">Water</Link>
                </li>
            </ul>
        </>
    );
};

export default VendingMachine;

import { getInvoices } from "../data";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
export default function Invoices() {
    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams();
    return (
        <div style={{display: "flex"}}>
            <nav style={{padding: "1rem 0", borderRight: "solid 1px"}}>
                <input
                    value={searchParams.get("filter") || ""}
                    onChange={(e) => {
                        let filter = e.target.value;
                        if (filter)
                            setSearchParams({filter});
                        else
                            searchParams({});
                    }}
                 />
                {invoices
                .filter((invoice) => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let name = invoice.name.toLocaleLowerCase();
                    return name.startsWith(filter.toLocaleLowerCase());
                })
                .map((invoice) => (
                    <NavLink
                        className={({isActive}) => isActive ? "red" : "blue"}
                        style={({isActive}) => {
                            return {
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "red" : "",
                            };
                        }}
                        to={`/invoices/${invoice.number}`}
                        key={invoice.number}
                    >
                        {invoice.name}
                    </NavLink>
                ))}
            </nav>
            <Outlet />
        </div>
    );
}
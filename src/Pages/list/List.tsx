import { Datatable } from "../../components/Datatable/Datatable";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";

import "./List.scss"

interface Props {

}

export function List(props: Props) {
    return (
        <div className="list">
            <Sidebar />
            <div className="list-container">
                <Navbar />
                <Datatable field={""} headerName={""} width={0} type={""} description={""} sortable={false} />
            </div>
        </div>
    )
}
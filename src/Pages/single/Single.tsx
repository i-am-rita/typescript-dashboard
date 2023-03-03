import { Datatable } from "../../components/Datatable/Datatable";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import './Single.scss'

interface Props {
}

export function SingleUser(props: Props) {
    return (
        <div className="single">
            <Sidebar />
            <div className="single-container">
                <Navbar />
                <div className="single-user">
                    <div className="left">
                        <div className="user-info">
                            <img className="user-image" src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                            <div className="user-details">
                                <h3>Rita Uzoma</h3>
                                <p>rita@test.com</p>
                                <p>Phone: +111 23879378778</p>
                                <p>Address: Lagos, Nigeria</p>
                                <p>Country: Nigeria</p>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="user-details">
                            <h2>Summary of User's transaction</h2>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <h3 className="latest">Latest Transactions</h3>
                <Datatable field={""} headerName={""} width={0} type={""} description={""} sortable={false}/>
                </div>
            </div>
        </div>
    );
}

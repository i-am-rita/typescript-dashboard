import "./Datatable.scss"
import { DataGrid } from '@mui/x-data-grid';

import { rows, columns } from '../../tabledata'

interface Props {
    field: string,
    headerName: string,
    width: number,
    type: string,
    description: string,
    sortable: boolean,
}

export function Datatable(props: Props) {

    const actionButtons = [
        {
            field: 'action',
            headerName: "Action",
            width: 180,
            renderCell: (params: any) => {
                return (
                    <div className="action-container">
                        <div className="viewButton">View</div>
                        <div className="deleteButton">Delete</div>
                    </div>
                )
            }
        }
    ]

    return (
        <div style={{ height: 600, width: '100%', paddingTop: "50px" }}>
            <DataGrid
                rows={rows}
                columns={columns.concat(actionButtons)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    )
}
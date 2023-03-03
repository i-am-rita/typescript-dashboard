
export const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 70,
    },
    {
        field: 'user',
        headerName: 'User',
        width: 230,
        renderCell: (params: any) => {
            return (
                <div className="cellWithImg">
                    <img src={params.row.img} className="cell-image" alt="row-avatar" />
                    {params.row.email}
                </div>
            )
        }
        // `${params.row.firstname || ""} ${params.row.lastName || ""}`
    },

    {
        field: 'firstName',
        headerName: 'First name',
        width: 130,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 130,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },

    {
        field: 'status',
        headerName: "Status",
        width: 160,
        renderCell: (params: any) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    }
]


export const rows = [
    {
        id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, email: 'test@gmail.com', status: 'active', agenda: 'agendoooo',
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
        id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, email: 'test@gmail.com', status: 'passive', agenda: 'agendoooo',
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",

    },
    {
        id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, email: 'test@gmail.com', status: 'pending', agenda: 'agendoooo',
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
        id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, email: 'test@gmail.com', status: 'active', agenda: 'agendoooo',
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
        id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 34, email: 'test@gmail.com', status: 'pending', agenda: 'agendoooo',
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
        id: 6, lastName: 'Melisandre', firstName: 'nullituhv', age: 54, email: 'test@gmail.com', status: 'active', agenda: 'agendoooo',
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
        id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, email: 'test@gmail.com', status: 'passive', agenda: 'agendoooo',
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
        id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, email: 'test@gmail.com', status: 'active', agenda: 'agendoooo',
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
        id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, email: 'test@gmail.com', status: 'pending', agenda: 'agendoooo',
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
        id: 10, lastName: 'Clifford', firstName: 'Ferrara', age: 44, email: 'test@gmail.com', status: 'passive', agenda: 'agendoooo',
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
        id: 11, lastName: 'Frances', firstName: 'Rossini', age: 36, email: 'test@gmail.com', status: 'active', agenda: 'agendoooo',
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
        id: 12, lastName: 'Roxie', firstName: 'Harvey', age: 65, email: 'test@gmail.com', status: 'pending', agenda: 'agendoooo',
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
];
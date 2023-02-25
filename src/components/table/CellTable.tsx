
import './Table.scss'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


interface Cell {
    id: number
    product: string
    img: string
    customer: string
    date: string
    amount: number
    method: string
    status: boolean
}

export function CellTable(props: Cell) {
    const data: Cell[] = [
        {
            id: 1,
            product: 'Cloths and Shoes',
            img: "https://",
            customer: "Rita",
            date: "22/02/2023",
            amount: 200,
            method: "dispatch",
            status: true,
        },
        {
            id: 1,
            product: 'Cloths and Shoes',
            img: "https://",
            customer: "Rita",
            date: "22/02/2023",
            amount: 200,
            method: "dispatch",
            status: true,

        },
        {
            id: 1,
            product: 'Cloths and Shoes',
            img: "https://",
            customer: "Rita",
            date: "22/02/2023",
            amount: 200,
            method: "dispatch",
            status: true,

        },
        {
            id: 1,
            product: 'Cloths and Shoes',
            img: "https://",
            customer: "Rita",
            date: "22/02/2023",
            amount: 200,
            method: "dispatch",
            status: true,

        },
    ]
    return (
        <>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item) => (
                            <TableRow
                                key={item.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {item.product}
                                </TableCell>
                                <TableCell align="right">{item.customer}</TableCell>
                                <TableCell align="right">{item.amount}</TableCell>
                                <TableCell align="right">{item.method}</TableCell>
                                <TableCell align="right">{item.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>





        </>

    )
}
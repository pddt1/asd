
import { styled, useTheme,  alpha } from '@mui/material/styles';


import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const name= ['','Teacher', 'Course Manager', 'Assistant'];


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  
function TableCustom(props) {

  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Full Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Role</StyledTableCell>
                <StyledTableCell align="center">Create Date</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
            </TableHead>
            {
                props.data.length?
                (<TableBody>
                    {props.data.map((row,index) => (
                        <TableRow key={index}>
                            <StyledTableCell component="th" scope="row">
                                {row.fullname}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.email}</StyledTableCell>
                            <StyledTableCell align="center">{name[row.roleId]}</StyledTableCell>
                            <StyledTableCell align="center">{row.createdAt.split('T')[0]}</StyledTableCell>
                            <StyledTableCell align="center">{row.status}</StyledTableCell>
                            <StyledTableCell align="center">
                                <Button>
                                    <MoreHorizIcon/>
                                </Button>
                            </StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>)
                :(
                    <TableBody></TableBody>
                )
            }
        </Table>
    </TableContainer>
  );  
}

export default TableCustom;

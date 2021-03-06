import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axiosInstance from '../axios'
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import Pagination from '@material-ui/lab/Pagination';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'green',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function StudentsDetail() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1)

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    axiosInstance
      .get(`/users_list/?user_type=teacher&skip=${(newPage - 1) * 10}&limit=10`)
      .then(res => {
        // console.log(res.data);
        setData(res.data.data);
        const pageCount = Number(res.data.count);
        const pageCount2 = parseInt(pageCount / 10)
        const pageCount1 = pageCount % 10 == 0 ? pageCount2 : pageCount2 + 1;
        setTotalPages(pageCount1);
      })
      .catch(err => {
        // console.log(err);
        alert('You are not logged in, please login and check again.');
      })
  };

  useEffect(() => {
    axiosInstance
      .get(`/users_list/?user_type=teacher`)
      .then(res => {
        // console.log(res.data.data);
        setData(res.data.data);
      })
      .catch(err => {
        // console.log(err);
        // alert('You are not logged in, please login and check again.');
      })
  }, [])

  return (
    <>
      {data.length > 0 &&
        <>
          <h3>Teachers Detail:</h3>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>First Name</StyledTableCell>
                  <StyledTableCell align="right">Last Name</StyledTableCell>
                  <StyledTableCell align="right">Email Id</StyledTableCell>
                  <StyledTableCell align="right">User Name</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(row => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {row.first_name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.last_name}</StyledTableCell>
                    <StyledTableCell align="right">{row.email}</StyledTableCell>
                    <StyledTableCell align="right">{row.user_name}</StyledTableCell>
                    <StyledTableCell align="right"><EditTwoToneIcon /></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className={classes.root}>
            {/* <Pagination count={10} shape="rounded" /> */}
            <Pagination
              count={totalPages}
              variant="outlined"
              shape="rounded"
              page={page}
              onChange={handleChangePage}
            />
          </div>
        </>
      }
      {data.length == 0 && <TableContainer component={Paper}><img src='https://i.pinimg.com/originals/c9/22/68/c92268d92cf2dbf96e3195683d9e14fb.png'></img></TableContainer>}
    </>
  );
}
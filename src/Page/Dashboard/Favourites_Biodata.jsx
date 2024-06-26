import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { MdDelete } from "react-icons/md";
import toast from 'react-hot-toast';
import { AuthContext } from '../../Auth/ContextProvider';
import { Helmet } from 'react-helmet';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function Favourites_Biodata() {
  const axiosSecure = useAxiosSecure()
  const { user } = React.useContext(AuthContext)

  const { data = [], refetch, isLoading } = useQuery({
    queryKey: ['favouritesBiodata'],
    queryFn: async () => {
      const response = await axiosSecure.get(`/favourites`, {params:{email:user?.email}});
      return response.data;
    },
  })

  const handeldelete = async (id) => {
    const response = await axiosSecure.delete(`/favourites`, { params: { id } });
    toast.success('Biodata deleted')
    refetch()
  }


  return (
    <div>
      <Helmet>
        <title>MatchHearts || Favourites Biodata</title>
      </Helmet>
      <h2 className='text-4xl font-semibold text-[#302F2A] flex items-center justify-center pt-20'>Favourites Biodatas</h2>
      {isLoading && (
        <div className="flex w-full justify-center items-center py-10 ">
          <div className="flex justify-center items-center py-10 w-full">
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 mx-auto border-black"></div>
          </div>
        </div>
      )}

      {
        data.length === 0 && !isLoading && (
          <div className='flex justify-center items-center flex-col'>
            <h2 className='text-xl font-semibold text-[#302F2A] pt-10'>No Favourites Biodatas</h2>
          </div>
        )
      }

      <div className='md:mx-10 pt-10'>
        {!isLoading && data.length > 0 && <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="center">Biodata Id</StyledTableCell>
                <StyledTableCell align="center">Permanent Address</StyledTableCell>
                <StyledTableCell align="center">Occupation</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {data.map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.biodataId}</StyledTableCell>
                  <StyledTableCell align="center">{row.address}</StyledTableCell>
                  <StyledTableCell align="center">{row.occupation}</StyledTableCell>
                  <StyledTableCell align="center"><button onClick={() => handeldelete(row.biodataId)}><MdDelete size={25} color='red' /></button></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>}
      </div>

    </div>
  )
}

export default Favourites_Biodata
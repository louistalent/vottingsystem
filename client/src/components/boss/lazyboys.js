import Layout from '../Layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
function Lazyboys() {
    const [lazyboys, setLazyboys] = useState([]);

    useEffect(async () => {
        try {
            if (localStorage.getItem('isb') == false) {
                window.location.href = '/you_are_not_boss';
                return;
            }
            const result = await axios.post('http://127.0.0.1:5000/getLazyboys');
            console.log(result.data)
            setLazyboys(result.data);
        } catch (error) {
            console.log(error)
        }
    }, [])
    const useRowStyles = makeStyles({
        root: {
            '& > *': {
                borderBottom: 'set',
            },
        },
    });

    function Row(props) {
        const { row } = props;
        const classes = useRowStyles();
        return (
            <React.Fragment>
                <TableRow className={classes.root}>
                    <TableCell align="right">{row.c_name}</TableCell>
                    <TableCell align="right">{row.c_ip}</TableCell>
                </TableRow>
            </React.Fragment>
        );
    }

    return (
        <Layout>
            <div style={{ textAlign: 'left' }} className='mt5 mb5'>
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow style={{ background: '#475247' }}>
                                <TableCell align="right"><span className='th_font'>Name</span></TableCell>
                                <TableCell align="right"><span className='th_font'>IP</span></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {lazyboys.map((row) => (
                                <Row key={row.pk} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Layout>
    );
}

export default Lazyboys;

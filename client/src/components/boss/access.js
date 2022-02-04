import Layout from '../Layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
function Access() {
    const [mems, setMems] = useState([]);
    const [memberStatus, setMemberStatus] = useState('');

    useEffect(async () => {
        try {
            if (localStorage.getItem('isb') !== 'true') {
                alert('you are not Boss!')
                window.location.href = '/you_are_not_boss';
                return;
            } else {
                const result = await axios.post('http://127.0.0.1:5000/getMembers');
                console.log(result.data)
                setMems(result.data);
            }
        } catch (error) {
            console.log(error)
        }
    }, [memberStatus])

    const useRowStyles = makeStyles({
        root: {
            '& > *': {
                borderBottom: 'set',
            },
        },
    });

    const Access = async (pk, id) => {
        const data = { pk, id };
        try {
            const res = await axios.post(`http://127.0.0.1:5000/${id}`, data);
            console.log(res.data);
            if (res.data == 'success') {
                console.log('update success');
                var date = new Date();
                setMemberStatus(date.getTime());

            } else {
                alert('update failure')
            }
        } catch (error) {
            console.log(error)
        }
    }
    function Row(props) {
        const { row } = props;
        const classes = useRowStyles();
        return (
            <React.Fragment>
                <TableRow className={classes.root}>
                    <TableCell align="right">{row.c_name}</TableCell>
                    <TableCell align="right">{row.c_ip}</TableCell>
                    <TableCell align="right">
                        {!row.b_access_status ? <a onClick={() => Access(row.pk, 'off_command')} className='round50 btn btn-secondary'><span>OFF</span> </a> : <a onClick={() => Access(row.pk, 'on_command')} className='round50 btn btn-primary'><span >&nbsp;ON&nbsp;</span></a>}
                        {/* {row.b_access_status && } */}
                        {/* <label className="switch">
                            <i className='switch_i'><input type="checkbox" checked={row.b_access_status} /><span className="switch_slider round"></span></i>
                        </label> */}
                    </TableCell>
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
                                <TableCell align="right"><span className='th_font'>access</span></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {mems.map((row) => (
                                <Row key={row.pk} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Layout>
    );
}

export default Access;

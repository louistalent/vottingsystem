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
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';
import Delete from '@material-ui/icons/Delete';
import Backspace from '@material-ui/icons/Backspace';
import SwapCalls from '@material-ui/icons/SwapCalls';

function Proposal() {
	const [proposals, setProposals] = useState([]);
	// const [o, setProposals] = useState('');
	// const [m, setProposals] = useState('');
	// const [www, setWww] = useState([]);

	const [deleteMonitor, setDeleteMonitor] = useState(true)
	const [isb, setIsb] = useState(localStorage.getItem('isb'));
	useEffect(async () => {
		try {
			const result = await axios.post('http://127.0.0.1:5000/getProposal');
			setProposals(result.data);
			console.log(result.data)
			// setDeleteMonitor(true)
		} catch (error) {
			console.log(error)
		}
	}, [deleteMonitor])

	const useRowStyles = makeStyles({
		root: {
			'& > *': {
				borderBottom: 'unset',
			},
		},
	});

	const Control = async (pk, id) => {
		const data = { pk, id };
		if (id == 'update') {
			if (!window.confirm('Will you take revert {like} and {dislike}. ->>> really? ')) {
				return
			}
		}
		try {
			const res = await axios.post(`http://127.0.0.1:5000/${id}`, data);
			console.log(res.data);
			if (res.data == 'success') {
				alert(`${id} success`);
			} if (res.data == 'yourself') {
				alert('this is your Proposal');
			} if (res.data == 'alreadyup') {
				alert(res.data)
			} if (res.data == 'alreadydown') {
				alert('already down')
			} if (res.data == 'nodelete') {
				alert('this not your proposal ');
			} if (res.data == 'deletesuccess') {
				setDeleteMonitor(false);
				alert('delete success ');
			} if (res.data == 'revertsuccess') {
				alert('revert success ');
			} if (res.data == 'noupdown') {
				alert('noupdown ');
			} if (res.data == 'alreadyrevert') {
				alert('already revert ');
			} else {
				console.log('Problem Problem Problem')
			}
			deleteMonitor ? setDeleteMonitor(false) : setDeleteMonitor(true);
		} catch (error) {
			console.log(error)
		}
	}
	function Row(props) {
		const { row } = props;
		const [open, setOpen] = React.useState(false);
		const classes = useRowStyles();
		var date = row.d_date.replace('T', ' - ');
		date = date.replace('.000Z', '');
		return (
			<React.Fragment>
				<TableRow className={classes.root}>
					<TableCell>
						<IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
							{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
						</IconButton>
					</TableCell>
					<TableCell align="right">{row.c_title}</TableCell>
					<TableCell align="right">{date}</TableCell>
					<TableCell align="right">like <span className='badge'>{row.n_up}</span></TableCell>
					<TableCell align="right">dislike <span className='badge'>{row.n_down}</span></TableCell>
				</TableRow>
				<TableRow>
					<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
						<Collapse in={open} timeout="auto" unmountOnExit>
							<Box margin={1}>
								<Typography variant="h6" gutterBottom component="div">
									Details
								</Typography>
								<Table size="small" aria-label="purchases">
									<TableHead>
										<TableRow>
											<TableCell className='pc_size' style={{ display: 'flex', justifyContent: 'space-between' }}>
												<div>
													Proposal Content
												</div>
												<div >
													<a className='ml3' onClick={() => { Control(row.pk, 'up') }}><ThumbUp className='hover'></ThumbUp></a>
													<a className='ml3' onClick={() => { Control(row.pk, 'down') }}><ThumbDown className='hover'></ThumbDown> </a>
													<a className='ml3' onClick={() => { Control(row.pk, 'delete') }}><Delete className='hover'></Delete></a>
													<a className='ml3' onClick={() => { Control(row.pk, 'update') }}><SwapCalls className='hover'></SwapCalls></a>
												</div>
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow>
											<TableCell className='pc_bg' component="th" scope="row"><span style={{ color: 'white', fontSize: '18px' }}>{row.t_proposal}</span></TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</Box>
						</Collapse>
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
								<TableCell></TableCell>
								<TableCell align="right"><span className='th_font'>Title</span></TableCell>
								<TableCell align="right"><span className='th_font'>Date</span></TableCell>
								<TableCell align="right"><span className='th_font'>like</span> </TableCell>
								<TableCell align="right"><span className='th_font'>dislike</span></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{proposals.map((row) => (
								<Row key={row.pk} row={row} />
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</Layout>
	);
}

export default Proposal;
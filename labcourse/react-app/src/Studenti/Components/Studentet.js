import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../actions/Studenti";
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles, Button, ButtonGroup } from "@material-ui/core";
import StudentiForm from "./StudentiForm";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = theme =>({
    root: {
        "& .MuiTableCell-head": {
            fontSize: "1.2rem"
        }
    },
    paper : {
         margin: theme.spacing(2),
         padding: theme.spacing(2)
    }
})

const Studentet = ({classes,...props}) => {
    const [currentId, setCurrentId] = useState(0)

    useEffect(()=>{
        props.fetchAllStudentet()
    })

const onDelete = id =>{
    if(window.confirm('Are you sure to delete?'))
    props.deleteProfesori(id)
}

    return(
        <Paper className={classes.paper} elevation={4}> 
            <Grid container>
                <Grid item xs={6}>
                    <StudentiForm {...({ currentId, setCurrentId})}/>
                </Grid>
                <Grid item xs={6}>
                    <TableContainer>
                        <Table>
                            <TableHead className={classes.root}>
                                <TableRow>
                                    <TableCell>Studenti ID</TableCell>
                                    <TableCell>Emri Mbiemri</TableCell>
                                    <TableCell>Data e lindjes</TableCell>
                                    <TableCell>Qyteti</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Departamenti</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.StudentiList.map((record, index)=>{
                                        return(<TableRow key={index} hover>
                                            <TableCell>{record.id}</TableCell>
                                            <TableCell>{record.emriMbiemri}</TableCell>
                                            <TableCell>{record.dataLindjes}</TableCell>
                                            <TableCell>{record.qyteti}</TableCell>
                                            <TableCell>{record.email}</TableCell>
                                            <TableCell>{record.departamenti.emriDepartamenti}</TableCell>
                                            <TableCell>
                                                <ButtonGroup>
                                                    <Button><EditIcon color="primary" onClick={()=>{setCurrentId(record.id)}}/></Button>
                                                    <Button><DeleteIcon color="secondary" onClick={()=>onDelete(record.id)}/></Button>
                                                </ButtonGroup>
                                            </TableCell>
                                        </TableRow>)
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    );
}

const mapStateToProps = state=>({
        StudentiList: state.Studenti.list
})

const mapActionToProps = {
    fetchAllStudentet: actions.fetchAll,
    deleteStudenti: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Studentet));
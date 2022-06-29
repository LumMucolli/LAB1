import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../actions/Provimet";
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles, Button, ButtonGroup } from "@material-ui/core";
import ProvimetForm from "./ProvimetForm";
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

const Provimet = ({classes,...props}) => {
    const [currentId, setCurrentId] = useState(0)

    useEffect(()=>{
        props.fetchAllProvimet()
    })

const onDelete = id =>{
    if(window.confirm('Are you sure to delete?'))
    props.deleteProvimet(id)
}

    return(
        <Paper className={classes.paper} elevation={4}> 
            <Grid container>
                <Grid item xs={6}>
                    <ProvimetForm {...({ currentId, setCurrentId})}/>
                </Grid>
                <Grid item xs={6}>
                    <TableContainer>
                        <Table>
                            <TableHead className={classes.root}>
                                <TableRow>
                                    <TableCell>Lenda</TableCell>
                                    <TableCell>Kategoria</TableCell>
                                    <TableCell>Profesori</TableCell>
                                    <TableCell>DataProvimit</TableCell>
                                    <TableCell>KohaProvimit</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.ProvimetList.map((record, index)=>{
                                        return(<TableRow key={index} hover>
                                            <TableCell>{record.lenda.emriLendes}</TableCell>
                                            <TableCell>{record.kategoria}</TableCell>
                                            <TableCell>{record.profesori}</TableCell>
                                            <TableCell>{record.dataProvimit}</TableCell>
                                            <TableCell>{record.kohaProvimit}</TableCell>
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
        ProvimetList: state.Provimet.list
})

const mapActionToProps = {
    fetchAllProvimet: actions.fetchAll,
    deleteProvimet: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Provimet));
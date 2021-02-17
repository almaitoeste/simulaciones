import React, { useState } from 'react';
import * as ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ProductsLoader } from './products-loader.jsx';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Error } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';
import { useHistory } from "react-router-dom";
import Breadcrums from '../common/Breadcrums.jsx';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export function Simulaciones() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [products, setProducts] = useState({ data: [], total: 0 });
    const [dataState, setDataState] = useState({ take: 10, skip: 0 });
    const [breadcrumbsList, setBreadcrumList] = useState([
        {
            name : 'Simulaciones',
            link : '/',
            active :true
        }
    ]);
    
    const baseurl = 'http://localhost:3000';
    const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));

    
    const dataRecieved = (res:any) => {
        setProducts(res)
    };

    const dataStateChange = (res:any) => {
        setDataState(res.dataState)
    };

    const rowClick = (event:any) => {
        history.push("/simulaciones/" + event.dataItem.ProductID);
    };
    const handleClick = (event:any) => {
      event.preventDefault();
      alert('You clicked a breadcrumb.');
    }


    return (
        <div style={{padding:10}}>
            <Breadcrums lista={breadcrumbsList}></Breadcrums>
            <Card style={{marginTop:10, marginBottom:10}}>
                <Box display="flex" flexDirection="row" m={1} bgcolor="background.paper">
                    <Box p={1} width="5%" style={{marginTop:20}}>
                        <p>Buscar:</p>
                    </Box>
                    <Box p={1} width="10%" >
                        <p style={{textAlign:'left'}}>
                          <TextField id="outlined-basic" label="Nro.Contrato"/>
                        </p>
                    </Box>
                    <Box p={1} width="5%" style={{marginTop:20}}>
                        <p>ó</p>
                    </Box>
                     <Box p={1} width="10%" >
                        <p style={{textAlign:'left'}}>
                           <TextField id="outlined-basic2" label="Id. Contrato" />
                        </p>
                    </Box>
                    <Box p={1} width="70%" >
                        <p style={{textAlign:'left'}}>
                            <Button variant="contained" color="default" style={{margin:10}}>
                                BUSCAR
                            </Button>
                        </p>
                    </Box>
              </Box>
            </Card>
            <Grid
                onRowClick={rowClick}
                filterable={true}
                sortable={true}
                pageable={true}
                {...dataState}
                {...products}
                onDataStateChange={dataStateChange}
                >
                <Column 
                   field="ProductID" 
                   title="ID" 
                   cell={ (props) => 
                    <td>
                        <a href={baseurl + "/simulaciones/"+ props.dataItem.ProductID} style={{textDecorationLine: "underline", color:'blue'}}>
                            { props.dataItem.ProductID}
                        </a>
                    </td>
                   }
                /> 
                
                <Column field="ProductName" title="Tipo" />
                <Column field="UnitPrice" filter="numeric" format="{0:c}" title="Estado" />
                <Column field="ProductName" title="Descripción" />
                <Column field="ProductName" title="Fecha" />
                <Column field="ProductName" title="Fecha indices" />
                <Column field="ProductName" title="Usuario" />
                <Column
                    field="Género EC Ajusado"
                    cell={props => (
                        <td>
                            <input disabled type="checkbox" checked={true} />
                        </td>
                    )}
                />
                <Column field="ProductName" title="Comentarios" />
            </Grid>
            <ProductsLoader
                dataState={dataState}
                onDataRecieved={dataRecieved}
            />
        </div>
    );
}

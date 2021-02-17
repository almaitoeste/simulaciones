import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, MenuItem } from '@progress/kendo-react-layout';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

class Breadcrums extends React.Component {

    render() {
        return (
            <Breadcrumbs aria-label="breadcrumb" style={{backgroundColor:'#fff', padding:10}}>
            {
                this.props.lista.map((element) =>
                    element.active ? (
                            <Typography color="textPrimary">{element.name}</Typography>
                        ):(
                            <Link  color="inherit" href={element.link}>{element.name}</Link>
                    )
                    
                )
            }
            </Breadcrumbs>
        );
    }
}

export default Breadcrums;
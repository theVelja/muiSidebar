import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";

export default function CollapsableLineItem (props) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <React.Fragment>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary={props.parentListItem.id} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {props.parentListItem.operations.map(subItem => (
                        <ListItemButton sx={{ pl: 4 }} onClick={() => {props.handleRender(subItem.contentToRender)}}>
                            <ListItemText primary={subItem.displayName} />
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
        </React.Fragment>
    )
}
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';

interface ActivityCardProps {
    title: string;
    description: string;
    imageUrl?: string;
    color?: string;
}

export default function ActivityCard(props: ActivityCardProps) {
    const { title, description, color } = props;

    const accordionStyle: React.CSSProperties = {

        borderRadius: '12px',
        margin: '8px 0',
        overflow: 'hidden',
        background: 'none'
    };

    return (
        <Accordion style={accordionStyle} elevation={0}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel-content"
                id="panel-header"
                sx={{ padding: '12px 16px', backgroundColor: `${color},1)` }}
            >
                <Typography color='inherit' style={{ margin: 0, fontSize: '1.05rem' }}>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '12px 16px', backgroundColor: `${color},0.5)`, height: '100%' }}>
                <Typography style={{ margin: 0, textAlign: 'justify', lineHeight: 1.5 }}>{description}</Typography>
            </AccordionDetails>
        </Accordion>
    );
}
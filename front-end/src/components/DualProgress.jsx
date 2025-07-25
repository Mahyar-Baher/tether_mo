import React from 'react';
import { Box, Typography } from '@mui/material';

const DualProgress = ({ tether, toman, rate = 89000, size = 150, stroke = 13 }) => {
    let tetherValue = tether;
    let tomanInTether = toman / rate;
    const bothZero = tether === 0 && toman === 0;
    if (bothZero) {
        tetherValue = 20;
        tomanInTether = 80;
    }

    const total = tetherValue + tomanInTether;

    const radius = (size - stroke) / 2;
    const circumference = 2 * Math.PI * radius;

    const tetherLength = (tetherValue / total) * circumference;
    const tomanLength = (tomanInTether / total) * circumference;
//  ka te non no'ya
    return (
        <Box position="relative" width={size} height={size}>
            <Box className="rounded-animate" sx={{ p: 0, m: 0 }}>
                <svg width={size} height={size}>
                    <circle
                        r={radius}
                        cx={size / 2}
                        cy={size / 2}
                        stroke="#26A17B"
                        strokeWidth={stroke}
                        strokeDasharray={`${tetherLength} ${circumference - tetherLength}`}
                        strokeLinecap="round"
                        fill="transparent"
                        transform={`rotate(-90 ${size / 2} ${size / 2})`}
                    />
                    <circle
                        r={radius}
                        cx={size / 2}
                        cy={size / 2}
                        stroke="#1a652a"
                        strokeWidth={stroke}
                        strokeDasharray={`${tomanLength} ${circumference - tomanLength}`}
                        strokeLinecap="round"
                        fill="transparent"
                        transform={`rotate(${(tetherValue / total) * 360 - 90} ${size / 2} ${size / 2})`}
                    />
                </svg>
            </Box>
            <Box
                position="absolute"
                top={0}
                left={0}
                width={size}
                height={size}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                padding={0}
                margin={0}
            >
                <Typography variant="body2" sx={{ textAlign: 'center', mt: 1, px: 2 }} color="#1a652a">
                    {`${toman.toLocaleString()} تومان`}
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'center', px: 2 }} color="#26A17B">
                    {`$${tether} تتر`}
                </Typography>
            </Box>
        </Box>
    );
};

export default DualProgress;

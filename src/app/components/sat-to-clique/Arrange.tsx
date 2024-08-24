import React, { useState } from 'react';

// keep track of which variables we have encountered (including negation)

function applyBorder(num) {
    return num < 0 ? "overline" : "none";
}

function Horizontal(x, y, trio) {   // ellipse centers are 80 apart (x)
    return (
        <svg width="228" height="44" x={x} y={y}>
            <ellipse cx="32" cy="22" rx="30" ry="20" fill="lightblue" stroke="black" strokeWidth="2" />
            <text x="32" y="27" fontSize="16" textAnchor="middle" fill="black">
                <tspan dy="0" style={{ textDecoration: applyBorder(trio[0]) }}>X</tspan>
                <tspan dy="4" fontSize="12">{Math.abs(trio[0])}</tspan>
            </text>

            <ellipse cx="112" cy="22" rx="30" ry="20" fill="lightblue" stroke="black" strokeWidth="2" />
            <text x="112" y="27" fontSize="16" textAnchor="middle" fill="black">
                <tspan dy="0" style={{ textDecoration: applyBorder(trio[1]) }}>X</tspan>
                <tspan dy="4" fontSize="12">{Math.abs(trio[1])}</tspan>
            </text>

            <ellipse cx="192" cy="22" rx="30" ry="20" fill="lightblue" stroke="black" strokeWidth="2" />
            <text x="192" y="27" fontSize="16" textAnchor="middle" fill="black">
                <tspan dy="0" style={{ textDecoration: applyBorder(trio[2]) }}>X</tspan>
                <tspan dy="4" fontSize="12">{Math.abs(trio[2])}</tspan>
            </text>
        </svg>
    );
}

function Vertical(x, y, trio) {     // ellipse centers are 60 apart (y)
    return (
        <svg width="64" height="164" x={x} y={y}>
            <ellipse cx="32" cy="22" rx="30" ry="20" fill="lightblue" stroke="black" strokeWidth="2" />
            <text x="32" y="27" fontSize="16" textAnchor="middle" fill="black">
                <tspan dy="0" style={{ textDecoration: applyBorder(trio[0]) }}>X</tspan>
                <tspan dy="4" fontSize="12">{Math.abs(trio[0])}</tspan>
            </text>

            <ellipse cx="32" cy="82" rx="30" ry="20" fill="lightblue" stroke="black" strokeWidth="2" />
            <text x="32" y="87" fontSize="16" textAnchor="middle" fill="black">
                <tspan dy="0" style={{ textDecoration: applyBorder(trio[1]) }}>X</tspan>
                <tspan dy="4" fontSize="12">{Math.abs(trio[1])}</tspan>
            </text>

            <ellipse cx="32" cy="142" rx="30" ry="20" fill="lightblue" stroke="black" strokeWidth="2" />
            <text x="32" y="147" fontSize="16" textAnchor="middle" fill="black">
                <tspan dy="0" style={{ textDecoration: applyBorder(trio[2]) }}>X</tspan>
                <tspan dy="4" fontSize="12">{Math.abs(trio[2])}</tspan>
            </text>
        </svg>
    );
}

function LeftUp(x, y, trio) {
    return (
        <svg width="192" height="164" x={x} y={y}>
            <ellipse cx="32" cy="22" rx="30" ry="20" fill="lightblue" stroke="black" strokeWidth="2" />
            <text x="32" y="27" fontSize="16" textAnchor="middle" fill="black">
                <tspan dy="0" style={{ textDecoration: applyBorder(trio[0]) }}>X</tspan>
                <tspan dy="4" fontSize="12">{Math.abs(trio[0])}</tspan>
            </text>

            <ellipse cx="64" cy="82" rx="30" ry="20" fill="lightblue" stroke="black" strokeWidth="2" />
            <text x="64" y="87" fontSize="16" textAnchor="middle" fill="black">
                <tspan dy="0" style={{ textDecoration: applyBorder(trio[1]) }}>X</tspan>
                <tspan dy="4" fontSize="12">{Math.abs(trio[1])}</tspan>
            </text>

            <ellipse cx="96" cy="142" rx="30" ry="20" fill="lightblue" stroke="black" strokeWidth="2" />
            <text x="96" y="147" fontSize="16" textAnchor="middle" fill="black">
                <tspan dy="0" style={{ textDecoration: applyBorder(trio[2]) }}>X</tspan>
                <tspan dy="4" fontSize="12">{Math.abs(trio[2])}</tspan>
            </text>
        </svg>
    );
} // only used when M >= 5

function RightUp(x, y, trio) {
    return (
        <svg width="192" height="164" x={x} y={y}>
            <ellipse cx="96" cy="22" rx="30" ry="20" fill="lightblue" stroke="black" strokeWidth="2" />
            <text x="96" y="27" fontSize="16" textAnchor="middle" fill="black">
                <tspan dy="0" style={{ textDecoration: applyBorder(trio[0]) }}>X</tspan>
                <tspan dy="4" fontSize="12">{Math.abs(trio[0])}</tspan>
            </text>

            <ellipse cx="64" cy="82" rx="30" ry="20" fill="lightblue" stroke="black" strokeWidth="2" />
            <text x="64" y="87" fontSize="16" textAnchor="middle" fill="black">
                <tspan dy="0" style={{ textDecoration: applyBorder(trio[1]) }}>X</tspan>
                <tspan dy="4" fontSize="12">{Math.abs(trio[1])}</tspan>
            </text>

            <ellipse cx="32" cy="142" rx="30" ry="20" fill="lightblue" stroke="black" strokeWidth="2" />
            <text x="32" y="147" fontSize="16" textAnchor="middle" fill="black">
                <tspan dy="0" style={{ textDecoration: applyBorder(trio[2]) }}>X</tspan>
                <tspan dy="4" fontSize="12">{Math.abs(trio[2])}</tspan>
            </text>
        </svg>
    );
} // only used when M >= 5

export default function Arrange({ M, INPUT }) {
    const LAYOUTS = [
        [Horizontal(286, 303, INPUT.slice(0,3))],

        [Horizontal(286, 183, INPUT.slice(0,3)), Horizontal(286, 423, INPUT.slice(3,6))],

        [Vertical(150, 203, INPUT.slice(0,3)), Horizontal(286, 423, INPUT.slice(3,6)), Vertical(586, 203, INPUT.slice(6,9))],

        [Horizontal(286, 123, INPUT.slice(0,3)), Vertical(150, 203, INPUT.slice(3,6)), Horizontal(286, 423, INPUT.slice(6,9)), 
            Vertical(586, 203, INPUT.slice(9,12))],

        [RightUp(100, 80, INPUT.slice(0,3)), LeftUp(100, 300, INPUT.slice(3,6)), Horizontal(286, 493, INPUT.slice(6,9)), 
            RightUp(548, 300, INPUT.slice(9,12)), LeftUp(548, 80, INPUT.slice(12,15))]
    ]

    return (
    <>
      {LAYOUTS[M-1]}
    </>
    );
}
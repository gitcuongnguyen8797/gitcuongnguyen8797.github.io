import React from "react";

const ProgressBarItem = ({ label, percent }) => (
    <div className="progress-container">
        <div className="progress-header">
            <span className="text">{label}</span>
            <span className="text">{percent}%</span>
        </div>
        <div className="progress">
            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: `${percent}%` }}></div>
        </div>
    </div>
);

export default function ListProgress({ title, listItems = [] }) {

    return (
        <div className="list-progress">
            <div className="list-progress__title"><h3>{title}</h3></div>
            <div className="list-progress__skills">
                {listItems.map((value, index) => <ProgressBarItem key={index} label={value.label} percent={value.percent} />)}
            </div>
        </div>
    )
}
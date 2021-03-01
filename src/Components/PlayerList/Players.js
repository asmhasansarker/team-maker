import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Players.css'

const Players = (props) => {
    
    const {name, role, image, salary} = props.player;
    return (
        <div className="players-cart mb-3 ml-2">
            
            <img src={image} alt=""/>
            <h2>{name} </h2>
            <p className="font-weight-bold">Role : {role}</p>
            <p>Salary : <FontAwesomeIcon icon={ faDollarSign }/> {salary}</p>

            <button 
            className = "btn btn-primary"
            onClick={() => props.handleAddPlayer(props.player)}
            >  Add Player</button>
        </div>
    );
};

export default Players;
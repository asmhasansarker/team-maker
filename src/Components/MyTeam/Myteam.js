import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

const Myteam = (props) => {
    const myTeam = props.myTeam;
    
    const totalBudget = myTeam.reduce((total, player) => total + player.salary, 0)
    return (
        <div>
            <h2 className="text-center bg-success  p-3">My Team</h2>
            <div className="ml-5">
                <h4 className="bg-dark text-light p-3">Total Players : {myTeam.length} / 11</h4>
                {
                    myTeam.map(player => <p className="font-weight-bold">{player.name} &ensp; <span><FontAwesomeIcon icon={ faDollarSign } /> {player.salary}</span> </p>)
                }
                <p className="font-weight-bold bg-dark text-light p-3">Total Budget : &emsp; <FontAwesomeIcon icon={ faDollarSign }/> {totalBudget}</p>
            </div>
            
        </div>
    );
};

export default Myteam;
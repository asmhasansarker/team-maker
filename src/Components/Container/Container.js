import React from 'react';
import { useEffect, useState } from 'react';
import Players from '../PlayerList/Players';
import PlayersData from '../../PlayersData/Data.json'
import './Container.css'
import Myteam from '../MyTeam/Myteam';

const Container = () => {
    const [players, setPlayers] = useState([]);
    const [myTeam, setMyTeam] = useState([]);

    const handleAddPlayer = (player) =>{
        
        if(myTeam.length>=11){
            alert("You Can Not Add More then 11 Players.")
        }
        else{
            const newTeam = [...myTeam, player];
            setMyTeam(newTeam); 
        }
                   
    }

    useEffect(()=>{
        setPlayers(PlayersData)
    
    },[])

    return (
        <div className="content container m-auto p-0">
            
            <div className="playerList">
                <h2 className="text-center bg-success  p-3 ml-0">All Players</h2>
                {
                    players.map((player) => <Players 
                        handleAddPlayer = {handleAddPlayer}
                        player={player} 
                        key={player.id}
                        ></Players>)
                }
            </div>
            <div className="selectedList">
                <Myteam myTeam={myTeam}></Myteam>
            </div>
        </div>
    );
};

export default Container;
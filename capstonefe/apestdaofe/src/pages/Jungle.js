import React from 'react';
import { Form, Link } from 'react-router-dom';
import Header from '../components/Header';
import './pagestyle.css';
import { ethers } from 'ethers';
import axios from 'axios';

const Jungle = () => {
    const ApeStFFcreate = async (data) => {
            try {
                const formData = {
                    name: "Project Name",
                    ein: "EIN Value",
                    locationZip: "Zip Code",
                    description: "Project Description",
                    founder: "Founder Address",
                    website: "Website URL",
                    jungle: "",
                    tree: "",
                    node: "",

                }
                const response = await axios.post('create_apestff', data);
                console.log(response.data.result);
                
            } catch (error) {
                console.error('Error this time', error)
            }

    }

    return <>
        <div>
        <div className='header'>
           
        </div>
        
        <h1 style={{textAlign: "center", color: 'black', backgroundColor: '#378b20'}}>Welcome to the Jungle</h1>
        <Form method='post' action='/create/ApeStFF'>
            <div className='fform'>
        What is the Name of your project?
        <input type='text' name='name' placeholder='Project Name'/>
        <br/>
        What is your EIN?
        <input type='text' name='ein' placeholder='EIN'/>
        <br/>
        Where is the project HQ located?
        <input type='text' name='locationZip' placeholder='Zip Code'/>
        <br/>
        Please provide a description of your project:<br/> (limit 300char)<br/>
        <input type='text' name='description' placeholder='Project Description'/>
        <br/>
        Please provide your Web3 wallet address:
        <input type='text' name='founder' placeholder='Web3 Founder Address'/>
        <br/>
        Provide your website here:
        <input type='text' name='website' placeholder='Website URL'/>
        <br/>
        </div>
        <div className='checks'>
        Only select one of the following!<br/>
        This project is a:<br/>
        Jungle
        <input type='checkbox' name='jungle' checkbox='empty'/><br/>
        or Tree
        <input type='checkbox' name='tree' checkbox='empty'/><br/>
        or a Node
        <input type='checkbox' name='node' checkbox='empty'/>
        <br/>
        <button onClick={ApeStFFcreate} className='projsub' type="submit">Upload Project to the Chain for Review</button>
        </div>

        </Form>
      
        <div className="link">
        <Link to="/">Back to the DAO Chain!</Link>
        </div>

            </div>


        </>
    
}

export default Jungle
import axios from "axios";
import { redirect } from "react-router-dom";

export const ApeStFFcreate = async (data) => {
    try {
        const formData = {
            name: document.querySelector('input[name="name"]').value,
            ein: document.querySelector('input[name="ein"]').value,
            locationZip: document.querySelector('input[name="locationZip"]').value,
            description: document.querySelector('input[name="description"]').value,
            founder: document.querySelector('input[name="founder"]').value,
            website: document.querySelector('input[name="website"]').value,
            jungle: document.querySelector('input[name="jungle"]').checked,
            tree: document.querySelector('input[name="tree"]').checked,
            node: document.querySelector('input[name="node"]').checked,
        };
        console.log(formData)
        const response = await axios.post('create_apestff', formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        console.log('Response:', response)
        console.log('Response:', response.data)
        return null
            
    } catch (error) {
        console.error('Error this time', error)
        return null
    }
}
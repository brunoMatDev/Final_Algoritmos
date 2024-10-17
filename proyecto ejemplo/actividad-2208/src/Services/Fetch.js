import { backendurl } from "../env.jsx";

export async function POST(url, data){
    return await fetch(backendurl + url, {
    method: 'POST',
    mode: 'cors',
    headers: {
        'Content-Type':'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
};

export async function GET(url, data){

    let objString = '?';
    if(Array.isArray(data))
    {
        data.forEach((el, index) => {
                objString = objString + `array[${index}][id]=${el.id}&`;
        })
    }else{
        objString = objString + new URLSearchParams(data).toString();
    }

    return await fetch(backendurl + url + objString, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
    })
    .then((res) => res.json())
    .then((res) => res);
};

export async function PATCH(url, data){
    return await fetch(backendurl + url, {
        method:'PATCH',
        mode: 'cors',
        headers:{
            'Content-Type':'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
}

export async function DELETE(url, data){
    const objString = '?' + new URLSearchParams(data).toString();

    return await fetch(backendurl + url + objString, {
        method:'DELETE',
        mode:'cors',
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
}

export async function POSTU(url, file){

    let data = new FormData();
    data.append('file', file);

    return await fetch(backendurl + url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: data
    })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => { console.log(err)});
}

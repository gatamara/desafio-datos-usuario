//https://randomuser.me/api/?results=10


(async()=>{
    try {

        const response =await fetch('https://randomuser.me/api/?results=10')
        const users=await response.json()

        const listUser = users.results.map(user =>{
            return `
                <div>
                    <img src="${user.picture.medium}" alt="">
                    <p>${user.name.first} ${user.name.last} </p>
                    <p>${user.email} </p>
                    <p>${user.phone} </p>  
                </div>
            `
        }).join('')
        
        document.getElementById('container').innerHTML= listUser
    } catch (error) {
        alert('no cargo bien')
    }
})()







//(()=>{})() una funcion iife se define  se llama inmediatamente.. se autoinvoca
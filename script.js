var req=new XMLHttpRequest();
req.open('GET', 'https://restcountries.com/v2/all');
req.send();
req.onload=function(){
    var data=JSON.parse(req.response);
    console.log(data);
// Get all the countries from Asia continent /region using Filter function
    var asian=data.filter((item)=>item.region=='Asia');
    for(let i=0; i<asian.length; i++){
        console.log(`
        Name = ${asian[i].name}`);
    }

// Get all the countries with a population of less than 2 lakhs using Filter function
    var countries=data.filter((item)=>item.population<200000)
    for(let i=0; i<countries.length; i++){
        console.log(`
        Country Name = ${countries[i].name}`);
    }
// Print the following details name, capital, flag using forEach function
    data.forEach((item)=>{
       console.log(`
       Name = ${item.name}
       Capital = ${item.capital}
       Flag = ${item.flag}`);
   })

// Print the total population of countries using reduce function
   let population = data.reduce((acc, item)=>{
       return acc + item.name + ' ' + ':' + ' ' + item.population + "\n"
   })
   console.log(population);
   
// Print the country which uses US Dollars as currency.
    let USD = data.filter((item)=>item.currencies[0].code==='USD')
    for(i=0; i<USD.length; i++){
        console.log(`
        Country Name = ${USD[i].name}`)
    }
}

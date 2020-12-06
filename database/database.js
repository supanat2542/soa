const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    database: 'postgres',
    user: 'postgres',
    password: 'abc123**',
    port: '5432',

})

async function getdata(){
    const sql = `select  "Country/Region" as Country , lat , long , "Province/State" as State , confirmed_csv."3/23/2020" as confirm ,  death_csv."3/23/2020" as dead ,  recovered_csv."3/23/2020" as recover
    from city_csv,confirmed_csv,death_csv,recovered_csv
    where city_csv.num = confirmed_csv.num and city_csv.num = death_csv.num and city_csv.num = recovered_csv.num and  (confirmed_csv."3/23/2020" != 0 or  death_csv."3/23/2020" !=0 or recovered_csv."3/23/2020"!=0)`
    const data = await pool.query(sql);
    // console.log(data);
    return data;

}

async function gettable(){
    const sql = `select  "Country/Region" as Country , lat , long , "Province/State" as State , confirmed_csv."3/23/2020" as confirm ,  death_csv."3/23/2020" as dead ,  recovered_csv."3/23/2020" as recover
    from city_csv,confirmed_csv,death_csv,recovered_csv
    where city_csv.num = confirmed_csv.num and city_csv.num = death_csv.num and city_csv.num = recovered_csv.num and  (confirmed_csv."3/23/2020" != 0 or  death_csv."3/23/2020" !=0 or recovered_csv."3/23/2020"!=0)`
    const data = await pool.query(sql);
    // console.log(data);
    return data;

}

async function gettopcon(){
    const sql = `select  "Country/Region" as Country , lat , long , "Province/State" as State , confirmed_csv."3/23/2020" as confirm ,  death_csv."3/23/2020" as dead ,  recovered_csv."3/23/2020" as recover
    from city_csv,confirmed_csv,death_csv,recovered_csv
    where city_csv.num = confirmed_csv.num and city_csv.num = death_csv.num and city_csv.num = recovered_csv.num and  (confirmed_csv."3/23/2020" != 0 or  death_csv."3/23/2020" !=0 or recovered_csv."3/23/2020"!=0)
    order by confirmed_csv."3/23/2020" desc
    LIMIT 10`
    const data = await pool.query(sql);
    // console.log(data);
    return data;

}

async function getdead(){
    const sql = `select  "Country/Region" as Country , lat , long , "Province/State" as State , confirmed_csv."3/23/2020" as confirm ,  death_csv."3/23/2020" as dead ,  recovered_csv."3/23/2020" as recover
    from city_csv,confirmed_csv,death_csv,recovered_csv
    where city_csv.num = confirmed_csv.num and city_csv.num = death_csv.num and city_csv.num = recovered_csv.num and  (confirmed_csv."3/23/2020" != 0 or  death_csv."3/23/2020" !=0 or recovered_csv."3/23/2020"!=0)
    order by death_csv."3/23/2020" desc
    LIMIT 10`
    const data = await pool.query(sql);
    // console.log(data);
    return data;

}

async function getrecover(){
    const sql = `select  "Country/Region" as Country , lat , long , "Province/State" as State , confirmed_csv."3/23/2020" as confirm ,  death_csv."3/23/2020" as dead ,  recovered_csv."3/23/2020" as recover
    from city_csv,confirmed_csv,death_csv,recovered_csv
    where city_csv.num = confirmed_csv.num and city_csv.num = death_csv.num and city_csv.num = recovered_csv.num and  (confirmed_csv."3/23/2020" != 0 or  death_csv."3/23/2020" !=0 or recovered_csv."3/23/2020"!=0)
    order by recovered_csv."3/23/2020" desc
    LIMIT 10`
    const data = await pool.query(sql);
    // console.log(data);
    return data;

}


async function srcCountry(country){
    const sql = `select  "Country/Region" as Country , lat , long , "Province/State" as State , confirmed_csv."3/23/2020" as confirm ,  death_csv."3/23/2020" as dead ,  recovered_csv."3/23/2020" as recover
    from city_csv,confirmed_csv,death_csv,recovered_csv
    where city_csv.num = confirmed_csv.num and city_csv.num = death_csv.num and city_csv.num = recovered_csv.num and "Country/Region" = '${country}'`
    const data = await pool.query(sql);
    console.log(data);
    return data;
}
module.exports={
    getdata,
    srcCountry,
    gettopcon,
    gettable,
    getdead,
    getrecover
}
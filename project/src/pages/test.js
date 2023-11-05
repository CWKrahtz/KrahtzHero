import axios from 'axios';
import React from 'react'
import { useState, useEffect } from "react"


//API: MARVEL
//KEY: 5f70a5a899b40c2f3d7dd44488ebabec - Public
//Key: 8275e3f6195632a2a19c341eb94591e38761efbc - Private
function Test() {

    const [heroes, setHeroData] = useState([]);
    const [inputLabel, setInputLabel] = useState([])
    const [selectedHero, setSelectedHero] = useState("1009301");
    // let charData = [];
    let dataLabels = []
    


    useEffect(() => {

        // axios.get('https://gateway.marvel.com/v1/public/characters?nameStartsWith=Hulk&ts=1&apikey=5f70a5a899b40c2f3d7dd44488ebabec&hash=dec215c0159ff7ea6cff93d6cbffc03e')
        //     .then((res) => {
        //         console.log(res.data.data.results[0].modified);
        //         console.log(res.data.data.results[0].name);
        //         console.log(res.data.data.results[0].id);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });

        let dataID = []

        for (let i = 1009301; i < 1009311; i++) {
            axios.get('https://gateway.marvel.com/v1/public/characters/' +i+ '?&ts=1&apikey=5f70a5a899b40c2f3d7dd44488ebabec&hash=dec215c0159ff7ea6cff93d6cbffc03e')
                .then((res) => {
                    // console.log(res.data.data.results[0].comics.items[0].name);
                    // console.log(res.data.data.results[0].name);
                    // setHeroData(res.data.data.results[0])
                    
                    // let name = res.data.data.results[0].name.slice(0, res.data.data.results[0].name.indexOf('('));
                    // let year = res.data.data.results[0].comics.items[0].name.split("(").pop();
                    // year = year.slice(0, year.indexOf(')'));
                    // console.log(name);
                    // dataLabels.push({
                    //     name: res.data.data.results[0].name, id: i
                    // })
                    // console.log(dataLabels);
                    // setInputLabel(dataLabels)
                    setInputLabel(inputLabel => [...inputLabel, {
                        name: res.data.data.results[0].name, id: i
                    }]);

                    // dataID.push(i)
                })
                .catch((err) => {
                    console.log(err);
                });
        }


        // for (let i = 1; i < 5; i++) {
        //     axios.get('https://superheroapi.com/api.php/3281815455417256/' + i)
        //         .then((res) => {
        //             console.log(res.data);
        //             setHeroData(res.data);
        //         })
        //         .catch((err) => {
        //             console.log(err);
        //         });
        // }


    }, []);

    useEffect(() => {

        // let dataLabels = []
        // let dataID = []
        console.log(selectedHero);
        
        axios.get('https://gateway.marvel.com/v1/public/characters/' +selectedHero+ '?&ts=1&apikey=5f70a5a899b40c2f3d7dd44488ebabec&hash=dec215c0159ff7ea6cff93d6cbffc03e')
            .then((res) => {
                // console.log(res.data.data.results[0].comics.items[0].name);
                console.log(res.data.data.results[0].name);
                // setHeroData(res.data.data.results[0].name)
                
                // let name = res.data.data.results[0].comics.items[0].name.slice(0, res.data.data.results[0].comics.items[0].name.indexOf('('));
                // // let year = res.data.data.results[0].comics.items[0].name.split("(").pop();
                // // year = year.slice(0, year.indexOf(')'));
                // console.log(name);

                //Chart Data hier! 
                
               
            })
            .catch((err) => {
                console.log(err);
            });

    }, [selectedHero]);


    return (
        <div className='Test'>
            {/* DO not know how this code works */}
            <select onChange={e => setSelectedHero(e.target.value)}>
                {heroes
                    ? inputLabel.map((hero) => {
                        return <option key={hero.id} value={hero.id}>{hero.name}</option>
                    })
                    : null}
            </select>
        </div>
    )
}

export default Test
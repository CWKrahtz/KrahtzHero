import React from 'react'
import { Bar, Radar, Pie } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import axios from "axios"
import { useState, useEffect } from "react"
import { Card, CardGroup } from "react-bootstrap";

function Compare() {

    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    // Character 1 + 2 Names 
    const [name1, setName1] = useState([]);
    const [name2, setName2] = useState([]);
    //Character 1 + 2 Data
    const [char1, setChar1] = useState([]);
    const [char2, setChar2] = useState([]);
    // Store names temp
    let heroName1 = [];
    let heroName2 = [];
    //Store Data temp
    let character1 = [];
    let character2 = [];

    //Dropdown
    const [imgUrl, setImgUrl] = useState('');
    const [imgUrl2, setImgUrl2] = useState('');


    const [heroes, setHeroData] = useState([]);
    const [heroes2, setHeroData2] = useState([]);
    const [inputLabel, setInputLabel] = useState([]);
    const [inputLabel2, setInputLabel2] = useState([]);
    const [selectedHero, setSelectedHero] = useState("1");
    const [selectedHero2, setSelectedHero2] = useState("20");

    useEffect(() => {

        for (let i = 1; i < 20; i++) {
            axios.get('https://superheroapi.com/api.php/3281815455417256/' + i + '/powerstats')
                .then((res) => {
                    setInputLabel(inputLabel => [...inputLabel, {
                        name: res.data.name, id: i
                    }]);
                    // console.log(res.data.name)
                })
                .catch((err) => {
                    console.log(err);
                });
        }

    }, []);



    useEffect(() => {
        for (let i = 20; i < 40; i++) {
            axios.get('https://superheroapi.com/api.php/3281815455417256/' + i + '/powerstats')
                .then((res) => {
                    setInputLabel2(inputLabel2 => [...inputLabel2, {
                        name: res.data.name, id: i
                    }]);
                    // console.log(res.data.name)
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);

    useEffect(() => {

        // console.log(selectedHero);
        axios.get('https://superheroapi.com/api.php/3281815455417256/' + selectedHero + '/powerstats')
            .then((res) => {
                // console.log(res);

                heroName1.push(res.data.name)
                
                character1.push(res.data.intelligence)
                character1.push(res.data.strength)
                character1.push(res.data.speed)
                character1.push(res.data.durability)
                character1.push(res.data.power)
                character1.push(res.data.combat)

                //Chart Data hier! 

                setName1(heroName1);
                setChar1(character1);
            })
            .catch((err) => {
                console.log(err);
            });

            axios.get('https://superheroapi.com/api.php/3281815455417256/' + selectedHero)
            .then((res) => {
                // console.log(res.data.image.url);s
                setImgUrl(res.data.image.url);
                //IMG URL
            })
            .catch((err) => {
                console.log(err);
            });

    }, [selectedHero]);

    //dropdown2

    useEffect(() => {

        axios.get('https://superheroapi.com/api.php/3281815455417256/' + selectedHero2 + '/powerstats')
            .then((res) => {
                // console.log(res);

                heroName2.push(res.data.name)
                
                character2.push(res.data.intelligence)
                character2.push(res.data.strength)
                character2.push(res.data.speed)
                character2.push(res.data.durability)
                character2.push(res.data.power)
                character2.push(res.data.combat)

                //Chart Data hier! 

                setName2(heroName2);
                setChar2(character2);
            })
            .catch((err) => {
                console.log(err);
            });

            axios.get('https://superheroapi.com/api.php/3281815455417256/' + selectedHero2)
            .then((res) => {
                // console.log(res.data.image.url);s
                setImgUrl2(res.data.image.url);
                //IMG URL
            })
            .catch((err) => {
                console.log(err);
            });

    }, [selectedHero2]);

    // display Data on Chart
    const users = {
        labels: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
        datasets: [{
            label: name1,
            data: char1
        },
        {
            label: name2,
            data: char2
        }]
    }
    // console.log(users);

    const [selectValue, setSelectValue] = React.useState("");
    const onChange = (event) => {
        const value = event.target.value;
        setSelectValue(value);
    };

    const [selectValue2, setSelectValue2] = React.useState("");
    const onChange2 = (event) => {
        const value = event.target.value;
        setSelectValue2(value);
    };

    return (
        <div className='col-sm-10' style={{ marginTop: '2.5%', marginRight: 'auto', marginLeft: 'auto' }}>
            <CardGroup>
                {/* Character Data 1 */}
                <Card style={{ margin: '3%', borderRadius: '2.5%', backgroundColor: '#182635', color: '#B2BAC2' }}>
                    <Card.Title style={{height: '100px'}}><h1>{name1}</h1></Card.Title>
                    <Card.Img id='firstHero' variant="top" src={imgUrl} />
                    <Card.Body>
                        <select onChange={e => setSelectedHero(e.target.value)}>
                            {heroes
                                ? inputLabel.map((hero) => {
                                    return <option key={hero.id} value={hero.id}>{hero.name}</option>
                                })
                                : null}
                        </select>
                    </Card.Body>
                </Card>

                {/* Character Data 1 + 2 */}
                <Card style={{ margin: '3%', borderRadius: '2.5%' }}>
                    <button style={{ margin: '2.5%', fontWeight: 'Bold', color: '#B2BAC2', backgroundColor: '#182635', borderRadius: '10px' }} onClick={() =>
                        setShow1(!show1)}>
                        {show1 ? "Radar" : "Radar"}
                    </button>
                    <button style={{ margin: '2.5%', fontWeight: 'Bold', color: '#B2BAC2', backgroundColor: '#182635', borderRadius: '10px' }} onClick={() =>
                        setShow2(!show2)}>
                        {show1 ? "Bar" : "Bar"}
                    </button>
                    <button style={{ margin: '2.5%', fontWeight: 'Bold', color: '#B2BAC2', backgroundColor: '#182635', borderRadius: '10px' }} onClick={() =>
                        setShow3(!show3)}>
                        {show1 ? "Pie" : "Pie"}
                    </button>
                    {show1 &&
                        <Radar data={users} style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                    }
                    {show2 &&
                        <Bar data={users} style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                    }
                    {show3 &&
                        <Pie data={users} style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                    }
                </Card>

                {/* Character Data 2 */}
                <Card style={{ margin: '3%', borderRadius: '2.5%', backgroundColor: '#182635', color: '#B2BAC2' }}>
                    <Card.Title style={{height: '100px'}}><h1>{name2}</h1></Card.Title>
                    <Card.Img variant="top" src={imgUrl2} />
                    <Card.Body>
                        <select onChange={e => setSelectedHero2(e.target.value)}>
                            {heroes2
                                ? inputLabel2.map((hero2) => {
                                    return <option key={hero2.id} value={hero2.id}>{hero2.name}</option>
                                })
                                : null}
                        </select>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}

export default Compare
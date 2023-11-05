import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import axios from "axios"
import { useState, useEffect } from "react"
import { Card, CardGroup } from "react-bootstrap";

function Timeline() {

    const [name1, setName1] = useState([]);
    const [char1, setChar1] = useState([]);

    const [heroes, setHeroData] = useState([]);
    const [inputLabel, setInputLabel] = useState([]);
    const [selectedHero, setSelectedHero] = useState("1009301");
    // let charData = [];
    let charComics = [];
    let charComYear = [];
    const [comicNames, setComicNames] = useState([]);
    const [comicYear, setComicYear] = useState([]);
    
    const [imgUrl, setImgUrl] = useState('');
    

    useEffect(() => {

        for (let i = 1009301; i < 1009311; i++) {
            axios.get('https://gateway.marvel.com/v1/public/characters/' +i+ '?&ts=1&apikey=5f70a5a899b40c2f3d7dd44488ebabec&hash=dec215c0159ff7ea6cff93d6cbffc03e')
                .then((res) => {
                    setInputLabel(inputLabel => [...inputLabel, {
                        name: res.data.data.results[0].name, id: i
                    }]);
                })
                .catch((err) => {
                    console.log(err);
                });
        }

    }, []);

    useEffect(() => {

        // console.log(selectedHero);
        
        axios.get('https://gateway.marvel.com/v1/public/characters/' +selectedHero+ '?&ts=1&apikey=5f70a5a899b40c2f3d7dd44488ebabec&hash=dec215c0159ff7ea6cff93d6cbffc03e')
            .then((res) => {
                console.log(res.data.data.results[0].thumbnail);

                for (let n = 0; n < res.data.data.results[0].comics.items.length; n++) {
                    charComics.push(res.data.data.results[0].comics.items[n].name.slice(0, res.data.data.results[0].comics.items[n].name.indexOf('(')));
                    let year = res.data.data.results[0].comics.items[0].name.split("(").pop();
                    charComYear.push(year.slice(0, year.indexOf(')')));
                }

                //Chart Data hier! 
                setComicNames(charComics);
                setComicYear(charComYear);
                setName1(res.data.data.results[0].name)
                setImgUrl(res.data.data.results[0].thumbnail.path + '.' + res.data.data.results[0].thumbnail.extension)
            })
            .catch((err) => {
                console.log(err);
            });

    }, [selectedHero]);

    const users = {
        labels: comicNames,
        datasets: [{
            label: name1,
            data: comicYear
        }],
        options: {
            responsive: true
          }
        //limit range between 1900 - 2023

    }

    // console.log(users);

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
                <Card style={{ margin: '3%', borderRadius: '2.5%'}}>
                    <Line data={users} style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                </Card>
            </CardGroup>
        </div>
    )
}

export default Timeline
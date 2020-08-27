import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';

function SponsorAdd() {
    const [sponsores, setSponsores] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5021/sponsor')
            .then(res => {
                const response = res.data;
                setSponsores(response)
            })
    }, [])

    let listOfSponsores = "";

    if (sponsores.length > 0) {
        listOfSponsores = sponsores.map(sponsor => {
            if (sponsor.sponsorkategori.kategori === "Guld") {
                return (
                    <Carousel.Item className="carousel-item gold-sponsor">
                        <p>Sponsorer</p>
                        <img className="d-block w-100" src={"http://localhost:5021/images/sponsorer/" + sponsor.logo} alt={sponsor.navn}/>
                    </Carousel.Item>
                )
            }
            else if (sponsor.sponsorkategori.kategori === "Sølv") {
                return (
                    <Carousel.Item className="carousel-item silver-sponsor">
                        <p>Sponsorer</p>
                        <img className="d-block w-100" src={"http://localhost:5021/images/sponsorer/" + sponsor.logo} alt={sponsor.navn}/>
                    </Carousel.Item>
                )
            }
            else if (sponsor.sponsorkategori.kategori === "Almindelig samarbejdspartner") {
                return (
                    <Carousel.Item className="carousel-item normal-sponsor">
                        <p>Sponsorer</p>
                        <img className="d-block w-100" src={"http://localhost:5021/images/sponsorer/" + sponsor.logo} alt={sponsor.navn}/>
                    </Carousel.Item>
                )
            }
        })
    }

    return(
        <Carousel id="SponsorAdd">
            {listOfSponsores}
        </Carousel>
    )
}

export default SponsorAdd
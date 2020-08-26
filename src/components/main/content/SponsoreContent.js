import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SponsoreContent() {
    const [sponsores, setSponsores] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5021/sponsor')
            .then(res => {
                const response = res.data;
                setSponsores(response)
            })
    }, [])

    let listOfGoldSponsores = "";

    let listOfSilverSponsores = "";

    let listOfNormalSponsores = "";

    if (sponsores.length > 0) {
        listOfGoldSponsores = sponsores.map(sponsor => {
            if (sponsor.sponsorkategori.kategori === "Guld") {
                return (
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img className="img-fluid" src={"http://localhost:5021/images/sponsorer/" + sponsor.logo} alt={sponsor.navn}/>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    }

    if (sponsores.length > 0) {
        listOfSilverSponsores = sponsores.map(sponsor => {
            if (sponsor.sponsorkategori.kategori === "Sølv") {
                return (
                    <div className="col-2">
                        <div className="card">
                            <div className="card-body">
                                <img className="img-fluid" src={"http://localhost:5021/images/sponsorer/" + sponsor.logo} alt={sponsor.navn}/>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    }

    if (sponsores.length > 0) {
        listOfNormalSponsores = sponsores.map(sponsor => {
            if (sponsor.sponsorkategori.kategori === "Almindelig samarbejdspartner") {
                return (
                    <div className="col-2">
                        <div className="card">
                            <div className="card-body">
                                <img className="img-fluid" src={"http://localhost:5021/images/sponsorer/" + sponsor.logo} alt={sponsor.navn}/>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    }


    return(
        <section className="col-10" id="SponsoreContent">
            <p>GOLD SPONSORE</p>
            <div className="row">
                {listOfGoldSponsores}
            </div>
            
            <p>SØLV SPONSORE</p>
            <div className="row">
                {listOfSilverSponsores}
            </div>
            
            <p>ALMINDELIGE PARTNERE</p>
            <div className="row">
                {listOfNormalSponsores}
            </div>
        </section>
    )
}

export default SponsoreContent
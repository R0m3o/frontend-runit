import React from 'react'

function AdvancedSearchContent() {
    return(
        <section className="col-10">
            <p>Advanceret søg</p>
            <form action="">
                <div className="form-group">
                    <label htmlFor="EventNameInput">Løbs Navn</label>
                    <input type="text" className="form-control" id="EventNameInput"/>
                </div>

                <div className="form-group">
                    <p>Til og fra pris</p>
                    
                    <label htmlFor="PriceFromInput">Pris fra</label>
                    <input type="text" className="form-control" id="PriceFromInput"/>

                    <label htmlFor="PriceToInput">Pris til</label>
                    <input type="text" className="form-control" id="PriceToInput"/>
                </div>

                <div className="form-group">
                    <p>Distance</p>

                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="PriceFromInput"/> Over 10 km
                    </div>

                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="PriceToInput"/> Under 10 km
                    </div>
                </div>
                
                <div className="form-group">
                    <p>Hvor i landet</p>

                    <select className="form-control" name="regions" id="RegionsInput">
                        <option value="Midtjylland">Midtjylland</option>
                        <option value="Nordjylland">Nordjylland</option>
                        <option value="Sydjylland">Sydjylland</option>
                        <option value="Fyn">Fyn</option>
                        <option value="Sjælland">Sjælland</option>
                        <option value="Bornholm">Bornholm</option>
                    </select>
                </div>
            </form>
        </section>
    )
}

export default AdvancedSearchContent
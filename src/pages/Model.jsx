//css
import '/src/css/radio.css'

//scripts
import { prettify } from '/src/logic/prettify';


export function Model() {
    return (
        <main>
            <section className="text-center">

                <h1 className="display-4">Model Selection</h1>
                <form action="/type">
                    <div className="sect">
                        <h4>Select model of your elevator</h4>

                        {/* <input type="radio" name="model" value="panorama" id="panorama" required />
                        <label htmlFor="panorama">
                            <span className="btn btn-outline-primary">
                                <h1>Panorama</h1>
                            </span>
                        </label> */}

                        <input type="radio" name="model" value="renaissance" id="renaissance" required />
                        <label htmlFor="renaissance">
                            <span className="btn btn-outline-primary">
                                <h1>{prettify('renaissance')}</h1>
                            </span>
                        </label>
                        
                        <input type="radio" name="model" value="legacy" id="legacy" required />
                        <label htmlFor="legacy">
                            <span className="btn btn-outline-primary">
                                <h1>{prettify('legacy')}</h1>
                            </span>
                        </label>
                    </div>
                    <input type="submit" value="Next" className="btn btn-primary" />
                </form>

            </section>
            <section className="text-center d-none py-2" id="restrictions">
                <div className="container">
                    <h4>Restrictions:</h4>
                    <ul id="advise"></ul>
                </div>
            </section>
        </main>
    )
}
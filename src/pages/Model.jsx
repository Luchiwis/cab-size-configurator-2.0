import '../css/radio.css'

export function Model() {
    return (
        <main>
            <section className="text-center">

                <h1 className="display-4">Select the model</h1>
                <form action="/type">
                    <div className="sect">
                        <h4>Models available based on your configurations</h4>

                        <input type="radio" name="model" value="panorama" id="panorama" required />
                        <label htmlFor="panorama">
                            <span className="btn btn-secondary">
                                <h1>Panorama</h1>
                            </span>
                        </label>

                        <input type="radio" name="model" value="legacy" id="legacy" required />
                        <label htmlFor="legacy">
                            <span className="btn btn-secondary">
                                <h1>Legacy Volt</h1>
                            </span>
                        </label>

                        <input type="radio" name="model" value="renaissance" id="renaissance" required />
                        <label htmlFor="renaissance">
                            <span className="btn btn-secondary">
                                <h1>Renaissance</h1>
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
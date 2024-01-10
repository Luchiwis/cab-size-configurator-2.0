export function Door() {
    return (
        <main>
            <section className="text-center">
                <div className="my-5">
                    <h1 className="display-4">Select the type of door</h1>
                    <form action="cab.html">
                        <div className="sect" id="sect-door">
                            <h4>Door type</h4>

                            <input type="radio" name="door" value="accordion" id="accordion" required />
                            <label htmlFor="accordion">
                                <span className="btn btn-secondary">
                                    <h1>Accordion</h1>
                                </span>
                            </label>

                            <input type="radio" name="door" value="bifold" id="bifold" required />
                            <label htmlFor="bifold">
                                <span className="btn btn-secondary">
                                    <h1>Bifold</h1>
                                </span>
                            </label>

                            <input type="radio" name="door" value="2speed" id="slide2" required />
                            <label htmlFor="slide2">
                                <span className="btn btn-secondary">
                                    <h1>2 speed sliding</h1>
                                </span>
                            </label>

                            <input type="radio" name="door" value="3speed" id="slide3" required />
                            <label htmlFor="slide3">
                                <span className="btn btn-secondary">
                                    <h1>3 speed sliding</h1>
                                </span>
                            </label>

                            <hr className="w-50 m-auto my-3" />


                            <div className="col-xs-2 text-xs-center m-auto pb-3 border w-50 d-none" id="landingSection"
                                data-toggle="buttons">
                                <label className="form-check-label" htmlFor="landing">Federal provides cab and hall door</label>
                                <br />
                                <input className="form-check-input" type="checkbox" id="landing" name="landing" value="on"
                                    style={{width: '20px', height: '20px'}} />
                            </div>
                        </div>
                        <input type="submit" value="Select size" className="btn btn-primary" />
                    </form>
                </div>
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
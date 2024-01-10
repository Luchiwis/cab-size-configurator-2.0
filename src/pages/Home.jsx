export function Home() {
    return (
        <main>
            <section className="text-center">
                <div className="my-5">
                    <h1 className="display-4">Do you already have hoistway size?</h1>
                    <div className="row w-50 m-auto">
                        <div className="col">
                            <a href="hoistway.html" className="btn btn-outline-primary w-100" data-bs-toggle="tooltip"
                                data-bs-placement="top" title="Know avaliable models for your hoistway size">
                                <h1>Yes</h1>
                                <hr />
                                <h5 className="text-muted mt-3">See available models based on your hoistway size</h5>
                            </a>
                        </div>
                        <div className="col">
                            <a href="model.html" className="btn btn-outline-secondary w-100" data-bs-toggle="tooltip"
                                data-bs-placement="top" title="Know your hoistway size based on your elevator preferences">
                                <h1>No</h1>
                                <hr />
                                <h5 className="text-muted mt-3">Know required spaces for your elevator</h5>
                            </a>
                        </div>
                    </div>
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
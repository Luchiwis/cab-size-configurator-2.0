import '../css/radio.css'

export function Model() {
    return (
        <main>
            <section class="text-center">

                <h1 class="display-4">Select the model</h1>
                <form action="type.html">
                    <div class="sect">
                        <h4>Models available based on your configurations</h4>

                        <input type="radio" name="model" value="panorama" id="panorama" required />
                        <label for="panorama">
                            <span class="btn btn-secondary">
                                <h1>Panorama</h1>
                            </span>
                        </label>

                        <input type="radio" name="model" value="legacy" id="legacy" required />
                        <label for="legacy">
                            <span class="btn btn-secondary">
                                <h1>Legacy Volt</h1>
                            </span>
                        </label>

                        <input type="radio" name="model" value="renaissance" id="renaissance" required />
                        <label for="renaissance">
                            <span class="btn btn-secondary">
                                <h1>Renaissance</h1>
                            </span>
                        </label>
                    </div>
                    <input type="submit" value="Select type" class="btn btn-primary" />
                </form>

            </section>
            <section class="text-center d-none py-2" id="restrictions">
                <div class="container">
                    <h4>Restrictions:</h4>
                    <ul id="advise"></ul>
                </div>
            </section>
        </main>
    )
}
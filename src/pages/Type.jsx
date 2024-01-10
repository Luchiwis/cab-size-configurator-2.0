import { FormPrepend } from "../components/FormPrepend.jsx";

export function Type(){
    return (
        <main>
        <section className="text-center">
            <div className="my-5">
                <h1 className="display-4">Select the type of elevator</h1>
                <FormPrepend action="door">
                    <div className="sect" id="sect-type">
                        <h4>Type</h4>

                        <input type="radio" name="type" value="A" id="A" required/>
                        <label htmlFor="A"><img src="img/A.png" alt="type A"/></label>

                        <input type="radio" name="type" value="B" id="B" required/>
                        <label htmlFor="B"><img src="img/B.png" alt="type B"/></label>

                        <input type="radio" name="type" value="C" id="C" required/>
                        <label htmlFor="C"><img src="img/C.png" alt="type C"/></label>

                        <input type="radio" name="type" value="D" id="D" required/>
                        <label htmlFor="D"><img src="img/D.png" alt="type D"/></label>

                        <input type="radio" name="type" value="E" id="E" required/>
                        <label htmlFor="E"><img src="img/E.png" alt="type E"/></label>
                        
                        {/* <input type="radio" name="type" value="T" id="T">
                        <label htmlFor="T"><img src="img/T.png" alt="type T"></label> */}
                        <br/>
                    </div>
                    <input type="submit" value="Next" className="btn btn-primary"/>
                </FormPrepend>
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
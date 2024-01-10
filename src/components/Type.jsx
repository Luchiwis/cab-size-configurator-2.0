export function Type(){
    return (
        <main>
        <section class="text-center">
            <div class="my-5">
                <h1 class="display-4">Select the type of elevator</h1>
                <form action="door.html">
                    <div class="sect" id="sect-type">
                        <h4>Type</h4>

                        <input type="radio" name="type" value="A" id="A" required/>
                        <label for="A"><img src="img/A.png" alt="type A"/></label>

                        <input type="radio" name="type" value="B" id="B" required/>
                        <label for="B"><img src="img/B.png" alt="type B"/></label>

                        <input type="radio" name="type" value="C" id="C" required/>
                        <label for="C"><img src="img/C.png" alt="type C"/></label>

                        <input type="radio" name="type" value="D" id="D" required/>
                        <label for="D"><img src="img/D.png" alt="type D"/></label>

                        <input type="radio" name="type" value="E" id="E" required/>
                        <label for="E"><img src="img/E.png" alt="type E"/></label>
                        
                        {/* <input type="radio" name="type" value="T" id="T">
                        <label for="T"><img src="img/T.png" alt="type T"></label> */}
                        <br/>
                    </div>
                    <input type="submit" value="Select Door" class="btn btn-primary"/>
                </form>
            </div>
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
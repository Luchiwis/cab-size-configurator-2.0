import { FormPrepend } from "../components/FormPrepend"
import { UnitSwitch } from "../components/UnitSwitch"
import { Unit } from "../components/Unit"

export function Cab() {
    return (
        <main>
            <section className="text-center">
                <div className="my-5 col-md-8 col-sm-10 mx-auto">
                    <h1 className="display-4">Select the cab size</h1>
                    <FormPrepend action="result">
                        <UnitSwitch/>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="cab-width" className="form-label">Width <br />(<span id="width-range-label" />)</label>
                                <input type="number" id="cab-width" name="cab-width" step="0.01" className="form-control text-center" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="cab-depth" className="form-label">Depth <br />(<span id="depth-range-label" />)</label>
                                <input type="number" id="cab-depth" name="cab-depth" step="0.01" className="form-control text-center" required />
                            </div>
                        </div>
                        <label htmlFor="cab-height" className="form-label">Height</label>
                        <select className="form-select form-select-sm text-center my-3 w-50 mx-auto" aria-label=".form-select-sm example" name="cab-height" id="cab-height" required>
                            <option value='' disabled>Select Height</option>
                            <option value={84}><Unit type='in'>84</Unit></option>
                            <option value={96}><Unit type='in'>96</Unit></option>
                        </select>
                        <div className="text-center my-3" id="planning-table">
                            <table className="table mx-auto">
                                <thead>
                                    <tr>
                                        <th scope="col" className="col-3" />
                                        <th scope="col">Width</th>
                                        <th scope="col">Depth</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Inner Cab</td>
                                        <td id="inner-width-table-label">-</td>
                                        <td id="inner-depth-table-label">-</td>
                                    </tr>
                                    <tr>
                                        <td>Hoistway</td>
                                        <td id="hoistway-width-table-label">-</td>
                                        <td id="hoistway-depth-table-label">-</td>
                                    </tr>
                                    <tr>
                                        <td>Overall</td>
                                        <td id="overall-width-table-label">-</td>
                                        <td id="overall-depth-table-label">-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <input type="submit" value="Next" className="btn btn-primary"/>
                    </FormPrepend>
                </div>
            </section>
            <section className="text-center d-none py-2 mb-4" id="restrictions">
                <div className="container">
                    <h4>Restrictions:</h4>
                    <ul id="advise" />
                </div>
            </section>
        </main>

    )
}
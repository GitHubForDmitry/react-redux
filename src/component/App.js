import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeFirstName, changeSecondName } from "../actions";

const App = ({name, surname, changeFirstName, changeSecondName}) =>  {
    return (
        <form>
            <div className="form-group">
                <input className="form-control" value={name} onChange={e => changeFirstName(e.target.value)} style={{width: 200, height: 50, border: "1px solid orange"}} type="text"/>
                <input className="form-control" value={surname} onChange={e => changeSecondName(e.target.value)} style={{width: 200, height: 50, border: "1px solid orange"}} type="text"/>
            </div>
        </form>
    );
};

const mapStateToProps = state => {
    return {
        name: state.name,
        surname: state.surname
    }
}
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            changeFirstName,
            changeSecondName
        },
        dispatch
    );
export default connect(mapStateToProps, mapDispatchToProps)(App)


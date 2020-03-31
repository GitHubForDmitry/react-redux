import React from 'react';

const App = ({name, surname, changeName, changeSurname}) => {
    console.log(name)
    return (
        <div>
            <input value={name} onChange={e => changeName(e.target.value)} type="text"/>
            <input value={surname} onChange={e => changeSurname(e.target.value)} type="text"/>
        </div>
    )
};

export default App;
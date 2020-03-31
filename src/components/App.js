import React from 'react';

function App({name, changeName, secondName, changeSurname}) {
    console.log(name);
    console.log(secondName);
    return (
        <div>
            <input value={name} onChange={e => changeName(e.target.value)} type="text"/>
            <input value={secondName} onChange={e => changeSurname(e.target.value)} type="text"/>
        </div>
    );
}

export default App;
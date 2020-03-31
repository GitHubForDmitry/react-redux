import React from 'react';

function App({name, age, changeName, changeAge}) {
    console.log(name);
    console.log(age);
    return (
        <div>
            <input type="text" value={name} onChange={e => changeName(e.target.value)}/>
            <input type="number" value={age} onChange={e => changeAge(e.target.value)}/>
        </div>
    );
}

export default App;
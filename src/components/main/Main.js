import React from 'react';
import Content from './Content';
import RightColumn from './RightColumn';

function Main() {
    return(
        <main className="row container-fluid">
            <Content/>
            <RightColumn/>
        </main>
    )
}

export default Main
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';

const App = () => {
    return (
        <div>
            <div className="card-group">
               <Card 
               cardTitle="Ankara"
               cardText="This is the first card with supporting text below"
               updatedTime="1 min ago"/>
               <Card 
               cardTitle="istanbul"
               cardText="This is the second card with supporting text below"
               updatedTime="2 min ago"/>
               <Card 
               cardTitle="Manisa"
               cardText="This is the third card with supporting text below "
               updatedTime="3 min ago"/>
            </div>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
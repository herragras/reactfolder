import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import Collapse from './components/Collapse';

const App = () => {
    return (
        <div>
            <div className="card-group">
                <Collapse href="collapseExample1">
                    <Card
                        cardTitle="NASA"
                        cardText="This is the first card with supporting text below"
                        updatedTime="1 min ago"
                        image="https://picsum.photos/id/1002/200/300" />
                </Collapse>

                <Collapse href="collapseExample2">
                    <Card
                        cardTitle="Gazelle"
                        cardText="This is the second card with supporting text below"
                        updatedTime="2 min ago"
                        image="https://picsum.photos/id/1003/200/300" />
                </Collapse>

                <Collapse href="collapseExample3">
                    <Card
                        cardTitle="Winter"
                        cardText="This is the third card with supporting text below "
                        updatedTime="3 min ago"
                        image="https://picsum.photos/id/1004/200/300" />
                </Collapse>
            </div>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
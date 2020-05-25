import React, { Component } from "react";
import { hot } from "react-hot-loader/root";

import ItemInfo from "components/itemInfo";

class Parts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            parts: []
        };
    }

    componentDidMount() {
        this.retrieveData();
    }

    retrieveData() {
        //let endpoint = window.baseUrl + "api/Parts/";
        const endpoint = "WebForm1.aspx/GetValue";
        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                page: "Cool", method: "F1", data: {
                    Driver: "Driver 1"
                }
            })
        })
            .then(res => res.json())
            .then(
                (result) => {
                    // const pro = result.map((item) => { return { name: item.DatasetName }; });
                    console.dir(result);
                    this.setState({
                        parts: result.d
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        error
                    });
                }
            );
    }

    AddData() {
        fetch("WebForm1.aspx/PostValue", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                page: "Cool", method: "F1", data: {
                    Id: 1, Name: "B"
                }
            })
        })
            .then(res => res.json())
            .then((result) => {
                console.dir(result);
                console.dir(window.history);
                //window.history.go(-1);
                //console.dir(result.d);
                //console.dir(result.d.__type);
                //console.dir(result.d.MyProperty);
                //var r = JSON.parse(result.d);
                //console.log(r.name + "--" + r.age + '---' + r.city);
            },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    alert(error);
                });
    }

    render() {
        return (
            <div>
                <h1>Parts:</h1>
                <ul>
                    {this.state.parts.map(part => <li key={part.Id}><ItemInfo item={part} /></li>)}
                </ul>
                <ul><button onClick={this.AddData}>AddData</button></ul>
                <ul><button onClick={this.retrieveData}>retrieveData</button></ul>
            </div >
        );
    }
}

export default hot(Parts);
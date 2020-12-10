import React from "react";

export default class FetchRandomUser extends React.Component {


    state = {
        loading: true,
        person: null,
    }


    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const respone = await fetch(url);
        const data = await respone.json();
        this.setState({ person: data.results[0], loading: false });
        console.log(data.results[0]);
    }

    render() {
        return <div>
            { this.state.loading || !this.state.person ? (
                <div>loading...</div>
            ) : (
                    <div>
                        <div>First Name: { this.state.person.name.first }</div>
                        <div>Last Name: { this.state.person.name.last }</div>
                        <div>Email Address: { this.state.person.email }</div>
                        <img src={this.state.person.picture.large} />
                    </div>
                ) }
        </div>

        
    }
}
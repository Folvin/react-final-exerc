import React from "react";
import data from "../data/db";
export class Table extends React.Component {
    state = {tableData: data};

    contactFilter = (e) => {
        const dataCopy = [...data];
        const FilteredData = dataCopy.filter((data) => data.first_name.includes(e.target.value));
        this.setState({tableData: FilteredData});
    };
    render() {
        return (
            <div className="tableComponent">
                <Search contactFilter={this.contactFilter} />
                <table>
                    <tbody>
                        {this.state.tableData.map((contact, index) => (
                            <Row
                                key={index}
                                firstName={contact.first_name}
                                lastName={contact.last_name}
                                phone={contact.phone}
                                image={contact.image}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

class Row extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.firstName}</td>
                <td>{this.props.lastName}</td>
                <td>{this.props.phone}</td>
                <td>
                    <img src={this.props.image} />
                </td>
            </tr>
        );
    }
}

class Search extends React.Component {
    render() {
        return <input placeholder="filter by first name" onChange={this.props.contactFilter} type="search" />;
    }
}

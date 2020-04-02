import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import awsconfig from '../../aws-exports';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
Amplify.configure(awsconfig);

const initialState = { isLoading: false, results: [], value: '' }

var source = [];

export default class SearchComponent extends Component {
    state = initialState
    async componentDidMount(){
        const result = await API.graphql(graphqlOperation(queries.getCourses));
        const set = new Set();
        const unique = [];
        result["data"]["getCourses"].forEach(obj => {
            if(!set.has(obj.courseName)){
                set.add(obj.courseName);
                unique.push({title: obj.courseName, description: obj.title});
            }
        });
        source = unique;
        console.log(unique);
    }

    handleResultSelect = (e, { result }) => this.setState({ value: result.title })

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.setState(initialState)

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = (result) => re.test(`${result.title} ${result.description}`)

            this.setState({
                isLoading: false,
                results: _.filter(source, isMatch),
            })
        }, 300)
    }

    render() {
        const { isLoading, value, results } = this.state

        return (
            <Search
                loading={isLoading}
                onResultSelect={this.handleResultSelect}
                /* Testing Search */
                onSearchChange={_.debounce(this.handleSearchChange, 500, {
                    leading: true,
                })}
                results={results}
                value={value}
                {...this.props}
            />
        )
    }
}

import * as React from 'react';
import ErrorPage from '../pages/ErrorPage';

const withTodo = (isTodo) => {
    if (isTodo) {
        return () => {
            return class Proxy extends React.Component {
                render() {
                    return <ErrorPage code="404" />
                }
            }
        }
    }
    return (Target) => {
        return class Proxy extends React.Component {
            render() {
                return <Target />
            }
        }
    }
}

export default withTodo;
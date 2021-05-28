import * as React from 'react';

const withUsers = ({url, data, mapStateToProps}) => {
    return (Target) => {
        class Proxy extends React.Component {
            constructor() {
                super()
                this.state = {
                    users: null,
                }
            }

            componentDidMount() {
                setTimeout(() => {
                    // 异步请求
                    console.log(url, data, mapStateToProps);
                    this.setState({
                        users: [
                            '小明',
                            '小红'
                        ],
                    })
                }, 2000)
            }

            render() {
                return <Target users={this.state.users} />
            }
        }

        return Proxy
    }
}

const HOC = ({ users }) => {
    if (users === null) {
        return <div>loading...</div>
    }
    return <ul>
        {
            users.map((v, i) => <li key={i} >{v}</li>)
        }
    </ul>
}

// class HOC extends React.Component {
//     componentDidMount() {
//         console.log('vvv');
//     }
//     render(){
//         return <>aa</>
//     }
// }

export default withUsers({
    url: 'xxx',
    data: 'xxx',
    mapStateToProps : (res) => {
        return res.content
    }
})(HOC)
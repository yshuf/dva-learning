import { React, Component } from 'react';
import {
    connect
} from 'dva';
import {
    Button
} from 'antd'
import styles from './IndexPage.css';

@connect()
export default class IndexPage extends Component {

    constructor(props) {
        super(props)
        this.state = {}

    }

    render () {
        return <div>
            <h1 className={styles.title}> Yay!Welcome to dva! </h1>
            <div className={styles.welcome}></div>
            < ul className={styles.list} >
                <li> To get started, edit < code > src / index.js </code> and save to reload.</li >
                <li> <a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md" > Getting Started </a></li>
            </ul>
            <div>
                <Button type="primary" > Primary </Button> <Button> Default </Button >
                <Button type="dashed"> link </Button> <Button type="link" danger> link </Button >
            </div>
            <div onClick={() => { this.props.history.push('/productList') }}>去产品页面</div>
        </div>
    }
}



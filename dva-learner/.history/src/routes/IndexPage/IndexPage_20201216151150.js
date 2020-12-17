import { React, Component } from 'react';
import {
    connect
} from 'dva';
import {
    Button
} from 'antd'
import styles from './IndexPage.css';

class IndexPage extends Component() {
    return (<div className = { styles.normal } ><h1 className={styles.title}> Yay!Welcome to dva! </h1> <div className={styles.welcome} /> < ul className={styles.list} >
        <li> To get started, edit < code > src / index.js </code> and save to reload.</li >
        <li> <a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md" > Getting Started </a></li>
    </ul>
        <div> <Button type="primary" > Primary </Button> <Button> Default </Button > <Button type="dashed"> link </Button> <Button type="link" danger> link </Button > </div>
        <div onClick={() => { this.props.history.push('/productList') }}>去产品页面</div>
    </div>
    );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);

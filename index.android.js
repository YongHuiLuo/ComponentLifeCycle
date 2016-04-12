/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

var Search = require('./Search');

var localConfig = [
    {
        id: 1,
        name: "xiaoluo",
        address: "多米音乐,长安街"
    }
];

var ComponentParent = React.createClass({

    getDefaultProps: function () {
        //在创建类的时候被调用
        console.log("ComponentParent getDefaultProps");
        return {
            nativeValue:""
        };
    },

    propTypes:function(){
        console.log("ComponentParent propTypes");
    },

    getInitialState: function () {
        //获取this.state的默认值
        console.log("ComponentParent getInitialState");
        return {
            data: 5,
        };
    },

    componentWillMount: function () {
        console.log("ComponentParent componentWillMount");
    },

    getSearchValue:function(val){
        console.log("ComponentParent getSearchValue");
        this.setState({
            data:val
        })
    },

    render: function () {

        console.log("ComponentParent render");
        return (
            <View style={styles.container}>

                <View style={[styles.flex,styles.topStatus]}>
                    <Search getSearchValue = {this.getSearchValue}></Search>
                </View>

                <Text style={styles.welcome}>
                    {this.props.nativeValue}
                </Text>

                <ComponentChild configOne={localConfig} ref='child'/>

                <ComponentChildTwo configData={this.state.data} ref='childTwo'/>

            </View>
    );
    },

    componentDidMount: function () {
        console.log("ComponentParent componentDidMount");
    }
});

var configTwo = [
    {
        name: "华叔",
        address: "多米音乐"
    }
]

var ComponentChild = React.createClass({

    getDefaultProps: function () {
        console.log("ComponentChild getDefaultProps");
        return {
            configOne: []
        };
    },

    getInitialState: function () {
        console.log("ComponentChild getInitialState");

        return {
            variable: 1,
        };
    },

    componentWillMount: function () {
        //业务逻辑的处理
        console.log("ComponentChild componentWillMount");
        this.state.variable = 5;
    },

    render: function () {

        //验证 组件内部不允许修改自己的props属性
        //this.props.configOne = {configTwo};
        console.log("ComponentChild render");

        var config = this.props.configOne;

        var items = config.map(function (item) {
            return (
                <Text key={item.id}>{item.name} + ":" + {item.address} </Text>
            );
        });

        var configTwoItems = configTwo.map(function (item) {
            return (
                <Text key={0}>{item.name} + ":" + {item.address}</Text>
            );
        });

        return (
            <View>
                <Text>
                    {items}
                </Text>
                <Text>
                    {configTwoItems}
                </Text>
                <Text>
                    变量variable的值为 ： {this.state.variable}
                </Text>
            </View>
        );
    },

    componentDidMount: function () {
        console.log("ComponentChild componentDidMount");
        //var dom = React.findDOMNode(this);
        //console.log("dom -->" + dom);
    },

    componentWillReceiveProps: function () {
        console.log("ComponentChild componentWillReceiveProps");
    }

});

var ComponentChildTwo = React.createClass({

    getDefaultProps: function () {
        console.log("ComponentChildTwo getDefaultProps");
        return {
        };
    },

    getInitialState: function () {
        console.log("ComponentChildTwo getInitialState");
        return {
        };
    },

    componentWillMount: function () {
        console.log("ComponentChildTwo componentWillMount");
    },

    render: function () {

        console.log("ComponentChildTwo render");

        var config = this.props.configData;

        return (
            <View>
                <Text>
                    显示输入框中的结果 ：{config}
                </Text>
            </View>
        );
    },

    componentDidMount: function () {
        console.log("ComponentChildTwo componentDidMount");
        //var dom = React.findDOMNode(this);
        //console.log("dom -->" + dom);
    },

    componentWillReceiveProps: function () {
        console.log("ComponentChildTwo componentWillReceiveProps");
    }

});

const styles = StyleSheet.create({

    flex: {
        flex: 1
    },
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

    topStatus: {
        marginTop: 25,
    },

});

AppRegistry.registerComponent('ComponentLifeCycle', () => ComponentParent);


/**
 * 错误代码展示：
 * setState(...): Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.
 * <TextInput style={styles.input} value={this.state.value} onChangeText={this.getValue()}></TextInput>
 * @returns {XML}
 */
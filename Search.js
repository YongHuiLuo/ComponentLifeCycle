/**
 * Created by Admin on 2016/4/8.
 */
var React = require('react-native');

var {
    StyleSheet,
    Text,
    View,
    TextInput
    } = React;


/**
 *

 */

var Search = React.createClass({

    getDefaultProps(){
        console.log("Search getDefaultProps");
        return {}
    },

    getInitialState(){
        console.log("Search getInitialState");
        return {
            value:""
        }
    },

    componentWillMount(){
        console.log("Search componentWillMount");
    },

    getValue: function (text) {
        console.log("Search getValue : " + text);
        var value = text;
        this.setState({
            value: value
        });
    },

    transferValue: function (val) {
        console.log("Search transferValue : " + val);
        this.props.getSearchValue(val);
    },

    render: function () {
        console.log("Search render");
        return (
            <View style={[styles.flex,styles.flexDirection]}>
                <View>
                    <TextInput placeholder="请输入搜索内容"
                               style={styles.input}
                               value={this.state.value}
                               onChangeText={this.getValue}></TextInput>
                </View>
                <View style={styles.btn}>
                    <Text style={styles.search}
                          onPress={this.transferValue.bind(this,this.state.value)}>确定</Text>
                </View>
            </View>
        );
    },

    componentDidMount(){
        console.log("Search componentDidMount");
    },


    /**
     * 更新阶段
     */

    componentWillReceiveProps(){
        console.log("Search componentWillReceiveProps");
    },

    shouldComponentUpdate(){
        console.log("Search shouldComponentUpdate");
        return true;
    },

    componentWillUpdate(){
        console.log("Search componentWillUpdate");
    },

    componentDidUpdate(){
        console.log("Search componentDidUpdate");
    },

    /**
     * 销毁操作
     */

    componentWillUnmount(){
        console.log("Search componentDidUpdate");
    }

});


var styles = StyleSheet.create({
    flex: {
        flex: 1,
    },

    flexDirection: {
        flexDirection: 'row'
    },

    input: {
        height: 45,
        width: 125,
        borderWidth: 1,
        marginLeft: 5,
        paddingLeft: 5,
        borderColor: '#ccc',
        borderRadius: 4
    },

    btn: {
        width: 55,
        marginLeft: -5,
        marginRight: 5,
        backgroundColor: '#23BEFF',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    search: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    }
});

module.exports = Search;
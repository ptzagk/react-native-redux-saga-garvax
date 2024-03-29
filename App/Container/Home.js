import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux'
import styles from './Styles/HomeStyle'
import * as Animatable from 'react-native-animatable';
import ApplicationStyle from '../Metrics/Styles'

class Home extends Component {
  onPress(item) {
    if (item == 'beer') {
      this.props.navigation.navigate('Brew')
    }
    else if (item == 'guru') {
      this.props.navigation.navigate('Guru')
    }
    else if (item == 'peeps') {
      this.props.navigation.navigate('GitHubUser')
    }
    else if (item == 'profile') {
      this.props.navigation.navigate('Profile')
    }
  }
  render() {
    return (
      <View style={ApplicationStyle.container}>
        <View style={styles.header}>
          <Animatable.Text style={styles.headertext} animation="fadeInDown" iterationCount={1}>{'Garvax Boilerplate'}</Animatable.Text>
        </View>
        <View style={styles.body}>

          <View style={styles.div}>
            <TouchableOpacity onPress={this.onPress.bind(this, 'beer')} style={styles.BTNL}>
              <Animatable.Text style={{ fontSize: 34, color: '#F8E0D4' }} animation="jello" iterationCount='infinite'>{'🍺'}</Animatable.Text>
              <Text style={styles.buttontext}>Beers</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPress.bind(this, 'guru')} style={styles.BTN}>
              <Animatable.Text style={{ fontSize: 34, color: '#F8E0D4' }} iterationDelay={1000} easing='ease-in-out' animation="bounce" iterationCount='infinite'>{'🧘🏻'}</Animatable.Text>
              <Text style={styles.buttontext}>Guru</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.div}>
            <TouchableOpacity onPress={this.onPress.bind(this, 'peeps')} style={styles.BTNL}>
              <Animatable.Text style={{ fontSize: 34, color: '#F8E0D4' }} iterationDelay={500} animation="bounceOut" iterationCount='infinite'>{'🧔🏻'}</Animatable.Text>
              <Text style={styles.buttontext}>Peeps</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPress.bind(this, 'profile')} style={styles.BTN}>
              <Animatable.Text style={{ fontSize: 34, color: '#F8E0D4' }} iterationDelay={500} animation="tada" iterationCount='infinite'>{'👤'}</Animatable.Text>
              <Text style={styles.buttontext}>Profile</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.div1}>
          <Animatable.Text delay={100} animation="bounceInRight" iterationCount={1} iterationDelay={100} style={styles.buttontextsmall}>REACT</Animatable.Text>
          <Animatable.Text delay={600} animation="bounceInLeft" iterationCount={1} iterationDelay={100} style={styles.buttontextmedium}>REDUX</Animatable.Text>
          <Animatable.Text delay={1000} animation="fadeInUpBig" iterationCount={1} iterationDelay={100}  style={styles.buttontextlarge}>SAGA</Animatable.Text>
          </View>

          <View style={styles.divLast}>
          </View>
        </View>
        <View style={styles.wishDiv}>
          <Animatable.Text animation="fadeInUp" iterationCount={1}  style={{ fontSize: 16, color: '#F8E0D4' }}>With ❤️ by geekygaurav</Animatable.Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(null, null)(Home)
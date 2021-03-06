import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import Table from './Table/Table';
import axios from 'axios';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      course_modules: [],
    };
  }

  componentDidMount() {
    axios
      .get('/episodes.json')
      .then((data) => {
        debugger;
        let results = [];
        data.data.data.map((data) => {
          results.push({
            id: data.id,
            title: data.title,
            description: data.description,
            active: false,
          });
          this.setState({ course_modules: results });
        });
      })
      .catch((data) => {
        debugger;
      });
  }

  handleVideoChange(item, event) {
    event.preventDefault();

    let course_modules = [...this.state.course_modules];

    course_modules.map((data) => {
      data.active = false;
    });

    item.active = !item.active;

    course_modules[item.id - 1] = item;

    // this.setState({ course_modules });
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <Table
          handleVideoChange={this.handleVideoChange.bind(this)}
          course_modules={this.state.course_modules}
        />
      </div>
    );
  }
}

export default Home;

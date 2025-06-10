import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'Développeur passionné avec 5 ans d\'expérience',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Développeur Full Stack'
      },
      show: false,
      mountTime: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ mountTime: this.state.mountTime + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { person, show, mountTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {show ? 'Masquer le profil' : 'Afficher le profil'}
        </button>

        {show && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}

        <p>Temps écoulé depuis le montage : {mountTime} secondes</p>
      </div>
    );
  }
}

export default App;

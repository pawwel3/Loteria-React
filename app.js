let myNumber = [];
class App extends React.Component {
  state = {
    numbers: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22
    ],
    nr: null,
    myNumber: [],
    random: [],
    wins: []
  };

  //funkcja losuje liczbe a nastepnie dodaje ją do tablicy random
  handlerRandom = () => {
    if (this.state.myNumber.length <= 4) {
      alert("Najpierw wybierz swoje liczby" + this.state.myNumber.length);
    } else {
      if (this.state.random.length === 5) {
        alert("koniec losowania");
        for (let i = 0; i <= 5; i++) {
          for (let l = 0; l <= 5; l++) {
            if (this.state.myNumber[i] === this.state.random[l]) {
              let wins = this.state.wins++;
              this.setState({
                wins: wins
              });
              console.log(this.state.myNumber[i], this.state.random[l]);
            } else {
            }
          }
        }
        alert(this.state.wins);
      } else {
        let n = Math.floor(Math.random() * 21);
        const random = this.state.random.concat(this.state.numbers[n]);
        this.setState({
          nr: n,
          random
        });
      }
    }
  };

  //funkcja pokliknięciu na liczbę zapisuję ją w tablicy myNumber
  handlerAddTab = tab => {
    console.log(this.state.numbers[tab - 1]);
    if (this.state.myNumber.length === 5) {
      alert("Masz wszystkie liczby");
    } else {
      const myNumber = this.state.myNumber.concat(this.state.numbers[tab - 1]);
      this.setState({
        myNumber
      });
    }
  };
  //funkcja kasuje tablice random i myNumbers
  handlerResetAll = () => {
    this.setState({
      myNumber: [],
      random: [],
      wins: []
    });
  };
  //funkcja kasuje tablice random
  handlerReset = () => {
    this.setState({
      random: [],
      wins: []
    });
  };
  render() {
    //wypisywanie elementów tablicy
    const Tab = this.state.numbers.map(tab => (
      <h2
        key={tab}
        onClick={this.handlerAddTab.bind(this, tab)}
        className={"numbers"}
      >
        {tab}
      </h2>
    ));
    const Win = this.state.wins <= 2 ? "Brak wygranej" : "WYGRANA!!!!!";

    return (
      <>
        {Tab}
        <div style={{ clear: "both" }} />
        <h2>Wylosowane liczby to: {this.state.random + "  "}</h2>
        <h1>Twoje liczby to: {this.state.myNumber + "  "}</h1>
        <button className={"myButton"} onClick={() => this.handlerRandom()}>
          Losuj
        </button>
        <button className={"myButton"} onClick={() => this.handlerResetAll()}>
          Wyczysć wszystko
        </button>
        <button className={"myButton"} onClick={() => this.handlerReset()}>
          Wyczysć wylosowane liczby
        </button>
        <h1>{Win}</h1>
      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));

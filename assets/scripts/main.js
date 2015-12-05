// Generated by CoffeeScript 1.10.0
(function() {
  var Cupid, Results, compareEngine;

  compareEngine = function(yourName, matesName) {
    var friend, intersect, score, you;
    you = yourName.split("").sort();
    friend = matesName.split("").sort();
    intersect = [];
    if (you.length > friend.length) {
      you.forEach(function(letter) {
        if (friend.indexOf(letter) !== -1) {
          intersect.push(letter);
        }
      });
    } else {
      friend.forEach(function(letter) {
        if (you.indexOf(letter) !== -1) {
          intersect.push(letter);
        }
      });
    }
    score = (intersect.length / (+you.length + friend.length)) * 100;
    return Math.ceil(100 - score - (+you.length + friend.length));
  };

  Results = React.createClass({displayName: "Results",
    render: function() {
      var score;
      score = this.props.score;
      window.randomize = function() {
        $(".radial-progress").attr("data-progress", score);
      };
      setTimeout(window.randomize, 200);
      return React.createElement("div", {
        "className": "results"
      }, React.createElement("div", {
        "className": "radial-progress",
        "data-progress": "0"
      }, React.createElement("div", {
        "className": "circle"
      }, React.createElement("div", {
        "className": "mask full"
      }, React.createElement("div", {
        "className": "fill"
      })), React.createElement("div", {
        "className": "mask half"
      }, React.createElement("div", {
        "className": "fill"
      }), React.createElement("div", {
        "className": "fill fix"
      })), React.createElement("div", {
        "className": "shadow"
      })), React.createElement("div", {
        "className": "inset"
      }, React.createElement("div", {
        "className": "percentage"
      }, React.createElement("div", {
        "className": "numbers"
      }, React.createElement("span", null, "-"), React.createElement("span", null, "0%"), React.createElement("span", null, "1%"), React.createElement("span", null, "2%"), React.createElement("span", null, "3%"), React.createElement("span", null, "4%"), React.createElement("span", null, "5%"), React.createElement("span", null, "6%"), React.createElement("span", null, "7%"), React.createElement("span", null, "8%"), React.createElement("span", null, "9%"), React.createElement("span", null, "10%"), React.createElement("span", null, "11%"), React.createElement("span", null, "12%"), React.createElement("span", null, "13%"), React.createElement("span", null, "14%"), React.createElement("span", null, "15%"), React.createElement("span", null, "16%"), React.createElement("span", null, "17%"), React.createElement("span", null, "18%"), React.createElement("span", null, "19%"), React.createElement("span", null, "20%"), React.createElement("span", null, "21%"), React.createElement("span", null, "22%"), React.createElement("span", null, "23%"), React.createElement("span", null, "24%"), React.createElement("span", null, "25%"), React.createElement("span", null, "26%"), React.createElement("span", null, "27%"), React.createElement("span", null, "28%"), React.createElement("span", null, "29%"), React.createElement("span", null, "30%"), React.createElement("span", null, "31%"), React.createElement("span", null, "32%"), React.createElement("span", null, "33%"), React.createElement("span", null, "34%"), React.createElement("span", null, "35%"), React.createElement("span", null, "36%"), React.createElement("span", null, "37%"), React.createElement("span", null, "38%"), React.createElement("span", null, "39%"), React.createElement("span", null, "40%"), React.createElement("span", null, "41%"), React.createElement("span", null, "42%"), React.createElement("span", null, "43%"), React.createElement("span", null, "44%"), React.createElement("span", null, "45%"), React.createElement("span", null, "46%"), React.createElement("span", null, "47%"), React.createElement("span", null, "48%"), React.createElement("span", null, "49%"), React.createElement("span", null, "50%"), React.createElement("span", null, "51%"), React.createElement("span", null, "52%"), React.createElement("span", null, "53%"), React.createElement("span", null, "54%"), React.createElement("span", null, "55%"), React.createElement("span", null, "56%"), React.createElement("span", null, "57%"), React.createElement("span", null, "58%"), React.createElement("span", null, "59%"), React.createElement("span", null, "60%"), React.createElement("span", null, "61%"), React.createElement("span", null, "62%"), React.createElement("span", null, "63%"), React.createElement("span", null, "64%"), React.createElement("span", null, "65%"), React.createElement("span", null, "66%"), React.createElement("span", null, "67%"), React.createElement("span", null, "68%"), React.createElement("span", null, "69%"), React.createElement("span", null, "70%"), React.createElement("span", null, "71%"), React.createElement("span", null, "72%"), React.createElement("span", null, "73%"), React.createElement("span", null, "74%"), React.createElement("span", null, "75%"), React.createElement("span", null, "76%"), React.createElement("span", null, "77%"), React.createElement("span", null, "78%"), React.createElement("span", null, "79%"), React.createElement("span", null, "80%"), React.createElement("span", null, "81%"), React.createElement("span", null, "82%"), React.createElement("span", null, "83%"), React.createElement("span", null, "84%"), React.createElement("span", null, "85%"), React.createElement("span", null, "86%"), React.createElement("span", null, "87%"), React.createElement("span", null, "88%"), React.createElement("span", null, "89%"), React.createElement("span", null, "90%"), React.createElement("span", null, "91%"), React.createElement("span", null, "92%"), React.createElement("span", null, "93%"), React.createElement("span", null, "94%"), React.createElement("span", null, "95%"), React.createElement("span", null, "96%"), React.createElement("span", null, "97%"), React.createElement("span", null, "98%"), React.createElement("span", null, "99%"), React.createElement("span", null, "100%"))))));
    }
  });

  Cupid = React.createClass({displayName: "Cupid",
    getInitialState: function() {
      return {
        yourName: "",
        matesName: "",
        showResults: false,
        score: 0,
        errorMessage: ""
      };
    },
    handleyourNameChange: function(e) {
      this.setState({
        yourName: e.target.value
      });
      this.setState({
        showResults: false
      });
      this.setState({
        errorMessage: ""
      });
    },
    handleMatesNameChange: function(e) {
      this.setState({
        matesName: e.target.value
      });
      this.setState({
        showResults: false
      });
      return this.setState({
        errorMessage: ""
      });
    },
    handleSubmit: function(e) {
      var matesName, result, yourName;
      e.preventDefault();
      yourName = this.state.yourName.trim();
      matesName = this.state.matesName.trim();
      if (yourName.length < 1) {
        this.setState({
          errorMessage: "Please enter your name"
        });
        return;
      }
      if (yourName.length < 1) {
        this.setState({
          errorMessage: "Please enter your name"
        });
      } else if (matesName.length < 1) {
        this.setState({
          errorMessage: "Please enter your friend's name"
        });
      } else {
        result = compareEngine(yourName, matesName);
        this.setState({
          score: result
        });
        this.setState({
          showResults: true
        });
      }
    },
    render: function() {
      return React.createElement("form", {
        "className": "Cupid",
        "onSubmit": this.handleSubmit
      }, React.createElement("h1", null, "Friendship Rating ¯\\_(ツ)_\x2F¯ "), React.createElement("span", {
        "className": "error"
      }, this.state.errorMessage), React.createElement("label", {
        "htmlFor": "your-name"
      }, React.createElement("input", {
        "className": "input",
        "autoComplete": false,
        "placeholder": "Your name",
        "onChange": this.handleyourNameChange,
        "value": this.state.yourName,
        "type": "text",
        "id": "your-name"
      })), React.createElement("span", {
        "className": "and"
      }, " and "), React.createElement("label", {
        "htmlFor": "mates-name"
      }, React.createElement("input", {
        "className": "input",
        "autoComplete": false,
        "placeholder": "Your friends's name",
        "onChange": this.handleMatesNameChange,
        "value": this.state.matesName,
        "type": "text",
        "id": "mates-name"
      })), React.createElement("button", {
        "className": "button",
        "type": "submit"
      }, "check"), (this.state.showResults ? React.createElement(Results, {
        "score": this.state.score
      }) : void 0));
    }
  });

  ReactDOM.render(React.createElement(Cupid, null), document.getElementById("container"));

}).call(this);
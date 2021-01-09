import react from "react";

class SearchBar extends react.Component {
   state = { term: "" };

   onSubmitHandler = (event) => {
      event.preventDefault();

      this.props.onFormSubmit(this.state.term);
   };

   render() {
      return (
         <div className="ui segment">
            <form onSubmit={this.onSubmitHandler} className="ui form">
               <div className="field">
                  <label>Utube Search</label>
                  <input
                     value={this.state.term}
                     type="text"
                     onChange={(e) => this.setState({ term: e.target.value })}
                  />
               </div>
            </form>
         </div>
      );
   }
}

export default SearchBar;

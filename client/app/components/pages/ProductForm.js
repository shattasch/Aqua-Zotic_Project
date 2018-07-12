import React,{Component} from 'react';
import { withRouter } from 'react-router-dom';
import 'whatwg-fetch';

class ProductForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        product_code: 'Enter Code',
        category:'Freshwater',
        description:'Enter description',
        cost:0.00,
        price:0.00,
        qty_on_hand:0,
        is_active : false,
        file:''
        
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.clearField = this.clearField.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      // this.handleFiles = this.handleFiles.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.history.push('/admin');
        console.log(event);
        const input = document.querySelector('input[type="file"]');
        let data = new FormData(this.state);
        data.append('file', input.files[0]);
        console.log(data);
        fetch('/api/products', {
          method:'POST',
          body: data
        })
        .then(alert("Product has been added."));
        
       
    }

    

    // handleFiles(event) {
    //   event.preventDefault();
    //   const files=event.files;
    //   this.setState({
    //     files:files
    //   })
    //   if (!files.length) {
    //     thumbnail.innerHTML = "<p>No files selected!</p>";
    //   } else {
    //     thumbnail.innerHTML = "";
    //     let list = document.createElement("ul");
    //     thumbnail.appendChild(list);
        
    //       let li = document.createElement("li");
    //       list.appendChild(li);
          
    //       let img = document.createElement("img");
    //       img.src = window.URL.createObjectURL(files);
    //       img.height = 100;
    //       img.onload = function() {
    //         window.URL.revokeObjectURL(this.src);
    //       }
    //       li.appendChild(img);
    //       var info = document.createElement("span");
    //       info.innerHTML = files.name + ": " + files.size + " bytes";
    //       li.appendChild(info);
        
    //   }
    // }
    clearField(event){
      event.target.value='';
    }
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({
        [name]: value
      });
    }
  
    render() {
      const categories=['Freshwater', 'Saltwater','Dry_Goods']
      
      let optionItems = categories.map((category)=>
          <option key={category}>{category}</option>
          );
      return (
        <form id="product_form" onSubmit={this.handleSubmit}>
          
          <label>
            Category:
            <select 
            name="category" form="product_form" 
            onChange={this.handleInputChange}>
              {optionItems}
            </select> 
               
          </label>
          <br />
          <label>
            Product Code:
            <input
              name="product_code"
              type="text"
              onFocus={this.clearField}
              value={this.state.product_code}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Description:
            <input
              name="description"
              type="text"
              onFocus={this.clearField}
              value={this.state.description}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Cost (Wholesale):
            <input
              name="cost"
              type="Number"
              onFocus={this.clearField}
              value={this.state.cost}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Sell Price:
            <input
              name="price"
              type="Number"
              onFocus={this.clearField}
              value={this.state.price}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Quantity on Hand:
            <input
              name="qty_on_hand"
              type="Number"
              onFocus={this.clearField}
              value={this.state.qty_on_hand}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Active:
            <input
              name="is_active"
              type="checkbox"
              checked={this.state.is_active}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label> 
          Add Photo:
          <input type="file" id="fileElem" accept="image/*" onChange={this.handleInputChange}/>
          </label>
          <div className="thumbnail">
            <p>Preview - No photo selected</p>
          </div>

          <br />
          <button className='btn btn-secondary'>Submit</button>
        </form>
      );
    }
  }
  
  

  export default withRouter(ProductForm);
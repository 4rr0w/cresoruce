import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';


const { Search } = Input;
const onSearch = value => console.log(value);

function SearchBar(props) {

    const size = props.size;
    const placeholder = props.placeholder
    
    return(
            <div className= "col-xl-8 col-md-10 col-sm-12" >
                <Search 
                    className = "m-2"
                    size = {size} 
                    placeholder = {placeholder}
                    onSearch = {onSearch} 
                    enterButton 
                />
            </div>
    );
}

export default SearchBar;
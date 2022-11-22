import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "bootstrap/dist/css/bootstrap.min.css"





const SearchBar=()=>{
return (
    <div className='SearchBar'>
            <div class="input">
                <span class="input-group-icon">
                    <FontAwesomeIcon className='icon'
                    icon={faMagnifyingGlass}
                    />
                </span>
            </div>
        <input type="text" onClick={e => e.target} className="form-control" placeholder="Search Twitter" ></input>
    </div>
)
}

export default SearchBar;
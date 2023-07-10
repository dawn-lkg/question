import { useNavigate } from 'react-router-dom'
function Search(){
    const navigate = useNavigate();
    return (
        <div>
            <h1>Serarch界面</h1>
            <p onClick={()=>navigate('/login')}>跳转登录界面</p>
        </div>
    )
}

export default Search;
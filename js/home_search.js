let search = document.querySelector('.search-box');
search.onchange=()=>{
    
    localStorage.setItem('search', search.name.value)
    window.location.href = "search.html";
}
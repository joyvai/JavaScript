var today = new Date();
var year = today.getFullYear();
var day = today.getDate();
var el = document.getElementById('footer');
el.innerHTML = '<p>Copyright &copy;'+year+'</p>';

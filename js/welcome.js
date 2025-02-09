var textWelcome=document.getElementById('textWelcome')

textWelcome.innerHTML=`Welcome ${localStorage.getItem('userName')}`

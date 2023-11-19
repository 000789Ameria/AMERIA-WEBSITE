const square = document.getElementById('square');
square.addEventListener('click', function(){
  var result = confirm("Do you want to exit page?")
  if(result==true){
    alert("Thanks for visiting my page.")
  }else{
    alert("Thanks for staying with us.")
  }
});<body>
            <div id="google_translate_element"></div>
            <script type="text/javascript">
                function googleTranslateElementInit(){
                    new
                        Google.translate.TranslateElement({pageLanguage:'en'}, 'google_translate_element')}
            </script>

            <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</head>

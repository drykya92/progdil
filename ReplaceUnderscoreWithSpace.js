<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
 
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
 
        <script type="text/javascript">
 
var randomName = [];
 
            var words =
{
	"tr" :
	{
		"names" : 
		[
				'araba',
				'elbise',
				'gezegen',
				'gitar',
				'kitap',
				'kulaklık',
				'kumsal',
				'masa',
                		'rüya',
				'telefon'
		],
		"adjectives" : 
		[
				'çirkin',
				'ekşi',
				'engebeli',
                		'iğrenç',
                		'şişman',
                		'kirli',
                		'mutlu',
                		'nemli',
                		'tatlı',
                		'üzgün'
		]
	},
	"en" :
	{
		"names" : 
		[
				'beach', 
				'book', 
				'car',
				'desk',
				'dream',
				'dress',
				'guitar',
				'headphone', 
				'planet', 
				'telephone'
		],
		"adjectives" : 
		[
				'dirty',
				'disgusting',
				'fat',
				'happy',
				'rude',
				'sad',
				'sour',
				'tasty',
                		'ugly',
				'wet'
		]
	}
};
 
            $(document).ready(function()
            {
                $("#clear").on('click', function(){
                    $("#result").html('');
                    randomName = [];
            });
 
                $("#findNewName").on('click', function()
                {
                    var lang = $("input[name='language']:checked").val();
                    console.log(lang);
 
                    var word;
		    var name_index;		
                    var adj_index;
 
                    var name_length = words[lang]["names"].length;		// dil dizinin sanki indisiymiş gibi kullanılacak
                    var adj_length = words[lang]["adjectives"].length;		// lang eğer “tr” olarak ayarlanmışsa Türkçe isimler dizisine gidecek;
 
                    var count = 0;
 
                    while (count < 10)
                    {
                            name_index = Math.floor(Math.random() * name_length);
                            adj_index = Math.floor(Math.random() * adj_length);
                            word = words[lang]["adjectives"][adj_index] + " " + words[lang]["names"][name_index];
                           
                            if (randomName.indexOf(word) == -1)
                            {
                                randomName.push(word);
                                count ++;
                            }
                    }
                    
 
                    press(randomName);		// ekrana bastır.
                });
            });
            
            function press(array_names)		// argüman aldığı string dizisini alt alta yazdırmak için kullanılıyor.
            {
                var toWrite = "";
                randomName.forEach(function(word) 	//forEach döngüsünde array_names dizisinin bütün elemanlarını aralarına <br> etiketi eklenerek toWrite stringine ekleniyor.
                {
                    toWrite += word + "<br>";
                });
                $("#result").html(toWrite);
            }
        </script>
 
    </head>
    <body>
    <fieldset>
        <legend>Random Name Generator</legend>
            <input name="language" type="radio" value="en">English
            <input name="language" type="radio" value="tr">Turkish
            <button type="button" id="findNewName"> Create </button>
            <button type="button" id="clear"> Clean </button>
        </fieldset>
        <fieldset>
            <legend> Result </legend>
            <div id="result"></div>    <!--  result alanına toWrite stringini yerleştiriliyor, yani sonuç ekrana yazdırılıyor.-->
        </fieldset>
    </body>
 
</html>

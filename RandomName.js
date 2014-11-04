<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">

        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

        <script type="text/javascript">
            var tr_words = [];
            var en_words = [];

            var randomName = [];		// oluşturulan rastgele isim dizisi

            		en_words['names'] = 
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
			];
            		en_words['adjectives'] = 
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
			];
			tr_words['names'] = 
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
			];
            		tr_words['adjectives'] = 
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
                	];

            $(document).ready(function()
            {
                $("#clear").on('click', function(){
                    $("#sonuclar").html('');
                    randomName = [];
            });

                $("#findNewName").on('click', function()
                {
                    var lang = $("input[name='language']:checked").val();
                    console.log(lang);

                    var word;
		    var name_index;		
                    var adj_index;

                    if (lang == 'tr')
                    {
                        var tr_name_length = tr_words['names'].length;		// türkçe isimlerin uzunluğunu öğren
                        var tr_adj_length = tr_words['adjectives'].length;	// türkçe sıfatların uzunluğu

                        var count = 0;

                        while (count < 10)
                        {
                            name_index = Math.floor(Math.random() * tr_name_length);
                            adj_index = Math.floor(Math.random() * tr_adj_length);
                            word = tr_words['adjectives'][adj_index] + "_" + tr_words['names'][name_index];
                            if (randomName.indexOf(word) == -1)
                            {
                                randomName.push(word);
                                count ++;
                            }
                        }
                    }

                    else if (lang == 'en')
                    {
                        var en_name_length = en_words['names'].length;
                        var en_adj_length = en_words['adjectives'].length;

                        var count = 0;

                        while (count < 10)
                        {
                            name_index = Math.floor(Math.random() * en_name_length);
                            adj_index = Math.floor(Math.random() * en_adj_length);
                            word = en_words['adjectives'][adj_index] + "_" + en_words['names'][name_index];
                            if (randomName.indexOf(word) == -1)
                            {
                                randomName.push(word);
                                count ++;
                            }
                        }
                    }
                    else
                    {
                        alert('dil secmediniz');
                    }

                    press(randomName);		// ekrana bastır.
                });
            });
            
            function press(array_names)
            {
                var toWrite = "";
                randomName.forEach(function(word) 
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
            <div id="result"></div>
        </fieldset>
    </body>

</html>

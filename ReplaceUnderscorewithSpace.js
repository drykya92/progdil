<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
     <title></title>
<style type="text/css">
	      .Underscore textarea {
	               	width:100%;
  	              font-size:40px;
	 	              color:black;
	                border:solid 0px black;
 	                height:auto;
      	}
	      .btn {
	              	width :100%;
	               	height:50px;
	              	background-color:red;
		              color:yellow;
		              border:solid 0px black;
	                font-size:30px;
	              	font-weight:bold;
	              	text-align:center;
		              line-height:55px;
	      }
	      .btn:hover {
		              color:red;
	                background-color:yellow;
		              cursor:pointer;		
      	}
	
</style>
	<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
     <script type="text/javascript">
	
	$(function(){	
		var Underscore = {
			ReplaceUnderscoreWithSpace : function(arg) {
			
			        //var x = arg.replace("_", " ");
				      var x = arg.charAt(0);
			        for (i = 1; i < arg.length-1; i++) {
			           	 var chr=arg.charAt(i);
				           if (chr == "_")
				              x = x+" ";
			             else 
			                x = x+arg.charAt(i);
				
			      	}
			      	x = x+arg.charAt(arg.length-1);
				      alert(x);
				
			}
		};
		
		var $txt = $("textarea");
		
		
		$("#x").on("click", function(){		
			Underscore.ReplaceUnderscoreWithSpace($txt.val());
			return false;
		});
	});
	
	
	
    </script>
</head>
<body>
    <form id="form1" runat="server">
    <fieldset class='Underscore'>
	<legend>Enter String</legend>
	<textarea id='UnderscoreTxt' cols="55" rows="5"></textarea>
	<a href='#' id="x" onclick="s" class='btn'>Replace</a>
     
    </fieldset>
    </form>
</body>
</html>
